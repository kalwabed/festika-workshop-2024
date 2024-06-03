import { createFileRoute } from '@tanstack/react-router'
import FeaturedEvents from '~components/featured-events'
import Hero from '~components/hero'
import OtherEvents from '~components/other-events'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const router = Route.useLoaderData()
  console.log(router)
  return (
    <>
      <Hero />
      <FeaturedEvents />
      <OtherEvents />
    </>
  )
}
