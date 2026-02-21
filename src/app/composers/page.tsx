import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComposerCard from "@/components/shared/ComposerCard";

import { composers } from "@/lib/data";


export default function ComposersPage() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <>
            <Header />

            {/* Title & A-Z Index */}
            <section className="bg-parchment py-16 border-b border-primary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <h1 className="text-4xl md:text-5xl font-display text-secondary mb-6">Composer Catalogues</h1>
                    <p className="font-serif text-gray-600 italic text-lg mb-12 max-w-2xl mx-auto">
                        Browse our authoritative biographical records and catalog raisonné of the continent's most significant orchestrators.
                    </p>

                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-6">Alphabetical Index</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {alphabet.map((letter) => (
                                <button
                                    key={letter}
                                    className="w-10 h-10 flex items-center justify-center border border-secondary/20 font-display text-secondary hover:bg-secondary hover:text-primary transition-colors text-lg"
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Composers */}
            <section className="py-24 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-display text-secondary mb-4 border-b-2 border-primary/30 inline-block pb-2">Academic Spotlights</h2>
                        </div>
                        <a className="text-primary hover:text-secondary font-serif text-sm uppercase tracking-widest transition-all gap-2 flex items-center" href="#">
                            View All Profiles <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {composers.map((composer) => (
                            <ComposerCard key={composer.id} {...composer} />
                        ))}
                    </div>

                    {/* Directory Listings */}
                    <div className="mt-32">
                        <h2 className="text-3xl font-display text-secondary mb-12 border-b border-primary/20 pb-4">Directory Listings</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                            {/* Category A */}
                            <div>
                                <h3 className="font-display text-4xl text-primary/30 mb-6 border-b border-primary/10 pb-2 flex items-baseline justify-between">
                                    <span>A</span>
                                    <span className="text-sm font-serif italic text-gray-400">12 Records</span>
                                </h3>
                                <ul className="space-y-4 font-serif text-secondary">
                                    <li className="flex justify-between items-center group cursor-pointer">
                                        <span className="group-hover:text-primary transition-colors">Amu, Ephraim</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 hidden group-hover:block">View Scholar</span>
                                    </li>
                                    <li className="flex justify-between items-center group cursor-pointer">
                                        <span className="group-hover:text-primary transition-colors">Aning, Ben</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 hidden group-hover:block">View Scholar</span>
                                    </li>
                                    <li className="flex justify-between items-center group cursor-pointer">
                                        <span className="group-hover:text-primary transition-colors">Anyahuru, Israel</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 hidden group-hover:block">View Scholar</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Category B */}
                            <div>
                                <h3 className="font-display text-4xl text-primary/30 mb-6 border-b border-primary/10 pb-2 flex items-baseline justify-between">
                                    <span>B</span>
                                    <span className="text-sm font-serif italic text-gray-400">8 Records</span>
                                </h3>
                                <ul className="space-y-4 font-serif text-secondary">
                                    <li className="flex justify-between items-center group cursor-pointer">
                                        <span className="group-hover:text-primary transition-colors">Banka, David</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 hidden group-hover:block">View Scholar</span>
                                    </li>
                                    <li className="flex justify-between items-center group cursor-pointer">
                                        <span className="group-hover:text-primary transition-colors">Bokwe, John Knox</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 hidden group-hover:block">View Scholar</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Category C */}
                            <div>
                                <h3 className="font-display text-4xl text-primary/30 mb-6 border-b border-primary/10 pb-2 flex items-baseline justify-between">
                                    <span>C</span>
                                    <span className="text-sm font-serif italic text-gray-400">15 Records</span>
                                </h3>
                                <ul className="space-y-4 font-serif text-secondary">
                                    <li className="flex justify-between items-center group cursor-pointer">
                                        <span className="group-hover:text-primary transition-colors">Caluza, Reuben T.</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 hidden group-hover:block">View Scholar</span>
                                    </li>
                                    <li className="flex justify-between items-center group cursor-pointer">
                                        <span className="group-hover:text-primary transition-colors">Coleridge-Taylor, Samuel</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 hidden group-hover:block">View Scholar</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
