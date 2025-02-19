import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center text-2xl">
      <h1>Welcome to the Product Listing Website</h1>
      <Link href="/products">
        <button className="text-base bg-slate-500 rounded-lg p-2 mt-4">Click here to see all Products</button>
      </Link>
    </div>
  );
}
