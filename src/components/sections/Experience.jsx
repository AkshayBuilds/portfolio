import { motion } from 'framer-motion';

const experiences = [
    {
        role: "React Developer Intern",
        company: "Pyonix Technology",
        duration: "2026",
        description: "Worked as a React Developer Intern where I developed responsive user interfaces, built reusable components, and improved frontend performance using modern React practices.",
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative z-10 bg-black/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Journey</span>
                    </h2>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)]"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`flex flex-col md:flex-row relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >

                                {/* Timeline Dot */}
                                <div className="absolute left-[-24px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-violet-400 border-4 border-slate-900 z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)] mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2"></div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 ml-8 md:ml-0 md:px-12 group">
                                    <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-violet-500/50 transition-colors duration-300 relative overflow-hidden text-left">

                                        {/* Decorative glow inside card */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <span className="inline-block text-violet-400 font-medium mb-2 opacity-80 backdrop-blur-sm bg-violet-500/10 px-3 py-1 rounded-full text-sm">
                                            {exp.duration}
                                        </span>

                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-gray-400 text-lg font-medium mb-4">{exp.company}</h4>

                                        <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 relative z-10">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
