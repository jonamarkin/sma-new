/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="h-12 w-12 rounded-sm bg-secondary flex items-center justify-center text-primary border border-primary/30">
                <img
                  alt="Sheet Music Africa Logo"
                  className="object-contain h-8 w-8 grayscale brightness-150"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADYRegv5_GJObcbB0bDNxDbCu2uQ_90IN9SzSIfLIJ0-Sk2cWRsbjEvLzBt9SnnIrkSZYbBGw47mnJV5hR_SiiL0PXxcG0sGHlZIuDMzEWeAx_1pkT4jEDrGItoI7GY8_s2ojyVTmjccSLlDaEKu1x3ds_2_MinawxZpxbDp15FYoTjII6KDYfSzq3MLiwdrY5qifA6XKWQP95OOS2PEUdz9xWh6-WCalJRKA72bfcTHe6Tlr8pA5Bi0Lf5L2VLcRi9wa_AWa5q6XN"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-[0.1em] text-secondary leading-none uppercase">
                  Sheet Music Africa
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold italic">
                  The Scholarly Archive
                </span>
              </div>
            </div>
            <div className="hidden lg:flex space-x-10 items-center">
              <a className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="#">Archive</a>
              <a className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="#">Composers</a>
              <a className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="#">Research</a>
              <a className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="#">Journal</a>
              <a className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="#">Collections</a>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button className="text-secondary hover:text-primary transition-colors relative">
                <span className="material-symbols-outlined">account_balance</span>
              </button>
              <div className="h-8 w-px bg-primary/20"></div>
              <button className="bg-secondary text-primary border border-primary/50 px-4 py-2 text-xs uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

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
            Comprehensive Archive of <br /><span className="italic font-serif text-primary">African Choral Scholarship</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-serif leading-relaxed opacity-90">
            A curated scholarly resource for conductors, educators, and researchers. Access historical manuscripts, critical editions, and biographical studies of African composers.
          </p>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-1 border border-primary/30 rounded-sm">
            <div className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-2xl">
              <div className="flex-grow flex items-center px-6 py-4">
                <span className="material-symbols-outlined text-primary mr-4">database</span>
                <input
                  className="w-full border-none focus:ring-0 text-secondary placeholder-gray-400 font-serif"
                  placeholder="Search archive by composer, opus, or region..."
                  type="text"
                />
              </div>
              <button className="bg-primary text-secondary font-bold px-10 py-4 hover:bg-accent-gold transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">search</span>
                <span className="uppercase tracking-widest text-sm">Query Archive</span>
              </button>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-primary/80 uppercase tracking-[0.2em] text-[11px] font-bold">
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">history_edu</span> 5,800+ Manuscripts</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">menu_book</span> 140 Academic Profiles</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">public</span> 22 Cultural Regions</span>
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
            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 border border-primary/20 mb-6">
                <img
                  alt="Historical Portrait"
                  className="w-full h-full object-cover sepia-[0.3] grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBezJT60NAT_mjiwGzTpOHGx_LBgoVieE2XzbTbBnKnrWjheMeRVAUiUe1veoAdEbB0VwM9c0caOqIoCoghrTKc3FmGitckhYQApSMplPOd-YcqRF47Pq1LPh3GH7L84ZD_pENpUQjdqJeACdYNO5s27NqKzW9QrDdpUqPT6oQi1Dss2hoXspy2qeUwNy7QcD7-n2ET2DqBFtKjwCQtraQHGgZ1pZ8_ZpHLuP0mfW9lIJJJ72i8ueyCbJdd_grdlQfrg3-NcYGDrngB"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2 block">1922 — 2018</span>
                <h3 className="text-2xl font-display text-secondary group-hover:text-primary transition-colors mb-2">Prof. Mzilikazi Khumalo</h3>
                <p className="font-serif text-sm text-gray-600 line-clamp-2 italic mb-4">A central figure in the development of South African art music, bridging traditional Zulu idioms with choral polyphony.</p>
                <div className="flex gap-4">
                  <a className="text-[11px] uppercase tracking-tighter font-bold text-secondary border border-secondary/20 px-3 py-1 hover:bg-secondary hover:text-white transition-colors" href="#">View Catalog</a>
                  <a className="text-[11px] uppercase tracking-tighter font-bold text-primary border border-primary/20 px-3 py-1 hover:bg-primary hover:text-secondary transition-colors" href="#">Biography</a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 border border-primary/20 mb-6">
                <img
                  alt="Composer Portrait"
                  className="w-full h-full object-cover sepia-[0.3] grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2-GrgUBLORjTwkBuy57bbs4yzVGF4Vs-SH7eoLciu9ZmuHDPtEyCy7pboEwltC1QqCR6XU-h0w_AeG_lC-INfbiddYz9OufL1dq5pcJzxeiKnn5JCISf9NN8EOGVhFkoxspbyV04scbda-YuHMxPLMRVP7l886tx6ZqxF87eyDjKNwHw1laNxqwyBbsja39zkZjW4j-XSWvoSAqCTFRoo6tjULI52ynk52LdHIAgwVzrYQRYsMgRILGQ4-bblb9kG1t1Vi5sngygG"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2 block">West African Renaissance</span>
                <h3 className="text-2xl font-display text-secondary group-hover:text-primary transition-colors mb-2">Ephraim Amu</h3>
                <p className="font-serif text-sm text-gray-600 line-clamp-2 italic mb-4">Pioneer of contemporary Ghanaian art music. His collections define the academic study of Akan harmonic structures.</p>
                <div className="flex gap-4">
                  <a className="text-[11px] uppercase tracking-tighter font-bold text-secondary border border-secondary/20 px-3 py-1 hover:bg-secondary hover:text-white transition-colors" href="#">View Catalog</a>
                  <a className="text-[11px] uppercase tracking-tighter font-bold text-primary border border-primary/20 px-3 py-1 hover:bg-primary hover:text-secondary transition-colors" href="#">Biography</a>
                </div>
              </div>
            </div>

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
          <div className="group bg-white border border-primary/10 p-4 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden border border-gray-200 mb-6">
              <img
                alt="Archival Score Shosholoza"
                className="w-full h-full object-cover grayscale brightness-110 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVaj5-BrwElpfZOzj_VR2BvdiID_vGawXD2sRC9ctHVGVZprm7IyRXmaLZr6Ph6eEGhjZX0cApBmn7VKF8GR6fiHervDPL2WCkXX-xs-AjSgX2DjOClb31-ogF5GdGwcauvpQySXJZSmUU7YK1_fYQCt3gwvvKLp6OyArIMlzrDa_MVnM2Ar1wzSnQQei6JCQoNUzPRuqYBCgkdW_APoRVk18gijvWiNVWur8CGI_gRUUgGSsJsAxFxg7-rrPgsWkg1FuYFjRlNtoL"
              />
              <div className="absolute inset-0 border-[12px] border-white/50 group-hover:border-transparent transition-all"></div>
              <span className="absolute top-2 left-2 bg-secondary text-primary text-[9px] font-bold px-2 py-1 uppercase tracking-widest">MS: 1042-S</span>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-xl text-secondary border-b border-primary/10 pb-2">Shosholoza (1940 Edition)</h3>
              <p className="text-xs font-serif text-gray-500 italic">Critical Arrangement by Khumalo</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-serif text-secondary">$12.50 <span className="text-[10px] text-gray-400 uppercase tracking-tighter">(Digital License)</span></span>
                <button className="text-primary hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">library_add</span>
                </button>
              </div>
            </div>
          </div>

          <div className="group bg-white border border-primary/10 p-4 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden border border-gray-200 mb-6">
              <img
                alt="Archival Score Baba Yetu"
                className="w-full h-full object-cover grayscale brightness-110 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvvKeTNKNG_fTzN_QCeoLz1iVAVhGWk8H0-Vu3Vq0kHQuRl5Lm-CGPQs7VKCH4v95gx8WiHLGVFy_ABKtrfeIYUvJ-QBlYxGvhqYp7dfmip_61DkACC9qYtFk6GpnO-O78mHrtBvu3SzPIVmGIsq-ID7hyGONxb10CBtSP30y4quPgVZN8QIkyFk2tYDkxZjAshD84nFcRbyI0l3XzOgMioOXUnihdfygQJ1F63KdypyeCAtNxRqnO01oEYpOC1KJomBgzZXQa2-OY"
              />
              <div className="absolute inset-0 border-[12px] border-white/50 group-hover:border-transparent transition-all"></div>
              <span className="absolute top-2 left-2 bg-secondary text-primary text-[9px] font-bold px-2 py-1 uppercase tracking-widest">MS: 2091-T</span>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-xl text-secondary border-b border-primary/10 pb-2">Baba Yetu: Swahili Liturgy</h3>
              <p className="text-xs font-serif text-gray-500 italic">Transcribed by Chris Kiagiri</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-serif text-secondary">$15.00 <span className="text-[10px] text-gray-400 uppercase tracking-tighter">(Scholarly Ed.)</span></span>
                <button className="text-primary hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">library_add</span>
                </button>
              </div>
            </div>
          </div>

          <div className="group bg-white border border-primary/10 p-4 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden border border-gray-200 mb-6">
              <img
                alt="Archival Score Indodana"
                className="w-full h-full object-cover grayscale brightness-110 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxN2geDnh9EYIo2sYfCiRxSw0tL2Cj_T_MK2mKbSKKP-PVP4Fx-zmWSavV32XNv9otcu2pQgL1r6hQuKt5hDClp2aWX338RgC7W_mucsh3dxWvSDBjc-fuIPCBPj2p1yK973aAhv0vGBXSKdVTMSJsBU0j_XGHaF6KdogvfXJRqzSDgM7OaX075k6jfHYeCfSd3eFLjsMhiC8Lr8IkDDhnM1ERMe9sJ1vRvgG6TNZkbU0p7gfdBJM4SGNnbDWNRWCubBp2e1jZfhBx"
              />
              <div className="absolute inset-0 border-[12px] border-white/50 group-hover:border-transparent transition-all"></div>
              <span className="absolute top-2 left-2 bg-secondary text-primary text-[9px] font-bold px-2 py-1 uppercase tracking-widest">MS: 3314-B</span>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-xl text-secondary border-b border-primary/10 pb-2">Indodana (Barrett Edit)</h3>
              <p className="text-xs font-serif text-gray-500 italic">Structural Choral Analysis Incl.</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-serif text-secondary">$14.99 <span className="text-[10px] text-gray-400 uppercase tracking-tighter">(Full Score)</span></span>
                <button className="text-primary hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">library_add</span>
                </button>
              </div>
            </div>
          </div>

          <div className="group bg-white border border-primary/10 p-4 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden border border-gray-200 mb-6">
              <img
                alt="Archival Score Alleluia"
                className="w-full h-full object-cover grayscale brightness-110 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmd6V0GP4UY36s8LkK5oF8wwSNfkSqJ0Vt-GjVasHGOo_4xp96-J7ia8mwrXRduxYUDA8VcuI3P4UVwImnK7Sfe76QOy69TkGTMjC4pnFDLGAj7Zh80pD9tTDZBExcmksCMSiZ6zx6GeHLbXwFkP99zuYkEpX82xi83juneGK-aYFl_m9AXqK-P-_MxOubosJPMuHekNEysdWwmabBJWfN8xQRZKE0GQMSVJ2XgoZsmezmLoxn3KuE4zG3BCdYtX08O36VdFIIjuJh"
              />
              <div className="absolute inset-0 border-[12px] border-white/50 group-hover:border-transparent transition-all"></div>
              <span className="absolute top-2 left-2 bg-secondary text-primary text-[9px] font-bold px-2 py-1 uppercase tracking-widest">MS: 8872-A</span>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-xl text-secondary border-b border-primary/10 pb-2">African Alleluia (Historical)</h3>
              <p className="text-xs font-serif text-gray-500 italic">Contemporary Choral Traditions</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-serif text-secondary">$10.00 <span className="text-[10px] text-gray-400 uppercase tracking-tighter">(Digital Copy)</span></span>
                <button className="text-primary hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">library_add</span>
                </button>
              </div>
            </div>
          </div>
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
                  className="w-full h-[600px] object-cover opacity-80 sepia-[0.2]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZ5zSPLOQluYAd3f7YteH1g_TgtevgQhJyljcafaxhoC-7_kdH5rWoi0plLJMPhnTE8dO1M6_laUymElj4_OE69WDkzkfIiTSzHwJVIpZa_rYcudEDegFWYxnhsuabbXxlu_P5JAtmZucIO9OH7V5B20_uoACkrNHAzn7b3LT5WXecEEA3yChjm35c9D61AmRlDuPZdqm1RaCKmuO-XnUFTqjmvPJYOIOqFPWwHvRfsea8d7jAp7AFjT58WMGXnafVl4MsMu6yBmb"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-secondary/90 backdrop-blur-md p-8 border border-primary/20">
                  <p className="font-serif italic text-lg leading-relaxed mb-4 text-primary">"The archive is not a static repository, but a living dialogue between the composer's intent and the researcher's discovery."</p>
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

      <footer className="bg-parchment pt-20 pb-10 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex flex-col gap-4 mb-8">
                <span className="font-display font-bold text-2xl text-secondary tracking-widest uppercase">Sheet Music Africa</span>
                <p className="text-sm font-serif text-gray-500 italic leading-relaxed">Dedicated to the academic preservation, research, and dissemination of African choral music heritage.</p>
              </div>
              <div className="flex space-x-6">
                <a className="text-primary hover:text-secondary transition-colors" href="#"><span className="material-symbols-outlined">menu_book</span></a>
                <a className="text-primary hover:text-secondary transition-colors" href="#"><span className="material-symbols-outlined">history</span></a>
                <a className="text-primary hover:text-secondary transition-colors" href="#"><span className="material-symbols-outlined">school</span></a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Research Archive</h4>
              <ul className="space-y-4 text-sm font-serif text-gray-500">
                <li><a className="hover:text-primary transition-colors" href="#">Manuscript Database</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Composer Catalogues</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Regional Studies</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Critical Editions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Institutional</h4>
              <ul className="space-y-4 text-sm font-serif text-gray-500">
                <li><a className="hover:text-primary transition-colors" href="#">University Partners</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Library Licensing</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Submit Research</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Grant Opportunities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Scholarly Legal</h4>
              <ul className="space-y-4 text-sm font-serif text-gray-500">
                <li><a className="hover:text-primary transition-colors" href="#">Copyright &amp; Fair Use</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacy &amp; Data</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Publication Terms</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact Archivist</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <p>© 2024 Sheet Music Africa Archive. All rights reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <span>In Association with The Ethnomusicology Society</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
