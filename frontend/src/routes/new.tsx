import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react'
import cookies from 'js-cookie'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import ky from 'ky'
import Cookies from 'js-cookie'

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

interface Form {
  title: string
  location: string
  date: string
  from: string
  to: string
  description: string
  tags: string
  cover: FileList
}

function NewEventPage() {
  const toast = useToast()
  const { register, handleSubmit } = useForm<Form>()

  const addNewEvent: SubmitHandler<Form> = async data => {
    const authToken = Cookies.get('token')
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('location', data.location)
    formData.append('date', data.date)
    formData.append('from', data.from)
    formData.append('to', data.to)
    formData.append('description', data.description)
    formData.append('tags', data.tags)
    formData.append('coverImage', data.cover[0])

    try {
      await ky.post('http://localhost:3000/api/events', {
        body: formData,
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      })

      toast({
        title: 'Sukses',
        description: 'Berhasil menambahkan event baru',
        status: 'success',
      })
    } catch (error) {
      console.error(error)
      toast({
        title: 'Gagal',
        description: 'Gagal menambahkan event baru',
        status: 'error',
      })
    }
  }

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
        onSubmit={handleSubmit(addNewEvent)}
      >
        <FormControl isRequired>
          <FormLabel>Cover</FormLabel>
          <Input type="file" {...register('cover')} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input {...register('title')} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input {...register('location')} />
        </FormControl>
        <HStack w="full">
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" {...register('date')} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>From</FormLabel>
            <Input type="time" {...register('from')} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>To</FormLabel>
            <Input type="time" {...register('to')} />
          </FormControl>
        </HStack>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea {...register('description')} />
        </FormControl>
        <FormControl>
          <FormLabel>Tags</FormLabel>
          <Input {...register('tags')} placeholder="Separate with comma (e.g react,vue.js)" />
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
