import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Header } from "../../components/organisms/Header";
import html from "./html.module.scss";

import { IPostRes } from "../../interfaces";

export const PageBlogPost = ({ post }: { post: IPostRes }) => {
  console.log("POST ", post);

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

        <VStack w="full" justify="flex-start" align="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            {post.title.rendered}
          </Text>

          <Box
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className={html.div}
          />
        </VStack>
      </VStack>
    </Flex>
  );
};
