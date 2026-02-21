import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ComposerDashboard() {
    return (
        <>
            <Header />

            <div className="bg-parchment min-h-screen pt-8 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Sidebar Navigation */}
                        <aside className="w-full lg:w-64 flex-shrink-0">
                            <div className="bg-white border border-primary/20 p-6 shadow-sm sticky top-28">
                                <div className="text-center mb-8 border-b border-primary/10 pb-6">
                                    <div className="h-16 w-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/30">
                                        <span className="material-symbols-outlined text-primary text-2xl">person</span>
                                    </div>
                                    <h2 className="font-display text-lg text-secondary">Kwame Osei</h2>
                                    <div className="flex items-center justify-center gap-1 mt-1 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 py-1 px-2 rounded-sm border border-green-200 inline-flex">
                                        <span className="material-symbols-outlined text-[12px]">verified</span>
                                        Verified Composer
                                    </div>
                                </div>

                                <nav className="space-y-2 font-serif text-sm">
                                    <Link href="/dashboard/composer" className="flex items-center gap-3 px-4 py-3 bg-secondary text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">dashboard</span>
                                        Dashboard
                                    </Link>
                                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">library_music</span>
                                        My Catalog
                                    </Link>
                                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">payments</span>
                                        Earnings &amp; Payouts
                                    </Link>
                                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">settings</span>
                                        Profile Settings
                                    </Link>
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content Area */}
                        <main className="flex-grow space-y-8">

                            {/* Top Bar with Upload Button */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-primary/20 p-6 shadow-sm">
                                <div>
                                    <h1 className="text-2xl font-display text-secondary">Welcome back, Kwame</h1>
                                    <p className="font-serif text-gray-500 italic text-sm">Manage your portfolio and track your academic contributions.</p>
                                </div>
                                <button className="bg-primary text-secondary font-bold px-6 py-3 uppercase tracking-widest text-xs hover:bg-accent-gold transition-colors flex items-center gap-2 shadow-sm">
                                    <span className="material-symbols-outlined text-sm">upload</span>
                                    Upload New Score
                                </button>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-secondary p-6 border border-primary/30 text-center shadow-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5"></div>
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-primary/70 font-bold mb-2 relative z-10">Lifetime Earnings</h3>
                                    <p className="text-3xl font-display text-white relative z-10">$1,245.00</p>
                                </div>
                                <div className="bg-white p-6 border border-primary/20 text-center shadow-sm">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Total Sales/Licenses</h3>
                                    <p className="text-3xl font-display text-secondary">84</p>
                                </div>
                                <div className="bg-white p-6 border border-primary/20 text-center shadow-sm">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Active Works</h3>
                                    <p className="text-3xl font-display text-secondary">12</p>
                                </div>
                            </div>

                            {/* Recent Uploads Table */}
                            <div className="bg-white border border-primary/20 shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-primary/10 flex justify-between items-center bg-gray-50">
                                    <h3 className="font-display text-lg text-secondary">Recent Uploads</h3>
                                    <a href="#" className="text-xs font-serif italic text-primary hover:text-secondary transition-colors">View full catalog &rarr;</a>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left font-serif text-sm">
                                        <thead>
                                            <tr className="border-b border-primary/20 text-xs uppercase tracking-widest text-gray-500">
                                                <th className="px-6 py-4 font-normal">Title</th>
                                                <th className="px-6 py-4 font-normal">Date Added</th>
                                                <th className="px-6 py-4 font-normal">Sales</th>
                                                <th className="px-6 py-4 font-normal">Status</th>
                                                <th className="px-6 py-4 font-normal text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-primary/10 text-secondary">

                                            <tr className="hover:bg-primary/5 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="font-bold">Akan Choral Suite No. 1</div>
                                                    <div className="text-xs text-gray-400 italic">SATB, A Cappella</div>
                                                </td>
                                                <td className="px-6 py-5 text-gray-500">Oct 12, 2024</td>
                                                <td className="px-6 py-5">42</td>
                                                <td className="px-6 py-5">
                                                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-green-700 bg-green-50 px-2 py-1 rounded-sm border border-green-200">
                                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Live
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5 text-right">
                                                    <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                                                </td>
                                            </tr>

                                            <tr className="hover:bg-primary/5 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="font-bold">Highlife Variations for Piano</div>
                                                    <div className="text-xs text-gray-400 italic">Solo Piano</div>
                                                </td>
                                                <td className="px-6 py-5 text-gray-500">Nov 03, 2024</td>
                                                <td className="px-6 py-5">28</td>
                                                <td className="px-6 py-5">
                                                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-green-700 bg-green-50 px-2 py-1 rounded-sm border border-green-200">
                                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Live
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5 text-right">
                                                    <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                                                </td>
                                            </tr>

                                            <tr className="hover:bg-primary/5 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="font-bold">Symphony of the Savannah</div>
                                                    <div className="text-xs text-gray-400 italic">Full Orchestra</div>
                                                </td>
                                                <td className="px-6 py-5 text-gray-500">Nov 28, 2024</td>
                                                <td className="px-6 py-5">—</td>
                                                <td className="px-6 py-5">
                                                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-yellow-700 bg-yellow-50 px-2 py-1 rounded-sm border border-yellow-200">
                                                        <span className="material-symbols-outlined text-[12px]">schedule</span> Pending Review
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5 text-right">
                                                    <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </main>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
