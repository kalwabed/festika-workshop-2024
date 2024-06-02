import { createLazyFileRoute, Link as RouterLink, useNavigate } from '@tanstack/react-router'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { SubmitHandler, useForm } from 'react-hook-form'
import ky from 'ky'

export const Route = createLazyFileRoute('/signup')({
  component: SignUpPage,
})

interface Input {
  username: string
  firstName: string
  lastName: string
  password: string
}

function SignUpPage() {
  const { register, handleSubmit } = useForm<Input>()
  const [showPassword, setShowPassword] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Input> = async data => {
    const res: { success: boolean; message: string } = await ky
      .post('http://localhost:3000/signup', {
        json: data,
      })
      .json()

    toast({
      title: 'User signup',
      description: res.message,
      status: res.success ? 'success' : 'error',
    })

    if (res.success) {
      return navigate({ to: '/login' })
    }
  }

  return (
    <Flex mt={24} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box as="form" onSubmit={handleSubmit(onSubmit)} rounded={'lg'} bg="white" boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" {...register('firstName')} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" {...register('lastName')} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input {...register('username')} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input {...register('password')} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword(showPassword => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                type="submit"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link as={RouterLink} to="/login" color={'blue.400'}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
