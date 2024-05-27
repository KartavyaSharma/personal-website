import { notFound } from "next/navigation"
import { getProjectDetails } from "../utils"
import { CustomMDX } from "app/components/mdx"
import { baseUrl } from "app/sitemap"

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
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProjectPage',
            headline: project.metadata.name,
            description: project.metadata.shortDescription,
            // image: post.metadata.image
            //   ? `${baseUrl}${post.metadata.image}`
            //   : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'Kurt',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {project.metadata.name}
      </h1>
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
    )
}