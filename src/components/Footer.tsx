import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Newsletter Section */}
            <div className="bg-[#111822] text-sm-cream py-24 px-8 relative overflow-hidden">
                {/* Subtle Background Pattern (Music Notes placeholder) */}
                <div className="absolute inset-0 opacity-5 pointer-events-none flex flex-wrap gap-12 rotate-[-10deg] scale-150 justify-center items-center font-serif text-9xl">
                    ♪ ♫ ♬ ♭ ♮ ♯ ♪ ♫ ♬ ♭ ♮ ♯ ♪ ♫ ♬ ♭ ♮ ♯
                </div>

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <div className="flex justify-center mb-6 text-sm-gold">
                        <Mail size={32} />
                    </div>
                    <h2 className="font-serif text-3xl font-medium mb-4">Scholarly Communications</h2>
                    <p className="text-sm-cream/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
                        Subscribe to receive institutional bulletins, calls for papers, and notifications of new archival acquisitions.
                    </p>

                    <form className="flex w-full max-w-lg mx-auto shadow-2xl">
                        <Input
                            type="email"
                            placeholder="Enter your institutional email..."
                            className="bg-sm-cream/10 text-white flex-1 px-4 py-7 rounded-none rounded-l outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none transition-colors placeholder:text-sm-cream/40"
                        />
                        <Button className="bg-sm-gold hover:bg-sm-gold/90 text-sm-navy font-bold tracking-widest text-xs px-8 py-7 rounded-none rounded-r transition-colors uppercase">
                            SUBSCRIBE
                        </Button>
                    </form>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="bg-white py-16 px-8 border-t border-sm-gold/20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Col */}
                    <div className="md:col-span-1">
                        <h2 className="font-serif text-2xl font-bold tracking-widest text-sm-navy mb-4">
                            SHEET MUSIC <br /> AFRICA
                        </h2>
                        <p className="text-sm text-sm-navy/70 italic font-serif leading-relaxed mb-6">
                            Dedicated to the academic preservation, research, and dissemination of African choral music heritage.
                        </p>
                        <div className="flex gap-4 text-sm-gold">
                            <div className="w-5 h-5 bg-sm-gold rounded-sm"></div>
                            <div className="w-5 h-5 bg-sm-gold rounded-sm"></div>
                            <div className="w-5 h-5 bg-sm-gold rounded-sm"></div>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] text-sm-navy mb-6 uppercase">Research Archive</h4>
                        <ul className="space-y-4 text-sm text-sm-navy/70">
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Manuscript Database</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Composer Catalogues</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Regional Studies</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Critical Editions</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] text-sm-navy mb-6 uppercase">Contextual</h4>
                        <ul className="space-y-4 text-sm text-sm-navy/70">
                            <li><a href="#" className="hover:text-sm-gold transition-colors">University Partners</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Library Licensing</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Submit Research</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Grant Opportunities</a></li>
                        </ul>
                    </div>

                    {/* Links 3 */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] text-sm-navy mb-6 uppercase">Scholar Portal</h4>
                        <ul className="space-y-4 text-sm text-sm-navy/70">
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Copyright & Fair Use</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Privacy & Data</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Publication Terms</a></li>
                            <li><a href="#" className="hover:text-sm-gold transition-colors">Contact Archivist</a></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-sm-navy/10 flex flex-col md:flex-row justify-between items-center text-[0.6rem] tracking-widest text-sm-navy/50 uppercase">
                    <p>© {new Date().getFullYear()} Sheet Music Africa Archive. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Preservation Framework by African Heritage Trust</p>
                </div>
            </div>
        </footer>
    );
}
