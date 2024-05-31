import { createLazyFileRoute } from '@tanstack/react-router'
import FeaturedEvents from '~components/featured-events'
import Hero from '~components/hero'
import OtherEvents from '~components/other-events'

export const Route = createLazyFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEvents />
      <OtherEvents />
    </>
  )
}
