import Link from "next/link";
import Button from "./components/Elements Section/Button";

export default function Home() {
  return (
    <div className="p-8">
      <h2 className="text-center w-full text-3xl border-gray-50">THIS IS HOMEPAGE</h2>
      <div className="w-lg p-5">
        <Link href={`/blogs`} className="w-full">
          <Button text="GO TO THE ALL BLOGS PAGE" />
        </Link>
      </div>
    </div>
  );
}
