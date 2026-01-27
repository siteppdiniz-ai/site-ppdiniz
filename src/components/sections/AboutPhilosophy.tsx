"use client";

import { useRef, useState } from "react";
import { ShoppingCart, LayoutGrid, Building2, Lightbulb } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutPhilosophy() {
    const [activeHover, setActiveHover] = useState<number | null>(null);

    return (
        <section className="relative w-full py-20 lg:py-32 flex flex-col items-center bg-[#0B1120] overflow-hidden">

            {/* Container */}
            <div className="container max-w-6xl px-4 md:px-6 relative z-10 flex flex-col items-center">

                {/* Top Cards: Mission, Vision, Purpose */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
                    <ScrollReveal direction="up" delay={0.1} className="h-full">
                        <PhilosophyCard
                            title="MISSÃO:"
                            content="Tenha todas as informações e controles por meio de plataforma tecnológica"
                        />
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2} className="h-full">
                        <PhilosophyCard
                            title="VISÃO:"
                            content="Planos de consultoria sob medida para a realidade da sua empresa e da sua equipe."
                        />
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.3} className="h-full">
                        <PhilosophyCard
                            title="PROPÓSITO:"
                            content="Respeito à cultura da empresa, com propostas flexíveis e adaptadas."
                        />
                    </ScrollReveal>
                </div>

                {/* Values Card - Single centered */}
                <div className="w-full max-w-2xl mb-24 lg:mb-32">
                    <ScrollReveal direction="up" delay={0.4}>
                        <PhilosophyCard
                            title="VALORES:"
                            content="Acreditar que o compartilhamento de ideias, conhecimento e tecnologia, considerando as competências individuais, nos levarão mais longe!"
                            isWide
                        />
                    </ScrollReveal>
                </div>

                {/* Infographic Section */}
                <div className="relative w-full max-w-5xl flex flex-col items-center py-20 overflow-visible">

                    {/* Main Infographic Container - Responsive Aspect Ratio (Reduced Size) */}
                    <ScrollReveal direction="up" delay={0.2} className="relative w-[280px] h-[140px] md:w-[420px] md:h-[210px] lg:w-[560px] lg:h-[280px] flex justify-center mt-12 md:mt-20 z-20">
                        {/* 1. SVG Pie Slices (The Fan) with Embedded Icons */}
                        <svg viewBox="0 0 200 100" className="absolute top-0 left-0 w-full h-full overflow-visible drop-shadow-2xl">
                            <defs>
                                <linearGradient id="gold1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#8B6B2B" />
                                    <stop offset="100%" stopColor="#D4AF37" />
                                </linearGradient>
                                <linearGradient id="gold2" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#695227" />
                                    <stop offset="100%" stopColor="#B78E45" />
                                </linearGradient>
                            </defs>

                            {/* Group for Slice 1: Retail (Leftmost) */}
                            <g
                                className={`transition-all duration-300 origin-bottom-right cursor-pointer ${activeHover === 0 ? "scale-[1.02] brightness-110" : "opacity-100"}`}
                                onMouseEnter={() => setActiveHover(0)}
                                onMouseLeave={() => setActiveHover(null)}
                            >
                                {/* Slice with gap */}
                                <path
                                    d="M 98 2 L 2 2 A 96 96 0 0 0 30 70 Z"
                                    fill="url(#gold1)"
                                />
                                {/* Embedded Icon - Centered based on provided margins */}
                                <image
                                    href="/assets/icon-retail.png"
                                    x="25" y="15" height="28" width="28"
                                    className={`transition-transform origin-center ${activeHover === 0 ? "scale-110" : ""}`}
                                />
                            </g>

                            {/* Group for Slice 2: Methodology (Left-Center) */}
                            <g
                                className={`transition-all duration-300 origin-bottom-right cursor-pointer ${activeHover === 1 ? "scale-[1.02] brightness-110" : "opacity-100"}`}
                                onMouseEnter={() => setActiveHover(1)}
                                onMouseLeave={() => setActiveHover(null)}
                            >
                                {/* Slice with gap */}
                                <path
                                    d="M 98 2 L 32 72 A 96 96 0 0 0 98 98 Z"
                                    fill="url(#gold2)"
                                />
                                {/* Embedded Icon - Centered based on mirrored coords */}
                                <image
                                    href="/assets/icon-methodology.png"
                                    x="60" y="55" height="28" width="28"
                                    className={`transition-transform origin-center ${activeHover === 1 ? "scale-110" : ""}`}
                                />
                            </g>

                            {/* Group for Slice 3: Specialists (Right-Center) */}
                            <g
                                className={`transition-all duration-300 origin-bottom-left cursor-pointer ${activeHover === 2 ? "scale-[1.02] brightness-110" : "opacity-100"}`}
                                onMouseEnter={() => setActiveHover(2)}
                                onMouseLeave={() => setActiveHover(null)}
                            >
                                {/* Slice with gap */}
                                <path
                                    d="M 102 2 L 102 98 A 96 96 0 0 0 168 72 Z"
                                    fill="url(#gold2)"
                                />
                                {/* Embedded Icon - Centered based on mirrored coords */}
                                <image
                                    href="/assets/icon-specialists.png"
                                    x="112" y="55" height="28" width="28"
                                    className={`transition-transform origin-center ${activeHover === 2 ? "scale-110" : ""}`}
                                />
                            </g>

                            {/* Group for Slice 4: Practical (Rightmost) */}
                            <g
                                className={`transition-all duration-300 origin-bottom-left cursor-pointer ${activeHover === 3 ? "scale-[1.02] brightness-110" : "opacity-100"}`}
                                onMouseEnter={() => setActiveHover(3)}
                                onMouseLeave={() => setActiveHover(null)}
                            >
                                {/* Slice with gap */}
                                <path
                                    d="M 102 2 L 170 70 A 96 96 0 0 0 198 2 Z"
                                    fill="url(#gold1)"
                                />
                                {/* Embedded Icon - Centered based on mirrored coords */}
                                <image
                                    href="/assets/icon-practical.png"
                                    x="147" y="15" height="28" width="28"
                                    className={`transition-transform origin-center ${activeHover === 3 ? "scale-110" : ""}`}
                                />
                            </g>
                        </svg>

                        {/* 2. Central Dark Circle (Scaled Down) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] md:w-[196px] md:h-[196px] lg:w-[266px] lg:h-[266px] rounded-full bg-[#0B1120] border-4 border-[#D4AF37] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-20">
                            <div className="relative w-[60%] h-[60%]">
                                <Image
                                    src="/assets/logo.png"
                                    alt="PPDiniz Consultoria"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                    </ScrollReveal>

                    {/* Strategic Information Boxes below the Infographic */}
                    {/* Strategic Boxes Grid */}
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mt-0 md:mt-2 lg:mt-4 overflow-visible z-10">

                        {/* Box 1 (Outer Left) */}
                        <ScrollReveal direction="up" delay={0.4} className="relative flex justify-center mt-0 md:mt-4 cursor-pointer"
                        >
                            <div
                                onMouseEnter={() => setActiveHover(0)}
                                onMouseLeave={() => setActiveHover(null)}
                                className="w-full flex justify-center"
                            >
                                {/* Line connects to Slice 1 */}
                                <div className={`hidden md:block absolute bottom-full left-1/2 w-16 md:w-32 lg:w-48 h-[188px] border-l-[3px] border-t-[3px] rounded-tl-[3rem] transition-all duration-300 origin-bottom-left ${activeHover === 0 ? "border-[#D4AF37] scale-y-105" : "border-[#D4AF37]/80"
                                    }`} />
                                <StrategicBox
                                    text="EXPERIÊNCIA EM EMPRESAS DO VAREJO, DO ATACADO E DA INDÚSTRIA"
                                    isActive={activeHover === 0}
                                />
                            </div>
                        </ScrollReveal>

                        {/* Box 2 (Inner Left) */}
                        <ScrollReveal direction="up" delay={0.5} className="relative flex justify-center mt-8 md:mt-16 lg:mt-20 cursor-pointer"
                        >
                            <div
                                onMouseEnter={() => setActiveHover(1)}
                                onMouseLeave={() => setActiveHover(null)}
                                className="w-full flex justify-center"
                            >
                                {/* Line connects to Slice 2 */}
                                <div className={`hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-[3px] h-[140px] transition-all duration-300 origin-bottom ${activeHover === 1 ? "bg-[#D4AF37] scale-y-105" : "bg-[#D4AF37]/80"
                                    }`} />
                                <StrategicBox
                                    text="METODOLOGIA PERSONALIZADA PARA CADA NEGÓCIO"
                                    isActive={activeHover === 1}
                                />
                            </div>
                        </ScrollReveal>

                        {/* Box 3 (Inner Right) */}
                        <ScrollReveal direction="up" delay={0.6} className="relative flex justify-center mt-8 md:mt-16 lg:mt-20 cursor-pointer"
                        >
                            <div
                                onMouseEnter={() => setActiveHover(2)}
                                onMouseLeave={() => setActiveHover(null)}
                                className="w-full flex justify-center"
                            >
                                {/* Line connects to Slice 3 */}
                                <div className={`hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-[3px] h-[140px] transition-all duration-300 origin-bottom ${activeHover === 2 ? "bg-[#D4AF37] scale-y-105" : "bg-[#D4AF37]/80"
                                    }`} />
                                <StrategicBox
                                    text="ESPECIALISTAS EM MÉDIAS E GRANDES EMPRESAS"
                                    isActive={activeHover === 2}
                                />
                            </div>
                        </ScrollReveal>

                        {/* Box 4 (Outer Right) */}
                        <ScrollReveal direction="up" delay={0.7} className="relative flex justify-center mt-0 md:mt-4 cursor-pointer"
                        >
                            <div
                                onMouseEnter={() => setActiveHover(3)}
                                onMouseLeave={() => setActiveHover(null)}
                                className="w-full flex justify-center"
                            >
                                {/* Line connects to Slice 4 */}
                                <div className={`hidden md:block absolute bottom-full right-1/2 w-16 md:w-32 lg:w-48 h-[188px] border-r-[3px] border-t-[3px] rounded-tr-[3rem] transition-all duration-300 origin-bottom-right ${activeHover === 3 ? "border-[#D4AF37] scale-y-105" : "border-[#D4AF37]/80"
                                    }`} />
                                <StrategicBox
                                    text="CONSULTORIA PRÁTICA E SEM BUROCRACIA"
                                    isActive={activeHover === 3}
                                />
                            </div>
                        </ScrollReveal>

                    </div>

                </div>


            </div>

            {/* Bottom Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    )
}

function PhilosophyCard({ title, content, isWide = false }: { title: string, content: string, isWide?: boolean }) {
    return (
        <div className={`relative bg-[#0F1522] border border-[#1E293B] rounded-xl p-6 md:p-8 pt-10 md:pt-12 shadow-lg hover:border-[#D4AF37]/40 hover:-translate-y-2 hover:shadow-[#D4AF37]/5 transition-all duration-300 group ${isWide ? 'text-center' : ''} cursor-default`}>
            {/* The "Tab" title */}
            <div className="absolute top-0 left-4 md:left-6 -translate-y-1/2 bg-[#B78E45] group-hover:bg-[#D4AF37] px-4 py-1.5 rounded-sm transition-colors duration-300">
                <span className="text-[#0B1120] font-serif font-bold text-sm tracking-widest uppercase">
                    {title}
                </span>
            </div>
            <p className="text-gray-300 font-tess text-base md:text-lg font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                {content}
            </p>
        </div>
    )
}

function StrategicBox({ text, isActive }: { text: string, isActive?: boolean }) {
    return (
        <div className={`bg-[#0F1522] border p-4 lg:p-5 rounded-lg text-center shadow-lg w-full max-w-[200px] min-h-[90px] flex items-center justify-center cursor-default transition-all duration-300 ${isActive
            ? "border-[#D4AF37] -translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
            : "border-[#1E293B] hover:border-[#D4AF37]/50 hover:-translate-y-1 hover:shadow-[#D4AF37]/10"
            }`}>
            <span className={`font-marcellus text-[10px] md:text-xs leading-tight tracking-wide uppercase transition-all ${isActive ? "text-white" : "text-[#D4AF37]"
                }`}>
                {text}
            </span>
        </div>
    )
}
