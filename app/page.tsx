"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Tambahkan smooth scrolling ke elemen html
    document.documentElement.classList.add('scroll-smooth');
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-800 dark:text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-500">
      
      {/* Subtle Premium Glow - Diperbesar sedikit agar lebih dramatis */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent dark:from-cyan-500/10 dark:via-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Minimalist Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-50/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-zinc-900 dark:text-white text-xl tracking-tighter hover:scale-105 transition-transform cursor-pointer">
            JAB.
          </div>
          
          <div className="flex items-center gap-5 sm:gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#about" className="hidden sm:block hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="hidden sm:block hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#gallery" className="hidden md:block hover:text-zinc-900 dark:hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hidden sm:block hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors ml-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative z-10 space-y-32">
        
        {/* Hero Section */}
        <section className="space-y-6 pt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400">Software Engineer</span> <br className="hidden sm:block" />
            <span className="text-zinc-400 dark:text-zinc-500 font-medium">crafting robust logic.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I'm an Informatics Engineering student at ITB. I specialize in large-scale software engineering, system security, and data analysis, bridging technical complexity with clear, functional design.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-0.5 transition-all shadow-lg shadow-zinc-900/20 dark:shadow-white/10">
              Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/jonathanalveraldobangun/" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all">
              LinkedIn <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
            About
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              Fokus utama saya terbagi antara rekayasa perangkat lunak dan keamanan sistem. Melalui kompetisi Capture The Flag (CTF), saya melatih insting untuk mengidentifikasi celah dan melakukan *debugging* tingkat lanjut menggunakan GDB serta eksploitasi *binary*.
            </p>
            <p>
              Di luar ranah teknis, saya mendalami fotografi teknikal dan menulis di Medium. Hal ini membantu saya menyeimbangkan logika komputasi murni dengan apresiasi terhadap komposisi visual, estetika ruang liminal, dan eksplorasi narasi filosofis.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            {['Python', 'C++', 'Java', 'Go', 'SQL', 'Data Science', 'Binary Exploitation', 'React'].map((skill) => (
              <span key={skill} className="px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/80 dark:border-zinc-700/50 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="projects" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-white">Selected Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2024-2025-2/Makalah2025/Makalah-Matdis-2025-IF-ITB%20(120).pdf" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-800/50 transition-all">
              <div className="text-xs font-medium text-zinc-500 mb-2">Research Paper</div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Optimalisasi Penyandian Teks Latin (Huffman)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                Studi kasus kompresi data pada teks Philosophiæ Naturalis Principia Mathematica.
              </p>
            </a>

            <a href="https://github.com/jonveral/Tubes2STIMA" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-800/50 transition-all">
              <div className="text-xs font-medium text-zinc-500 mb-2">Web Application</div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                SehatSehatKuatKuat
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                Aplikasi penelusuran elemen HTML berdasarkan CSS Selector menggunakan algoritma BFS dan DFS.
              </p>
            </a>

            <a href="https://github.com/jonveral/Tubes1STIMA" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-800/50 transition-all">
              <div className="text-xs font-medium text-zinc-500 mb-2">Game AI / Java</div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Battlecode 2025 Scaffold
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                Implementasi strategi algoritma greedy pada bot Battlecode untuk menentukan aksi terbaik.
              </p>
            </a>

            <div className="group block p-6 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-800/50 transition-all cursor-default">
              <div className="text-xs font-medium text-zinc-500 mb-2">C++ / OOP</div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Nimonspoli
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                Arsitektur game strategi dengan state management dinamis untuk mekanik kartu khusus.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-8 scroll-mt-32 border-t border-zinc-200 dark:border-zinc-800/50 pt-16">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-white">Photography & Visuals</h2>
            <span className="text-sm text-zinc-500">Selected Frames</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Gallery Item 1 (Portrait) */}
            <div className="col-span-1 row-span-2 relative group rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800/50 aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-400 dark:text-zinc-600 text-xs tracking-widest uppercase">Placeholder</span>
                {/* Ganti div ini dengan <img src="/foto1.jpg" alt="Photo" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" /> */}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-white text-xs font-medium">
                ISO 100 • f/2.8 • 1/250s
              </div>
            </div>

            {/* Gallery Item 2 (Square) */}
            <div className="relative group rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800/50 aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-400 dark:text-zinc-600 text-xs tracking-widest uppercase">Placeholder</span>
              </div>
            </div>

            {/* Gallery Item 3 (Square) */}
            <div className="relative group rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800/50 aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-400 dark:text-zinc-600 text-xs tracking-widest uppercase">Placeholder</span>
              </div>
            </div>

            {/* Gallery Item 4 (Landscape spanning 2 columns) */}
            <div className="col-span-2 relative group rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800/50 aspect-video md:aspect-[21/9]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-400 dark:text-zinc-600 text-xs tracking-widest uppercase">Liminal Space</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white text-xs font-medium">
                Project: Finale Liminal
              </div>
            </div>
          </div>
        </section>

        {/* Writings Section */}
        <section id="writing" className="space-y-8 scroll-mt-32 border-t border-zinc-200 dark:border-zinc-800/50 pt-16">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-white">Writings</h2>
            <a href="https://medium.com/@jonveral" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              View all on Medium ↗
            </a>
          </div>
          
          <div className="flex flex-col gap-1">
            {[
              { title: "STIMA#1: Pengantar Strategi Algoritma", date: "Informatika", url: "https://medium.com/@jonveral/stima-1-pengantar-strategi-algoritma-49dba44ea5cd" },
              { title: "Beyond Understanding", date: "Pemikiran", url: "https://medium.com/@jonveral/beyond-understanding-cfbdc3e16f17" },
              { title: "Jalan Menuju Arti", date: "Filosofi", url: "https://medium.com/@jonveral/jalan-menuju-arti-8f965f7ad213" },
              { title: "Sebelum Dua Puluh", date: "Refleksi", url: "https://medium.com/@jonveral/sebelum-dua-puluh-9baae35bb5b5" }
            ].map((post) => (
              <a 
                key={post.title} 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex justify-between items-center py-4 border-b border-zinc-100 dark:border-zinc-800/50 hover:px-4 -mx-4 transition-all duration-300 rounded-lg hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
              >
                <span className="font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{post.title}</span>
                <span className="text-sm text-zinc-400 dark:text-zinc-500">{post.date}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Minimalist Contact Section */}
        <section id="contact" className="space-y-8 scroll-mt-32 border-t border-zinc-200 dark:border-zinc-800/50 pt-16 relative">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Tertarik berkolaborasi dalam rekayasa perangkat lunak, keamanan sistem, atau sekadar bertukar pikiran mengenai komposisi visual dan filosofi? Kotak masuk saya selalu terbuka.
            </p>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-3 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-white placeholder-zinc-400 transition-colors rounded-none peer"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 peer-focus:w-full"></div>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-3 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-white placeholder-zinc-400 transition-colors rounded-none peer"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 peer-focus:w-full"></div>
                </div>
              </div>
              <div className="relative group">
                <textarea 
                  placeholder="Your Message" 
                  rows={3}
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-3 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-white placeholder-zinc-400 transition-colors resize-none rounded-none peer"
                ></textarea>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 peer-focus:w-full"></div>
              </div>
              <div className="pt-2">
                <button className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-10 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Jonathan Alveraldo Bangun.</p>
        <div className="flex gap-6">
          <a href="https://github.com/jonveral" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jonathanalveraldobangun/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="https://medium.com/@jonveral" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Medium</a>
        </div>
      </footer>
    </div>
  );
}