import { Link as RouterLink } from '@tanstack/react-router'
import { Box, Flex, Link, Text } from '@chakra-ui/react'

function PageFooter() {
  return (
    <Box as="footer" w="full">
      <Flex
        maxW="8xl"
        justify="space-between"
        align="end"
        mx="auto"
        py={8}
        borderTop="1px solid"
        borderColor="gray.300"
      >
        <Flex flexDir="column">
          <b>GoWithU 🧡</b>
          <Text as="small" color="gray.500">
            Your favorite event manager
          </Text>
        </Flex>
        <Flex align="center" gap={4}>
          <Link as={RouterLink} to="/">
            Home
          </Link>
          <Link href="#">About</Link>
          <Link href="#">Events</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PageFooter
