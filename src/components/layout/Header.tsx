import Link from "next/link";

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex-shrink-0 flex items-center gap-4 group">
                        <div className="h-14 w-14 rounded-sm bg-white overflow-hidden flex items-center justify-center border border-primary/30 group-hover:border-primary transition-colors duration-500">
                            <img
                                alt="Sheet Music Africa Logo"
                                className="object-contain h-full w-full"
                                src="/smalogo.jpg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-lg tracking-[0.1em] text-secondary leading-none uppercase group-hover:text-primary transition-colors">
                                Sheet Music Africa
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold italic group-hover:text-secondary transition-colors">
                                The Scholarly Archive
                            </span>
                        </div>
                    </Link>
                    <div className="hidden lg:flex space-x-10 items-center">
                        <Link className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="/archive">Archive</Link>
                        <Link className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="/composers">Composers</Link>
                        <Link className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="#">Research</Link>
                        <Link className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="/journal">Journal</Link>
                        <Link className="text-secondary/80 hover:text-primary font-serif text-sm uppercase tracking-widest transition-colors" href="#">Collections</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-secondary hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        <button className="text-secondary hover:text-primary transition-colors relative">
                            <span className="material-symbols-outlined">account_balance</span>
                        </button>
                        <div className="h-8 w-px bg-primary/20"></div>
                        <Link href="/login" className="bg-secondary text-primary border border-primary/50 px-4 py-2 text-xs uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
