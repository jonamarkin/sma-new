import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function JournalPage() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="bg-secondary text-parchment py-24 border-b-4 border-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-primary font-serif italic text-lg mb-4 block">The Academic Journal</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8 leading-tight">Scholarship in African Polyphony</h1>
                            <p className="font-serif text-gray-400 leading-relaxed text-lg mb-10 max-w-xl">
                                The authoritative publication for the peer-reviewed analysis of African choral composition, historical preservation, and performance practice.
                            </p>
                            <button className="bg-primary text-secondary font-bold px-8 py-4 uppercase tracking-widest text-xs hover:bg-accent-gold transition-colors flex items-center gap-2">
                                <span>Subscribe to Journal</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 -translate-x-4 translate-y-4"></div>
                            <div className="relative z-10 border border-primary/30 p-2 bg-secondary">
                                <img
                                    alt="Archival Research"
                                    className="w-full h-[400px] lg:h-[500px] object-cover opacity-80 sepia-[0.2]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZ5zSPLOQluYAd3f7YteH1g_TgtevgQhJyljcafaxhoC-7_kdH5rWoi0plLJMPhnTE8dO1M6_laUymElj4_OE69WDkzkfIiTSzHwJVIpZa_rYcudEDegFWYxnhsuabbXxlu_P5JAtmZucIO9OH7V5B20_uoACkrNHAzn7b3LT5WXecEEA3yChjm35c9D61AmRlDuPZdqm1RaCKmuO-XnUFTqjmvPJYOIOqFPWwHvRfsea8d7jAp7AFjT58WMGXnafVl4MsMu6yBmb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Issues & Articles */}
            <section className="py-24 bg-parchment min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Main Articles Column */}
                        <div className="lg:col-span-2 space-y-16">
                            <h2 className="text-3xl font-display text-secondary border-b-2 border-primary/30 pb-2 inline-block">Latest Peer-Reviewed Articles</h2>

                            <article className="group cursor-pointer">
                                <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3 block">Volume 24, Issue 2 • Analysis</span>
                                <h3 className="text-3xl font-display text-secondary group-hover:text-primary transition-colors leading-tight mb-4">Structural Elements of Zulu Choral Composition: A Diachronic Study</h3>
                                <p className="font-serif text-gray-600 leading-relaxed max-w-3xl mb-6">
                                    Examining the evolution of harmonic structures from traditional indigenous origins to modern academic orchestration. This paper presents a novel framework for understanding the interplay between isicathamiya rhythms and Western four-part harmony...
                                </p>
                                <div className="flex items-center gap-4 text-xs font-serif italic text-gray-500">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">person</span> Dr. S. Ndlovu</span>
                                    <span>•</span>
                                    <span>45 mins read</span>
                                </div>
                            </article>

                            <hr className="border-t border-primary/10" />

                            <article className="group cursor-pointer">
                                <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3 block">Volume 24, Issue 1 • Historical Review</span>
                                <h3 className="text-3xl font-display text-secondary group-hover:text-primary transition-colors leading-tight mb-4">The Missionary Presses: Printing Polyphony in West Africa</h3>
                                <p className="font-serif text-gray-600 leading-relaxed max-w-3xl mb-6">
                                    A comprehensive review of the earliest printed choral scores in the Gold Coast (Ghana) and Nigeria, detailing the mechanical constraints that influenced early African composition notation...
                                </p>
                                <div className="flex items-center gap-4 text-xs font-serif italic text-gray-500">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">person</span> Prof. E. Osei</span>
                                    <span>•</span>
                                    <span>32 mins read</span>
                                </div>
                            </article>

                            <hr className="border-t border-primary/10" />

                            <article className="group cursor-pointer">
                                <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3 block">Special Edition • Interview</span>
                                <h3 className="text-3xl font-display text-secondary group-hover:text-primary transition-colors leading-tight mb-4">Conversations on Authenticity: Preserving the Oral Tradition</h3>
                                <p className="font-serif text-gray-600 leading-relaxed max-w-3xl mb-6">
                                    An exclusive discussion with three leading choir directors on the ongoing debate surrounding the transcription of inherently oral traditions into standardized Western notation systems...
                                </p>
                                <div className="flex items-center gap-4 text-xs font-serif italic text-gray-500">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">person</span> J. Markin</span>
                                    <span>•</span>
                                    <span>20 mins read</span>
                                </div>
                            </article>

                            <button className="mt-8 border border-secondary text-secondary font-bold px-8 py-4 uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors block w-full text-center">
                                Load Historical Archive
                            </button>

                        </div>

                        {/* Sidebar Column */}
                        <aside className="space-y-12">
                            <div className="bg-white border border-primary/10 p-8 shadow-sm">
                                <h4 className="font-display text-xl text-secondary border-b border-primary/20 pb-4 mb-6">Current Issue Contents</h4>
                                <ul className="space-y-4 font-serif text-sm text-gray-600">
                                    <li className="flex gap-2 group cursor-pointer">
                                        <span className="text-primary font-bold">1</span>
                                        <span className="group-hover:text-primary transition-colors">Letter from the Editor: The Archival Imperative</span>
                                    </li>
                                    <li className="flex gap-2 group cursor-pointer">
                                        <span className="text-primary font-bold">2</span>
                                        <span className="group-hover:text-primary transition-colors">Structural Elements of Zulu Choral Composition</span>
                                    </li>
                                    <li className="flex gap-2 group cursor-pointer">
                                        <span className="text-primary font-bold">3</span>
                                        <span className="group-hover:text-primary transition-colors">New Discoveries in the Amu Archives</span>
                                    </li>
                                    <li className="flex gap-2 group cursor-pointer">
                                        <span className="text-primary font-bold">4</span>
                                        <span className="group-hover:text-primary transition-colors">Review: The Kenya Conservatoire Anthology</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-secondary p-8 border border-primary/20 text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">workspace_premium</span>
                                <h4 className="font-display text-xl text-white mb-4">Call for Papers</h4>
                                <p className="font-serif text-sm text-gray-400 mb-6 italic">We are currently accepting submissions for Volume 25 on the topic of "Digital Humanities in African Musicology."</p>
                                <button className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold bg-primary px-6 py-3 hover:bg-white transition-colors w-full">
                                    Submission Guidelines
                                </button>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
