import {
  Flex,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaGithub, FaIntercom, FaLink } from "react-icons/fa";

import { Header } from "../../components/organisms/Header";
import { IGithubRepo, IPostRes } from "../../interfaces";

interface Props {
  repos: IGithubRepo[];
}

export const PageProjects = ({ repos }: Props) => {
  console.log("repos", repos);
  const { push } = useRouter();

  const sample = repos[1];

  return (
    <Flex
      w="full"
      minH="100vh"
      bg="gray.900"
      color="gray.50"
      justify="center"
      align="flex-start"
      px="4"
      pb="8"
    >
      <VStack w="full" maxW="container.md" h="full" spacing={8}>
        <Header />
        <HStack w="full" justify="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            Projects
          </Text>
        </HStack>

        <SimpleGrid w="full" gap="8" columns={2}>
          <VStack bg="gray.800" p="8" spacing="4" _hover={{ shadow: "xl" }}>
            <Image w="full" h="60" objectFit="cover" src={sample.cover} />

            <HStack w="full" justify="flex-start" wrap="wrap">
              <Text fontSize="xl" fontWeight="bold">
                Warren Dashboard
              </Text>
            </HStack>

            <Flex w="full" wrap="wrap" gap="2">
              {sample.topics?.map((topic) => (
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

            <HStack spacing="4" w="full" justify="space-between">
              <IconButton
                size="xs"
                aria-label="Github"
                as={FaGithub}
                bg="transparent"
                color="cyan.500"
                cursor="pointer"
                _hover={{ bg: "transparent", color: "white" }}
                onClick={() => push(sample.html_url)}
              />

              <IconButton
                size="xs"
                aria-label="Github"
                color="cyan.500"
                bg="transparent"
                cursor="pointer"
                _hover={{ bg: "transparent", color: "white" }}
                as={FaLink}
                onClick={() => push(sample.homepage)}
              />
            </HStack>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

interface IBlogCard {
  postTitle: string;
  slug: string;
  date: string;
}
