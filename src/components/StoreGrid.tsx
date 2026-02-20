import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StoreGrid() {
    const products = [
        {
            id: 1,
            title: "Mass in F minor (Izililo Zam)",
            composer: "Mzilikazi Khumalo",
            price: "$12.50",
            badge: "DOCUMENT",
            imageClass: "bg-white border-8 border-gray-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]", // placeholder for sheet music
        },
        {
            id: 2,
            title: "Baba Yetu (Swahili Liturgy)",
            composer: "Transcribed by J.K. Nketia",
            price: "$15.00",
            badge: "ANNOTATED ED.",
            imageClass: "bg-[#faf9f6] flex items-center justify-center font-serif text-2xl italic text-gray-400 border border-gray-200",
        },
        {
            id: 3,
            title: "Uthando Lwam' (Baruti Edit)",
            composer: "Historical Choral Analysis Vol. 1",
            price: "$14.50",
            badge: "DOCUMENT",
            imageClass: "bg-white flex flex-col justify-end p-4 border border-sm-gold/20 relative overflow-hidden",
        },
        {
            id: 4,
            title: "African Choral Historicals",
            composer: "Contemporary Choral Tradition",
            price: "$40.00",
            badge: "COLLECTION",
            imageClass: "bg-sm-navy text-sm-cream flex flex-col items-center justify-center font-serif text-center p-4",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-8">
            {/* Header */}
            <div className="text-center md:text-center mb-16 max-w-2xl mx-auto">
                <h2 className="font-serif italic text-4xl text-sm-navy mb-4">
                    Primary Source Documents
                </h2>
                <p className="font-serif text-sm-navy/70 text-lg">
                    Authentic digital reproductions of original scores, annotated editions, and archival discoveries.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        {/* Product Image Placeholder */}
                        <div className={`aspect-[3/4] mb-6 relative shadow-lg group-hover:shadow-xl transition-all ${product.imageClass}`}>
                            {/* Badge */}
                            <div className="absolute top-4 left-4 bg-sm-navy text-white text-[0.6rem] tracking-widest px-2 py-1 z-10">
                                {product.badge}
                            </div>

                            {/* Pseudo Sheet Music Content */}
                            {product.id === 1 && (
                                <div className="absolute inset-4 opacity-20 border-b-2 border-dashed border-gray-800 flex flex-col gap-2 p-2">
                                    <div className="h-2 bg-gray-800 w-full mb-1"></div>
                                    <div className="h-2 bg-gray-800 w-3/4"></div>
                                    <div className="h-4 bg-gray-600 w-1/2 mt-4 mx-auto"></div>
                                    <div className="h-2 bg-gray-800 w-full mt-4"></div>
                                    <div className="h-2 bg-gray-800 w-5/6"></div>
                                </div>
                            )}
                            {product.id === 2 && (
                                <div className="text-center px-4">
                                    <p className="text-sm font-sans mb-2">SCORE NO. 42</p>
                                    <p>Baba Yetu</p>
                                    <div className="flex flex-col gap-1 mt-4">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-px bg-gray-300 w-full"></div>)}
                                    </div>
                                </div>
                            )}
                            {product.id === 3 && (
                                <div className="absolute inset-0 opacity-10 flex flex-col items-center justify-evenly">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="flex gap-1 w-full px-4">
                                            {[1, 2, 3, 4, 5].map(j => <div key={j} className="h-px bg-black flex-1"></div>)}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {product.id === 4 && (
                                <div className="border border-sm-gold/30 p-4 h-full w-full flex flex-col items-center justify-center">
                                    <p className="text-xs tracking-[0.2em] text-sm-gold mb-2 uppercase">Volume I</p>
                                    <p className="text-2xl mb-4">A F R I C A N</p>
                                    <p className="text-sm-gold/50 italic font-serif">Choral Historicals</p>
                                </div>
                            )}
                        </div>

                        {/* Product Details */}
                        <div>
                            <h3 className="font-serif text-lg text-sm-navy font-semibold mb-1 group-hover:text-sm-gold transition-colors">{product.title}</h3>
                            <p className="text-sm-navy/60 text-xs tracking-wider uppercase mb-3">{product.composer}</p>

                            <div className="flex items-center justify-between">
                                <p className="font-serif text-xl font-medium text-sm-navy space-x-2">
                                    <span>{product.price}</span>
                                    {product.id === 2 && <span className="text-sm text-sm-navy/40 line-through">$22.00</span>}
                                </p>
                                <Button variant="ghost" size="icon" className="text-sm-gold hover:text-sm-navy transition-colors bg-sm-gold/10 hover:bg-sm-gold/20 rounded-full">
                                    <ShoppingBag size={18} />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
