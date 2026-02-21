import Link from "next/link";

interface ComposerCardProps {
    id: string;
    name: string;
    period: string;
    description: string;
    imageUrl: string;
}

export default function ComposerCard({ id, name, period, description, imageUrl }: ComposerCardProps) {
    return (
        <Link href={`/composers/${id}`} className="block group">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 border border-primary/20 mb-6">
                <img
                    alt={`Historical Portrait of ${name}`}
                    className="w-full h-full object-cover sepia-[0.3] grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    src={imageUrl}
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="border-l-2 border-primary pl-6">
                <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2 block">{period}</span>
                <h3 className="text-2xl font-display text-secondary group-hover:text-primary transition-colors mb-2">{name}</h3>
                <p className="font-serif text-sm text-gray-600 line-clamp-2 italic mb-4">{description}</p>
                <div className="flex gap-4">
                    <span className="text-[11px] uppercase tracking-tighter font-bold text-secondary border border-secondary/20 px-3 py-1 group-hover:bg-secondary group-hover:text-white transition-colors">
                        View Catalog
                    </span>
                    <span className="text-[11px] uppercase tracking-tighter font-bold text-primary border border-primary/20 px-3 py-1 group-hover:bg-primary group-hover:text-secondary transition-colors">
                        Biography
                    </span>
                </div>
            </div>
        </Link>
    );
}
