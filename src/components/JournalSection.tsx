/* eslint-disable react/no-unescaped-entities */
export default function JournalSection() {
    return (
        <section className="w-full bg-sm-navy text-sm-cream py-24">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                    <h3 className="font-serif italic text-sm-gold text-xl mb-3">The Academic Journal</h3>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-12">Scholarship in African Polyphony</h2>

                    <div className="space-y-10">
                        {/* Article 1 */}
                        <article className="border-b border-sm-cream/10 pb-10">
                            <p className="text-xs tracking-widest text-sm-cream/50 mb-3 uppercase">Vol 14. Issue 2 — 12 Min Read</p>
                            <h4 className="font-serif text-2xl mb-3 hover:text-sm-gold transition-colors cursor-pointer">
                                Structural Elements of Zulu Choral Composition: A Diachronic Study
                            </h4>
                            <p className="text-sm-cream/70 text-sm mb-4 line-clamp-2">
                                Examining the evolution of harmonic syntax from traditional indigenous styles to modern academic orchestration...
                            </p>
                            <a href="#" className="text-xs font-bold tracking-widest border-b border-sm-gold pb-1 text-sm-gold hover:text-white transition-colors uppercase">
                                Read Abstract
                            </a>
                        </article>

                        {/* Article 2 */}
                        <article>
                            <p className="text-xs tracking-widest text-sm-cream/50 mb-3 uppercase">September — Audio Interview</p>
                            <h4 className="font-serif text-2xl mb-3 hover:text-sm-gold transition-colors cursor-pointer">
                                Oral Tradition as Musical Score: The Challenges of Modern Transcription
                            </h4>
                            <p className="text-sm-cream/70 text-sm mb-4 line-clamp-2">
                                A conversation with leading ethnomusicologists on the ethical and technical nuances of preserving unwritten melodies...
                            </p>
                            <a href="#" className="text-xs font-bold tracking-widest border-b border-sm-gold pb-1 text-sm-gold hover:text-white transition-colors uppercase">
                                Listen to Episode
                            </a>
                        </article>
                    </div>
                </div>

                {/* Right Content / Image Area */}
                <div className="relative h-full min-h-[500px] border border-sm-cream/10 p-4">
                    <div className="absolute inset-0 m-4 bg-[#111822] shadow-2xl overflow-hidden flex flex-col justify-end">
                        {/* Abstract Hand Placeholder image */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-gold/40 via-sm-navy to-black"></div>

                        <div className="relative z-10 p-8 md:p-12 mb-8 bg-gradient-to-t from-sm-navy/90 to-transparent">
                            <p className="font-serif text-xl md:text-2xl italic text-sm-gold leading-relaxed mb-4">
                                "The archive is not a static repository, but a living dialogue between the composer's intent and the researcher's discovery."
                            </p>
                            <p className="text-[0.6rem] tracking-[0.2em] uppercase font-bold text-white/50">
                                — Director of Research, SMA
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
