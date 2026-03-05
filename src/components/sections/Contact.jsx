import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            'service_y051zbb', // Replace with your EmailJS Service ID
            'template_iyzv15z', // Replace with your EmailJS Template ID
            formRef.current,
            'WUgXkmnXyl4diCN_4' // Replace with your EmailJS Public Key
        )
            .then(() => {
                setIsSubmitting(false);
                setFormData({ name: '', email: '', message: '' });
                toast.success("Message sent successfully!");
            })
            .catch((error) => {
                setIsSubmitting(false);
                console.error("EmailJS Error:", error);
                toast.error("Failed to send message. Please try again later.");
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Touch</span>
                    </h2>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Feel free to reach out for collaborations, opportunities, or just to say hi! I'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full lg:w-1/3 flex flex-col gap-6"
                    >
                        <a href="mailto:akshay.dev307@gmail.com" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform border border-white/5 hover:border-blue-500/50 group">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Email Me</h4>
                                <p className="text-gray-400 text-sm">akshay.dev307@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/akshay-web/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform border border-white/5 hover:border-[#0A66C2]/50 group">
                            <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:scale-110 transition-transform">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">LinkedIn</h4>
                                <p className="text-gray-400 text-sm">Connect with me</p>
                            </div>
                        </a>

                        <a href="https://github.com/AkshayBuilds" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform border border-white/5 hover:border-white/30 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">GitHub</h4>
                                <p className="text-gray-400 text-sm">Check my repositories</p>
                            </div>
                        </a>

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="w-full lg:w-2/3 glass-card p-8 rounded-3xl border border-white/10"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-white placeholder-gray-500 resize-none"
                                    placeholder="Hey Akshay, I have a project in mind..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`clickable w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 group ${isSubmitting
                                    ? 'bg-gray-600 cursor-not-allowed hidden'
                                    : 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
