import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const WeddingAccess = () => {
    const containerRef = useRef(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [weddingDate, setWeddingDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (localStorage.getItem('unlocked_wedding_guide') === 'true') {
            window.location.hash = '#/wedding-guide';
            return;
        }

        let ctx = gsap.context(() => {
            gsap.fromTo('.stagger-fade', 
                { y: 30, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
            );
        }, containerRef);
        return () => ctx?.revert();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        if (!email || !name) {
            setError('Please provide your name and email.');
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulated network delay
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Store permanent flag and redirect
            localStorage.setItem('unlocked_wedding_guide', 'true');
            window.location.hash = '#/wedding-guide';
            window.scrollTo(0, 0);

        } catch (err) {
            console.error(err);
            setError('There was a problem submitting your request. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <main ref={containerRef} className="bg-moss/95 text-cream min-h-screen pt-40 md:pt-48 pb-32 px-6 relative flex flex-col justify-center items-center">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-[80vw] h-[120%] opacity-[0.03] select-none pointer-events-none transform rotate-3 mix-blend-screen">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat grayscale" style={{ backgroundImage: `url('/assets/wedding/wedding guide photos/Wise Wedding-165.jpg')` }}></div>
            </div>
            <div className="absolute inset-0 noise-overlay mix-blend-overlay opacity-30 pointer-events-none"></div>

            <div className="max-w-xl mx-auto w-full relative z-10">
                <div className="bg-[#1a231e]/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clay/20 via-clay to-clay/20"></div>

                    {/* Header */}
                    <div className="mb-10 text-center stagger-fade flex flex-col items-center">
                        <p className="font-data text-clay text-sm uppercase tracking-widest mb-4 inline-block border-b border-clay/30 pb-2">Exclusive Access</p>
                        <h1 className="font-drama italic text-4xl md:text-5xl mb-4 text-cream">The Wedding Guide</h1>
                        <p className="font-body text-cream/80 text-lg leading-relaxed max-w-sm mx-auto">
                            Enter your details below to instantly unlock the Verdant Oak planning guide, timelines, and complete package information.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 stagger-fade">
                        {error && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-medium text-center">
                                {error}
                            </div>
                        )}
                        
                        <div className="relative group">
                            <label htmlFor="name" className="absolute -top-2 left-4 px-2 bg-[#1a231e] text-xs font-data uppercase tracking-widest text-cream/70 group-focus-within:text-clay transition-colors z-10">
                                First & Last Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-cream font-body placeholder-white/10 focus:outline-none focus:border-clay focus:bg-black/30 transition-colors relative z-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                placeholder="E.g. Taylor & Jordan"
                                required
                            />
                        </div>

                        <div className="relative group">
                            <label htmlFor="email" className="absolute -top-2 left-4 px-2 bg-[#1a231e] text-xs font-data uppercase tracking-widest text-cream/70 group-focus-within:text-clay transition-colors z-10">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-cream font-body placeholder-white/10 focus:outline-none focus:border-clay focus:bg-black/30 transition-colors relative z-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                placeholder="hello@example.com"
                                required
                            />
                        </div>

                        <div className="relative group">
                            <label htmlFor="weddingDate" className="absolute -top-2 left-4 px-2 bg-[#1a231e] text-xs font-data uppercase tracking-widest text-cream/70 group-focus-within:text-clay transition-colors z-10">
                                Wedding Date (Optional)
                            </label>
                            <input
                                type="text"
                                id="weddingDate"
                                value={weddingDate}
                                onChange={(e) => setWeddingDate(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-cream font-body placeholder-white/10 focus:outline-none focus:border-clay focus:bg-black/30 transition-colors relative z-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                placeholder="MM/DD/YYYY or Season"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`mt-6 w-full py-5 rounded-xl font-heading font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-xl border border-transparent ${
                                isSubmitting 
                                ? 'bg-white/5 text-white/30 cursor-not-allowed border-white/5' 
                                : 'bg-clay text-cream hover:bg-clay/90 hover:-translate-y-1 shadow-clay/20'
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Unlocking...
                                </>
                            ) : (
                                <>
                                    Reveal the Guide
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-cream/40 text-xs font-body px-4 stagger-fade">
                        By submitting, you agree to receive occasional updates. Your information is securely stored and never shared.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default WeddingAccess;
