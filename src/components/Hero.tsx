import { BookOpen, FolderHeart, Newspaper, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="w-full bg-sm-navy text-sm-cream py-24 px-4 flex flex-col items-center justify-center text-center">

            <p className="font-serif italic text-sm-gold text-xl md:text-2xl mb-4">
                Preserving the Heritage of the Continent
            </p>

            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 max-w-4xl mx-auto">
                Comprehensive Archive of <br className="hidden md:block" /> African Choral Scholarship
            </h2>

            <p className="text-sm-cream/80 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
                A central scholarly resource for conductors, educators, and researchers.
                Access historical manuscripts, critical editions, and biographical studies of African composers.
            </p>

            {/* Search Bar */}
            <div className="flex w-full max-w-2xl mx-auto shadow-2xl mb-12 relative group bg-white rounded-none">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <BookOpen className="text-gray-400" size={20} />
                </div>
                <Input
                    type="text"
                    placeholder="Search archive by composer, title, or region..."
                    className="w-full pl-12 py-7 text-sm-navy outline-none border-none bg-transparent rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
                <Button className="bg-sm-gold hover:bg-sm-gold/90 text-sm-navy font-semibold px-8 py-7 rounded-none flex items-center gap-2 transition-transform active:scale-95 group-hover:bg-sm-gold/80">
                    <Search size={18} />
                    <span className="text-sm tracking-wider">SEARCH ARCHIVE</span>
                </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <a href="#" className="flex items-center gap-2 text-sm-gold hover:text-white transition-colors group">
                    <BookOpen size={16} className="group-hover:-translate-y-1 transition-transform" />
                    <span className="text-xs font-semibold tracking-widest">LATEST DISCOVERIES</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-sm-gold hover:text-white transition-colors group">
                    <FolderHeart size={16} className="group-hover:-translate-y-1 transition-transform" />
                    <span className="text-xs font-semibold tracking-widest">RECOMMENDED FOR YOU</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-sm-gold hover:text-white transition-colors group">
                    <Newspaper size={16} className="group-hover:-translate-y-1 transition-transform" />
                    <span className="text-xs font-semibold tracking-widest">ALL CHORAL JOURNALS</span>
                </a>
            </div>
        </section>
    );
}
