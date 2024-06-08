import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Event } from "~types";
import { coverSrc, formatDate } from "~utils/event";

function OtherEvents(props: { events: Event[] }) {
  return (
    <Box maxW="8xl" w="full" mx="auto" mt={20}>
      <Box as="section">
        <Heading as="h2" fontSize="4xl" lineHeight="1.625">
          Other Events
        </Heading>
        <Text color="gray.500">Be sure not to miss these events</Text>
      </Box>

      <SimpleGrid columns={2} mt={8} gap={12}>
        {props.events?.map((event) => (
          <Flex key={event.id} gap={4}>
            <Image
              src={coverSrc(event.cover)}
              rounded="md"
              height={64}
              htmlWidth={310}
              htmlHeight={380}
              alt="Event cover image"
            />
            <Box>
              <HStack>
                <Badge colorScheme="green">Open</Badge>
                {event.tags.split(",").map((tag) => (
                  <Tag key={tag} size="sm">#{tag}</Tag>
                ))}
              </HStack>
              <Heading as="h3" fontSize="2xl" my={2}>
                {event.title}
              </Heading>
              <Text>
                ⏰ {formatDate(event.date)}, {event.from} - {event.to} WIB
              </Text>
              <Text my={2}>📍 {event.location}</Text>
              <Text color="gray.600">{event.description}</Text>
              <Button colorScheme="orange" variant="outline" mt={4}>
                Get Tickets
              </Button>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default OtherEvents;
