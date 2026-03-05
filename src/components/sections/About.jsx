import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Me</span>
                    </h2>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white">Hey, I'm Akshay Chaudhary.</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I am a passionate <span className="text-gray-200 font-medium">MERN Stack Developer</span> who loves creating modern, beautiful, and performant web applications. With a strong foundation in both front-end and back-end development, I bridge the gap between design and functionality.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            My core philosophy lies in writing clean code, designing intuitive user experiences, and ensuring scalable architectures. Whether it's building interactive user interfaces with React or structuring complex databases with MongoDB, I bring ideas to life.
                        </p>

                        {/* <div className="flex flex-wrap gap-4 pt-4">
                            <div className="glass px-6 py-4 rounded-2xl flex flex-col items-center justify-center border border-white/5 hover:border-blue-500/50 transition-colors">
                                <span className="text-3xl font-bold text-gradient">2+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Years Exp.</span>
                            </div>
                            <div className="glass px-6 py-4 rounded-2xl flex flex-col items-center justify-center border border-white/5 hover:border-violet-500/50 transition-colors">
                                <span className="text-3xl font-bold text-gradient">20+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Projects</span>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* Visual/Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="relative"
                    >
                        {/* abstract shape / image container */}
                        <div className="aspect-square max-w-md mx-auto relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20 blur-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-3xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 opacity-50"></div>
                            <div className="absolute inset-0 glass-card rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                                {/* Replace this with an actual image if you have one, or keep the abstract styling placeholder */}
                                <div className="text-9xl font-bold text-white/5 tracking-tighter mix-blend-overlay user-select-none">
                                    MERN
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
