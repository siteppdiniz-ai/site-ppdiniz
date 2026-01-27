import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#0B1120] text-gray-400 border-t border-[#D4AF37]/30">
            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

                    {/* Info & Socials */}
                    <div className="space-y-6">
                        <h3 className="text-[#D4AF37] font-marcellus text-xl md:text-2xl tracking-wide uppercase">
                            Informações + Redes Sociais
                        </h3>
                        <div className="space-y-3 font-tess text-base md:text-lg leading-relaxed">
                            <p className="text-white hover:text-[#D4AF37] transition-colors cursor-default">
                                (98) 9 8919-0712
                            </p>
                            <p className="max-w-xs">
                                Av. Daniel de la Touche, 987 - Cond: Res. Da Ilha, Sala 710, Torre Comercial 02 | Cohama, São Luís - MA, 65074-115
                            </p>
                            <div className="flex flex-col gap-1">
                                <a href="mailto:atendimento@ppdinizconsultoria.com.br" className="hover:text-[#D4AF37] transition-colors">atendimento@ppdinizconsultoria.com.br</a>
                                <a href="mailto:comercial@ppdinizconsultoria.com.br" className="hover:text-[#D4AF37] transition-colors">comercial@ppdinizconsultoria.com.br</a>
                                <a href="mailto:contato@ppdinizconsultoria.com.br" className="hover:text-[#D4AF37] transition-colors">contato@ppdinizconsultoria.com.br</a>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-[#D4AF37] font-marcellus text-xl md:text-2xl tracking-wide uppercase">
                            Serviços
                        </h3>
                        <ul className="space-y-2 font-tess text-base md:text-lg">
                            {services.map((item, idx) => (
                                <li key={idx}>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Latest News */}
                    <div className="space-y-6">
                        <h3 className="text-[#D4AF37] font-marcellus text-xl md:text-2xl tracking-wide uppercase">
                            Últimas Notícias
                        </h3>
                        <ul className="space-y-4 font-tess text-base md:text-lg">
                            {news.map((item, idx) => (
                                <li key={idx} className="leading-snug">
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6">
                <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-4 text-center">
                    <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm md:text-base opacity-80">
                        <span>&copy; {new Date().getFullYear()} PPDINIZ Consultoria</span>
                        <span className="hidden md:inline">|</span>
                        <span>todos os direitos reservados.</span>
                        <span className="mx-1">-</span>
                        <Link href="#" className="hover:text-[#D4AF37] underline underline-offset-4 decoration-[#D4AF37]/30">
                            Política de Privacidade
                        </Link>
                    </div>
                    <Link
                        href="https://contaplena.com.br"
                        target="_blank"
                        className="text-sm md:text-base font-medium hover:text-white transition-colors opacity-60"
                    >
                        By <span className="underline underline-offset-4 decoration-[#D4AF37]/50">Conta Plena</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

const services = [
    "Gestão e Controle Empresarial",
    "Análise de Precificação",
    "Estruturação Contábil",
    "Estruturação Tributária",
    "Estruturação Societária",
    "Gestão de Estoque"
]

const news = [
    "Período da Declaração do Imposto de Renda 2025",
    "Como a Reforma Tributária impacta as Holdings? O que você precisa saber",
    "Declaração de Criptomoedas no Imposto de Renda 2025: Tudo o que você precisa saber"
]
