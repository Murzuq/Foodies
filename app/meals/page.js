import Link from "next/link";

export default function MealsPage() {
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h1>Meals Page</h1>
      <div style={{ color: "white", textAlign: "center" }}>
        <Link href="/meals/dish-1">Meals Page 1</Link>
        <Link href="/meals/dish-2">Meals Page 2</Link>
        <Link href="/meals/dish-3">Meals Page 3</Link>
        <Link href="/share">Share Page</Link>
      </div>
    </div>
  );
}
