import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Header } from "../../components/organisms/Header";
import { IPostRes } from "../../interfaces";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export const PageHome = () => {
  const { push } = useRouter();
  const onNavigateTo = (url: string) => {
    push(url);
  };

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
          minH="60vh"
          spacing="8"
          py="8"
        >
          <VStack spacing="0" w="full" align="left">
            <Text fontWeight="bold" fontSize={["5xl", "7xl"]} color="cyan.500">
              Front-End &
            </Text>
            <Text fontWeight="bold" fontSize={["5xl", "7xl"]}>
              UX Design &
            </Text>
            <Text fontWeight="bold" fontSize={["5xl", "7xl"]}>
              UI Design.
            </Text>
          </VStack>
          <Text fontSize="lg">
            Hi, my name is Rafael, and I help companies, entrepreneurs and
            developers to design, develop and launch amazing digital products.
          </Text>
        </VStack>

        <HStack w="full" justify="center" spacing="4" h="20vh">
          <IconButton
            aria-label="Rafael's Linkedin"
            icon={<FaLinkedin size="md" />}
            variant="ghost"
            color="cyan.500"
            onClick={() =>
              onNavigateTo("https://www.linkedin.com/in/fischerafael/")
            }
          />

          <IconButton
            aria-label="Rafael's Instagram"
            icon={<FaInstagram size="md" />}
            variant="ghost"
            color="cyan.500"
            onClick={() =>
              onNavigateTo("https://www.instagram.com/fischerafael/")
            }
          />

          <IconButton
            aria-label="Rafael's Youtube"
            icon={<FaYoutube size="md" />}
            variant="ghost"
            color="cyan.500"
            onClick={() =>
              onNavigateTo(
                "https://www.youtube.com/channel/UCz75xXTimMhZkbK__XOM8hQ"
              )
            }
          />
        </HStack>
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
