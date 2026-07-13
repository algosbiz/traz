import BlogsCollection from "@/components/Blog/BlogsCollection";
import PageTitle from "@/components/Common/PageTitle";
import Footer from "@/components/Layout/Footer";
import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import { getPublishedBlogsPage } from "@/lib/cmsBlogs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Masonry Blog & Homeowner Guides | DMG Masonry Calgary",
  description:
    "Explore practical masonry advice, maintenance guides, and project inspiration from DMG Masonry in Calgary.",
  path: "/blogs/",
});

export const dynamic = "force-dynamic";

interface BlogsPageProps {
  searchParams: { page?: string | string[] };
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const pageParam = Array.isArray(searchParams.page)
    ? searchParams.page[0]
    : searchParams.page;
  const requestedPage = Number.parseInt(pageParam ?? "1", 10);
  const result = await getPublishedBlogsPage(requestedPage, 6);

  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="Blogs"
        homeText="Home"
        homeUrl="/"
        titleAsHeading
      />

      <BlogsCollection
        posts={result.posts}
        page={result.page}
        totalPages={result.totalPages}
      />

      <Footer />
    </>
  );
}
