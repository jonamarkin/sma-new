/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, ChevronRight } from "lucide-react";

export default function ComposerSpotlight() {
    const highlights = [
        { name: "Samuel Coleridge-Taylor", dates: "1875 - 1912" },
        { name: "Fela Sowande", dates: "1905 - 1987" },
        { name: "T.K.E. Phillips", dates: "1884 - 1969" },
        { name: "Lazurus Ekwueme", dates: "1936 - present" },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-8">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div className="max-w-2xl">
                    <h2 className="font-serif text-3xl md:text-4xl text-sm-navy mb-3">
                        Composer Spotlight & Historical Index
                    </h2>
                    <p className="font-serif italic text-sm-navy/70 text-lg">
                        Biographical records and catalog raisonné of the continent's most significant choral orchestrators.
                    </p>
                </div>
                <a href="#" className="mt-6 md:mt-0 flex items-center gap-2 text-sm-gold font-bold tracking-widest text-sm hover:text-sm-navy transition-colors">
                    COMPLETE INDEX <ArrowRight size={16} />
                </a>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1: Mzilikazi */}
                <div className="bg-[#EBE9DB] p-8 aspect-square flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="flex-grow flex items-center justify-center">
                        {/* Placeholder for Vinyl/Record aesthetic image */}
                        <div className="w-48 h-48 bg-gray-900 rounded-full shadow-2xl flex items-center justify-center">
                            <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-sm-gold font-bold tracking-widest mb-2 uppercase">1932 — 2021</p>
                        <h3 className="font-serif text-2xl text-sm-navy font-bold mb-2">Prof. Mzilikazi Khumalo</h3>
                        <p className="text-sm text-sm-navy/70 mb-4 line-clamp-2">
                            A central figure in the development of South African art music, bridging traditional Zulu idioms with...
                        </p>
                        <div className="flex gap-4 text-xs font-semibold tracking-wider">
                            <span className="text-sm-navy border-b border-sm-navy pb-1">BIOGRAPHY</span>
                            <span className="text-sm-gold">WORKS</span>
                        </div>
                    </div>
                </div>

                {/* Card 2: Ephraim Amu */}
                <div className="bg-[#E5E5DF] p-8 aspect-square flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="flex-grow flex items-center justify-center relative">
                        {/* Placeholder for Silhouette */}
                        <div className="w-48 h-48 bg-[#d1cec4] rounded-[30%] blur-[2px] opacity-80 shadow-inner"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-[#b8b5a9] font-serif italic text-6xl opacity-30">
                            EA
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-sm-gold font-bold tracking-widest mb-2 uppercase">West African Renaissance</p>
                        <h3 className="font-serif text-2xl text-sm-navy font-bold mb-2">Ephraim Amu</h3>
                        <p className="text-sm text-sm-navy/70 mb-4 line-clamp-2">
                            Pioneer of contemporary Ghanaian art music. His anthems redefined the academic study of African harmony...
                        </p>
                        <div className="flex gap-4 text-xs font-semibold tracking-wider">
                            <span className="text-sm-navy border-b border-sm-navy pb-1">BIOGRAPHY</span>
                            <span className="text-sm-gold">WORKS</span>
                        </div>
                    </div>
                </div>

                {/* Column 3: Archive Highlights */}
                <div className="flex flex-col justify-between h-full bg-white p-8 border border-sm-gold/10">
                    <div>
                        <h4 className="font-serif text-xl text-sm-navy font-semibold mb-6">Archive Highlights</h4>
                        <ul className="space-y-6">
                            {highlights.map((composer, idx) => (
                                <li key={idx} className="flex items-center justify-between border-b border-sm-navy/10 pb-4 group cursor-pointer">
                                    <div>
                                        <p className="text-sm-navy font-medium group-hover:text-sm-gold transition-colors">{composer.name}</p>
                                        <p className="text-xs text-sm-navy/50 font-serif italic">{composer.dates}</p>
                                    </div>
                                    <ChevronRight size={18} className="text-sm-gold group-hover:translate-x-1 transition-transform" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="w-full mt-8 border border-sm-navy text-sm-navy text-xs tracking-widest font-semibold py-4 hover:bg-sm-navy hover:text-white transition-colors">
                        VIEW ALL COMPOSERS
                    </button>
                </div>

            </div>
        </section>
    );
}
