import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto rounded-xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                    <Image
                        className="object-cover object-center"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 list-disc space-y-3 text-gray-300 font-tess text-lg marker:text-[#D4AF37]">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal text-gray-300 font-tess text-lg marker:text-[#D4AF37]">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-3xl md:text-5xl py-10 font-marcellus text-[#D4AF37]">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-2xl md:text-4xl py-8 font-marcellus text-[#D4AF37] border-b border-[#D4AF37]/20 pb-4 mb-4">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-xl md:text-3xl py-6 font-marcellus text-white">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-lg md:text-2xl py-4 font-marcellus text-white">{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-[4px] border-[#D4AF37] pl-5 py-5 my-5 bg-[#D4AF37]/5 italic text-xl text-gray-300 font-tess rounded-r-lg">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className="text-lg text-gray-300 font-tess leading-relaxed mb-6 font-light">{children}</p>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-[#D4AF37] hover:decoration-white text-[#D4AF37] hover:text-white transition-colors"
                >
                    {children}
                </Link>
            );
        },
    },
};
