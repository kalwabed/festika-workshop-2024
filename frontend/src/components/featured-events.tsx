import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Event } from "~types";
import { coverSrc, formatDate } from "~utils/event";

function FeaturedEvents(props: { events: Event[] }) {
  const { events } = props;
  const event = events[0] ?? {};

  return (
    <Box
      maxW="8xl"
      w="full"
      mx="auto"
      mt={20}
      border="1px solid"
      borderColor="gray.300"
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
          src={coverSrc(event.cover)}
          rounded="md"
          height={80}
          htmlWidth={360}
          htmlHeight={380}
          alt="Event cover image"
        />
        <Box>
          <HStack>
            <Badge colorScheme="red">Closed</Badge>
            {event.tags.split(",").map((tag) => (
              <Tag key={tag} size="sm">#{tag}</Tag>
            ))}
          </HStack>
          <Heading as="h3" fontSize="5xl" my={3}>
            {event.title}
          </Heading>
          <Text>
            ⏰ {formatDate(event.date)}, {event.from} - {event.to} WIB
          </Text>
          <Text my={2}>📍 {event.location}</Text>
          <Text color="gray.600">
            {event.description}
          </Text>
          <Button colorScheme="orange" variant="outline" mt={4}>
            Get Tickets
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default FeaturedEvents;
