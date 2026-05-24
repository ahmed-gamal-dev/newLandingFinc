"use client";

import Link from "next/link";

export default function IndividualsLegacyApp({ slug = [] }) {
  const current = `/${slug.join("/")}`;

  return (
    <main className="min-h-screen pt-28 px-6">
      <h1 className="text-3xl font-semibold mb-3">Individuals</h1>
      <p className="text-gray-600 mb-6">Current nested route: {current === "/" ? "/" : current}</p>

      <div className="flex gap-4 flex-wrap">
        <Link href="/Individuals" className="underline">
          Home
        </Link>
        <Link href="/Individuals/about" className="underline">
          About
        </Link>
        <Link href="/Individuals/contact" className="underline">
          Contact
        </Link>
      </div>
    </main>
  );
}
