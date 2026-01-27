"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";

interface BlogListProps {
    initialPosts: any[];
    categories: any[];
}

export function BlogList({ initialPosts, categories }: BlogListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

    // Filter posts based on selected category
    const filteredPosts = selectedCategory === "Todos"
        ? initialPosts
        : initialPosts.filter(post =>
            post.categories && post.categories.includes(selectedCategory)
        );

    return (
        <div className="space-y-12">

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <button
                    onClick={() => setSelectedCategory("Todos")}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border border-[#D4AF37] ${selectedCategory === "Todos"
                            ? "bg-[#D4AF37] text-[#0B1120]"
                            : "bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/10"
                        }`}
                >
                    Todos
                </button>

                {categories.map((category) => (
                    <button
                        key={category._id || category.title}
                        onClick={() => setSelectedCategory(category.title)}
                        className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border border-[#D4AF37] ${selectedCategory === category.title
                                ? "bg-[#D4AF37] text-[#0B1120]"
                                : "bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/10"
                            }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post: any) => (
                        <BlogCard
                            key={post._id}
                            title={post.title}
                            slug={post.slug.current}
                            mainImage={post.mainImage}
                            publishedAt={post.publishedAt}
                            excerpt={post.excerpt || "Clique para ler o artigo completo..."}
                            categories={post.categories}
                        />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center border border-[#1E293B] rounded-2xl bg-[#0F1522]/50">
                        <p className="text-xl text-gray-400 font-tess">Nenhum artigo encontrado nesta categoria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
