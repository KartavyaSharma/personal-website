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
            } else if (
              new Date(a.metadata.publishedAt) <
              new Date(b.metadata.publishedAt)
            ) {
              return 1;
            } else {
              return 0;
            }
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[110px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="group inline-flex items-center justify-center text-neutral-900 dark:text-neutral-100 tracking-tight">
                  <span className="w-full">
                    {post.metadata.title}
                  </span>
                  <svg
                    className="w-4 h-4 ms-1 rtl:rotate-180 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
