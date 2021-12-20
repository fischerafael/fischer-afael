import { Flex, HStack, Text, VStack } from "@chakra-ui/react";

import { IPostRes } from "../../interfaces";

export const PageBlogPost = ({ post }: { post: IPostRes }) => {
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
        <HStack w="full" justify="space-between" h="15vh">
          <Text>
            <b>fischer</b>afael
          </Text>
          <HStack spacing="8">
            <Text>Home</Text>
            <Text>Blog</Text>
            <Text>About</Text>
          </HStack>
        </HStack>

        <HStack w="full" justify="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            {post.title.rendered}
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};
