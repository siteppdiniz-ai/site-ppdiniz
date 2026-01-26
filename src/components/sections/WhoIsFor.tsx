import { FileX, AlertTriangle } from "lucide-react";
import Image from "next/image";

export function WhoIsFor() {
    return (
        <section className="relative w-full py-20 lg:py-32 flex flex-col items-center bg-[#0B1120] overflow-hidden">

            {/* Container */}
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">

                {/* Title */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-marcellus bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent text-center tracking-wide mb-12 relative leading-tight">
                    PARA QUEM É A PPDiniz
                    {/* Decorative Underline / Mask */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[110%] min-w-[300px] h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />
                </h2>

                {/* Subtitle / Banner */}
                <div className="relative mb-16 lg:mb-20">
                    {/* Ribbon Background Shape */}
                    <div className="absolute inset-0 bg-[#B78E45] rounded-tl-[40px] rounded-br-[40px] shadow-lg opacity-90" />
                    <div className="relative px-8 py-3 md:px-12 md:py-4">
                        <p className="text-[#0B1120] font-serif font-bold text-lg md:text-2xl tracking-wide text-center">
                            Se você percebe que sua empresa...
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full">

                    {/* Top Row (3 items) */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {items.slice(0, 3).map((item, index) => (
                            <Card key={index} text={item.text} />
                        ))}
                    </div>

                    {/* Bottom Row (2 items) - Centered */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {items.slice(3, 5).map((item, index) => (
                            <Card key={index + 3} text={item.text} />
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
        <div className="bg-[#B78E45] hover:bg-[#D4AF37] transition-colors duration-300 rounded-xl px-6 py-6 md:px-8 md:py-8 flex items-center gap-4 w-full md:w-[350px] min-h-[120px] shadow-lg group cursor-default border border-[#B78E45]">
            <div className="shrink-0 relative w-10 h-10 md:w-12 md:h-12">
                <Image
                    src="/assets/icon-message-x.png"
                    alt="Icon"
                    fill
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
            </div>
            <p className="text-[#0B1120] font-medium text-base md:text-lg leading-snug">
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
