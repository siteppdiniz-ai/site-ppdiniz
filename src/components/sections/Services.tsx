"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function Services() {
    return (
        <section className="relative w-full h-auto min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-[#0B1120] py-12 lg:py-16 overflow-hidden">
            {/* Top Gradient Separator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

            <div className="container max-w-5xl px-4 md:px-6 relative z-10 flex flex-col items-start">

                {/* Header - Left Aligned - Full Width */}
                <ScrollReveal direction="up" className="text-left mb-6 md:mb-8 w-full">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-normal bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent leading-tight mb-3 uppercase tracking-wider">
                        Soluções estratégicas para empresas que querem governar e crescer.
                    </h1>
                    <p className="text-gray-400 font-tess text-sm md:text-base font-light leading-relaxed text-justify">
                        Uma empresa bem-sucedida precisa de planejamento, processos e controle. Nossos serviços garantem segurança fiscal, financeira e societária, permitindo que você tome decisões estratégicas sem riscos.
                    </p>
                </ScrollReveal>

                {/* Services Cards Container - Narrower Width, Centered */}
                <div className="flex flex-col gap-4 lg:gap-5 w-full max-w-3xl mx-auto">
                    {servicesData.map((service, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1} width="100%">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="relative bg-[#0F1522] border border-[#1E293B] rounded-xl p-5 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.4),0_4px_10px_rgba(0,0,0,0.3)] hover:border-[#D4AF37]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_6px_15px_rgba(212,175,55,0.1)] transition-all duration-300 group w-full"
                            >
                                <h2 className="text-lg md:text-xl font-marcellus text-[#D4AF37] mb-3 tracking-[0.2em] uppercase text-left">
                                    {service.title}
                                </h2>
                                <ul className="space-y-2 text-left">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 group/item">
                                            <div className="mt-1.5 w-1 h-1 rounded-full bg-[#D4AF37] group-hover/item:scale-125 transition-transform shrink-0" />
                                            <span className="text-gray-300 font-tess text-base md:text-lg font-light group-hover/item:text-white transition-colors leading-tight">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    );
}

const servicesData = [
    {
        title: "Planejamento Tributário",
        items: [
            "Redução legal da carga tributária",
            "Enquadramento no regime fiscal ideal",
            "Eliminação de impostos desnecessários"
        ]
    },
    {
        title: "Gestão Financeira",
        items: [
            "Controle de fluxo de caixa",
            "Estruturação de processos financeiros",
            "Análise estratégica para aumento de lucratividade"
        ]
    },
    {
        title: "Blindagem Patrimonial",
        items: [
            "Proteção do patrimônio empresarial e pessoal",
            "Estruturação de holdings e sucessão familiar",
            "Redução de riscos jurídicos"
        ]
    }
];
