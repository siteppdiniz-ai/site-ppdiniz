"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

interface BlogCardProps {
    title: string;
    slug: string;
    mainImage: any;
    publishedAt: string;
    excerpt: string;
    categories?: string[];
}

export function BlogCard({ title, slug, mainImage, publishedAt, excerpt, categories }: BlogCardProps) {
    return (
        <ScrollReveal direction="up" distance={40} duration={0.6} threshold={0.1}>
            <Link
                href={`/blog/${slug}`}
                className="group flex flex-col bg-[#0F1522] border border-[#1E293B] rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10 h-full relative"
            >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                    {mainImage ? (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src={urlFor(mainImage).width(800).height(500).url()}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ) : (
                        <div className="w-full h-full bg-[#1E293B] flex items-center justify-center">
                            <span className="text-white/20 font-tess">Sem imagem</span>
                        </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1522] to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 z-10 relative">

                    <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400 mb-3 font-tess">
                        <time className="text-[#D4AF37]">
                            {new Date(publishedAt).toLocaleDateString("pt-BR", {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </time>
                        {categories && categories.length > 0 && (
                            <>
                                <span>•</span>
                                <span className="uppercase tracking-wider">{categories[0]}</span>
                            </>
                        )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-marcellus text-white mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {title}
                    </h3>

                    <p className="text-gray-400 font-tess text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                        {excerpt}
                    </p>

                    <div className="mt-auto">
                        <span className="inline-flex items-center text-[#D4AF37] text-sm font-medium uppercase tracking-widest group-hover:tracking-[0.15em] transition-all duration-300">
                            Ler Artigo
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </ScrollReveal>
    );
}
