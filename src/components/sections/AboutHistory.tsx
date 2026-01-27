import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutHistory() {
    return (
        <section className="relative w-full min-h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] h-auto pt-8 md:pt-8 flex flex-col items-center bg-[#0B1120] overflow-hidden py-12 lg:py-0">

            {/* Container */}
            <div className="container max-w-3xl px-4 md:px-6 relative z-10 flex flex-col items-start h-full pb-8">

                {/* Title */}
                <ScrollReveal direction="down" duration={0.8}>
                    <h2 className="text-2xl md:text-4xl font-marcellus bg-[linear-gradient(112.83deg,#D5A756_3.2%,#695227_112.07%)] bg-clip-text text-transparent tracking-wide mb-6 relative leading-tight pb-2">
                        COMO NASCEU A PPDINIZ
                        {/* Decorative Underline / Mask */}
                        <div className="absolute left-0 -bottom-1 w-[80%] h-[2px] rounded-full bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-transparent opacity-80" />
                    </h2>
                </ScrollReveal>

                {/* Content */}
                <div className="space-y-3 md:space-y-4 font-tess text-sm md:text-base text-gray-300 font-light leading-relaxed text-left flex-1">
                    <ScrollReveal direction="left" delay={0.2}>
                        <p>
                            Pedro Paulo A. Diniz é contador, especialista em Gestão Financeira, Controladoria e Auditoria; Gestão Empresarial e Inovação. Atualmente mestrando em contabilidade e administração. Sua trajetória profissional começou em 1990, quando iniciou sua carreira na contabilidade. Em 1996, fundou a Revit, sua primeira empresa de assessoria contábil, que se consolidou como referência no setor.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.3}>
                        <p>
                            Em 2014, assumiu o cargo de Diretor Financeiro em uma Distribuidora de Alimentos no Nordeste, onde ampliou sua visão sobre gestão estratégica e consolidou ainda mais sua expertise no setor empresarial.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.4}>
                        <p>
                            Após cinco anos, decidiu empreender novamente, desta vez no ramo de consultoria empresarial. Em 2019, com a Revit já consolidada, fundou a PP Diniz Consultoria, enxergando uma grande oportunidade de contribuir com as empresas no processo de estruturar sua Gestão Financeira e Tributária, para crescerem com mais solidez e eficiência.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.5}>
                        <p>
                            Hoje, à frente da PP Diniz Consultoria, ele e sua equipe auxiliam empresas na superação de desafios e na conquista de resultados concretos, oferecendo soluções estratégicas para crescimento sustentável, redução de custos e tributário com segurança jurídica.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.6}>
                        <p className="border-l-2 border-[#D4AF37]/50 pl-6 text-white font-normal italic">
                            Se sua empresa enfrenta dificuldades como falta de organização financeira, carga tributária elevada ou desafios para crescer de forma estruturada, a PP Diniz Consultoria pode ajudar. Entre em contato e descubra como transformar sua gestão empresarial com estratégias eficientes e seguras.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.8} className="pt-6">
                        <Link href="/contato">
                            <button className="px-8 py-3 bg-[#B78E45] hover:bg-[#D4AF37] text-black font-serif font-bold text-base rounded-sm shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 uppercase tracking-widest">
                                Fale com um especialista
                            </button>
                        </Link>
                    </ScrollReveal>
                </div>

            </div>

            {/* Bottom Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    )
}
