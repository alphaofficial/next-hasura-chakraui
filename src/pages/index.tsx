import { dehydrate } from "@tanstack/react-query";
import { useCharactersByVillageQuery } from "@/client/generated/graphql";
import { serialize } from "@/common/utils/serialize";
import { client } from "@/client/lib/client";
import PageLayout from "@/client/layout/page-layout";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export async function getServerSideProps() {
  await client.prefetchQuery(
    useCharactersByVillageQuery.getKey({ village: "leaf" }),
    useCharactersByVillageQuery.fetcher({ village: "leaf" })
  );

  return {
    props: {
      dehydratedState: serialize(dehydrate(client)),
    },
  };
}

export default function Home() {
  const { data } = useCharactersByVillageQuery({ village: "leaf" });

  return (
    <PageLayout>
      <Stack direction="column" p={8} gap={4}>
        <Stack direction="column" gap={2}>
          <Heading aria-label="heading">Hajimemashite 👋🏽!</Heading>
        </Stack>

        <Stack direction="column" gap={4}>
          <Heading as="h2" size="md" aria-label="heading">
            Characters
          </Heading>

          <Stack direction="column" gap={4}>
            {!data?.characters?.results?.length && <Text>No users found</Text>}
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={8}
            >
              {data?.characters?.results?.map((character) => (
                <GridItem key={character._id} width="100%">
                  <Box>
                    <Image
                      src={character.avatarSrc || ""}
                      fallbackSrc="https://via.placeholder.com/150"
                      alt={character.name}
                      h="full"
                      w="full"
                      objectFit="cover"
                      objectPosition="center"
                      rounded="md"
                    />
                  </Box>
                  <Box mt={2}>
                    <Stack direction="column" gap={2}>
                      <Flex
                        justify="space-between"
                        bg="green.400"
                        rounded="sm"
                        p={1}
                      >
                        <Text>
                          <a href="#">{character.name}</a>
                        </Text>
                        <Text fontWeight="bold">{character.rank}</Text>
                      </Flex>
                      <Text>{character.description}</Text>
                    </Stack>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </PageLayout>
  );
}
