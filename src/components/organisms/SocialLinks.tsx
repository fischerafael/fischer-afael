import { HStack, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export const SocialLinks = () => {
  const { push } = useRouter();
  const onNavigateTo = (url: string) => {
    push(url);
  };
  return (
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
        onClick={() => onNavigateTo("https://www.instagram.com/fischerafael/")}
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
  );
};
