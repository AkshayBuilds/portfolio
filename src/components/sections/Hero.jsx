import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto space-y-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-gray-300"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for new opportunities
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                    >
                        Hi, I'm <br className="md:hidden" />
                        <span className="text-gradient">Akshay Chaudhary</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
                    >
                        MERN Stack Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                    >
                        I build fast, scalable, and modern web applications with a focus on seamless user experiences and robust backend architecture.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="clickable group relative px-8 py-3 rounded-full font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all overflow-hidden flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                            <span className="relative z-10">View Projects</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                        </a>

                        <a
                            href="#contact"
                            className="clickable px-8 py-3 rounded-full font-medium text-white glass hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 w-full sm:w-auto text-center"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pt-12 flex items-center justify-center gap-6"
                    >
                        <a href="https://github.com/AkshayBuilds" target="_blank" rel="noopener noreferrer" className="clickable text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/akshay-web/" target="_blank" rel="noopener noreferrer" className="clickable text-gray-400 hover:text-[#0A66C2] transition-colors p-2 rounded-full hover:bg-white/5">
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:akshay.dev307@gmail.com" className="clickable text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-white/5">
                            <Mail className="w-6 h-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce gap-2"
            >
                <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
