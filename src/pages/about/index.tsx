import { Avatar, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export const PageAbout = () => {
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

        <HStack w="full" spacing="8" bg="gray.800" p="8">
          <Avatar
            name="Rafael Fischer"
            src="https://avatars.githubusercontent.com/u/47259718?v=4"
            size="lg"
          />

          <VStack spacing="0" w="full" align="flex-start">
            <Text fontWeight="bold" fontSize="xl">
              Rafael Fischer
            </Text>
            <Text>Front-End Developer, UX/UI Designer</Text>
          </VStack>
        </HStack>

        <HStack w="full" justify="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            Experience
          </Text>
        </HStack>

        <VStack w="full" bg="gray.800" p="8" spacing="8">
          <ExperienceCard
            name="Front-End & UX Developer"
            company="Guildhawk, England (remote)"
            date="Jun 2021 - currently"
          />
          <ExperienceCard
            name="Founder, Fullstack Developer & UX/UI Designer"
            company="Ux Arch, Brazil"
            date="Jun 2019 - currently"
          />
          <ExperienceCard
            name="Fullstack Developer & UX/UI Designer"
            company="Archiflow, Brazil"
            date="Jan 2021 - Jun 2021"
          />
          <ExperienceCard
            name="Founder, WebMaster & Designer"
            company="Como Projetar, Brazil"
            date="Mar 2016 - Dec 2018"
          />
          <ExperienceCard
            name="Lecturer"
            company="Universidade Federal do Paraná, Brazil"
            date="Jun 2019 - Jun 2021"
          />
          <ExperienceCard
            name="Lecturer"
            company="Uniandrade, Brazil"
            date="Jan 2018 - Jun 2019"
          />
          <ExperienceCard
            name="Researcher"
            company="Universidade Federal do Paraná, Brazil"
            date="Jan 2015 - Apr 2017"
          />
        </VStack>
      </VStack>
    </Flex>
  );
};

interface IExperienceCard {
  name: string;
  company: string;
  date: string;
}

const ExperienceCard = ({ name, company, date }: IExperienceCard) => {
  return (
    <HStack w="full" spacing="8">
      <Avatar bg="cyan.500" name={company} color="white" size="lg" />
      <VStack spacing="0" w="full" align="flex-start">
        <Text fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <Text>{company}</Text>
        <Text>{date}</Text>
      </VStack>
    </HStack>
  );
};
