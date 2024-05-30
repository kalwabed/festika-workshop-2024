import { Box, Button, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from '@tanstack/react-router'

export default function PageHeader() {
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
        <Button variant="outline">Login</Button>
      </Flex>
    </Box>
  )
}
