import Link from "next/link";

export default function Footer() {
    return (
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
                            <li><Link className="hover:text-primary transition-colors" href="/archive">Manuscript Database</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/composers">Composer Catalogues</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Regional Studies</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Critical Editions</Link></li>
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
    );
}
