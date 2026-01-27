import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RichTextComponents } from "@/components/blog/RichTextComponents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
        <article className="min-h-screen bg-[#0B1120] pb-24">

            {/* Hero / Header Image */}
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                {post.mainImage ? (
                    <Image
                        src={urlFor(post.mainImage).width(1920).height(1080).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-[#0F1522]" />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />

                {/* Content Container positioned absolutely over hero */}
                <div className="absolute bottom-0 w-full pb-12 md:pb-20">
                    <div className="container px-4 md:px-6 max-w-4xl mx-auto">

                        <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-[#D4AF37] transition-colors mb-8 group">
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-tess uppercase tracking-widest text-sm">Voltar para o Blog</span>
                        </Link>

                        <div className="space-y-6">
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex gap-3">
                                    {post.categories.map((cat: string) => (
                                        <span key={cat} className="px-4 py-1 rounded-full bg-[#D4AF37] text-black text-sm font-bold uppercase tracking-wider">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-marcellus text-white leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-6 text-gray-300/80 font-tess text-sm md:text-base border-t border-white/10 pt-6">
                                {post.author && (
                                    <div className="flex items-center gap-3">
                                        {post.author.image ? (
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/50">
                                                <Image
                                                    src={urlFor(post.author.image).width(64).height(64).url()}
                                                    alt={post.author.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0B1120] font-bold">
                                                {post.author.name[0]}
                                            </div>
                                        )}
                                        <span className="font-medium text-white">{post.author.name}</span>
                                    </div>
                                )}
                                <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                                <time>{new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container px-4 md:px-6 max-w-4xl mx-auto mt-12 md:mt-20">
                <div className="prose prose-lg prose-invert max-w-none">
                    <PortableText value={post.body} components={RichTextComponents} />
                </div>

                {/* Footer / Share / Navigation could go here */}
                <div className="mt-20 pt-10 border-t border-[#D4AF37]/20 flex justify-center">
                    <Link href="/blog">
                        <button className="px-8 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1120] transition-all duration-300 font-marcellus uppercase tracking-widest rounded-sm">
                            Ver outros artigos
                        </button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
