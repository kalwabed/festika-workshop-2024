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

export const Route = createLazyFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
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
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
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

