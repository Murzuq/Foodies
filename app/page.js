import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Foodies Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Foodies Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Foodies Food?</h2>
          <p>
            Foodies Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Foodies Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
