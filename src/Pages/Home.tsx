import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import AboutUsIntro from "../IntroPages/AboutUsIntro/AboutUsInto";
import ServicesIntro from "../IntroPages/ServiceIntro/ServiceIntro";
import ParallaxImage from "../components/ParallaxImage";
import RunningCards from "../components/RunningCards";

interface Props {
    onNavChange: (item: string) => void;
}


const Home: React.FC<Props> = ({ onNavChange }) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section
                className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-black text-white"
                style={{
                    backgroundImage:
                        "url('https://static.wixstatic.com/media/c837a6_738c2403369b4176a2410bd54462f1df~mv2.jpg/v1/fill/w_3456,h_2210,al_b,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_738c2403369b4176a2410bd54462f1df~mv2.jpg')",
                    backgroundPositionY: `${offset * 0.6}px`, // parallax effect
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60" />

                {/* Content */}
                <div className="relative text-center max-w-3xl px-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        IT & Business Consulting
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        Driving innovation through technology, strategy, and digital transformation
                    </motion.p>


                    <motion.button
                        className="border border-white px-6 py-3 text-lg hover:bg-white hover:text-black"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        onClick={() => {
                            onNavChange('Contact');
                        }}
                    >
                        CONNECT US
                    </motion.button>
                </div>
            </section>

            <AboutUsIntro onNavChange={onNavChange} />

            <ServicesIntro onNavChange={onNavChange} />

            <ParallaxImage
                image="https://static.wixstatic.com/media/c837a6_44e3014997b64b829ef10d8761ce79ee~mv2.jpg/v1/fill/w_1568,h_1600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_44e3014997b64b829ef10d8761ce79ee~mv2.jpg"
                text="We believe business must look beyond itself to serve communities and build lasting impact."
                author="Ratan Tata"
            />

            <RunningCards onNavChange={onNavChange} />

            <Contact />
        </>
    );
}

export default Home;