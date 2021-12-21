import { Avatar, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Header } from "../../components/organisms/Header";

const tech = [
  { id: 1, name: "TypeScript", type: "tech" },
  { id: 2, name: "JavaScript", type: "tech" },
  { id: 3, name: "ReactJs", type: "tech" },
  { id: 4, name: "NextJs", type: "tech" },
  { id: 5, name: "NodeJs", type: "tech" },
  { id: 6, name: "HTML", type: "tech" },
  { id: 7, name: "CSS", type: "tech" },
  { id: 8, name: "SASS", type: "tech" },
  { id: 9, name: "Styled-Components", type: "tech" },
  { id: 10, name: "TailwindCSS", type: "tech" },
  { id: 11, name: "ChakraUI", type: "tech" },
  { id: 12, name: "StrapiCMS", type: "tech" },
  { id: 13, name: "Jest / React Testing Library", type: "tech" },
  { id: 14, name: "CI/CD", type: "tech" },
  { id: 15, name: "WordPress", type: "tech" },
  { id: 16, name: "PowerBI", type: "tech" },
  { id: 17, name: "Figma", type: "design" },
  { id: 18, name: "Illustrator", type: "design" },
  { id: 19, name: "Indesign", type: "design" },
  { id: 20, name: "Photoshop", type: "design" },
  { id: 21, name: "AutoCAD", type: "design" },
  { id: 22, name: "SketchUp", type: "design" },
  { id: 23, name: "Revit", type: "design" },
  { id: 24, name: "Design Sprint", type: "agile" },
  { id: 25, name: "Design Thinking", type: "agile" },
  { id: 26, name: "SCRUM", type: "agile" },
  { id: 27, name: "Kanban", type: "agile" },
];

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
        <Header />

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

        <HStack w="full" justify="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            Education
          </Text>
        </HStack>

        <VStack w="full" bg="gray.800" p="8" spacing="8">
          <ExperienceCard
            name="PhD in Engineering"
            company="Universidade Federal do Paraná, Brazil"
            date="Jan 2018 - currently"
          />

          <ExperienceCard
            name="Master in Engineering"
            company="Universidade Federal do Paraná, Brazil"
            date="Jan 2015 - Apr 2017"
          />

          <ExperienceCard
            name="Bachelor in System Development & Analysis"
            company="PUC-PR, Brazil"
            date="Jan 2019 - Jun 2020 (not completed)"
          />

          <ExperienceCard
            name="Bachelor in Architecture & Urban Planning"
            company="Universidade Federal do Paraná, Brazil"
            date="Jan 2009 - Mar 2015"
          />

          <ExperienceCard
            name="Student Exchange Program in Architecture and Design"
            company="Hasselt University, Belgium"
            date="Aug 2013 - Jul 2014"
          />

          <ExperienceCard
            name="Bachelor in Product Design"
            company="Universidade Federal do Paraná, Brazil"
            date="Jan 2008 - Dec 2008 (not completed)"
          />

          <ExperienceCard
            name="Technical Degree in Data Processing (IT)"
            company="Opet High School, Brazil"
            date="Jan 2005 - Dec 2007"
          />
        </VStack>

        <HStack w="full" justify="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            Skills
          </Text>
        </HStack>

        <HStack w="full" gap="4" wrap="wrap" spacing="0">
          {tech.map((tech) => (
            <Text
              key={tech.id}
              bg="gray.800"
              p="4"
              borderRadius="full"
              fontSize="xs"
              _hover={{ bg: "cyan.500" }}
            >
              {tech.name}
            </Text>
          ))}
        </HStack>

        <HStack w="full" justify="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            Prizes & Misc.
          </Text>
        </HStack>

        <VStack w="full" bg="gray.800" p="8" spacing="8">
          <ExperienceCard
            name="Imersão React Winner"
            company="Won the first prize of Imersão React by Alura"
            date="2021"
          />
          <ExperienceCard
            name="Tech Youtuber"
            company="Created a Youtube chanel to share content about development and design. Posted over 200 videos and got over 1k subscribers."
            date="2021 - currently"
          />
          <ExperienceCard
            name="Net Zero School"
            company="Won the second prize of a net zero building competition, presenting the project of a school at the National Renewable Energy Laboratory, in Golden, Colorado."
            date="2019"
          />
          <ExperienceCard
            name="Brazilian Scientific Base In Antartica"
            company="Participated on the design of the new brazilian scientific base, built in Antartica"
            date="2013"
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
      <Avatar bg="cyan.500" name={name} color="white" size="lg" />
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
