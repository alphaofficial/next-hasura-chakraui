import { dehydrate } from "@tanstack/react-query";
import { useUsersQuery } from "@/generated/graphql";
import { serialize } from "@/utils/serialize";
import { client } from "@/lib/client";
import PageLayout from "@/layout/page-layout";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export async function getServerSideProps() {
  await client.prefetchQuery(
    useUsersQuery.getKey(),
    useUsersQuery.fetcher({ limit: 10 })
  );

  return {
    props: {
      dehydratedState: serialize(dehydrate(client)),
    },
  };
}

export default function Home() {
  const { data } = useUsersQuery(
    { limit: 10 },
    {
      queryKey: useUsersQuery.getKey(),
    }
  );

  return (
    <PageLayout>
      <Box p={8}>
        <Box>
          <Heading aria-label="heading">Hello graphql!</Heading>
          <Text>Welcome to this page. </Text>
        </Box>
        <Stack direction="column" gap={2}>
          {data?.users.map((user) => (
            <Box key={user.id}>
              <Text>{user.name}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </PageLayout>
  );
}