import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function AdminDashboard() {
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
                                    <div className="h-16 w-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/30">
                                        <span className="material-symbols-outlined text-primary text-2xl">admin_panel_settings</span>
                                    </div>
                                    <h2 className="font-display text-lg text-secondary">The Archivist</h2>
                                    <div className="flex items-center justify-center gap-1 mt-1 text-xs font-bold text-red-700 uppercase tracking-widest bg-red-50 py-1 px-2 rounded-sm border border-red-200 inline-flex">
                                        Super Admin
                                    </div>
                                </div>

                                <nav className="space-y-2 font-serif text-sm">
                                    <Link href="/dashboard/admin" className="flex items-center gap-3 px-4 py-3 bg-secondary text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">gavel</span>
                                        Action Center
                                    </Link>
                                    <Link href="#" className="flex items-center justify-between px-4 py-3 text-secondary hover:bg-primary/10 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                                            Verification Queue
                                        </div>
                                        <span className="bg-primary text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">14</span>
                                    </Link>
                                    <Link href="#" className="flex items-center justify-between px-4 py-3 text-secondary hover:bg-primary/10 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[18px]">report</span>
                                            Flagged Content
                                        </div>
                                        <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">3</span>
                                    </Link>
                                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">group</span>
                                        Manage Authors
                                    </Link>
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content Area */}
                        <main className="flex-grow space-y-8">

                            {/* Top Bar */}
                            <div className="bg-white border border-primary/20 p-6 shadow-sm">
                                <h1 className="text-2xl font-display text-secondary">Platform Integrity Overview</h1>
                                <p className="font-serif text-gray-500 italic text-sm">Review applications and enforce copyright standards.</p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-white p-6 border-l-4 border-primary shadow-sm">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Pending Applications</h3>
                                    <p className="text-3xl font-display text-secondary">14</p>
                                </div>
                                <div className="bg-white p-6 border-l-4 border-red-500 shadow-sm">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Disputed Works</h3>
                                    <p className="text-3xl font-display text-secondary">3</p>
                                </div>
                                <div className="bg-white p-6 border border-primary/20 shadow-sm">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Verified Composers</h3>
                                    <p className="text-3xl font-display text-secondary">108</p>
                                </div>
                            </div>

                            {/* Verification Queue Table */}
                            <div className="bg-white border border-primary/20 shadow-sm overflow-hidden mb-8">
                                <div className="px-6 py-4 border-b border-primary/10 bg-secondary">
                                    <h3 className="font-display text-lg text-white">Verification Queue</h3>
                                    <p className="text-primary font-serif italic text-xs">Awaiting manual approval.</p>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left font-serif text-sm">
                                        <thead>
                                            <tr className="border-b border-primary/20 text-xs uppercase tracking-widest text-gray-500 bg-gray-50">
                                                <th className="px-6 py-4 font-normal">Applicant Name</th>
                                                <th className="px-6 py-4 font-normal">Affiliation</th>
                                                <th className="px-6 py-4 font-normal">Date Applied</th>
                                                <th className="px-6 py-4 font-normal text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-primary/10 text-secondary">

                                            <tr className="hover:bg-primary/5 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="font-bold">Samuel N. Nti</div>
                                                    <div className="text-xs text-blue-600 hover:underline cursor-pointer">View Portfolio &amp; ID</div>
                                                </td>
                                                <td className="px-6 py-5">Winneba Youth Choir</td>
                                                <td className="px-6 py-5 text-gray-500">2 hours ago</td>
                                                <td className="px-6 py-5">
                                                    <div className="flex justify-end gap-2">
                                                        <button className="text-xs font-bold uppercase tracking-widest text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 px-3 py-1 transition-colors">Approve</button>
                                                        <button className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1 transition-colors">Reject</button>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr className="hover:bg-primary/5 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="font-bold">Prof. Adetola A.</div>
                                                    <div className="text-xs text-blue-600 hover:underline cursor-pointer">View Portfolio &amp; ID</div>
                                                </td>
                                                <td className="px-6 py-5">University of Lagos</td>
                                                <td className="px-6 py-5 text-gray-500">Yesterday</td>
                                                <td className="px-6 py-5">
                                                    <div className="flex justify-end gap-2">
                                                        <button className="text-xs font-bold uppercase tracking-widest text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 px-3 py-1 transition-colors">Approve</button>
                                                        <button className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1 transition-colors">Reject</button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Flagged Content Table */}
                            <div className="bg-white border border-red-200 shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-red-200 bg-red-50">
                                    <h3 className="font-display text-lg text-red-900">Flagged Content &amp; Disputes</h3>
                                    <p className="text-red-700 font-serif italic text-xs">Immediate action required. Funds held in escrow until resolved.</p>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left font-serif text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-200 text-xs uppercase tracking-widest text-gray-500">
                                                <th className="px-6 py-4 font-normal">Score Title</th>
                                                <th className="px-6 py-4 font-normal">Uploader</th>
                                                <th className="px-6 py-4 font-normal">Reason</th>
                                                <th className="px-6 py-4 font-normal text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-secondary">

                                            <tr className="hover:bg-red-50/50 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="font-bold">Oye (Reprint)</div>
                                                    <div className="text-[10px] text-gray-400">ID: 8842-X</div>
                                                </td>
                                                <td className="px-6 py-5">J. Doe</td>
                                                <td className="px-6 py-5">
                                                    <span className="text-red-600 italic">"Not the original arranger. Ripping off XYZ edition."</span>
                                                </td>
                                                <td className="px-6 py-5 text-right">
                                                    <button className="text-xs font-bold uppercase tracking-widest text-secondary border border-secondary/20 hover:bg-secondary hover:text-white px-3 py-1 transition-colors">Review Case</button>
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
