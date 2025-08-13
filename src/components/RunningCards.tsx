import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Rocket, TrendingUp, LifeBuoy, Brain, Handshake } from "lucide-react";
import { Button } from "@mui/material";

interface Props {
    onNavChange: (item: string) => void;
}

const items = [
    { title: "SOLUTIONS", icon: <Lightbulb className="w-14 h-14 text-indigo-400 drop-shadow-xl" /> },
    { title: "SERVICES", icon: <Rocket className="w-14 h-14 text-pink-400 drop-shadow-xl" /> },
    { title: "SUCCESS", icon: <TrendingUp className="w-14 h-14 text-green-400 drop-shadow-xl" /> },
    { title: "SUPPORT", icon: <LifeBuoy className="w-14 h-14 text-cyan-400 drop-shadow-xl" /> },
    { title: "KNOWLEDGE", icon: <Brain className="w-14 h-14 text-yellow-400 drop-shadow-xl" /> },
    { title: "CUSTOMER", icon: <Handshake className="w-14 h-14 text-purple-400 drop-shadow-xl" /> },
];
export default function RunningCards(props: Props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[600px] bg-gradient-to-br from-gray-900 to-black text-white font-sans p-6">

            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center mb-8">

                {/* Left Side */}
                <div className="w-full md:w-1/2 md:pr-12 relative mb-8 md:mb-0 flex flex-col items-center text-center">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-3xl rounded-lg"></div>
                    <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 drop-shadow-lg">
                        OUR <br /> EXPERTISE
                    </h1>
                    <p className="relative mt-4 text-gray-300 text-base sm:text-lg">
                        Delivering cutting-edge solutions with unmatched service and support for our clients worldwide.
                    </p>
                </div>

                {/* Vertical Line */}
                <div className="hidden md:block w-px bg-gray-500/30 mx-6 h-[300px]"></div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -40, scale: 0.9 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg w-full max-w-[280px]"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                            >
                                {items[index].icon}
                            </motion.div>
                            <h2 className="mt-4 text-xl sm:text-2xl font-semibold tracking-wide">
                                {items[index].title}
                            </h2>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Center Button */}
            <Button
                variant="outlined"
                sx={{
                    color: 'white',
                    borderColor: 'white',
                    px: 4,
                    py: 1.5,
                    fontWeight: 500,
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        borderColor: 'white',
                    },
                }}
                onClick={() => {
                    window.scrollTo({ top: 0 });
                    props.onNavChange('Solutions')
                }}
            >
                OUR SOLUTIONS
            </Button>
        </div>
    );
}
