import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import heroImage from '~assets/hero.png'

export default function Hero() {
  return (
    <Flex mt={24} maxW="7xl" width="full" mx="auto" px={4} gap={8}>
      <Box>
        <Text as="span" color="gray.600">
          All the fun starts here.
        </Text>
        <Heading width={['100%', '85%']} lineHeight="1.25" fontSize="6xl">
          Book your Tickets for event!
        </Heading>

        <Text color="gray.600" mt={8}>
          Safe, Secure, Reliable ticketing.
        </Text>
        <Text color="gray.600">Your ticket to live entertainment</Text>

        <Button mt={12} size="lg" colorScheme="orange">
          Get started
        </Button>
      </Box>
      <Box>
        <Image src={heroImage} alt="Hero image" width={600} height={500} />
      </Box>
    </Flex>
  )
}
