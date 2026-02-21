import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScoreCard from "@/components/shared/ScoreCard";
import ComposerCard from "@/components/shared/ComposerCard";
import { composers, scores } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative bg-secondary overflow-hidden py-24 border-b-4 border-primary">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            alt="Archival Music Manuscript"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaIMVWlVK1luxdNkkWNmE42hbaW2gt3whhUhrUZuj_CQed--iTdNNwa3_yDX2b8NfroRWSXpGaAoijccrrckzTCys6xz2beJgu_L2E-zL_0BmI58bviRGE_antk-RufNNXq6O98FBVTmUS1tIzmZQgLicNMwU7kPSYF1eig_o_YJMfgogKjrKbqfBvVWSAjDY8z5bNiBIrINVKbstgv86vB0r59tTb26etq8ILK_YlS4nG8VRZ3SUb0E7HXtnOymHrejRhRQQax_mi"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="text-primary font-serif italic text-lg mb-4 block tracking-wide">
            Preserving the Heritage of the Continent
          </span>
          <h1 className="text-4xl md:text-6xl text-white mb-8 font-display leading-tight">
            Comprehensive Archive of <br className="hidden md:block" /><span className="italic font-serif text-primary">African Choral Scholarship</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-serif leading-relaxed opacity-90">
            A curated scholarly resource for conductors, educators, and researchers. Access historical manuscripts, critical editions, and biographical studies of African composers.
          </p>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-1 border border-primary/30 rounded-sm">
            <div className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-2xl">
              <label className="flex-grow flex items-center px-6 cursor-text">
                <span className="material-symbols-outlined text-primary mr-4">database</span>
                <input
                  className="w-full py-4 bg-transparent border-none focus:outline-none focus:ring-0 text-secondary placeholder-gray-400 font-serif"
                  placeholder="Search archive by composer, opus, or region..."
                  type="text"
                />
              </label>
              <button className="bg-primary text-secondary font-bold px-10 py-4 hover:bg-accent-gold transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">search</span>
                <span className="uppercase tracking-widest text-sm">Query Archive</span>
              </button>
            </div>
          </div>
          <div className="mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-12 text-primary/80 uppercase tracking-[0.2em] text-[11px] font-bold">
            <span className="flex items-center justify-center gap-2"><span className="material-symbols-outlined text-lg">history_edu</span> 5,800+ Manuscripts</span>
            <span className="flex items-center justify-center gap-2"><span className="material-symbols-outlined text-lg">menu_book</span> 140 Academic Profiles</span>
            <span className="flex items-center justify-center gap-2"><span className="material-symbols-outlined text-lg">public</span> 22 Cultural Regions</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-parchment border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display text-secondary mb-4">Composer Spotlight &amp; Historical Index</h2>
              <p className="font-serif text-gray-600 leading-relaxed italic">Biographical records and catalog raisonné of the continent's most significant choral orchestrators.</p>
            </div>
            <a className="text-primary hover:text-secondary font-serif text-sm uppercase tracking-widest border-b border-primary pb-1 transition-all" href="#">Complete Index A-Z</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {composers.slice(0, 2).map((composer) => (
              <ComposerCard key={composer.id} {...composer} />
            ))}

            <div className="bg-white/40 p-8 border border-primary/10 flex flex-col">
              <h4 className="text-lg font-display text-secondary border-b border-primary/20 pb-4 mb-4">Archive Highlights</h4>
              <div className="flex-grow space-y-2">
                <div className="library-index-item flex justify-between items-center group">
                  <div>
                    <p className="font-display text-secondary group-hover:text-primary transition-colors">Samuel Coleridge-Taylor</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Choral - 1875-1912</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </div>
                <div className="library-index-item flex justify-between items-center group">
                  <div>
                    <p className="font-display text-secondary group-hover:text-primary transition-colors">Fela Sowande</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Orchestral - 1905-1987</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </div>
                <div className="library-index-item flex justify-between items-center group">
                  <div>
                    <p className="font-display text-secondary group-hover:text-primary transition-colors">T.K.E. Phillips</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Sacred Choral - 1884-1969</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </div>
                <div className="library-index-item flex justify-between items-center group">
                  <div>
                    <p className="font-display text-secondary group-hover:text-primary transition-colors">Lazarus Ekwueme</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Compositional Theory</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </div>
              </div>
              <button className="mt-6 w-full py-3 border border-secondary text-secondary uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-secondary hover:text-white transition-all">
                Access Research Portal
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-secondary mb-4 italic">Primary Source Documents</h2>
          <div className="h-0.5 w-24 bg-primary mx-auto"></div>
          <p className="mt-6 font-serif text-gray-600 max-w-2xl mx-auto">Authentic digital reproductions of original scores, annotated editions, and archival discoveries.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {scores.slice(0, 4).map((score) => (
            <ScoreCard key={score.id} {...score} />
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary text-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-serif italic text-lg mb-4 block">The Academic Journal</span>
              <h2 className="text-4xl md:text-5xl font-display mb-8">Scholarship in African Polyphony</h2>
              <div className="space-y-10">
                <article className="group">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary/70 font-bold mb-2 block">Volume 24, Issue 2 • Peer Reviewed</span>
                  <h3 className="text-2xl font-display group-hover:text-primary transition-colors cursor-pointer leading-tight">Structural Elements of Zulu Choral Composition: A Diachronic Study</h3>
                  <p className="mt-4 font-serif text-gray-400 leading-relaxed text-sm">Examining the evolution of harmonic structures from traditional indigenous origins to modern academic orchestration...</p>
                  <a className="inline-block mt-4 text-xs font-bold uppercase tracking-widest border-b border-primary/40 pb-1 group-hover:border-primary transition-all" href="#">Read Full Paper</a>
                </article>
                <article className="group">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary/70 font-bold mb-2 block">Interviews • Archival Record</span>
                  <h3 className="text-2xl font-display group-hover:text-primary transition-colors cursor-pointer leading-tight">Oral Tradition as Musical Score: The Challenges of Modern Transcription</h3>
                  <p className="mt-4 font-serif text-gray-400 leading-relaxed text-sm">A conversation with lead ethnomusicologists on the ethical and technical nuances of preserving unwritten melodies...</p>
                  <a className="inline-block mt-4 text-xs font-bold uppercase tracking-widest border-b border-primary/40 pb-1 group-hover:border-primary transition-all" href="#">Access Interview</a>
                </article>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/20 -z-0"></div>
              <div className="relative z-10 border border-primary/30 p-2">
                <img
                  alt="Archival Research"
                  className="w-full h-[400px] lg:h-[600px] object-cover opacity-80 sepia-[0.2]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZ5zSPLOQluYAd3f7YteH1g_TgtevgQhJyljcafaxhoC-7_kdH5rWoi0plLJMPhnTE8dO1M6_laUymElj4_OE69WDkzkfIiTSzHwJVIpZa_rYcudEDegFWYxnhsuabbXxlu_P5JAtmZucIO9OH7V5B20_uoACkrNHAzn7b3LT5WXecEEA3yChjm35c9D61AmRlDuPZdqm1RaCKmuO-XnUFTqjmvPJYOIOqFPWwHvRfsea8d7jAp7AFjT58WMGXnafVl4MsMu6yBmb"
                />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-secondary/90 backdrop-blur-md p-6 md:p-8 border border-primary/20">
                  <p className="font-serif italic text-base md:text-lg leading-relaxed mb-4 text-primary">"The archive is not a static repository, but a living dialogue between the composer's intent and the researcher's discovery."</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold">— Director of Scholarly Resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display text-secondary">Academic Symposia &amp; Performances</h2>
            <div className="h-0.5 w-16 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-primary/10 hover:border-primary/40 transition-all p-8 flex flex-col items-center text-center">
              <span className="text-primary font-serif text-4xl mb-4 italic">12</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">November • Cape Town</span>
              <h3 className="font-display text-xl text-secondary mb-4">Historical Performance Practice Lecture</h3>
              <p className="font-serif text-sm text-gray-600 mb-8 leading-relaxed">A workshop focused on the authentic vocal techniques of mid-20th century choral masters.</p>
              <button className="mt-auto py-2 px-6 border border-secondary/20 text-[11px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">Registration</button>
            </div>

            <div className="bg-white border border-primary/10 hover:border-primary/40 transition-all p-8 flex flex-col items-center text-center">
              <span className="text-primary font-serif text-4xl mb-4 italic">05</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">December • Nairobi</span>
              <h3 className="font-display text-xl text-secondary mb-4">East Africa Choral Preservation Summit</h3>
              <p className="font-serif text-sm text-gray-600 mb-8 leading-relaxed">Gathering scholars to discuss the digitization of regional manuscript repositories.</p>
              <button className="mt-auto py-2 px-6 border border-secondary/20 text-[11px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">Registration</button>
            </div>

            <div className="bg-white border border-primary/10 hover:border-primary/40 transition-all p-8 flex flex-col items-center text-center">
              <span className="text-primary font-serif text-4xl mb-4 italic">18</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">December • Accra</span>
              <h3 className="font-display text-xl text-secondary mb-4">Amu Legacy Concert &amp; Critical Lecture</h3>
              <p className="font-serif text-sm text-gray-600 mb-8 leading-relaxed">Evening of performance paired with critical analysis of Ephraim Amu's scores.</p>
              <button className="mt-auto py-2 px-6 border border-secondary/20 text-[11px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">Registration</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            alt="Background Pattern"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGUzSLS4RcLaFqbw0abPAgQUdnLCeItWvSDElnOfMNsDkkcsk_IATm5fiK1KkIx0fW1sJynhZZqHYaaWOePfBjJcRY6XL4VVmdXgPXzwQjWh0uxDh1cV3-rxsV_uPvXhMou1Ih2ebq-UmemkKAF87Zv-OYCuOxSC7I1QAxeL1DK_wAaC_20b5d2CS_GsOmCpyXM0xiAVzqEQkj6cHXdWoAWQQgkV6QrpeI3mawxyKY_ufWajPzoOeHxa_T7mgT-4D07fSb1cixXah"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">mark_as_unread</span>
          <h2 className="font-display text-4xl text-white mb-6">Scholarly Communications</h2>
          <p className="text-gray-400 mb-12 text-lg font-serif">Subscribe to receive institutional bulletins, calls for papers, and notifications of new archival acquisitions.</p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto border border-primary/30 p-1">
            <input
              className="flex-grow px-6 py-4 bg-white/5 border-none text-white placeholder-gray-500 font-serif focus:ring-0"
              placeholder="Institutional or academic email..."
              type="email"
            />
            <button className="px-10 py-4 bg-primary text-secondary font-bold uppercase tracking-widest text-sm hover:bg-accent-gold transition-all" type="button">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
