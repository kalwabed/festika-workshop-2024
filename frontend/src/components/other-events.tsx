import { Badge, Box, Button, Flex, HStack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

function OtherEvents() {
  return (
    <Box maxW="8xl" w="full" mx="auto" mt={20}>
      <Box as="section">
        <Heading as="h2" fontSize="4xl" lineHeight="1.625">
          Other Events
        </Heading>
        <Text>Be sure not to miss these events</Text>
      </Box>

      <SimpleGrid columns={2} mt={8} gap={12}>
        {[1, 2, 3, 4].map(k => (
          <Flex key={k} gap={4}>
            <Image
              src="https://picsum.photos/id/10/420/280"
              rounded="md"
              height={64}
              htmlWidth={310}
              htmlHeight={380}
              alt="test"
            />
            <Box>
              <HStack>
                <Badge>React</Badge>
                <Badge>React</Badge>
              </HStack>
              <Heading as="h3" fontSize="2xl" my={2}>
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
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default OtherEvents
