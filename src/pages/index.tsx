import { dehydrate } from "@tanstack/react-query";
import { useUsersQuery } from "@/generated/graphql";
import { serialize } from "@/utils/serialize";
import { client } from "@/lib/client";
import PageLayout from "@/layout/page-layout";
import { Box, Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0/client";

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
  const { user, error, isLoading } = useUser();
  const { data } = useUsersQuery(
    { limit: 10 },
    {
      queryKey: useUsersQuery.getKey(),
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <PageLayout>
      <Flex justifyContent="flex-end">
        <Stack direction="row" p={2} gap={4} aria-label="authActions">
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/logout">Logout</a>
        </Stack>
      </Flex>
      <Stack direction="column" p={8} gap={4}>
        <Stack direction="column" gap={2}>
          <Heading aria-label="heading">Hello graphql!</Heading>
          <Text>Welcome to this page. </Text>
          {!user && (
            <Text aria-label="loginText">Log in to see your followers.</Text>
          )}
        </Stack>
        <Stack direction="column" gap={2}>
          {user && (
            <>
              <Box>
                <Text aria-label="authUser">{user.name}</Text>
              </Box>
              <Box>
                <Image src={user.picture || ""} alt={user.name || ""} />
              </Box>
              <Box>
                <Text>{user.email}</Text>
              </Box>
            </>
          )}
        </Stack>
        {user && (
          <>
            <Heading>Followers</Heading>
            <Stack direction="column" gap={2}>
              {data?.users.map((user) => (
                <Box key={user.id}>
                  <Text>{user.name}</Text>
                </Box>
              ))}
            </Stack>
          </>
        )}
      </Stack>
    </PageLayout>
  );
}
