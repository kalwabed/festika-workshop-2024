import { Badge, Box, Button, Flex, HStack, Heading, Image, Tag, Text } from '@chakra-ui/react'

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
      shadow="md"
      py={10}
      px={16}
    >
      <Box as="section">
        <Heading as="h2" fontSize="4xl" lineHeight="1.625">
          Featured Events
        </Heading>
        <Text color="gray.500">Be sure not to miss these events</Text>
      </Box>

      <Flex mt={8} gap={8}>
        <Image
          src="https://picsum.photos/id/10/320/280"
          rounded="md"
          height={80}
          htmlWidth={360}
          htmlHeight={380}
          alt="test"
        />
        <Box>
          <HStack>
            <Badge colorScheme="red">Closed</Badge>
            <Tag size="sm">#web</Tag>
            <Tag size="sm">#devops</Tag>
          </HStack>
          <Heading as="h3" fontSize="5xl" my={3}>
            Card 1
          </Heading>
          <Text>⏰ 29 Jan, 11.00 - 15.30 WIB</Text>
          <Text my={2}>📍 Plaza Ambarrukmo</Text>
          <Text color="gray.600">Lorem ipsum dolor sit amet, officia excepteur ex fugiat.</Text>
          <Button colorScheme="orange" variant="outline" mt={4}>
            Get Tickets
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default FeaturedEvents
