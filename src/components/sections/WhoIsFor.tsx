import { FileX, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhoIsFor() {
    return (
        <section className="relative w-full h-auto flex flex-col items-center pt-8 pb-16 md:pt-16 lg:pt-20 bg-[#0B1120] overflow-hidden lg:pb-16">

            {/* Container */}
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">

                {/* Title */}
                <ScrollReveal direction="down" duration={0.8}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-marcellus bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent text-center tracking-wide mb-8 md:mb-12 relative leading-tight px-4">
                        PARA QUEM É A PPDiniz
                        {/* Decorative Underline / Mask */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[110%] min-w-[300px] h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />
                    </h2>
                </ScrollReveal>

                {/* Subtitle / Banner */}
                <ScrollReveal direction="left" delay={0.2} width="100%">
                    <div className="relative mb-10 lg:mb-12 flex justify-center w-full">
                        <div className="relative inline-block">
                            {/* Ribbon Background Shape */}
                            <div className="absolute inset-0 bg-[#B78E45] rounded-tl-[40px] rounded-br-[40px] shadow-lg opacity-90" />
                            <div className="relative px-6 py-3 md:px-12 md:py-3">
                                <p className="text-[#0B1120] font-serif font-bold text-lg md:text-xl tracking-wide text-center leading-tight">
                                    Se você percebe que sua empresa...
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Cards Grid */}
                <div className="flex flex-wrap justify-center gap-4 max-w-6xl w-full">

                    {/* Top Row (3 items) */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 w-full">
                        {items.slice(0, 3).map((item, index) => (
                            <ScrollReveal key={index} direction="up" delay={0.3 + (index * 0.15)} width="fit-content">
                                <Card text={item.text} />
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Bottom Row (2 items) - Centered */}
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                        {items.slice(3, 5).map((item, index) => (
                            <ScrollReveal key={index + 3} direction="up" delay={0.75 + (index * 0.15)} width="fit-content">
                                <Card text={item.text} />
                            </ScrollReveal>
                        ))}
                    </div>

                </div>

            </div>

            {/* Bottom Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    )
}

function Card({ text }: { text: string }) {
    return (
        <div className="bg-[#B78E45] hover:bg-[#D4AF37] transition-colors duration-300 rounded-xl px-5 py-5 md:px-5 md:py-4 flex items-center gap-4 w-full md:w-[280px] lg:w-[310px] min-h-[100px] lg:min-h-[110px] shadow-lg group cursor-default border border-[#B78E45]">
            <div className="shrink-0 relative w-10 h-10 md:w-8 md:h-8">
                <Image
                    src="/assets/icon-message-x.png"
                    alt="Icon"
                    fill
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
            </div>
            <p className="text-[#0B1120] font-medium text-base md:text-sm lg:text-base leading-tight">
                {text}
            </p>
        </div>
    )
}

const items = [
    { text: "Fatura bem, mas o lucro e o saldo de caixa desaparece" },
    { text: "Fatura bem, mas paga impostos demais" },
    { text: "Tem processos financeiros desorganizados" },
    { text: "Não tem segurança jurídica e financeira" },
    { text: "Seu sistema (ERP) não entrega as informações necessárias e obrigatórias" },
]
