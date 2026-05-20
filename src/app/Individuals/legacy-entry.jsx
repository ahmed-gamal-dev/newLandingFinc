"use client";

/**
 * Replace this component export with the old Individuals app entry component.
 * Keep routing relative to `basePath` to preserve nested routes under /Individuals/*.
 */
export default function LegacyIndividualsEntry({ slug = [], basePath = "/Individuals" }) {
  return (
    <main className="min-h-screen pt-28 px-6">
      <h1 className="text-3xl font-semibold mb-3">Individuals module is wired</h1>
      <p className="text-lg mb-2">Path base: {basePath}</p>
      <p className="text-gray-600">Current nested route: /{slug.join("/")}</p>
      <p className="text-gray-500 mt-6">
        Paste the old Individuals project entry in this file and map its internal routes using `slug`.
      </p>
    </main>
  );
}
