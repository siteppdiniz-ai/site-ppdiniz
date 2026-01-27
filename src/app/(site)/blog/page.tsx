import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { BlogList } from "@/components/blog/BlogList";

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);
    const categories = await client.fetch(CATEGORIES_QUERY);

    return (
        <section className="min-h-screen bg-[#0B1120] pt-24 pb-20 md:pt-32 md:pb-32">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-marcellus text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] tracking-wide relative inline-block pb-4">
                        BLOG JURÍDICO
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-[#D4AF37] rounded-full opacity-60" />
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-tess font-light leading-relaxed max-w-2xl mx-auto">
                        Acompanhe nossas análises, notícias e artigos sobre o mundo jurídico e empresarial para manter seu negócio sempre à frente.
                    </p>
                </div>

                {/* Filterable List */}
                <BlogList initialPosts={posts} categories={categories} />
            </div>
        </section>
    );
}
