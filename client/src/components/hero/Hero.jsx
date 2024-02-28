import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Hero() {
    const heroTextRef = useRef();
    const {scrollYProgress} = useScroll({ target: heroTextRef, offset: ["start start", "end start"]});
    const yFirstText = useTransform(scrollYProgress, [0,1], ["0%", "250%"]);
    const ySecondText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);

    return (
        <div className="w-full h-screen min-h-[900px] bg-hero-background bg-cover bg-center bg-hero-background flex justify-center relative" ref={heroTextRef}>
            <div className="w-full h-screen min-h-[900px] bg-hero-background bg-cover bg-center bg-hero-background-layer absolute z-10"></div>
            <div className="text-white text-center mt-40">
                <motion.h1 className="text-6xl mb-10 lg:mb-16 lg:text-9xl" style={{ y: yFirstText }}>Quantelligen</motion.h1>
                <motion.p className="text-3xl lg:text-5xl" style={{ y: ySecondText }}>Próbafeladat - Star Wars</motion.p>
            </div>
        </div>
    )
}

export default Hero
