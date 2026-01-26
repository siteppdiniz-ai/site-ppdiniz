import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-6rem)] min-h-[600px] flex items-center overflow-hidden bg-[#0B1120]">
      <div className="container relative z-10 px-4 md:px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
          {/* Text Content - Compacted for Viewport Fit */}
          {/* Text Content with Vertical Divider */}
          <div className="flex gap-6 lg:gap-8 items-stretch">
            {/* Decorative Divider */}
            <div className="hidden lg:flex flex-col items-center pt-2">
              <div className="w-[1px] bg-[#D4AF37] h-[140px]" style={{ background: 'linear-gradient(to bottom, transparent, #D4AF37 10%, #D4AF37)' }} />
              <div className="w-2.5 h-2.5 bg-[#D4AF37] rotate-45 my-4 shrink-0" />
              <div className="w-[1px] bg-[#D4AF37] flex-1 min-h-[100px]" style={{ background: 'linear-gradient(to top, transparent, #D4AF37 10%, #D4AF37)' }} />
            </div>

            <div className="space-y-8 flex flex-col py-2">
              <div className="space-y-2">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-transparent bg-clip-text leading-[1.1]"
                  style={{ backgroundImage: 'linear-gradient(97.56deg, #FFDB99 -10.28%, #B78E45 84.61%)' }}
                >
                  <span className="block mb-1">EMPRESA QUE SE</span>
                  GOVERNA, DURA MAIS.
                </h1>
              </div>

              <div className="space-y-6 text-base lg:text-lg text-gray-300 font-tess leading-relaxed max-w-lg font-light">
                <p>
                  Com uma estrutura empresarial bem definida e um planejamento tributário e financeiro eficiente, o seu negócio cresce de forma segura e sustentável.
                </p>

                <p>
                  Na PP Diniz Consultoria, construímos as estruturas necessárias para enfrentar desafios e alavancar resultados.
                </p>

                <p>
                  Economia tributária, proteção patrimonial e análises precisas que trazem clareza sobre o valor do negócio.
                </p>
              </div>

              <div className="pt-2">
                <Button className="h-12 px-8 text-base font-medium bg-[#D4AF37] text-[#0B1120] hover:bg-[#b08d26] rounded-sm transition-all shadow-lg hover:shadow-[#D4AF37]/20 w-full sm:w-auto">
                  Entre em contato agora.
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image Composition - Scaled Down for Harmony */}
          <div className="relative h-full w-full flex items-center justify-center lg:justify-end max-h-[80vh]">

            {/* Outline Shape Layer (Back) */}
            <div className="absolute bottom-0 right-0 lg:right-[10px] w-[420px] h-[520px] z-0 opacity-100">
              <Image
                src="/assets/hero/shape-outline.png"
                alt="Background Outline"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Filled Shape Layer (Middle) */}
            <div className="absolute bottom-0 right-0 lg:right-[30px] w-[390px] h-[490px] z-0">
              <Image
                src="/assets/hero/shape-blue-filled.png"
                alt="Background Shape"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Portrait Layer (Front) */}
            <div className="relative z-10 w-full h-full max-w-[380px] flex items-end justify-center lg:justify-end">
              <Image
                src="/assets/hero/portrait.png"
                alt="Dr. Diniz"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating Logo Card (Card BG + Logo) */}
            <div className="absolute bottom-12 left-6 lg:left-12 z-20 w-[200px] h-[110px]">
              {/* Card Background Image */}
              <div className="absolute inset-0 w-full h-full drop-shadow-2xl">
                <Image
                  src="/assets/hero/card-bg.png"
                  alt="Card Background"
                  fill
                  className="object-contain opacity-90"
                />
              </div>

              {/* Logo Centered on Card */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/assets/hero/logo-gold.png"
                  alt="PP Diniz Logo"
                  width={120}
                  height={50}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
