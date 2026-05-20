"use client";

import dynamic from "next/dynamic";

const LegacyIndividualsApp = dynamic(() => import("./legacy-entry"), {
  loading: () => <div className="min-h-screen pt-28 px-6">Loading Individuals…</div>,
});

export default function IndividualsModule({ slug = [] }) {
  return <LegacyIndividualsApp slug={slug} basePath="/Individuals" />;
}
