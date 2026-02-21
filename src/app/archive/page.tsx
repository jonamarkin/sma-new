import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScoreCard from "@/components/shared/ScoreCard";

import { scores } from "@/lib/data";

export default function ArchivePage() {
    return (
        <>
            <Header />

            {/* Search Header */}
            <section className="bg-secondary py-16 border-b border-primary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-display text-white mb-6">Manuscript Database</h1>
                    <p className="font-serif text-primary italic text-lg mb-10 max-w-2xl mx-auto">
                        Search our comprehensive collection of digitized scores, field recordings, and critical editions.
                    </p>

                    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-1 border border-primary/30 rounded-sm">
                        <div className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-2xl">
                            <label className="flex-grow flex items-center px-6 cursor-text">
                                <span className="material-symbols-outlined text-primary mr-4">database</span>
                                <input
                                    className="w-full py-4 bg-transparent border-none focus:outline-none focus:ring-0 text-secondary placeholder-gray-400 font-serif"
                                    placeholder="Search by composer, instrumentation, or cultural region..."
                                    type="text"
                                />
                            </label>
                            <button className="bg-primary text-secondary font-bold px-10 py-4 hover:bg-accent-gold transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">search</span>
                                <span className="uppercase tracking-widest text-sm">Query</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area: Filters + Grid */}
            <section className="py-16 bg-parchment min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar Filters */}
                        <aside className="w-full lg:w-64 flex-shrink-0">
                            <div className="sticky top-28 bg-white border border-primary/10 p-6 shadow-sm">
                                <h2 className="font-display text-xl text-secondary border-b border-primary/20 pb-4 mb-6">Filter Archive</h2>

                                <div className="mb-8">
                                    <h3 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Cultural Region</h3>
                                    <ul className="space-y-3 font-serif text-sm text-gray-600">
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> West Africa (42)</li>
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> Southern Africa (89)</li>
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> East Africa (15)</li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Voicing</h3>
                                    <ul className="space-y-3 font-serif text-sm text-gray-600">
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> SATB (112)</li>
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> TTBB (45)</li>
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> SSAA (30)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Era</h3>
                                    <ul className="space-y-3 font-serif text-sm text-gray-600">
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> Contemporary</li>
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> Mid-Century</li>
                                        <li className="flex items-center gap-3"><input type="checkbox" className="accent-primary" /> Traditional Origins</li>
                                    </ul>
                                </div>

                                <button className="w-full mt-8 py-2 border border-secondary text-secondary uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-secondary hover:text-white transition-all">
                                    Apply Filters
                                </button>
                            </div>
                        </aside>

                        {/* Score Grid */}
                        <main className="flex-grow">
                            <div className="flex justify-between items-end mb-8 border-b border-primary/10 pb-4">
                                <p className="font-serif text-gray-500 italic text-sm">Showing 1-12 of 5,800+ results</p>
                                <select className="bg-transparent border-none text-sm font-serif text-secondary focus:ring-0 cursor-pointer outline-none">
                                    <option>Sort by: Most Relevant</option>
                                    <option>Sort by: Date Added</option>
                                    <option>Sort by: Composer A-Z</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {scores.map((score) => (
                                    <ScoreCard key={score.id} {...score} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-16 flex justify-center gap-2">
                                <button className="h-10 w-10 border border-primary/20 text-secondary hover:bg-primary/10 transition-colors flex items-center justify-center">1</button>
                                <button className="h-10 w-10 border border-transparent text-gray-400 hover:text-secondary flex items-center justify-center">2</button>
                                <button className="h-10 w-10 border border-transparent text-gray-400 hover:text-secondary flex items-center justify-center">3</button>
                                <span className="h-10 w-10 flex items-center justify-center text-gray-400">...</span>
                                <button className="h-10 w-10 border border-transparent text-gray-400 hover:text-secondary flex items-center justify-center text-xs">Next</button>
                            </div>
                        </main>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
