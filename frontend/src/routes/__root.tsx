import { Flex } from '@chakra-ui/react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import PageHeader from '~components/page-header'

export const Route = createRootRoute({
  component: () => (
    <>
      <PageHeader />
      <Flex as="main" flexDir="column" w="full">
        <Outlet />
      </Flex>
      <TanStackRouterDevtools />
    </>
  ),
})
