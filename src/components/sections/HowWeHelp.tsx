import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HowWeHelp() {
    return (
        <section className="relative w-full h-auto min-h-[700px] lg:h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-[#0B1120] overflow-hidden py-12 lg:py-0">

            {/* Container */}
            <div className="container px-6 md:px-12 lg:px-[140px] relative z-10 flex flex-col items-center">

                {/* Title */}
                <ScrollReveal direction="down" duration={0.8}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent text-center tracking-wide mb-10 relative leading-tight pb-2">
                        NÓS PODEMOS TE AJUDAR!
                        {/* Decorative Underline / Mask */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[110%] min-w-[300px] h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                    </h2>
                </ScrollReveal>

                {/* Cards Grid - Vertical Stack */}
                <div className="flex flex-col gap-4 w-full max-w-4xl">
                    {cards.map((card, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.2} width="100%">
                            <div
                                className="relative bg-[#0F1522] border border-[#1E293B] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 hover:border-[#D4AF37] transition-all duration-300 group shadow-lg"
                            >
                                {/* Icon Container */}
                                <div className="shrink-0 relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col text-center md:text-left gap-2 relative flex-1">
                                    {/* Vertical Line for Desktop */}
                                    <div className="hidden md:block absolute left-[-1rem] top-1 bottom-1 w-[1px] bg-[#1E293B] group-hover:bg-[#D4AF37]/50 transition-colors" />

                                    <h3 className="text-[#D4AF37] font-serif font-normal text-lg md:text-xl tracking-wide">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-300 font-tess text-base md:text-lg font-light leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>

            {/* Bottom Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    )
}

const cards = [
    {
        icon: "/assets/icon-process.png",
        title: "CONSULTORIA COM EXPERIÊNCIA REAL",
        description: "Desde 1996 transformando a gestão financeira e tributária de empresas"
    },
    {
        icon: "/assets/icon-chat.png",
        title: "FOCO EM RESULTADOS PRÁTICOS",
        description: "Olhar focado em resultado, economia tributária com segurança jurídica e crescimento previsível"
    },
    {
        icon: "/assets/icon-chart.png",
        title: "METODOLOGIA EXCLUSIVA",
        description: "Diagnóstico completo e plano estratégico personalizado assinado por Pedro Paulo A. Diniz"
    }
]
