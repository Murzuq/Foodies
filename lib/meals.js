import { sql } from "@vercel/postgres";
import { put } from "@vercel/blob";
import slugify from "slugify";
import xss from "xss";

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");
  const { rows } = await sql`SELECT * FROM meals`;
  return rows;
}

export async function getMeal(slug) {
  const { rows } = await sql`SELECT * FROM meals WHERE slug = ${slug}`;
  return rows[0];
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Handle image upload to Vercel Blob
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const blob = await put(fileName, meal.image, {
    access: "public",
  });

  // Use the URL from Vercel Blob
  meal.image = blob.url;

  // Save meal metadata to Vercel Postgres
  await sql`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      ${meal.title},
      ${meal.summary},
      ${meal.instructions},
      ${meal.creator},
      ${meal.creator_email},
      ${meal.image},
      ${meal.slug}
    )
  `;
}
