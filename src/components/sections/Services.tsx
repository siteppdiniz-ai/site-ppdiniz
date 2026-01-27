"use client";

import { Check } from "lucide-react";

export function Services() {
    return (
        <section className="relative w-full min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-[#0B1120] py-12 lg:py-16 overflow-hidden">
            {/* Top Gradient Separator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

            <div className="container max-w-6xl px-4 md:px-6 relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-6 md:mb-8 max-w-4xl">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-marcellus font-normal bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent leading-tight mb-3 uppercase tracking-wider">
                        Soluções estratégicas para empresas que querem governar e crescer.
                    </h1>
                    <p className="text-gray-400 font-tess text-xs md:text-sm font-light leading-relaxed px-4 md:px-0 max-w-2xl mx-auto">
                        Uma empresa bem-sucedida precisa de planejamento, processos e controle. Nossos serviços garantem segurança fiscal, financeira e societária, permitindo que você tome decisões estratégicas sem riscos.
                    </p>
                </div>

                {/* Services Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 w-full max-w-6xl">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-[#0F1522] border border-[#1E293B] rounded-xl p-5 lg:p-6 shadow-lg hover:border-[#D4AF37]/40 hover:shadow-[#D4AF37]/5 transition-all duration-300 group flex flex-col h-full"
                        >
                            <h2 className="text-base md:text-lg font-marcellus text-[#D4AF37] mb-3 tracking-[0.2em] uppercase min-h-[2.5rem] flex items-center">
                                {service.title}
                            </h2>
                            <ul className="space-y-2">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/item">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-[#D4AF37] group-hover/item:scale-125 transition-transform shrink-0" />
                                        <span className="text-gray-300 font-tess text-sm md:text-base font-light group-hover/item:text-white transition-colors leading-tight">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
