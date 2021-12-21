import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
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
              UI Design &
            </Text>
            <Text fontWeight="bold" fontSize={["5xl", "7xl"]}>
              UX Design.
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

        <VStack w="full" spacing="16" maxW="container.sm">
          <HStack w="full" justify="flex-start">
            <Text fontWeight="bold" fontSize="4xl">
              How I can help you
            </Text>
          </HStack>

          <SimpleGrid w="full" columns={2} maxW="container.sm" gap="8">
            <FeatureCard
              number="01"
              title="Front-End Development"
              description="Modern and fast web applications with technologies such as
        React, Typescript & NextJS."
            />

            <FeatureCard
              number="02"
              title="UI Design"
              description="Beautiful and good-looking interfaces, designed with tools such as Figma, Indesign, Illustrator, and Photoshop."
            />

            <FeatureCard
              number="03"
              title="UX Design"
              description="Amazing experiences and easy-to-use products conceived applying state-of-art frameworks such as Design Thinking & Design Sprint."
            />

            <FeatureCard
              number="04"
              title="Back-End Development"
              description="Even though my focus is Front-End & Design, I can develop lightweight and secure API's - or use a CMSs - to serve data to front-end applications."
            />
          </SimpleGrid>
        </VStack>
      </VStack>
    </Flex>
  );
};

const FeatureCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <VStack w="full" bg="gray.800" p="8" align="flex-start">
      <Text fontSize="4xl" color="cyan.500" fontWeight="bold">
        {number}
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Text>{description}</Text>
    </VStack>
  );
};
