"use client";

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap,
} from "motion/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface VelocityScrollProps {
    children: React.ReactNode;
    default_velocity?: number;
    className?: string;
}

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
    className?: string;
}

function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 30,
        stiffness: 200,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    /**
     * This is a magic number to make the animation smooth.
     * We use a range of 25% because we have 4 copies of the content.
     */
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This logic allows the scroll direction to change the direction of the marquee.
         * If you want to disable this behavior, you can remove the directionFactor logic.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax min-w-full overflow-hidden whitespace-nowrap">
            <motion.div
                className={cn("flex flex-nowrap", className)}
                style={{ x, willChange: "transform" }}
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export function VelocityScroll({
    children,
    default_velocity = 5,
    className,
}: VelocityScrollProps) {
    return (
        <section className="relative w-full">
            <ParallaxText baseVelocity={default_velocity} className={className}>
                {children}
            </ParallaxText>
        </section>
    );
}
