import { createFileRoute } from "@tanstack/react-router";
import ky from "ky";
import FeaturedEvents from "~components/featured-events";
import Hero from "~components/hero";
import OtherEvents from "~components/other-events";
import { Event } from "~types";

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: async () =>
    await ky.get("http://localhost:3000/api/events").json() as {
      data: Event[];
    },
});

function HomePage() {
  const routeData = Route.useLoaderData();
  return (
    <>
      <Hero />
      <FeaturedEvents events={routeData.data} />
      <OtherEvents />
    </>
  );
}
