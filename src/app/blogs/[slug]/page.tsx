import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import PageTitle from "@/components/Common/PageTitle";
import Footer from "@/components/Layout/Footer";
import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import { getPublishedBlogBySlug, getPublishedBlogs } from "@/lib/cmsBlogs";
import { buildMetadata } from "@/lib/seo";

interface BlogDetailsPageProps {
  params: { slug: string };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const post = await getPublishedBlogBySlug(params.slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: `${post.title} | DMG Masonry`,
    description: post.excerpt,
    path: `/blogs/${post.slug}/`,
  });
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const [post, posts] = await Promise.all([
    getPublishedBlogBySlug(params.slug),
    getPublishedBlogs(),
  ]);

  if (!post) {
    notFound();
  }

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const previousPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Blog Details" homeText="Blogs" homeUrl="/blogs/" />

      <BlogDetailsContent
        post={post}
        previousPost={previousPost}
        nextPost={nextPost}
      />

      <Footer />
    </>
  );
}
