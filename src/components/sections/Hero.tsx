"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[calc(100vh-6rem)] flex items-center overflow-hidden bg-[#0B1120] py-4 lg:py-0">
      <div className="container relative z-10 px-4 md:px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start lg:items-center h-full">
          {/* Text Content */}
          <div className="flex gap-4 md:gap-8 items-stretch pt-0 lg:pt-0 relative z-10">
            {/* Decorative Divider */}
            <ScrollReveal
              direction="down"
              duration={1}
              delay={0.2}
              className="flex flex-col items-center pt-2"
              innerClassName="flex flex-col items-center h-full"
              height="100%"
              overflow="visible"
            >
              <div className="w-[1px] bg-[#D4AF37] h-[100px] md:h-[140px]" style={{ background: 'linear-gradient(to bottom, transparent, #D4AF37 10%, #D4AF37)' }} />
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#D4AF37] rotate-45 my-4 shrink-0" />
              <div className="w-[1px] bg-[#D4AF37] flex-1 min-h-[150px] md:min-h-[200px]" style={{ background: 'linear-gradient(to top, transparent, #D4AF37 10%, #D4AF37)' }} />
            </ScrollReveal>

            <div className="space-y-4 md:space-y-8 flex flex-col py-2">
              <div className="space-y-2">
                <ScrollReveal direction="left" delay={0.3}>
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-transparent bg-clip-text leading-[1.1]"
                    style={{ backgroundImage: 'linear-gradient(97.56deg, #FFDB99 -10.28%, #B78E45 84.61%)' }}
                  >
                    <span className="block mb-1">EMPRESA QUE SE</span>
                    GOVERNA, DURA MAIS.
                  </h1>
                </ScrollReveal>
              </div>

              <div className="space-y-4 md:space-y-6 text-base lg:text-lg text-gray-300 font-tess leading-relaxed max-w-lg font-light">
                <ScrollReveal direction="left" delay={0.5}>
                  <p>
                    Com uma estrutura empresarial bem definida e um planejamento tributário e financeiro eficiente, o seu negócio cresce de forma segura e sustentável.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.7}>
                  <p>
                    Na PP Diniz Consultoria, construímos as estruturas necessárias para enfrentar desafios e alavancar resultados.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.9}>
                  <p>
                    Economia tributária, proteção patrimonial e análises precisas que trazem clareza sobre o valor do negócio.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="up" delay={1.1} className="pt-2">
                <Link href="/contato">
                  <Button className="h-12 px-8 text-base font-medium bg-[#D4AF37] text-[#0B1120] hover:bg-[#b08d26] rounded-sm transition-all shadow-lg hover:shadow-[#D4AF37]/20 w-full sm:w-auto">
                    Entre em contato agora.
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Hero Image Composition - Professional Overlap for Mobile */}
          <div className="absolute lg:relative bottom-0 right-0 w-full lg:w-auto h-[400px] md:h-[500px] lg:h-full lg:max-h-[80vh] z-0 opacity-40 lg:opacity-100 flex items-end justify-end pointer-events-none lg:pointer-events-auto">

            {/* Outline Shape Layer (Back) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute bottom-0 right-[-40px] lg:right-[10px] w-[300px] md:w-[400px] lg:w-[420px] h-[350px] md:h-[500px] lg:h-[520px] z-0 opacity-30 lg:opacity-100"
            >
              <Image
                src="/assets/hero/shape-outline.png"
                alt="Background Outline"
                fill
                className="object-contain object-bottom"
                priority
              />
            </motion.div>

            {/* Filled Shape Layer (Middle) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-0 right-[-20px] lg:right-[30px] w-[280px] md:w-[380px] lg:w-[390px] h-[330px] md:h-[480px] lg:h-[490px] z-0 opacity-20 lg:opacity-100"
            >
              <Image
                src="/assets/hero/shape-blue-filled.png"
                alt="Background Shape"
                fill
                className="object-contain object-bottom"
                priority
              />
            </motion.div>

            {/* Portrait Layer (Front) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="relative z-10 w-full h-full max-w-[300px] md:max-w-[400px] lg:max-w-[380px] flex items-end justify-end translate-x-8 lg:translate-x-0"
            >
              <Image
                src="/assets/hero/portrait.png"
                alt="Dr. Diniz"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating Logo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-8 lg:bottom-12 right-4 lg:right-auto lg:left-12 z-20 w-[110px] md:w-[180px] lg:w-[200px] h-[65px] md:h-[100px] lg:h-[110px]"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
