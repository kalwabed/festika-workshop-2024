import { Box, Button, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from '@tanstack/react-router'

export default function PageHeader() {
  const navigate = useNavigate()

  return (
    <Box as="header" w="full" padding={4} borderBottom="1px solid" borderBottomColor="gray.300">
      <Flex w="full" maxW="8xl" mx="auto" align="center" justify="space-between">
        <RouterLink to="/">
          <b>GoWithU 🧡</b>
        </RouterLink>
        <Flex align="center" gap={8}>
          <Link as={RouterLink} to="/">
            Home
          </Link>
          <Link href="#">About</Link>
          <Link href="#">Events</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </Flex>
        <Button variant="outline" onClick={() => navigate({ to: '/login' })}>
          Login
        </Button>
      </Flex>
    </Box>
  )
}
