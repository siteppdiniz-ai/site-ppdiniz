import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

// Correct usage for Next.js 15: params is a Promise
type Props = {
    params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        notFound();
    }

    return (
        <article className="container px-4 md:px-6 py-12 md:py-24">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-4 text-center">
                    {post.categories && post.categories.length > 0 && (
                        <div className="flex justify-center gap-2">
                            {post.categories.map((cat: string) => (
                                <span key={cat} className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    )}
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-muted-foreground">
                        {post.author && (
                            <div className="flex items-center gap-2">
                                {post.author.image && (
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                        <Image
                                            src={urlFor(post.author.image).width(64).height(64).url()}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <span className="font-medium">{post.author.name}</span>
                            </div>
                        )}
                        <span>•</span>
                        <time>{new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}</time>
                    </div>
                </div>

                {/* Featured Image */}
                {post.mainImage && (
                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={urlFor(post.mainImage).width(1200).height(600).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-lg prose-slate dark:prose-invert mx-auto">
                    <PortableText value={post.body} />
                </div>
            </div>
        </article>
    );
}
