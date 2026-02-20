import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="w-full bg-sm-cream border-b border-sm-gold/20 py-4 px-8 flex items-center justify-between sticky top-0 z-50">
            {/* Logo Area */}
            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-sm-navy rounded-sm"></div>
                    <h1 className="font-serif text-xl tracking-widest font-bold text-sm-navy">
                        SHEET MUSIC AFRICA
                    </h1>
                </div>
                <p className="text-[0.65rem] tracking-[0.2em] text-sm-gold font-medium ml-11 uppercase">
                    The Choral Archive
                </p>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest text-sm-navy/80 font-medium">
                <a href="#" className="hover:text-sm-gold transition-colors">ARCHIVE</a>
                <a href="#" className="hover:text-sm-gold transition-colors">COMPOSERS</a>
                <a href="#" className="hover:text-sm-gold transition-colors">RESEARCH</a>
                <a href="#" className="hover:text-sm-gold transition-colors">JOURNAL</a>
                <a href="#" className="hover:text-sm-gold transition-colors">COLLECTIONS</a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-sm-navy hover:text-sm-gold hover:bg-transparent">
                    <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-sm-navy hover:text-sm-gold hover:bg-transparent">
                    <User size={20} />
                </Button>
                <Button className="bg-sm-navy text-sm-cream hover:bg-sm-navy/90 text-xs tracking-widest px-6 py-5 rounded-none transition-colors">
                    LOGIN
                </Button>
            </div>
        </header>
    );
}
