import { Button } from "@/components/ui/button";

export default function EventsSection() {
    const events = [
        {
            date: "12",
            month: "November — Cape Town",
            title: "Historical Performance Practice Lecture",
            desc: "A workshop focused on the authentic vocal techniques of mid-20th century choral masters.",
        },
        {
            date: "05",
            month: "December — Nairobi",
            title: "East African Choral Preservation Summit",
            desc: "Gathering archivists to discuss the digitization of regional manuscript repositories.",
        },
        {
            date: "18",
            month: "December — Accra",
            title: "Amu Legacy Concert & Critical Lecture",
            desc: "Evening of performances paired with critical anaylsis of Ephraim Amu's scores.",
        },
    ];

    return (
        <section className="w-full bg-sm-offwhite py-24 px-8 border-b border-sm-gold/10">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl text-sm-navy italic">Academic Symposia & Performances</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, idx) => (
                        <div key={idx} className="bg-white p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                            <p className="text-6xl font-serif text-sm-gold italic mb-2 group-hover:scale-110 transition-transform duration-500">{event.date}</p>
                            <p className="text-[0.6rem] font-bold tracking-[0.2em] text-sm-navy/50 uppercase mb-6">{event.month}</p>

                            <h3 className="font-serif text-xl text-sm-navy font-semibold mb-4 min-h-[3.5rem] flex items-center justify-center">
                                {event.title}
                            </h3>

                            <p className="text-sm text-sm-navy/70 mb-8 flex-grow">
                                {event.desc}
                            </p>

                            <Button variant="link" className="text-[0.65rem] tracking-[0.2rem] font-bold text-sm-navy hover:text-sm-gold transition-colors uppercase decoration-sm-navy border-b border-transparent hover:border-sm-gold rounded-none h-auto p-0 pb-1">
                                Register Now
                            </Button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
