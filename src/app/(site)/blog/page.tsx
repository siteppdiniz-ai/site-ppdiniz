import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Verify import path depending on where sanity folder is
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);

    return (
        <div className="container px-4 md:px-6 py-12 md:py-24">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                    Blog Jurídico
                </h1>
                <p className="text-lg text-muted-foreground">
                    Notícias, artigos e análises sobre o mundo jurídico para você se manter informado.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.length > 0 ? (
                    posts.map((post: any) => (
                        <Link
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                {post.mainImage && (
                                    <Image
                                        src={urlFor(post.mainImage).width(800).height(450).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}
                            </div>
                            <div className="flex flex-1 flex-col p-6 space-y-3">
                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                    {post.categories && post.categories.length > 0 && (
                                        <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                            {post.categories[0]}
                                        </span>
                                    )}
                                    <span>{new Date(post.publishedAt).toLocaleDateString("pt-BR")}</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-muted-foreground">
                        <p className="text-lg">Nenhum artigo publicado ainda.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
