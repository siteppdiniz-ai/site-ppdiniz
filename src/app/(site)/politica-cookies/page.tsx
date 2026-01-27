
export default function CookiePolicyPage() {
    return (
        <main className="w-full bg-[#0B1120] min-h-screen py-24 md:py-32">
            <div className="container max-w-4xl px-4 md:px-6 mx-auto">

                <h1 className="text-3xl md:text-5xl font-marcellus text-[#D4AF37] mb-8 lg:mb-12 border-b border-[#D4AF37]/30 pb-6">
                    Política de Cookies
                </h1>

                <div className="prose prose-invert prose-gold max-w-none font-tess font-light text-gray-300 leading-relaxed">
                    <p className="text-lg">
                        Esta Política de Cookies explica o que são cookies, como a <strong>PP Diniz Consultoria</strong> os utiliza e como você pode gerenciar suas preferências.
                    </p>

                    <h3 className="text-[#B78E45] font-marcellus text-xl mt-8 mb-4">1. O que são Cookies?</h3>
                    <p>
                        Cookies são pequenos arquivos de texto salvos no seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles permitem que o site "lembre" de suas ações e preferências por um período de tempo.
                    </p>

                    <h3 className="text-[#B78E45] font-marcellus text-xl mt-8 mb-4">2. Como utilizamos os Cookies</h3>
                    <p>Utilizamos cookies para as seguintes finalidades:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#D4AF37]">
                        <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site, como navegação e acesso a áreas seguras.</li>
                        <li><strong>Cookies de Desempenho:</strong> Coletam informações anônimas sobre como os visitantes usam nosso site, nos ajudando a melhorar sua estrutura.</li>
                        <li><strong>Cookies Funcionais:</strong> Permitem que o site lembre de suas escolhas (como idioma ou região) para oferecer uma experiência personalizada.</li>
                    </ul>

                    <h3 className="text-[#B78E45] font-marcellus text-xl mt-8 mb-4">3. Gerenciamento de Cookies</h3>
                    <p>
                        Você pode controlar ou excluir cookies através das configurações do seu navegador. No entanto, desabilitar certos cookies pode afetar a funcionalidade deste site.
                    </p>

                    <p className="mt-8">
                        Ao continuar navegando em nosso site sem alterar suas configurações, você concorda com o uso de cookies conforme descrito nesta política.
                    </p>

                    <p className="mt-12 text-sm text-gray-500 pt-8 border-t border-gray-800">
                        Última atualização: 27 de Janeiro de 2026.
                    </p>
                </div>
            </div>
        </main>
    );
}
