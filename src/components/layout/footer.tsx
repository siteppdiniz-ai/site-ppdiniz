import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground border-t border-border">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <span className="text-2xl font-serif font-bold text-foreground tracking-tight">
                            PPdiniz
                        </span>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Excelência jurídica e compromisso com a justiça. Atuamos com ética e dedicação para garantir os seus direitos.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Institucional</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
                            <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog Jurídico</Link></li>
                            <li><Link href="/contato" className="hover:text-primary transition-colors">Entre em Contato</Link></li>
                        </ul>
                    </div>

                    {/* Areas Column */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Áreas de Atuação</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Direito Civil</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Direito Trabalhista</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Direito Empresarial</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Direito de Família</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contato</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Rua Exemplo, 123, Centro</li>
                            <li>Cidade - Estado, CEP 00000-000</li>
                            <li className="pt-2">(11) 99999-9999</li>
                            <li>contato@ppdiniz.com.br</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-border/50">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
                    <p>&copy; {new Date().getFullYear()} PPdiniz Advocacia. Todos os direitos reservados.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-primary">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-primary">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
