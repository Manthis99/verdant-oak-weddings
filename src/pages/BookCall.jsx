import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const BookCall = () => {
  const containerRef = useRef(null);
  
  // Form State
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      date: '',
      message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
        gsap.fromTo('.stagger-fade', 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
        );
    }, containerRef);
    return () => ctx?.revert();
  }, []);

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.id]: e.target.value
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('submitting');
      setErrorMessage('');

      // =========================================================================
      // WEB3FORMS INTEGRATION
      // To make this live, simply go to https://web3forms.com/
      // generate a free access key for your email, and paste it below.
      // =========================================================================
      const ACCESS_KEY = "fbc9017c-e67a-4856-879c-6b92a7f6a18a"; 

      try {
          if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
              // Simulated success for preview purposes if key hasn't been set yet
              await new Promise(r => setTimeout(r, 1500));
              setStatus('success');
              return;
          }

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  access_key: ACCESS_KEY,
                  subject: `New Wedding Inquiry from ${formData.name}`,
                  from_name: formData.name,
                  replyto: formData.email,
                  name: formData.name,
                  email: formData.email,
                  date: formData.date,
                  message: formData.message
              })
          });

          const result = await response.json();
          if (result.success) {
              setStatus('success');
          } else {
              throw new Error(result.message || "Failed to submit");
          }
      } catch (err) {
          console.error(err);
          setStatus('error');
          setErrorMessage(err.message || 'There was a problem sending your message. Please try again.');
      }
  };

  return (
    <main ref={containerRef} className="bg-moss/95 text-cream min-h-screen pt-40 md:pt-48 pb-32 px-6 relative flex flex-col justify-center items-center">
        {/* Background Details */}
        <div className="absolute top-0 left-0 w-[100vw] h-[120%] opacity-[0.03] select-none pointer-events-none transform -rotate-3 mix-blend-screen">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat grayscale" style={{ backgroundImage: `url('/assets/wedding/wedding guide photos/Wise Wedding-165.jpg')` }}></div>
        </div>
        <div className="absolute inset-0 noise-overlay mix-blend-overlay opacity-30 pointer-events-none z-0"></div>

        <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center">
            
            {/* Header */}
            <div className="mb-12 text-center stagger-fade flex flex-col items-center">
                <p className="font-data text-accent-blue text-sm uppercase tracking-widest mb-4 inline-block border-b border-accent-blue/30 pb-2">Get in Touch</p>
                <h1 className="font-drama italic text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-cream">
                    Let's tell <span className="text-accent-blue">your story.</span>
                </h1>
                <p className="font-body text-cream text-lg md:text-xl max-w-xl mx-auto">
                    Fill out the form below to inquire about dates, custom collections, or just to say hello. I'll get back to you personally within 48 hours.
                </p>
            </div>

            {/* Form Container */}
            <div className="w-full bg-[#1a231e]/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden stagger-fade">
                
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clay/20 via-clay to-clay/20"></div>

                {status === 'success' ? (
                    <div className="py-16 flex flex-col items-center text-center animate-pulse-once">
                        <div className="w-20 h-20 rounded-full bg-accent-blue/20 text-accent-blue flex items-center justify-center mb-6">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="font-drama italic text-4xl text-cream mb-4">Inquiry Sent</h2>
                        <p className="font-body text-cream/90 text-lg max-w-sm">
                            Thank you for reaching out! I've received your details and will be in touch shortly.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        
                        {status === 'error' && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-medium text-center">
                                {errorMessage}
                            </div>
                        )}
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <label htmlFor="name" className="absolute -top-2 left-4 px-2 bg-[#1a231e] text-xs font-data uppercase tracking-widest text-cream/90 group-focus-within:text-accent-blue transition-colors z-10">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-cream font-body placeholder-white/30 focus:outline-none focus:border-clay focus:bg-black/30 transition-colors relative z-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                    placeholder="Taylor Anderson & Jordan White"
                                    required
                                />
                            </div>

                            <div className="relative group">
                                <label htmlFor="email" className="absolute -top-2 left-4 px-2 bg-[#1a231e] text-xs font-data uppercase tracking-widest text-cream/90 group-focus-within:text-accent-blue transition-colors z-10">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-cream font-body placeholder-white/30 focus:outline-none focus:border-clay focus:bg-black/30 transition-colors relative z-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                    placeholder="taylor@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <label htmlFor="date" className="absolute -top-2 left-4 px-2 bg-[#1a231e] text-xs font-data uppercase tracking-widest text-cream/90 group-focus-within:text-accent-blue transition-colors z-10">
                                Wedding Date / Location
                            </label>
                            <input
                                type="text"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-cream font-body placeholder-white/30 focus:outline-none focus:border-clay focus:bg-black/30 transition-colors relative z-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                placeholder="E.g. Oct 2025, Chicago IL"
                            />
                        </div>

                        <div className="relative group hover:z-20">
                            <label htmlFor="message" className="absolute -top-2 left-4 px-2 bg-[#1a231e] text-xs font-data uppercase tracking-widest text-cream/90 group-focus-within:text-accent-blue transition-colors z-10">
                                What's on your mind?
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-cream font-body placeholder-white/30 focus:outline-none focus:border-clay focus:bg-black/30 transition-colors relative z-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] resize-none"
                                placeholder="What are you looking for in a photographer? Any questions for me?"
                                required
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'submitting'}
                            className={`mt-4 w-full py-5 rounded-xl font-heading font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-xl border border-transparent ${
                                status === 'submitting' 
                                ? 'bg-white/5 text-white/30 cursor-not-allowed border-white/5' 
                                : 'bg-clay text-cream hover:bg-clay/90 hover:-translate-y-1 shadow-clay/20 btn-magnetic'
                            }`}
                        >
                            {status === 'submitting' ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Send Inquiry"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    </main>
  );
};

export default BookCall;
