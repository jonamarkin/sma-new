import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScoreCard from "@/components/shared/ScoreCard";
import { getScore, getComposer, getRelatedScores } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ScoreDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const score = getScore(id);

    if (!score) {
        notFound();
    }

    const composer = getComposer(score.composerId);
    const relatedScores = getRelatedScores(score.id);

    return (
        <>
            <Header />

            {/* Detail Hero Section */}
            <section className="bg-parchment pt-12 pb-24 border-b border-primary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left Column: Score Viewer */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white border border-primary/20 shadow-xl relative aspect-[3/4] overflow-hidden group">
                                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={score.imageUrl}
                                        alt="Score Preview"
                                        className="w-full h-full object-cover filter blur-[2px] opacity-70 sepia-[0.2]"
                                    />
                                </div>

                                {/* Watermark/Viewer UI overlay */}
                                <div className="absolute inset-x-0 top-0 bg-secondary/80 text-white p-4 flex justify-between items-center backdrop-blur-sm border-b border-primary/30">
                                    <span className="font-serif text-sm tracking-widest uppercase">Preview Mode</span>
                                    <div className="flex gap-4">
                                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">zoom_in</span></button>
                                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">zoom_out</span></button>
                                    </div>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/90 px-8 py-4 border border-primary/20 shadow-2xl transform -rotate-12 backdrop-blur-sm">
                                        <span className="font-display text-2xl text-secondary opacity-50 uppercase tracking-[0.2em]">Preview Only</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Metadata & Actions */}
                        <div className="w-full lg:w-1/3 flex flex-col">

                            <div className="mb-8">
                                <span className="inline-block bg-secondary text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-4">
                                    MS: {score.id}
                                </span>
                                <h1 className="text-4xl lg:text-5xl font-display text-secondary mb-2 leading-tight">{score.title}</h1>
                                <p className="text-lg font-serif text-gray-500 italic mb-6">
                                    {score.subtitle} {composer ? `by ${composer.name}` : ''}
                                </p>

                                <div className="flex items-end gap-3 mb-6 pb-6 border-b border-primary/10">
                                    <span className="text-3xl font-display text-secondary">{score.price}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{score.licenseType}</span>
                                </div>
                            </div>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 font-serif">
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Voicing</span>
                                    <span className="text-sm text-secondary">{score.voicing}</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Language</span>
                                    <span className="text-sm text-secondary">{score.language}</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Difficulty</span>
                                    <span className="text-sm text-secondary">{score.difficulty}</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Duration</span>
                                    <span className="text-sm text-secondary">{score.duration}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="space-y-4 mb-10">
                                <button className="w-full bg-primary text-secondary font-bold px-6 py-4 uppercase tracking-widest text-sm hover:bg-accent-gold transition-colors flex items-center justify-center gap-3 shadow-lg">
                                    <span className="material-symbols-outlined">shopping_cart</span>
                                    Add to Library
                                </button>
                                <button className="w-full bg-transparent border border-secondary text-secondary font-bold px-6 py-4 uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-3">
                                    <span className="material-symbols-outlined">workspace_premium</span>
                                    Request Performance License
                                </button>
                            </div>

                            {/* Historical Context */}
                            <div className="bg-white border border-primary/20 p-6 shadow-sm">
                                <h3 className="font-display text-lg text-secondary mb-3 pb-2 border-b border-primary/10">Historical Context</h3>
                                <p className="font-serif text-sm text-gray-600 leading-relaxed italic line-clamp-6">
                                    {score.historicalContext}
                                </p>
                                <a href="#" className="inline-block mt-3 text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary transition-colors">Read Full Analysis &rarr;</a>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Recommended Works */}
            <section className="bg-white py-20 border-t-8 border-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end border-b border-primary pb-4 mb-12">
                        <div>
                            <h2 className="text-3xl font-display text-secondary mb-2">Related Academic Works</h2>
                            <p className="font-serif italic text-gray-500">Curated selections from the same era and instrumentation.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedScores.map((s) => (
                            <ScoreCard
                                key={s.id}
                                id={s.id}
                                title={s.title}
                                subtitle={s.subtitle}
                                price={s.price}
                                licenseType={s.licenseType}
                                imageUrl={s.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
