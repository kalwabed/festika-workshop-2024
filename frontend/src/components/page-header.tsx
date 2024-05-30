import { Box, Button, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from '@tanstack/react-router'

export default function PageHeader() {
  const navigate = useNavigate()

  return (
    <Box as="header" w="full" paddingX={8} paddingY={4} borderBottom="1px solid" borderBottomColor="gray.300">
      <Flex w="full" align="center" justify="space-between">
        <RouterLink to="/">
          <b>Logo</b>
        </RouterLink>
        <Flex align="center">
          <Link as={RouterLink} to="/">
            Home
          </Link>
        </Flex>
        <Button variant="outline" onClick={() => navigate({ to: '/login' })}>
          Login
        </Button>
      </Flex>
    </Box>
  )
}
