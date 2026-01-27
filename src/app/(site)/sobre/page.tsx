import { AboutHistory } from "@/components/sections/AboutHistory";
import { AboutPhilosophy } from "@/components/sections/AboutPhilosophy";

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center">
            <AboutHistory />
            <AboutPhilosophy />
        </main>
    );
}
