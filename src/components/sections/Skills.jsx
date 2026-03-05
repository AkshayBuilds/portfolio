import { motion } from 'framer-motion';
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiHtml5,
    SiTailwindcss,
    SiBootstrap,
    SiGit,
    SiGithub,
} from 'react-icons/si';

const skills = [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', bg: 'hover:bg-green-500/10 hover:border-green-500/50' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', bg: 'hover:bg-gray-500/10 hover:border-gray-500/50' },
    { name: 'React.js', icon: SiReact, color: 'text-blue-400', bg: 'hover:bg-blue-400/10 hover:border-blue-400/50' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', bg: 'hover:bg-green-600/10 hover:border-green-600/50' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', bg: 'hover:bg-yellow-400/10 hover:border-yellow-400/50' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', bg: 'hover:bg-orange-500/10 hover:border-orange-500/50' },
    // { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', bg: 'hover:bg-blue-500/10 hover:border-blue-500/50' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400', bg: 'hover:bg-cyan-400/10 hover:border-cyan-400/50' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-blue-500', bg: 'hover:bg-blue-500/10 hover:border-blue-500/50' },
    { name: 'Git', icon: SiGit, color: 'text-green-600', bg: 'hover:bg-green-600/10 hover:border-green-600/50' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-300', bg: 'hover:bg-gray-500/10 hover:border-gray-500/50' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    },
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative z-10 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Skills</span>
                    </h2>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className={`glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 border border-white/5 ${skill.bg} cursor-pointer group`}
                        >
                            <skill.icon className={`w-12 h-12 ${skill.color} drop-shadow-lg group-hover:scale-110 transition-transform duration-300`} />
                            <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>

                            {/* Optional animated pseudo-progress bar underneath */}
                            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "80%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className={`h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
