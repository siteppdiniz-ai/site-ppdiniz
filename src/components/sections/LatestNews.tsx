import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { LATEST_POSTS_QUERY } from "@/sanity/lib/queries";
import { BlogCard } from "@/components/blog/BlogCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export async function LatestNews() {
    const posts = await client.fetch(LATEST_POSTS_QUERY);

    if (!posts || posts.length === 0) return null;

    return (
        <section className="bg-[#0B1120] py-20 lg:py-32 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <ScrollReveal direction="left" duration={0.8}>
                            <span className="block text-[#D4AF37] font-mate text-lg md:text-xl uppercase tracking-[0.2em] mb-4">
                                Fique por Dentro
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-marcellus text-white leading-tight">
                                Últimas Notícias e <br className="hidden md:block" />
                                <span className="bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent">Atualizações</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="right" duration={0.8} delay={0.2}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-[#D4AF37] hover:text-white group border-b border-[#D4AF37]/30 pb-1 transition-all duration-300 text-sm md:text-base font-medium tracking-widest uppercase"
                        >
                            Ver Todo o Blog
                            <svg
                                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </ScrollReveal>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {posts.map((post: any) => (
                        <BlogCard
                            key={post._id}
                            title={post.title}
                            slug={post.slug.current}
                            mainImage={post.mainImage}
                            publishedAt={post.publishedAt}
                            excerpt={post.excerpt || "Clique para ler o artigo completo..."}
                            categories={post.categories}
                        />
                    ))}
                </div>

                {/* Mobile View All (Only visible on small screens to reduce clutter above the grid) */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#0B1120] font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
                    >
                        Acessar Blog
                    </Link>
                </div>
            </div>
        </section>
    );
}
