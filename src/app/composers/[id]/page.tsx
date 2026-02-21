import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScoreCard from "@/components/shared/ScoreCard";
import { getComposer, getScoresByComposer } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ComposerDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const composer = getComposer(id);

    if (!composer) {
        notFound();
    }

    const composerScores = getScoresByComposer(id);

    return (
        <>
            <Header />

            {/* Composer Hero Section */}
            <section className="bg-secondary relative border-b-8 border-primary overflow-hidden">
                {/* Background texture/image */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBezJT60NAT_mjiwGzTpOHGx_LBgoVieE2XzbTbBnKnrWjheMeRVAUiUe1veoAdEbB0VwM9c0caOqIoCoghrTKc3FmGitckhYQApSMplPOd-YcqRF47Pq1LPh3GH7L84ZD_pENpUQjdqJeACdYNO5s27NqKzW9QrDdpUqPT6oQi1Dss2hoXspy2qeUwNy7QcD7-n2ET2DqBFtKjwCQtraQHGgZ1pZ8_ZpHLuP0mfW9lIJJJ72i8ueyCbJdd_grdlQfrg3-NcYGDrngB"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-10">

                        {/* Portrait */}
                        <div className="w-48 h-64 md:w-64 md:h-80 flex-shrink-0 border-4 border-primary/50 shadow-2xl relative bg-gray-200">
                            <img
                                alt={`Historical Portrait of ${composer.name}`}
                                className="w-full h-full object-cover sepia-[0.3] grayscale"
                                src={composer.imageUrl}
                            />
                        </div>

                        {/* Header Info */}
                        <div className="text-center md:text-left text-white max-w-3xl pb-2">
                            <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3 block">{composer.period}</span>
                            <h1 className="text-5xl md:text-6xl font-display mb-4">{composer.name}</h1>
                            <p className="font-serif text-lg text-gray-300 italic mb-6">{composer.description}</p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                {composer.tags.map(tag => (
                                    <span key={tag} className="border border-primary/30 px-3 py-1 text-xs uppercase tracking-widest font-bold text-primary bg-primary/10">{tag}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-parchment py-24 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left Column: Biograhpy & Affiliations */}
                        <div className="w-full lg:w-1/3 space-y-12">

                            <div>
                                <h3 className="text-2xl font-display text-secondary border-b flex items-center gap-3 border-primary/20 pb-3 mb-6">
                                    <span className="material-symbols-outlined text-primary">history_edu</span>
                                    Academic Biography
                                </h3>
                                <div className="prose prose-sm prose-p:font-serif prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4 italic whitespace-pre-line">
                                    {composer.biography}
                                </div>
                            </div>

                            <div className="bg-white border border-primary/20 p-6 shadow-sm">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-secondary border-b border-primary/10 pb-2 mb-4">Affiliations &amp; Honors</h4>
                                <ul className="space-y-3 font-serif text-sm text-gray-600">
                                    {composer.affiliations.map(affil => (
                                        <li key={affil} className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">account_balance</span>
                                            <span>{affil}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        {/* Right Column: Catalog Raisonné */}
                        <div className="w-full lg:w-2/3">
                            <div className="flex justify-between items-end border-b border-primary pb-4 mb-8">
                                <div>
                                    <h2 className="text-3xl font-display text-secondary mb-1">Catalog Raisonné</h2>
                                    <p className="font-serif italic text-gray-500 text-sm">Validated primary source documents and critical editions.</p>
                                </div>
                                <div className="hidden sm:flex gap-2">
                                    <select className="bg-white border border-primary/30 text-secondary font-serif text-sm px-3 py-2 outline-none focus:border-primary cursor-pointer">
                                        <option>All Categories</option>
                                        <option>A Cappella Choral</option>
                                        <option>Choral with Accompaniment</option>
                                        <option>Art Songs</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {composerScores.length > 0 ? (
                                    composerScores.map(score => (
                                        <ScoreCard
                                            key={score.id}
                                            id={score.id}
                                            title={score.title}
                                            subtitle={score.subtitle}
                                            price={score.price}
                                            licenseType={score.licenseType}
                                            imageUrl={score.imageUrl}
                                        />
                                    ))
                                ) : (
                                    <div className="col-span-full py-12 text-center text-gray-500 font-serif italic">
                                        No digitized scores are currently available in the archive for this composer.
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}
