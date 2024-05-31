import { createLazyFileRoute } from '@tanstack/react-router'
import FeaturedEvents from '~components/featured-events'
import Hero from '~components/hero'

export const Route = createLazyFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEvents />
    </>
  )
}
