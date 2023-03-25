import Head from "next/head";

export type SeoTagsProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedAt?: string;
  modifiedAt?: string;
  tags?: string[];
};

export default function SeoTags({
  title = "NextJS + Graphql + ChakraUI",
  description = "NextJS + Graphql + ChakraUI template",
}: SeoTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
