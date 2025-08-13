import { Eye, Target, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function InfoCard() {
    const items = [
        {
            title: "Our Mission",
            text: "To bridge the gap between potential and opportunity through innovative programs, expert guidance, and community support.",
            icon: <Target className="w-6 h-6 text-white" />,
            iconColor: "from-green-400 via-teal-400 to-green-500",
        },
        {
            title: "Our Vision",
            text: "To create an accessible and engaging platform where anyone, anywhere, can learn, grow, and transform their future.",
            icon: <Eye className="w-6 h-6 text-white" />,
            iconColor: "from-blue-400 via-cyan-400 to-blue-500",
        },
        {
            title: "Our Core Values",
            text: "Integrity, innovation, collaboration, and excellence form the foundation of everything we do, ensuring we always deliver value and impact.",
            icon: <Award className="w-6 h-6 text-white" />,
            iconColor: "from-yellow-400 via-orange-400 to-yellow-500",
        },
    ];

    return (
        <section className="my-10 py-20 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Timeline only visible on desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 animate-pulse"></div>

                {items.map((item, idx) => {
                    const isLeft = idx % 2 === 0;

                    return (
                        <motion.div
                            key={idx}
                            className={`mb-16 flex w-full items-center 
                                ${isLeft ? "md:justify-start" : "md:justify-end"} 
                                md:relative flex-col md:flex-row`}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Desktop timeline card */}
                            <div
                                className={`hidden md:block w-5/12 backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                                    ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
                            >
                                <h3 className="text-center text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-center text-gray-300 leading-relaxed">{item.text}</p>
                            </div>

                            {/* Desktop timeline icon */}
                            <div
                                className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-tr ${item.iconColor} flex items-center justify-center shadow-lg border-2 border-white/20`}
                            >
                                {item.icon}
                            </div>

                            {/* Mobile stacked card */}
                            <div className="md:hidden w-full text-center backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg border border-white/20 mb-6">
                                <div className={`mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-tr ${item.iconColor} flex items-center justify-center border-2 border-white/20`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.text}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
