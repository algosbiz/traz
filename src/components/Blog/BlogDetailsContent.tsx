import Image from "next/image";
import Link from "next/link";

import type { BlogSummary, CmsBlog } from "@/lib/cmsBlogs";
import { formatBlogDate, getBlogDisplayDate } from "@/lib/blogDate";
import styles from "./BlogDetailsContent.module.css";

interface BlogDetailsContentProps {
  post: CmsBlog;
  previousPost?: BlogSummary;
  nextPost?: BlogSummary;
}

export default function BlogDetailsContent({
  post,
  previousPost,
  nextPost,
}: BlogDetailsContentProps) {
  const suggestedPosts = [previousPost, nextPost]
    .filter((suggestedPost): suggestedPost is BlogSummary => Boolean(suggestedPost))
    .filter((suggestedPost) => suggestedPost.slug !== post.slug)
    .slice(0, 3);
  const hasSuggestedPosts = suggestedPosts.length > 0;
  const displayDate = getBlogDisplayDate(post);

  return (
    <div className={`blog-details-area pt-100 pb-100 ${styles.article}`}>
      <div className="container">
        <div className="row g-5">
          <div className={hasSuggestedPosts ? "col-lg-8" : "col-lg-10 mx-auto"}>
            <article className="blog-details-desc">
              <header className="title">
                <span>ARTICLE</span>
                <h1>{post.title}</h1>
                <ul className="meta">
                  <li>{post.category}</li>
                  <li>
                    <time dateTime={displayDate}>{formatBlogDate(displayDate)}</time>
                  </li>
                  <li>DMG Masonry</li>
                </ul>
              </header>

              <Image
                src={post.coverImage}
                alt={post.title}
                width={1320}
                height={650}
                sizes="(max-width: 991px) 100vw, 66vw"
                priority
                style={{ width: "100%", height: "auto" }}
              />

              <div
                className={styles.richContent}
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              <div className="bd-previous-next-post">
                <div className="prev-and-next-title d-flex align-items-center justify-content-between">
                  {previousPost ? (
                    <Link href={`/blogs/${previousPost.slug}/`} className="prev">
                      <i className="ri-arrow-left-line" aria-hidden="true" />
                      PREVIOUS ARTICLE
                    </Link>
                  ) : (
                    <span />
                  )}

                  {nextPost ? (
                    <Link href={`/blogs/${nextPost.slug}/`} className="next">
                      NEXT ARTICLE
                      <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                  ) : (
                    <Link href="/blogs/" className="next">
                      ALL ARTICLES
                      <i className="ri-grid-line" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </div>

          {hasSuggestedPosts && (
            <div className="col-lg-4">
              <aside className={styles.sidebar} aria-labelledby="suggested-articles-title">
              <span className={styles.sidebarEyebrow}>KEEP READING</span>
              <h2 id="suggested-articles-title">Articles You Might Like</h2>

              <div className={styles.suggestedList}>
                {suggestedPosts.map((suggestedPost) => (
                  <article className={styles.suggestedCard} key={suggestedPost.slug}>
                    <Link
                      className={styles.suggestedImage}
                      href={`/blogs/${suggestedPost.slug}/`}
                      aria-label={`Read ${suggestedPost.title}`}
                    >
                      <Image
                        src={suggestedPost.coverImage}
                        alt=""
                        fill
                        sizes="(max-width: 991px) 120px, 110px"
                      />
                    </Link>

                    <div className={styles.suggestedContent}>
                      <span>{suggestedPost.category}</span>
                      <h3>
                        <Link href={`/blogs/${suggestedPost.slug}/`}>
                          {suggestedPost.title}
                        </Link>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>

              <Link href="/blogs/" className={styles.allArticles}>
                View All Articles
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
              </aside>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
