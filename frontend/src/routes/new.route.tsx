import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import cookies from 'js-cookie'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/new')({
  beforeLoad: async () => {
    const token = cookies.get('token')

    if (!token) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: NewEventPage,
})

function NewEventPage() {
  return (
    <Box mt={24} w="full">
      <Heading fontSize="3xl" mb={8} textAlign="center">
        Add a New Event
      </Heading>
      <VStack
        as="form"
        shadow="md"
        padding={4}
        rounded="md"
        align="end"
        gap={4}
        border="1px solid"
        borderColor="gray.300"
        maxW="2xl"
        mx="auto"
        w="full"
      >
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input />
        </FormControl>
        <HStack w="full">
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>From</FormLabel>
            <Input type="time" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>To</FormLabel>
            <Input type="time" />
          </FormControl>
        </HStack>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea />
        </FormControl>
        <FormControl>
          <FormLabel>Tags</FormLabel>
          <Input placeholder="Separate with comma (e.g react,vue.js)" />
        </FormControl>

        <HStack>
          <Button variant="outline" type="reset">
            Reset
          </Button>
          <Button colorScheme="orange" type="submit">
            Submit
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}
