import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/Product">Product</Link>
      <br />
      <Link href="/Products">Products</Link>
    </>
  );
}
