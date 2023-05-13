import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from 'next/navigation'
import Link from "next/link"

export const revalidate = 0

type Props = {
    params: {
        postId: string,
    }
}

// export async function generateStaticParams() {
//     const posts = await getPostsMeta() //deduped (=deduplicated)

//     if (!posts) return []       // to avoid problem of mapping over undefined
            
//     return posts.map(post => ({
//         postId: post.id,
//     }))
// }

export async function generateMetadata( { params: { postId }}: Props) {

    const post = await getPostByName(`${postId}.mdx`)      //deduped (=deduplicated) 

    if (!post) {
        return {
            title: 'Post not found'
        }
    }

    return {
        title: post.meta.title,
    }
}

export default async function Post( { params: { postId }}: Props) {

    const post = await getPostByName(`${postId}.mdx`)       //deduped (=deduplicated)
  
    if (!post) notFound()                                   // return key is not required

    const { meta, content } = post
    
    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm">{pubDate}</p>
            <article>
                {content}
            </article>
            <section>
                <h3>Related:</h3>        
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
            <p className="mb-10">
            <Link href="/">Back to Home</Link>
            </p>
        </>
    )
}
