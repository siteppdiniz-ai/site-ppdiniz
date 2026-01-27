"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Solutions() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerPage = 3;
    const totalPages = Math.ceil(solutions.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Mobile/Tablet logic could be different (1 item per pane), but for now assuming the request implies a desktop-first view similar to screenshot.
    // Ideally we should detect screen size or just slide 1 by 1 on mobile. 
    // Let's implement a responsive transform that slides a percentage based on column count.
    // Actually, simpler approach for "slide": Just show 3 items, then arrow click shows next 3?
    // Or scrolling 1 by 1?
    // User said "slide que tenha essas informacoes aqui tambem ao todo 6".
    // Let's do a carousel that scrolls 1 item at a time or groups.
    // Given the fidelity, a per-group slide (Next 3) is cleaner if there are exactly 6.
    // Let's do 2 slides of 3 items.

    return (
        <section id="areas" className="relative w-full h-[calc(100vh-6rem)] min-h-[700px] flex flex-col items-center justify-center bg-[#0B1120] overflow-hidden">

            {/* Top Gradient Separator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col h-full justify-center">

                {/* Header Section */}
                <div className="text-center mb-8 lg:mb-16 relative">
                    <span className="block text-white font-mate text-2xl lg:text-4xl leading-tight mb-2 font-normal">
                        Nossas
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-marcellus font-normal bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent leading-[1.15] pb-2 tracking-normal relative inline-block">
                        SOLUÇÕES
                        {/* Decorative Underline / Mask */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[120%] min-w-[300px] h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full max-w-7xl mx-auto px-12">

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-white transition-colors z-20 p-2"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>

                    {/* Slider Track Wrapper */}
                    <div className="overflow-hidden py-10 -my-10">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {/* Render groups of 3 for the slide effect */}
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <div key={pageIndex} className="min-w-full grid md:grid-cols-3 gap-6 lg:gap-8 px-4">
                                    {solutions.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#0F1522] border border-[#1E293B] hover:border-[#D4AF37]/50 p-8 md:p-10 rounded-xl transition-all duration-300 group flex flex-col justify-center min-h-[280px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] hover:-translate-y-2"
                                        >
                                            <h3 className="text-xl md:text-2xl font-serif text-[#D4AF37] mb-6 leading-tight min-h-[64px] flex items-end pb-2">
                                                {item.title}
                                            </h3>
                                            <div className="w-12 h-[1px] bg-[#D4AF37]/40 mb-6 group-hover:w-24 transition-all duration-500" />
                                            <p className="text-gray-300 font-tess text-base md:text-lg font-light leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-white transition-colors z-20 p-2"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={cn(
                                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                                    currentIndex === idx ? "bg-[#D4AF37] w-8" : "bg-[#1E293B] hover:bg-[#D4AF37]/50"
                                )}
                            />
                        ))}
                    </div>

                </div>

            </div>

            {/* Bottom Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    )
}

const solutions = [
    {
        title: "Gestão e Controle Empresarial",
        description: "Organize sua empresa para crescer de forma sustentável"
    },
    {
        title: "Estruturação Tributária",
        description: "Reduza o impacto da carga tributária de forma legal e inteligente"
    },
    {
        title: "Gestão Financeira",
        description: "Tenha clareza sobre seus números para decisões estratégicas"
    },
    {
        title: "Estruturação Contábil",
        description: "Organize sua empresa para crescer de forma sustentável"
    },
    {
        title: "Estruturação Societária",
        description: "Organize sua empresa para crescer de forma sustentável"
    },
    {
        title: "Outras Soluções - Precificação",
        description: "Organize sua empresa para crescer de forma sustentável"
    }
]
