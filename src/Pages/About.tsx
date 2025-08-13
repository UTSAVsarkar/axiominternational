import { Users, Eye, Target, Award } from "lucide-react"; // Modern icons

export default function About() {
    const items = [
        {
            title: "Who We Are",
            text: "We are a passionate team dedicated to delivering world-class learning experiences that empower individuals to achieve their goals.",
            icon: <Users className="w-7 h-7 text-white" />,
            iconColor: "from-purple-500 to-pink-500",
        },
        {
            title: "Our Vision",
            text: "To create an accessible and engaging platform where anyone, anywhere, can learn, grow, and transform their future.",
            icon: <Eye className="w-7 h-7 text-white" />,
            iconColor: "from-blue-500 to-cyan-500",
        },
        {
            title: "Our Mission",
            text: "Our mission is to bridge the gap between potential and opportunity through innovative programs, expert guidance, and community support.",
            icon: <Target className="w-7 h-7 text-white" />,
            iconColor: "from-green-500 to-teal-500",
        },
        {
            title: "Our Core Values",
            text: "Integrity, innovation, collaboration, and excellence form the foundation of everything we do, ensuring we always deliver value and impact.",
            icon: <Award className="w-7 h-7 text-white" />,
            iconColor: "from-yellow-500 to-orange-500",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
                    Why Enroll in Our Programs?
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition duration-300"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${item.iconColor} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {item.title}
                            </h3>

                            {/* Text */}
                            <p className="text-gray-300 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
