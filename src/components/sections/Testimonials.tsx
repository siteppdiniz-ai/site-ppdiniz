import Link from "next/link";

export function Testimonials() {
    return (
        <section className="relative w-full h-auto min-h-[700px] lg:h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-[#0B1120] overflow-hidden py-12 lg:py-0">

            {/* Container */}
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">

                {/* Title */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-marcellus bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent text-center tracking-wide mb-10 relative leading-tight pb-2">
                    DEPOIMENTOS<br />E CASES DE SUCESSO
                    {/* Decorative Underline / Mask */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[110%] min-w-[300px] h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                </h2>

                {/* Testimonial Card */}
                <div className="w-full max-w-5xl bg-[#0D1B2D] border border-[#1E293B] rounded-tl-[60px] rounded-br-[60px] p-6 md:p-10 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-10 relative shadow-2xl">

                    {/* Left Col: Person Info */}
                    <div className="flex-1 flex flex-col justify-center items-start border-r-0 md:border-r border-[#1E293B] pr-0 md:pr-10 md:pb-0 pb-6 border-b md:border-b-0">
                        <h3 className="text-[#D4AF37] font-marcellus text-2xl md:text-3xl mb-4">
                            JOSÉ AIRTON
                        </h3>
                        <p className="text-gray-300 font-tess text-base md:text-lg font-light leading-relaxed">
                            Sócio fundador do Grupo Nutrilar, composto por empresas dos segmentos: hotel, indústria, supermercado, posto de combustível, parque aquático, churrascaria, telecomunicação, farmácia e construtora. Um dos maiores empresários da cidade de Presidente Dutra - MA
                        </p>
                    </div>

                    {/* Right Col: Quote */}
                    <div className="flex-1 flex items-center justify-center pl-0 md:pl-4">
                        <p className="text-white font-tess text-lg md:text-xl font-light italic text-center leading-relaxed">
                            "No decorrer do desenvolvimento dos serviços da PPDiniz Consultoria, comecei a perceber as mudanças, transformações e melhoria. Estou satisfeito com a atual situação da minha empresa e com a troca de conhecimentos obtida."
                        </p>
                    </div>

                </div>

                {/* CTA Button */}
                <Link href="/contato">
                    <button className="mt-10 px-8 py-3 bg-[#B78E45] hover:bg-[#D4AF37] text-black font-serif font-bold text-base md:text-lg rounded-sm shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 uppercase tracking-wider">
                        Entre em contato agora.
                    </button>
                </Link>

            </div>

            {/* Bottom Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    )
}
