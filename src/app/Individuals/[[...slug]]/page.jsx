import IndividualsModule from "../IndividualsModule";

export default async function IndividualsCatchAllPage({ params }) {
  const resolved = await params;
  return <IndividualsModule slug={resolved?.slug ?? []} />;
}
