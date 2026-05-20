"use client";

import dynamic from "next/dynamic";

const LegacyIndividualsApp = dynamic(() => import("./app/page"), {
  ssr: false,
  loading: () => null,
});

export default function IndividualsModule() {
  return <LegacyIndividualsApp />;
}
