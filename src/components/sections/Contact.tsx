"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
    return (
        <section className="relative w-full h-auto min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-[#0B1120] py-12 md:py-12 overflow-hidden">
            {/* Top Gradient Separator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

            <div className="container max-w-7xl px-4 md:px-6 relative z-10">
                <ScrollReveal width="100%" direction="up" delay={0.2} className="relative bg-[#0F1522]/80 border border-[#D4AF37]/20 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row min-h-[450px] lg:min-h-[550px]">

                        {/* Left Side: Form */}
                        <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                            <h1 className="text-2xl md:text-3xl font-marcellus text-[#D4AF37] mb-6 lg:mb-8 tracking-wider uppercase">
                                Fale conosco
                            </h1>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-[10px] md:text-xs font-marcellus text-white/60 uppercase tracking-widest pl-1">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-[#0B1120] border border-[#1E293B] rounded-lg px-3 py-2 text-base text-white focus:border-[#D4AF37]/50 outline-none transition-colors font-tess"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-[10px] md:text-xs font-marcellus text-white/60 uppercase tracking-widest pl-1">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-[#0B1120] border border-[#1E293B] rounded-lg px-3 py-2 text-base text-white focus:border-[#D4AF37]/50 outline-none transition-colors font-tess"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="phone" className="text-[10px] md:text-xs font-marcellus text-white/60 uppercase tracking-widest pl-1">Telefone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-[#0B1120] border border-[#1E293B] rounded-lg px-3 py-2 text-base text-white focus:border-[#D4AF37]/50 outline-none transition-colors font-tess"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-[10px] md:text-xs font-marcellus text-white/60 uppercase tracking-widest pl-1">Assunto</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-[#0B1120] border border-[#1E293B] rounded-lg px-3 py-2 text-base text-white focus:border-[#D4AF37]/50 outline-none transition-colors font-tess"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-1.5">
                                    <label htmlFor="message" className="text-[10px] md:text-xs font-marcellus text-white/60 uppercase tracking-widest pl-1">Mensagem</label>
                                    <textarea
                                        id="message"
                                        rows={3}
                                        className="w-full bg-[#0B1120] border border-[#1E293B] rounded-lg px-3 py-2 text-base text-white focus:border-[#D4AF37]/50 outline-none transition-colors font-tess resize-none"
                                    ></textarea>
                                </div>

                                <div className="md:col-span-2 flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="px-10 py-2 border border-[#D4AF37] rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1120] transition-all duration-300 font-marcellus tracking-widest uppercase text-sm"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Side: Image */}
                        <div className="hidden md:block flex-1 relative min-h-full">
                            <Image
                                src="/assets/contact-image.png"
                                alt="Fale Conosco PPDiniz"
                                fill
                                className="object-cover opacity-70"
                            />
                            {/* Blueish Gradient Overlay */}
                            <div className="absolute inset-0 bg-[#0B1120]/30 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120] via-[#1E293B]/20 to-[#312E81]/30" />
                            {/* Seamless mix with left side */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1522] via-transparent to-transparent" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Bottom Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
        </section>
    );
}
