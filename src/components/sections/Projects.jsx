import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'AuthFlow',
        description: 'A full-stack authentication system with secure login, signup, JWT authentication, protected routes, and email verification.',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1632&auto=format&fit=crop',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        github: 'https://github.com/AkshayBuilds/Auth-Frontend',
        live: 'https://auth-frontend-umber-theta.vercel.app/'
    },
    {
        title: 'Employee Management System',
        description: 'A web application to manage employees, including adding, updating, and deleting employee records with role-based access and a clean dashboard UI.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1632&auto=format&fit=crop',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
        github: 'https://github.com/AkshayBuilds/EMS-Employee-Management-System-',
        live: 'https://ems-eight-beige.vercel.app/'
    },
    {
        title: 'Sactch',
        description: 'A modern web application with responsive UI and smooth user experience, built using the MERN stack and optimized for performance.',
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1632&auto=format&fit=crop',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        github: 'https://github.com/AkshayBuilds/sactch',
        live: '#'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    },
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Projects</span>
                    </h2>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Hover overlay actions */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="clickable p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="clickable p-3 rounded-full bg-blue-500/80 hover:bg-blue-500 text-white transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col relative">
                                {/* Decorative glowing dot */}
                                <div className="absolute top-0 right-6 -translate-y-1/2 w-4 h-4 bg-violet-500 rounded-full blur-sm shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
