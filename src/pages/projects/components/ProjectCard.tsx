import {
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
import { IGithubRepo } from "../../../interfaces";

interface Props {
  repo: IGithubRepo;
  onGithubClick: (e: any) => void;
  onLiveClick: (e: any) => void;
}

export const ProjectCard = ({ repo, onGithubClick, onLiveClick }: Props) => {
  return (
    <VStack
      w="full"
      h="full"
      bg="gray.800"
      spacing="0"
      _hover={{ shadow: "lg" }}
    >
      <Image
        w="full"
        h="60"
        objectFit="cover"
        src={repo.cover}
        fallbackSrc="http://www.aureamartins.com.br/application/modules/themes/views/default/assets/images/image-placeholder.png"
      />

      <VStack w="full" px="8" pb="8" pt="4" spacing="4">
        <HStack w="full" justify="flex-start" wrap="wrap">
          <Text fontSize="xl" fontWeight="bold">
            {repo.description}
          </Text>
        </HStack>

        <Flex w="full" wrap="wrap" gap="2">
          {repo.topics?.map((topic) => (
            <Text
              fontSize="xs"
              color="white"
              bg="gray.900"
              px="4"
              borderRadius="full"
              key={topic}
            >
              {topic}
            </Text>
          ))}
        </Flex>

        <HStack spacing="4" w="full" justify="flex-end">
          <IconButton
            size="xs"
            aria-label="Github"
            as={FaGithub}
            bg="transparent"
            color="cyan.500"
            cursor="pointer"
            _hover={{ bg: "transparent", color: "white" }}
            onClick={onGithubClick}
          />

          <IconButton
            size="xs"
            aria-label="Github"
            color="cyan.500"
            bg="transparent"
            cursor="pointer"
            _hover={{ bg: "transparent", color: "white" }}
            as={FaLink}
            onClick={onLiveClick}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};
