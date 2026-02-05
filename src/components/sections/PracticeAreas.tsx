import { Scale, Briefcase, Users, Gavel, ShieldCheck, FileText } from "lucide-react";

const areas = [
    {
        title: "Direito Civil",
        description: "Resolução de conflitos, contratos e responsabilidade civil.",
        icon: Scale,
    },
    {
        title: "Direito Trabalhista",
        description: "Consultoria preventiva e contenciosa para empresas e empregados.",
        icon: Briefcase,
    },
    {
        title: "Direito de Família",
        description: "Divórcios, inventários e planejamento sucessório.",
        icon: Users,
    },
    {
        title: "Direito Penal",
        description: "Defesa técnica especializada em processos criminais.",
        icon: Gavel,
    },
    {
        title: "Compliance",
        description: "Adequação de empresas às normas legais e regulamentares.",
        icon: ShieldCheck,
    },
    {
        title: "Direito Empresarial",
        description: "Assessoria jurídica para constituição e gestão de sociedades.",
        icon: FileText,
    },
];

export function PracticeAreas() {
    return (
        <section id="areas" className="py-24 bg-muted/40 relative">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-foreground">
                        Áreas de Atuação
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                    <p className="text-muted-foreground text-xl leading-relaxed">
                        Atuamos em diversas áreas do direito com uma equipe multidisciplinar pronta para atender suas necessidades com rigor técnico e eficiência.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-background/50 backdrop-blur-sm rounded-xl border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-md">
                                <area.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-normal mb-3 text-foreground group-hover:text-primary transition-colors">
                                {area.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
