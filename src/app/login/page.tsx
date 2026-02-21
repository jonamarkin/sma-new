import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function LoginPage() {
    return (
        <>
            <Header />

            <main className="min-h-[80vh] flex flex-col items-center justify-center bg-parchment py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-secondary">
                {/* Decorative background watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-[400px]">history_edu</span>
                </div>

                <div className="max-w-md w-full space-y-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-display mb-2">Sign In</h1>
                        <p className="font-serif text-sm text-gray-500 italic">Access your purchased scores or upload new compositions to the archive.</p>
                    </div>

                    <form className="mt-10 bg-white border border-primary/20 p-8 shadow-2xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-primary font-bold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full border-b border-secondary/20 bg-transparent py-2 font-serif focus:outline-none focus:border-primary transition-colors text-secondary placeholder-gray-400"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-primary font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="w-full border-b border-secondary/20 bg-transparent py-2 font-serif focus:outline-none focus:border-primary transition-colors text-secondary placeholder-gray-400"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 accent-primary border-gray-300 rounded-sm"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm font-serif text-gray-600">
                                    Remember this device
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-serif text-primary hover:text-secondary italic transition-colors">
                                    Lost Credentials?
                                </a>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent text-sm uppercase tracking-widest font-bold text-secondary bg-primary hover:bg-accent-gold transition-all shadow-md hover:shadow-lg focus:outline-none"
                            >
                                Sign In
                            </button>
                        </div>

                        <div className="mt-6 text-center text-sm font-serif text-gray-500 border-t border-primary/10 pt-6">
                            New to Sheet Music Africa? <br />
                            <a href="#" className="text-primary hover:text-secondary border-b border-primary/30 transition-all ml-1 italic inline-block mt-2">
                                Create an Account
                            </a>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    );
}
