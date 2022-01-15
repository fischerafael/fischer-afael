import { HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export const Header = () => {
  return (
    <HStack w="full" justify="space-between" h="15vh">
      <Text>
        <b>fischer</b>afael
      </Text>
      <HStack spacing="8">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/projects">Projects</CustomLink>
        <CustomLink href="/blog">Blog</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </HStack>
    </HStack>
  );
};

export const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  console.log("AS PATH", isActive);

  return (
    <NextLink href={href}>
      <Text
        cursor="pointer"
        _hover={{ color: "cyan.500" }}
        color={isActive ? "cyan.500" : "gray.50"}
      >
        {children}
      </Text>
    </NextLink>
  );
};
