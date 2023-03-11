import SeoTags, { SeoTagsProps } from "@/components/seo";

export type PageLayoutProps = {
  children: React.ReactNode;
} & SeoTagsProps;

export default function PageLayout({ children, ...rest }: PageLayoutProps) {
  return (
    <>
      <SeoTags {...rest} />
      {children}
    </>
  );
}
