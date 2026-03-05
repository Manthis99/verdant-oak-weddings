import React, { useEffect } from 'react';

const BookCall = () => {
  useEffect(() => {
    // Dynamically load the Calendly script only when this component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-moss text-cream pt-32 pb-24 relative">
      <div className="absolute inset-0 noise-overlay"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-clay/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        <div className="text-center mb-12">
            <h1 className="font-drama italic text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            Let's build <span className="text-clay">together.</span>
            </h1>
            <p className="font-body text-cream/80 text-lg md:text-xl max-w-xl mx-auto">
            Find a time that works for you. I'm looking forward to learning about your vision and how we can partner on Verdant Dwelling.
            </p>
        </div>

        {/* Calendly Widget Container */}
        <div className="w-full bg-cream rounded-[2rem] p-4 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Calendly inline widget begin */}
            <div 
                className="calendly-inline-widget w-full" 
                data-url="https://calendly.com/proctom/45?primary_color=cc5c38" 
                style={{ minWidth: '320px', height: '700px' }}
            ></div>
            {/* Calendly inline widget end */}
        </div>
      </div>
    </main>
  );
};

export default BookCall;
