
export default function PrivacyPolicyPage() {
    return (
        <main className="w-full bg-[#0B1120] min-h-screen py-24 md:py-32">
            <div className="container max-w-4xl px-4 md:px-6 mx-auto">

                <h1 className="text-3xl md:text-5xl font-marcellus text-[#D4AF37] mb-8 lg:mb-12 border-b border-[#D4AF37]/30 pb-6">
                    Política de Privacidade
                </h1>

                <div className="prose prose-invert prose-gold max-w-none font-tess font-light text-gray-300 leading-relaxed">
                    <p className="text-lg">
                        A <strong>PP Diniz Consultoria</strong> valoriza a privacidade de seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.
                    </p>

                    <h3 className="text-[#B78E45] font-marcellus text-xl mt-8 mb-4">1. Coleta de Informações</h3>
                    <p>
                        Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone ao preencher nosso formulário de contato. Também podemos coletar dados técnicos automaticamente através de cookies e tecnologias similares para melhorar a performance do site.
                    </p>

                    <h3 className="text-[#B78E45] font-marcellus text-xl mt-8 mb-4">2. Uso das Informações</h3>
                    <p>
                        As informações coletadas são utilizadas para:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#D4AF37]">
                        <li>Responder às suas solicitações de contato e consultoria.</li>
                        <li>Melhorar a funcionalidade e o conteúdo do nosso site.</li>
                        <li>Enviar comunicações sobre nossos serviços (caso tenha optado por receber).</li>
                    </ul>

                    <h3 className="text-[#B78E45] font-marcellus text-xl mt-8 mb-4">3. Proteção de Dados</h3>
                    <p>
                        Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                    </p>

                    <h3 className="text-[#B78E45] font-marcellus text-xl mt-8 mb-4">4. Seus Direitos</h3>
                    <p>
                        Você possui o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais armazenados por nós. Para exercer esses direitos, entre em contato através de nossos canais oficiais.
                    </p>

                    <h3 className="text-[#B78E45] font-marcellus text-xl mt-8 mb-4">5. Alterações nesta Política</h3>
                    <p>
                        Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível nesta página, com a data da última atualização.
                    </p>

                    <p className="mt-12 text-sm text-gray-500 pt-8 border-t border-gray-800">
                        Última atualização: 27 de Janeiro de 2026.
                    </p>
                </div>
            </div>
        </main>
    );
}
