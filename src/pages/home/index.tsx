import { Avatar, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Header } from "../../components/organisms/Header";
import { IPostRes } from "../../interfaces";

export const PageHome = ({ posts }: { posts: IPostRes[] }) => {
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
      <VStack w="full" maxW="container.md" h="full" spacing="0">
        <Header />
        <VStack
          w="full"
          justify="center"
          maxW="container.sm"
          align="center"
          h="80vh"
          spacing="8"
        >
          <VStack spacing="0" w="full" align="left">
            <Text fontWeight="bold" fontSize="6xl" color="cyan.500">
              Front-End &
            </Text>
            <Text fontWeight="bold" fontSize="6xl">
              UX Design &
            </Text>
            <Text fontWeight="bold" fontSize="6xl">
              UI Design.
            </Text>
          </VStack>
          <Text fontSize="lg">
            I help companies, entrepreneurs and developers to design, develop
            and launch amazing digital products.
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
};

interface IBlogCard {
  postTitle: string;
  slug: string;
  date: string;
}

const BlogCard = ({ postTitle, date, slug }: IBlogCard) => {
  const { push } = useRouter();
  return (
    <HStack
      w="full"
      bg="gray.800"
      p="8"
      spacing="8"
      _hover={{ shadow: "xl", cursor: "pointer" }}
      onClick={() => push(`/blog/${slug}`)}
    >
      <Avatar bg="cyan.500" name={postTitle} color="white" size="lg" />
      <VStack spacing="0" w="full" align="flex-start">
        <Text fontWeight="bold" fontSize="xl">
          {postTitle}
        </Text>
        <Text>{new Date(date).toLocaleDateString()}</Text>
      </VStack>
      <Text>{`>`}</Text>
    </HStack>
  );
};
