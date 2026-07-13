export function getBlogDisplayDate(blog: {
  publishedAt: string | null;
  createdAt: string;
}) {
  return blog.publishedAt ?? blog.createdAt;
}

export function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}
