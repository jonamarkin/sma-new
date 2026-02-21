import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ApplyPage() {
    return (
        <>
            <Header />

            <section className="bg-parchment py-24 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-display text-secondary mb-4">Composer Verification</h1>
                        <p className="font-serif text-gray-600 italic text-lg max-w-2xl mx-auto">
                            To upload scores to the Sheet Music Africa archive, you must maintain a verified scholarly or professional profile. This ensures the integrity and copyright protection of our entire collection.
                        </p>
                    </div>

                    <div className="bg-white border border-primary/20 shadow-xl overflow-hidden">
                        <div className="bg-secondary px-8 py-6 border-b-4 border-primary">
                            <h2 className="text-2xl font-display text-white">Application for Archival Privileges</h2>
                            <p className="text-primary font-serif text-sm italic mt-1">Status: Not Submitted</p>
                        </div>

                        <form className="p-8 md:p-12 space-y-12">

                            {/* Section 1: Identity */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-display text-secondary border-b border-primary/20 pb-2">1. Personal Identity</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">Legal First Name</label>
                                        <input type="text" className="w-full border-b border-secondary/20 bg-transparent py-2 font-serif focus:outline-none focus:border-primary transition-colors text-secondary" placeholder="e.g., Kwame" />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">Legal Last Name</label>
                                        <input type="text" className="w-full border-b border-secondary/20 bg-transparent py-2 font-serif focus:outline-none focus:border-primary transition-colors text-secondary" placeholder="e.g., Osei" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">Professional Moniker (If different)</label>
                                    <input type="text" className="w-full border-b border-secondary/20 bg-transparent py-2 font-serif focus:outline-none focus:border-primary transition-colors text-secondary placeholder-gray-400" placeholder="Name as it should appear in the catalog" />
                                </div>
                            </div>

                            {/* Section 2: Credentials */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-display text-secondary border-b border-primary/20 pb-2">2. Scholarly &amp; Professional Background</h3>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">Primary Affiliation (Optional)</label>
                                    <input type="text" className="w-full border-b border-secondary/20 bg-transparent py-2 font-serif focus:outline-none focus:border-primary transition-colors text-secondary placeholder-gray-400" placeholder="University, Ensemble, or Institution" />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">Link to Professional Portfolio</label>
                                    <input type="url" className="w-full border-b border-secondary/20 bg-transparent py-2 font-serif focus:outline-none focus:border-primary transition-colors text-secondary placeholder-gray-400" placeholder="https://your-website.com or academic profile" />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">Brief Biography</label>
                                    <textarea rows={4} className="w-full border border-secondary/20 bg-transparent p-4 font-serif focus:outline-none focus:border-primary transition-colors text-secondary placeholder-gray-400 resize-none" placeholder="Provide a short overview of your compositional focus and background..."></textarea>
                                </div>
                            </div>

                            {/* Section 3: Verification Documents */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-display text-secondary border-b border-primary/20 pb-2">3. Identity Verification</h3>
                                <p className="text-sm font-serif text-gray-500 italic mb-4">Please upload a valid government-issued ID or a formal institutional letterhead proving your identity. This document will not be stored publicly.</p>

                                <div className="border-2 border-dashed border-primary/30 p-8 text-center hover:bg-primary/5 transition-colors cursor-pointer group">
                                    <span className="material-symbols-outlined text-4xl text-primary/50 group-hover:text-primary mb-2 transition-colors">upload_file</span>
                                    <p className="font-display text-secondary group-hover:text-primary transition-colors">Click to upload document (PDF, JPG, PNG)</p>
                                    <p className="text-xs font-serif text-gray-400 mt-1">Max file size: 10MB</p>
                                </div>
                            </div>

                            {/* Section 4: Attestation */}
                            <div className="space-y-6 bg-secondary/5 p-6 border-l-4 border-primary">
                                <h3 className="text-lg font-display text-secondary mb-4">4. Copyright Attestation</h3>

                                <label className="flex items-start gap-4 cursor-pointer">
                                    <input type="checkbox" className="mt-1 accent-primary h-5 w-5 border-gray-300 rounded-sm flex-shrink-0" />
                                    <span className="text-sm font-serif text-gray-600 leading-relaxed">
                                        I solemnly attest that I am the sole copyright holder (or an authorized representative of the copyright holder) for all musical works, arrangements, and transcriptions I intend to upload to this platform. I understand that uploading intellectual property without express permission is strictly forbidden and will result in the immediate revocation of my archival privileges and forfeiture of any accumulated earnings.
                                    </span>
                                </label>

                                <label className="flex items-start gap-4 cursor-pointer">
                                    <input type="checkbox" className="mt-1 accent-primary h-5 w-5 border-gray-300 rounded-sm flex-shrink-0" />
                                    <span className="text-sm font-serif text-gray-600 leading-relaxed">
                                        I agree to the Sheet Music Africa Terms of Service and Digital Publishing Agreement.
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <p className="text-xs font-serif text-gray-500 italic max-w-sm">
                                    Applications are manually reviewed by The Archivist. Expect a response within 3-5 business days.
                                </p>
                                <button type="submit" className="w-full sm:w-auto bg-primary text-secondary font-bold px-10 py-4 uppercase tracking-widest text-sm hover:bg-accent-gold transition-colors shadow-lg">
                                    Submit Application
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
