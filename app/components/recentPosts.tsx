import Link from "next/link";
import { formatDate, getRecentBlogPosts } from "app/blog/utils";

export function RecentPosts() {
  let allBlogs = getRecentBlogPosts();

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Recent Posts
        </h2>
      </div>
      <div className="mb-4">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
