import { Box, Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <Box maxH="full">
      <Box w="full">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          p={8}
        >
          {children}
        </Flex>
      </Box>
    </Box>
  );
}
