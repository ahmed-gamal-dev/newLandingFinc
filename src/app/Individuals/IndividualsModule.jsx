"use client";

import dynamic from "next/dynamic";

const LegacyIndividualsApp = dynamic(
  () =>
    import("../../individuals").then((mod) => {
      if (mod?.default) return mod;
      throw new Error(
        "Individuals module not found. Put your legacy code under src/individuals with a default export.",
      );
    }),
  {
    ssr: false,
    loading: () => <div className="min-h-screen pt-28 px-6">Loading Individuals…</div>,
  },
);

export default function IndividualsModule({ slug = [] }) {
  return <LegacyIndividualsApp slug={slug} basePath="/Individuals" />;
}
