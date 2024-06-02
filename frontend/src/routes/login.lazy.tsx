import { createLazyFileRoute, Link as RouterLink } from '@tanstack/react-router'
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
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const Route = createLazyFileRoute('/login')({
  component: LoginPage,
})

type Inputs = {
  username: string
  password: string
}

function LoginPage() {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
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
