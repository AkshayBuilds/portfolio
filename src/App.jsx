import React from 'react';
import { Toaster } from 'react-hot-toast';
import Cursor from './components/Cursor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-slate-50 selection:bg-violet-500/30">
      <Cursor />
      <Background />
      <Navbar />

      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Full width wrappers to constrain content centrally if needed, done within sections themselves */}
        <div className="w-full relative">
          <Hero />

          <div className="relative">
            {/* Soft decorative divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <About />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <Skills />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <Projects />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <Experience />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <Contact />
          </div>

        </div>
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-white/10 bg-black/40 backdrop-blur-md">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Akshay Chaudhary. Built with React & Tailwind CSS.
        </p>
      </footer>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)'
          }
        }}
      />
    </div>
  );
}

export default App;
