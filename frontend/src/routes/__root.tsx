import { Flex } from '@chakra-ui/react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import PageFooter from '~components/page-footer'
import PageHeader from '~components/page-header'

export const Route = createRootRoute({
  component: () => (
    <>
      <PageHeader />
      <Flex as="main" px={[4, 0]} mb={32} flexDir="column" w="full">
        <Outlet />
      </Flex>
      <PageFooter />
      <TanStackRouterDevtools />
    </>
  ),
})
