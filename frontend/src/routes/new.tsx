import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import cookies from "js-cookie";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import ky from "ky";
import Cookies from "js-cookie";

export const Route = createFileRoute("/new")({
  beforeLoad: async () => {
    const token = cookies.get("token");

    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: NewEventPage,
});

interface Form {
  title: string;
  location: string;
  date: string;
  from: string;
  to: string;
  description: string;
  tags: string;
}

function NewEventPage() {
  const toast = useToast();
  const { handleSubmit, register } = useForm<Form>();

  const addNewEvent: SubmitHandler<Form> = async (data) => {
    const authToken = Cookies.get("token");
    try {
      await ky.post("http://localhost:3000/api/events", {
        json: data,
        headers: { Authorization: `Bearer ${authToken}` },
      })
        .json();
      toast({
        title: "Sukses",
        description: "Event berhasil ditambahkan",
        status: "success",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mt={24} w="full">
      <Heading fontSize="3xl" mb={8} textAlign="center">
        Add a New Event
      </Heading>
      <VStack
        onSubmit={handleSubmit(addNewEvent)}
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
          <Input {...register("title")} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input {...register("location")} />
        </FormControl>
        <HStack w="full">
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" {...register("date")} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>From</FormLabel>
            <Input type="time" {...register("from")} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>To</FormLabel>
            <Input type="time" {...register("to")} />
          </FormControl>
        </HStack>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea {...register("description")} />
        </FormControl>
        <FormControl>
          <FormLabel>Tags</FormLabel>
          <Input
            placeholder="Separate with comma (e.g react,vue.js)"
            {...register("tags")}
          />
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
  );
}
