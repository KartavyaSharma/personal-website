import { notFound } from "next/navigation"
import { getProjectDetails } from "../utils"
import { CustomMDX } from "app/components/mdx"

export async function generateStaticParams() {
    let projects = getProjectDetails()

    return projects.map((project) => ({
        slug: project.slug
    }))
}

export default function Project({params}) {
    let project = getProjectDetails().find((project) => project.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
    <section>
      {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      /> */}
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {project.metadata.name}
      </h1>
      {/* <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div> */}
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
    )
}