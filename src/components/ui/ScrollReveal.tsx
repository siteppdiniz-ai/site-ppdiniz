"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    overflow?: "hidden" | "visible";
    innerClassName?: string;
    height?: string;
}

export const ScrollReveal = ({
    children,
    width = "fit-content",
    className = "",
    delay = 0,
    direction = "up",
    distance = 30,
    duration = 0.5,
    threshold = 0.3,
    once = true,
    overflow = "hidden",
    innerClassName = "",
    height = "auto",
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const getHiddenVariant = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: distance };
            case "down":
                return { opacity: 0, y: -distance };
            case "left":
                return { opacity: 0, x: distance };
            case "right":
                return { opacity: 0, x: -distance };
            default:
                return { opacity: 0, y: distance };
        }
    };

    return (
        <div ref={ref} style={{ width, overflow, height }} className={className}>
            <motion.div
                className={innerClassName}
                variants={{
                    hidden: getHiddenVariant(),
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
