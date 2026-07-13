import Image from "next/image";
import Link from "next/link";

import type { BlogSummary } from "@/lib/cmsBlogs";
import { formatBlogDate, getBlogDisplayDate } from "@/lib/blogDate";
import styles from "./BlogsCollection.module.css";

interface BlogsCollectionProps {
  posts: BlogSummary[];
  page: number;
  totalPages: number;
}

function getPageHref(page: number) {
  return page === 1 ? "/blogs/" : `/blogs/?page=${page}`;
}

function getVisiblePages(page: number, totalPages: number) {
  const pages = new Set([1, totalPages, page - 1, page, page + 1]);
  return [...pages]
    .filter((item) => item >= 1 && item <= totalPages)
    .sort((first, second) => first - second);
}

export default function BlogsCollection({
  posts,
  page,
  totalPages,
}: BlogsCollectionProps) {
  const visiblePages = getVisiblePages(page, totalPages);

  return (
    <section className="blog-area pt-100 pb-75">
      <div className="container">
        <div className={styles.intro}>
          <span className={styles.eyebrow}>MASONRY INSIGHTS</span>
          <h2>Practical Advice and Inspiration for Your Property</h2>
          <p>
            Explore helpful guides from DMG Masonry covering maintenance,
            materials, repairs, and ideas for lasting indoor and outdoor masonry.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {posts.map((post) => {
            const displayDate = getBlogDisplayDate(post);

            return (
              <div className="col-lg-6" key={post.id}>
                <article className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Link href={`/blogs/${post.slug}/`} aria-label={`Read ${post.title}`}>
                      <Image
                        className={styles.image}
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 991px) 100vw, 50vw"
                      />
                    </Link>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span className={styles.category}>{post.category}</span>
                      <time dateTime={displayDate}>{formatBlogDate(displayDate)}</time>
                    </div>
                    <h3>
                      <Link href={`/blogs/${post.slug}/`}>{post.title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <Link className={styles.readMore} href={`/blogs/${post.slug}/`}>
                      Read Article <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <nav className={styles.pagination} aria-label="Blog pagination">
            {page > 1 && (
              <Link className={styles.paginationArrow} href={getPageHref(page - 1)}>
                <i className="ri-arrow-left-line" aria-hidden="true" />
                Previous
              </Link>
            )}

            <div className={styles.pageNumbers}>
              {visiblePages.map((pageNumber, index) => {
                const previousPage = visiblePages[index - 1];
                const showEllipsis = previousPage && pageNumber - previousPage > 1;

                return (
                  <span className={styles.pageItem} key={pageNumber}>
                    {showEllipsis && <span className={styles.ellipsis}>…</span>}
                    <Link
                      className={`${styles.pageNumber} ${pageNumber === page ? styles.activePage : ""}`}
                      href={getPageHref(pageNumber)}
                      aria-current={pageNumber === page ? "page" : undefined}
                    >
                      {pageNumber}
                    </Link>
                  </span>
                );
              })}
            </div>

            {page < totalPages && (
              <Link className={styles.paginationArrow} href={getPageHref(page + 1)}>
                Next
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
