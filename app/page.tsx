"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add('scroll-smooth');
    
    // Default ke Dark Mode jika pengguna menyukainya di level OS
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

  // Daftar Tech Stack untuk efek Marquee
  const techStack = [
    "C", "C++", "Java", "Python", "Go", "TypeScript", "Next.js", "Tailwind CSS", 
    "Binary Exploitation", "Data Structures", "Automata Theory", "OSPF/BGP"
  ];

  // Data untuk Galeri Foto (Asumsi gambar ada di folder /public)
  const galleryImages = [
    { src: '/gambar1.jpg', alt: 'Technical Portrait', title: 'Technical Profile', subtitle: 'ISO 100 • f/2.8 • 1/250s', span: 'col-span-1 row-span-2' },
    { src: '/gambar2.jpg', alt: 'Abstract Reflection', title: 'REFLECTRUM', subtitle: 'Conceptual Art', span: 'col-span-1' },
    { src: '/gambar3.jpg', alt: 'Architecture Shot', title: 'Urban Geometry', subtitle: 'Liminal Space Structure', span: 'col-span-1' },
    { src: '/gambar4.jpg', alt: 'Liminal Space Concept', title: 'Conceptual: Liminal', subtitle: 'Exhibition Study', span: 'col-span-1' },
    { src: '/gambar5.jpg', alt: 'Night Photography', title: 'Midnight City', subtitle: 'ISO 6400 • f/1.4', span: 'col-span-1' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-800 dark:text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-zinc-900 dark:selection:bg-cyan-400/30 dark:selection:text-white transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Dot Pattern (Menambah tekstur/ramai tapi tetap subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

      {/* Subtle Premium Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent dark:from-cyan-500/10 dark:via-cyan-500/5 blur-[120px] pointer-events-none animate-pulse duration-[3000ms]" />

      {/* Minimalist Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-50/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-zinc-900 dark:text-white text-xl tracking-tighter hover:text-cyan-500 transition-colors cursor-pointer">
            JAB.
          </div>
          
          <div className="flex items-center gap-5 sm:gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#about" className="hidden sm:block hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="hidden sm:block hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#gallery" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hidden sm:block hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors ml-2 ring-1 ring-zinc-900/5 dark:ring-white/10"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative z-10 space-y-32">
        
        {/* Hero Section */}
        <section className="space-y-6 pt-10 relative">
          {/* Floating Badges */}
          <div className="flex gap-3 mb-6 animate-float">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold border border-cyan-500/20">
              Informatics Engineering @ ITB
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-semibold border border-zinc-300 dark:border-zinc-700 hidden sm:inline-block">
              Kabid Aspirasi HMIF
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-500 dark:from-white dark:via-zinc-300 dark:to-zinc-500">Software Engineer</span> <br className="hidden sm:block" />
            <span className="text-zinc-400 dark:text-zinc-500 font-medium">crafting robust logic.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I specialize in large-scale software engineering, system security, and data analysis, bridging technical complexity with clear, functional design.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-1 transition-all shadow-lg shadow-zinc-900/20 dark:shadow-white/10">
              Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/jonathanalveraldobangun/" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all">
              LinkedIn <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </section>

      </main>

      {/* Infinite Marquee Section (Full Width) */}
      <div className="relative w-full overflow-hidden py-4 border-y border-zinc-200 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/30 backdrop-blur-sm z-10">
        <div className="flex w-[200%] animate-marquee">
          {/* Loop array dua kali agar efek berjalan mulus tanpa terputus */}
          {[...techStack, ...techStack].map((skill, i) => (
            <div key={i} className="flex items-center justify-center w-max px-8">
              <span className="text-sm font-bold tracking-wider text-zinc-400 dark:text-zinc-600 uppercase">
                {skill}
              </span>
              <span className="mx-8 w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-24 relative z-10 space-y-32">
        {/* About Section */}
        <section id="about" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-white flex items-center gap-3 group">
            <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300"></span>
            About
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I’m Jonathan Alveraldo Bangun, a second-year student at ITB’s School of Electrical Engineering and Informatics - Computing. I’m deeply interested in the fields of energy computation.  {/*<i>debugging</i> tingkat lanjut menggunakan GDB serta eksploitasi <i>binary</i>. */}
            </p>
            <p>
              Beyond technology, I’m also interested in economics, math, biology, and physics.
            </p>
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="projects" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-white flex items-center gap-3 group">
            <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300"></span>
            Selected Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <a href="https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2024-2025-2/Makalah2025/Makalah-Matdis-2025-IF-ITB%20(120).pdf" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800/50 hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">Research Paper</div>
                <span className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
                Optimalisasi Penyandian Teks Latin
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                Studi kasus kompresi data pada teks Philosophiæ Naturalis Principia Mathematica menggunakan Algoritma Huffman.
              </p>
            </a>

            {/* Card 2 */}
            <a href="https://github.com/jonveral/Tubes2STIMA" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800/50 hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">Web Application</div>
                <span className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
                SehatSehatKuatKuat
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                Aplikasi penelusuran elemen HTML (DOM CSS Traversal) menggunakan algoritma BFS dan DFS.
              </p>
            </a>

            {/* Card 3 */}
            <a href="https://github.com/jonveral/Tubes1STIMA" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800/50 hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">Game AI / Java</div>
                <span className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
                Battlecode Scaffold
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                Implementasi strategi algoritma greedy pada bot (Soldier, Mopper, Splasher) untuk menentukan aksi terbaik.
              </p>
            </a>

            {/* Card 4 */}
            <div className="group block p-6 rounded-2xl bg-zinc-100/30 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/30 transition-all cursor-default">
              <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-2">C++ / OOP</div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
                Nimonspoli
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                Arsitektur game strategi dengan state management dinamis untuk mekanik kartu khusus.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section - Updated with Real Images */}
        <section id="gallery" className="space-y-8 scroll-mt-32 border-t border-zinc-200 dark:border-zinc-800/50 pt-16">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-white">Photography & Visuals</h2>
            <span className="text-sm text-zinc-500">Selected Frames</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`relative group rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 ${image.span || ''} ${image.span && image.span.includes('row-span-2') ? 'aspect-[3/4]' : 'aspect-square'}`}
              >
                {/* Gambar Asli - Gunakan format .jpg sesuai input */}
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Overlay Gradient saat Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                {/* Teks Deskripsi saat Hover */}
                <div className="absolute bottom-0 left-0 p-5 w-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 ease-in-out">
                  <div className="text-sm font-bold text-white tracking-tight">{image.title}</div>
                  <div className="text-xs text-zinc-300 font-mono mt-1">{image.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Writings Section */}
        <section id="writing" className="space-y-8 scroll-mt-32 border-t border-zinc-200 dark:border-zinc-800/50 pt-16">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-white">Writings</h2>
            <a href="https://medium.com/@jonveral" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline transition-all">
              View all on Medium ↗
            </a>
          </div>
          
          <div className="flex flex-col">
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
                className="group flex justify-between items-center py-5 border-b border-zinc-200 dark:border-zinc-800/50 hover:px-4 -mx-4 transition-all duration-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900/50"
              >
                <span className="font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{post.title}</span>
                <span className="text-sm font-mono text-zinc-400 dark:text-zinc-500">{post.date}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Minimalist Contact Section */}
        <section id="contact" className="space-y-8 scroll-mt-32 border-t border-zinc-200 dark:border-zinc-800/50 pt-16 relative">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed text-lg">
              Tertarik berkolaborasi dalam proyek perangkat lunak, bertukar wawasan tentang keamanan sistem, atau sekadar berdiskusi mengenai komposisi visual dan filosofi? Kotak masuk saya selalu terbuka.
            </p>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-3 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-white placeholder-zinc-400 transition-colors rounded-none peer"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 peer-focus:w-full"></div>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-3 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-white placeholder-zinc-400 transition-colors rounded-none peer"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 peer-focus:w-full"></div>
                </div>
              </div>
              <div className="relative group">
                <textarea 
                  placeholder="Your Message" 
                  rows={3}
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-3 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-white placeholder-zinc-400 transition-colors resize-none rounded-none peer"
                ></textarea>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 peer-focus:w-full"></div>
              </div>
              <div className="pt-4">
                <button className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-zinc-900 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95">
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