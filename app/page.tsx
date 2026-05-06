import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        
        {/* Hero Section */}
        <header className="py-20 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-cyan-400 mb-4">
            Welcome to my digital space
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Jonathan Alveraldo.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
            Informatics Engineering student at Institut Teknologi Bandung. Bridging the gap between logic, data, and security.
          </p>
        </header>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* About Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-cyan-500"></span>
            Tentang Saya
          </h2>
          <div className="bg-white/[0.03] border border-white/10 backdrop-blur-lg rounded-2xl p-8 leading-relaxed text-lg hover:bg-white/[0.05] transition-colors duration-300">
            <p>
              Saya menaruh minat besar pada pengembangan perangkat lunak, eksplorasi data, dan tantangan keamanan siber melalui Capture The Flag (CTF). Di kampus, saya melayani sebagai Kepala Bidang Aspirasi HMIF, berupaya membangun lingkungan akademik yang suportif.
            </p>
            <p className="mt-4">
              Di luar layar terminal dan *debugging* kode, saya menikmati fotografi teknikal, membedah komposisi visual, dan sering menuangkan persilangan antara pemikiran filosofis dan informatika melalui tulisan-tulisan saya di Medium.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-purple-500"></span>
            Tech Stack & Keahlian
          </h2>
          <div className="flex flex-wrap gap-4">
            {['Python', 'C++', 'Java', 'Go', 'SQL', 'Data Science', 'Binary Exploitation / CTF', 'React & Next.js', 'Photography', 'Technical Writing'].map((skill) => (
              <span 
                key={skill} 
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects & Roles Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-cyan-500"></span>
            Eksplorasi & Peran
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="group bg-white/[0.03] border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgb(6,182,212,0.1)] transition-all duration-300">
              <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">Leadership</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Kepala Bidang Aspirasi HMIF</h3>
              <p className="text-slate-400">Menghimpun dan mengawal aspirasi mahasiswa untuk menciptakan ekosistem himpunan yang lebih inklusif dan solutif.</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/[0.03] border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(168,85,247,0.1)] transition-all duration-300">
              <div className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">Event Management</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Finale: Liminal 2026</h3>
              <p className="text-slate-400">Mengeksekusi rangkaian acara eksibisi dan pemutaran karya sesuai dengan standar Terms of Reference (TOR).</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/[0.03] border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgb(6,182,212,0.1)] transition-all duration-300">
              <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">Game Development</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Nimonspoli</h3>
              <p className="text-slate-400">Merancang sistem logika permainan yang kompleks dan mengimplementasikan mekanik interaktif untuk berbagai kartu kemampuan khusus.</p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white/[0.03] border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(168,85,247,0.1)] transition-all duration-300">
              <div className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-2">Academic Research</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Analisis Sistem Persamaan Linear</h3>
              <p className="text-slate-400">Memodelkan halpotipe genetik terkait meme "Pak, Mak, Mengapa Aku Berbeda?" menggunakan pendekatan komputasi aljabar linear.</p>
            </div>

          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Jonathan Alveraldo Bangun. Designed with elegance.</p>
      </footer>
    </div>
  );
}