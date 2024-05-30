import { createLazyFileRoute } from '@tanstack/react-router'
import Hero from '~components/hero'

export const Route = createLazyFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
    </>
  )
}
