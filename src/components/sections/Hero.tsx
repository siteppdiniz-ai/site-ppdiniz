"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[calc(100vh-6rem)] flex items-start lg:items-center overflow-hidden bg-[#0B1120] py-0 lg:py-0">

      {/* =========================================
          MOBILE LAYOUT (< 1024px)
          ========================================= */}
      <div className="lg:hidden w-full flex flex-col relative z-10 pt-2 pb-12 overflow-x-hidden">

        {/* Top Section: Image + Title + CTA */}
        <div className="pl-4 pr-1 flex flex-row items-center gap-3 mb-4 w-full">

          {/* Unified Image Group - All elements scale together */}
          <div className="relative w-[38%] h-[210px] shrink-0 flex items-end justify-center -translate-x-2">
            {/* Single container for all elements - scales proportionally */}
            <div className="absolute inset-0 z-0">
              {/* 1. Outline Shape (Back) */}
              <div className="absolute bottom-0 right-[-20%] w-[95%] h-full opacity-100 mix-blend-normal">
                <Image
                  src="/assets/hero/shape-outline.png"
                  alt="Background Outline"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              {/* 2. Filled Shape (Middle) */}
              <div className="absolute bottom-0 right-[-15%] w-[90%] h-[92%] opacity-100">
                <Image
                  src="/assets/hero/shape-blue-filled.png"
                  alt="Background Shape"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* 3. Portrait Cutout (Front) - Same proportional size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-[75%] h-[85%] translate-x-5"
            >
              <Image
                src="/assets/hero/portrait.png"
                alt="Dr. Diniz"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>

          {/* Title + CTA Column */}
          {/* Shifted right with padding */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 z-20 flex flex-col items-start min-w-0 pl-4 pt-1"
          >
            <h1 className="font-serif leading-[1.15] tracking-wide w-full">
              {/* Unified Typography - Gold gradient text */}
              <span className="block font-normal mb-1.5 text-xl tracking-widest uppercase whitespace-nowrap bg-[linear-gradient(90deg,#715118_0%,#B78E45_50%,#FFDB99_100%)] bg-clip-text text-transparent">EMPRESA QUE</span>
              <span className="block font-normal text-xl mb-0.5 whitespace-nowrap bg-[linear-gradient(90deg,#715118_0%,#B78E45_50%,#FFDB99_100%)] bg-clip-text text-transparent">SE GOVERNA,</span>
              <span className="block font-normal text-xl whitespace-nowrap bg-[linear-gradient(90deg,#715118_0%,#B78E45_50%,#FFDB99_100%)] bg-clip-text text-transparent">DURA MAIS.</span>
            </h1>

            {/* CTA Button - Below text */}
            <div className="mt-4 w-full">
              <Link href="/contato" className="block w-full max-w-[130px]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative w-full h-12 bg-[#0F172A]/90 border border-blue-900/30 rounded-lg shadow-lg flex items-center justify-center overflow-hidden group hover:border-[#D4AF37]/50 transition-colors backdrop-blur-sm"
                >
                  <Image
                    src="/assets/hero/logo-gold.png"
                    alt="PP Diniz"
                    width={70}
                    height={22}
                    className="object-contain w-auto h-7 opacity-100"
                  />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Gold Divider Strip with gradient */}
        <div
          className="relative w-[110%] -ml-6 h-[8px] mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center mt-2"
          style={{ background: 'linear-gradient(90deg, #715118 0%, #B78E45 50%, #FFDB99 100%)' }}
        >
          <div className="container mx-auto px-6 relative h-full flex items-center">
            {/* The 'bar in the middle' effect - slightly lighter overlay */}
            <div className="w-[40%] h-[2px] bg-[#FFDB99] opacity-70 absolute left-6 top-1/2 -translate-y-1/2 rounded-full" />
          </div>

          {/* Right side decorative polygon - Gradient matching line continuation */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[30px] w-24 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #D2AE70 0%, #FFDB99 100%)',
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          />
        </div>

        {/* Text Content - More compact */}
        <div className="px-6 flex flex-row gap-3 relative">

          {/* Vertical Gold Line Decor - Adjusted height for more compact text */}
          <div className="w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent shrink-0 relative h-auto min-h-[150px] opacity-60">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D4AF37] rotate-45 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
          </div>

          {/* Paragraphs - Even smaller for better fit */}
          <div className="space-y-2 text-gray-300 font-tess text-[13px] font-light leading-relaxed text-left pb-8">
            <ScrollReveal direction="left" delay={0.6} width="100%" overflow="visible">
              <p>
                Com uma estrutura empresarial bem definida e um planejamento tributário e financeiro eficiente, o seu negócio cresce de forma segura e sustentável.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.7} width="100%" overflow="visible">
              <p>
                Na PP Diniz Consultoria, eu e minha equipe construímos com as médias empresas as estruturas necessárias para enfrentar desafios, melhorar a gestão e alavancar resultados.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.8} width="100%" overflow="visible">
              <p>
                A sua empresa vai conquistar mais economia tributária, proteção patrimonial, relatórios e análises precisas para a tomada de decisão, que trazem clareza sobre o valor do negócio e mostram o crescimento real.
              </p>
            </ScrollReveal>
          </div>
        </div>

      </div>


      {/* =========================================
          DESKTOP LAYOUT (>= 1024px)
          ========================================= */}
      <div className="hidden lg:block container relative z-10 px-4 md:px-6 lg:px-16 h-full py-4 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start lg:items-center h-full">
          {/* Text Content */}
          <div className="flex gap-8 items-stretch pt-0 lg:pt-0 relative z-10 -ml-8">
            {/* Decorative Divider */}
            <ScrollReveal
              direction="down"
              duration={1}
              delay={0.2}
              className="flex flex-col items-center self-stretch"
              innerClassName="flex flex-col items-center h-full"
              height="100%"
              overflow="visible"
            >
              <div className="w-[1px] bg-[#D4AF37] flex-1 min-h-[180px]" style={{ background: 'linear-gradient(to bottom, transparent, #D4AF37 10%, #D4AF37)' }} />
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#D4AF37] rotate-45 my-4 shrink-0" />
              <div className="w-[1px] bg-[#D4AF37] flex-1 min-h-[180px]" style={{ background: 'linear-gradient(to top, transparent, #D4AF37 10%, #D4AF37)' }} />
            </ScrollReveal>

            <div className="space-y-4 md:space-y-8 flex flex-col py-2">
              <div className="space-y-2">
                <ScrollReveal direction="left" delay={0.3}>
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-transparent bg-clip-text leading-[1.1]"
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
                  <Button className="h-12 px-5 text-base font-medium bg-[#B78E45] text-[#0B1120] hover:bg-[#D4AF37] rounded-sm transition-all shadow-lg hover:shadow-[#D4AF37]/20 w-full sm:w-auto">
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
              <div className="absolute inset-0 flex items-center justify-center px-10 py-10">
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
