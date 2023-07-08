import { dehydrate } from "@tanstack/react-query";
import {
  CharactersByVillageDocument,
  useCharactersByVillageQuery,
} from "@/client/generated/graphql";
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
import { graphQLClient } from "@/serverless/lib/client";
import { CharactersByVillageQuery } from "@/serverless/generated/server-sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{
  data: CharactersByVillageQuery;
  dehydratedState: unknown;
}> = async () => {
  await client.prefetchQuery(
    useCharactersByVillageQuery.getKey({ village: "leaf" }),
    useCharactersByVillageQuery.fetcher({ village: "leaf" })
  );

  const data = await graphQLClient.request<CharactersByVillageQuery>(
    CharactersByVillageDocument,
    {
      village: "leaf",
    }
  );

  return {
    props: {
      data,
      dehydratedState: serialize(dehydrate(client)),
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageLayout>
      <Box p={8}>
        <Box>
          <Heading aria-label="heading">Hajimemashite 👋🏽!</Heading>
        </Box>

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
      </Box>
    </PageLayout>
  );
}
