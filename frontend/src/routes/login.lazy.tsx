import { createLazyFileRoute, Link as RouterLink, useNavigate } from '@tanstack/react-router'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import ky from 'ky'
import cookies from 'js-cookie'

export const Route = createLazyFileRoute('/login')({
  component: LoginPage,
})

type Inputs = {
  username: string
  password: string
}

function LoginPage() {
  const { register, handleSubmit } = useForm<Inputs>()
  const navigate = useNavigate()
  const toast = useToast()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const res: { success: boolean; token: string; message: string } = await ky
      .post('http://localhost:3000/login', {
        json: data,
      })
      .json()

    if (res.success) {
      cookies.set('token', res.token)
      return navigate({ to: '/new' })
    }

    toast({
      title: 'Login failed',
      description: res.message,
      status: 'error',
    })
  }

  return (
    <Flex mt={24} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool{' '}
            <Text as="span" color={'blue.400'}>
              features
            </Text>{' '}
            ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg="white" boxShadow={'lg'} p={8}>
          <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input {...register('username')} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register('password')} />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
              <Link as={RouterLink} to="/signup" textAlign="center">
                Create new account
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
