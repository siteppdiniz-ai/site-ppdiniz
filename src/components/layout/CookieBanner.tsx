"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setTimeout(() => setIsVisible(true), 1000); // Delay for better UX
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom-5 fade-in duration-500">
            <div className="container max-w-5xl mx-auto bg-[#0F1522]/95 backdrop-blur-md border border-[#D4AF37]/20 rounded-lg shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex-1 space-y-2">
                    <h3 className="text-[#D4AF37] font-marcellus text-lg">Respeitamos sua privacidade</h3>
                    <p className="text-gray-300 font-tess text-sm font-light leading-relaxed">
                        Utilizamos cookies para melhorar sua experiência em nosso site e analisar nosso tráfego.
                        Ao clicar em "Aceitar", você concorda com nossa utilização de cookies.
                        Para saber mais, leia nossa <Link href="/politica-cookies" className="text-[#D4AF37] underline hover:text-white transition-colors">Política de Cookies</Link>.
                    </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-400 hover:text-white font-tess text-sm transition-colors py-2 px-4"
                    >
                        Recusar
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="bg-[#B78E45] hover:bg-[#D4AF37] text-[#0B1120] font-serif font-bold text-sm px-6 py-2.5 rounded-sm transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/20"
                    >
                        Aceitar Cookies
                    </button>
                </div>

            </div>
        </div>
    );
}
