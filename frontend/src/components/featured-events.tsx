import { Box, Button, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'

function FeaturedEvents() {
  return (
    <Box
      maxW="8xl"
      w="full"
      mx="auto"
      mt={20}
      border="1px solid"
      borderColor="gray.300"
      rounded="lg"
      bgColor="gray.50"
      py={10}
      px={16}
    >
      <Box as="section">
        <Heading as="h2" fontSize="4xl" lineHeight="1.625">
          Featured Events
        </Heading>
        <Text>Be sure not to miss these events</Text>
      </Box>

      <HStack mt={8} gap={12} justify="stretch">
        {[1, 2, 3, 4].map(k => (
          <Flex key={k} flexDir="column" border="1px solid" borderColor="gray.300" p={4}>
            <Image src="https://picsum.photos/id/10/320/280" htmlWidth={300} htmlHeight={280} alt="test" />
            <Heading as="h3" fontSize="2xl" mt={4}>
              Card 1
            </Heading>
            <Text mt={3}>29 Jan - Plaza Ambarrukmo</Text>
            <Button colorScheme="orange" variant="outline" mt={6}>
              Get Tickets
            </Button>
          </Flex>
        ))}
      </HStack>
    </Box>
  )
}

export default FeaturedEvents
