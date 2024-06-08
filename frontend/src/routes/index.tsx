import { createFileRoute } from '@tanstack/react-router'
import ky from 'ky'
import FeaturedEvents from '~components/featured-events'
import Hero from '~components/hero'
import OtherEvents from '~components/other-events'
import { Event } from '~utils/types'

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: async () => getEvents(),
})

async function getEvents() {
  const data = (await ky.get('http://localhost:3000/api/events').json()) as { data: Event[] }
  return data
}

function HomePage() {
  const routerData = Route.useLoaderData()

  console.log('data', routerData)

  return (
    <>
      <Hero />
      <FeaturedEvents events={routerData.data} />
      <OtherEvents />
    </>
  )
}
