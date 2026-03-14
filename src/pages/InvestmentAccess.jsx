import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const InvestmentAccess = () => {
    const containerRef = useRef(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const firePinterestLead = () => {
        if (typeof window !== 'undefined' && typeof window.pintrk === 'function') {
            const eventId = `investment-guide-${Date.now()}`;
            window.pintrk('track', 'lead', {
                event_id: eventId,
                lead_type: 'Investment Guide',
            });
        }
    };

    useEffect(() => {
        if (localStorage.getItem('unlocked_investment') === 'true') {
            window.location.hash = '#/investment';
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
            setError('Please provide both your name and email.');
            setIsSubmitting(false);
            return;
        }

        try {
            // =========================================================================
            // INTEGRATION POINT:
            // Replace this URL with your Mailchimp, Formspree, or Flodesk POST endpoint
            // Example Formspree: 'https://formspree.io/f/YOUR_FORM_ID'
            // Example Web3Forms: 'https://api.web3forms.com/submit'
            // =========================================================================
            const endpoint = 'https://formspree.io/f/EXAMPLE_ID_CHANGE_ME';
            
            // Note: IF you use Formspree, the name attributes must match 'email' and 'name'
            // If we don't have a real endpoint yet we'll just simulate a delay and pass them through.
            
            // SIMULATED NETWORK DELAY FOR NOW:
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // UNCOMMENT THIS BLOCK to actually send the data:
            /*
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ name, email }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            */

            // Success! Store a permanent flag in localStorage and redirect to the actual guide
            firePinterestLead();
            localStorage.setItem('unlocked_investment', 'true');
            window.location.hash = '#/investment';
            window.scrollTo(0, 0);

        } catch (err) {
            console.error(err);
            setError('There was a problem submitting your request. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <main ref={containerRef} className="bg-moss text-cream min-h-screen pt-40 md:pt-48 pb-32 px-6 relative flex flex-col justify-center items-center">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-[80vw] h-[120%] opacity-[0.03] select-none pointer-events-none transform rotate-3 mix-blend-screen">
                <div className="w-full h-full bg-contain bg-right-top bg-no-repeat grayscale" style={{ backgroundImage: `url('/assets/blueprint_residential_elevation_1772202237636.png')` }}></div>
            </div>
            <div className="absolute inset-0 noise-overlay mix-blend-overlay opacity-30 pointer-events-none"></div>

            <div className="max-w-xl mx-auto w-full relative z-10">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
                    
                    {/* Header */}
                    <div className="mb-10 text-center stagger-fade">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-clay/20 text-clay mb-6 border border-clay/30">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="font-drama italic text-4xl md:text-5xl mb-4 text-cream">Investment Guide</h1>
                        <p className="font-body text-cream/70 text-lg leading-relaxed max-w-sm mx-auto">
                            Enter your details below to instantly unlock the Verdant Oak pricing and collections.
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
                            <label htmlFor="name" className="absolute -top-2 left-4 px-2 bg-moss text-xs font-data uppercase tracking-widest text-cream/70 group-focus-within:text-clay transition-colors z-10">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-transparent border-2 border-white/20 rounded-xl px-5 py-4 text-cream font-body placeholder-white/20 focus:outline-none focus:border-clay transition-colors relative z-0"
                                placeholder="E.g. Taylor"
                                required
                            />
                        </div>

                        <div className="relative group">
                            <label htmlFor="email" className="absolute -top-2 left-4 px-2 bg-moss text-xs font-data uppercase tracking-widest text-cream/70 group-focus-within:text-clay transition-colors z-10">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent border-2 border-white/20 rounded-xl px-5 py-4 text-cream font-body placeholder-white/20 focus:outline-none focus:border-clay transition-colors relative z-0"
                                placeholder="hello@example.com"
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`mt-4 w-full py-5 rounded-xl font-heading font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl border border-transparent ${
                                isSubmitting 
                                ? 'bg-white/10 text-white/50 cursor-not-allowed' 
                                : 'bg-clay text-cream hover:bg-clay/90 hover:-translate-y-1 shadow-clay/20'
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Unlocking...
                                </>
                            ) : (
                                <>
                                    Reveal the Guide
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-cream/40 text-sm font-body px-4 stagger-fade">
                        By submitting, you agree to receive occasional updates. We never share your email.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default InvestmentAccess;
