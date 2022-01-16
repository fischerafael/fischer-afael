import { Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Header } from "../../components/organisms/Header";
import { IGithubRepo, IPostRes } from "../../interfaces";
import { ProjectCard } from "./components/ProjectCard";

interface Props {
  repos: IGithubRepo[];
}

export const PageProjects = ({ repos }: Props) => {
  const { push } = useRouter();

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
          {repos?.map((repo) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
              onGithubClick={() => push(repo.html_url)}
              onLiveClick={() => push(repo.homepage)}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};
