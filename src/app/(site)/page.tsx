import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { WhoIsFor } from "@/components/sections/WhoIsFor";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Solutions />
      <WhoIsFor />

      {/* About Teaser Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Tradição e Modernidade na Advocacia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundado com o objetivo de oferecer soluções jurídicas personalizadas, o escritório PPdiniz alia o conhecimento técnico aprofundado com uma visão moderna do direito.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é defender os interesses de nossos clientes com ética, transparência e agilidade, buscando sempre a melhor estratégia para cada caso.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-secondary/5" />
              <span className="font-medium text-muted-foreground z-10">Imagem do Escritório / Equipe</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
