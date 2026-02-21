import Link from "next/link";

interface ScoreCardProps {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    licenseType: string;
    imageUrl: string;
}

export default function ScoreCard({ id, title, subtitle, price, licenseType, imageUrl }: ScoreCardProps) {
    return (
        <Link href={`/archive/${id}`} className="block group bg-white border border-primary/10 p-4 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden border border-gray-200 mb-6">
                <img
                    alt={`Archival Score ${title}`}
                    className="w-full h-full object-cover grayscale brightness-110 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                    src={imageUrl}
                />
                <div className="absolute inset-0 border-[12px] border-white/50 group-hover:border-transparent transition-all"></div>
                <span className="absolute top-2 left-2 bg-secondary text-primary text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                    MS: {id}
                </span>
            </div>
            <div className="space-y-3">
                <h3 className="font-display text-xl text-secondary border-b border-primary/10 pb-2">{title}</h3>
                <p className="text-xs font-serif text-gray-500 italic">{subtitle}</p>
                <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-serif text-secondary">
                        {price} <span className="text-[10px] text-gray-400 uppercase tracking-tighter">({licenseType})</span>
                    </span>
                    <span className="text-primary group-hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined">library_add</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}
