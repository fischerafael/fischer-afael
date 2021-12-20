import { HStack, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
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
  );
};
