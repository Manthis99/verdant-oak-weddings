import React from 'react';

const Footer = ({ hidePreFooter }) => {
  return (
    <>
      {/* PRE-FOOTER SOCK */}
      {!hidePreFooter && (
        <section className="bg-[#EBEDE9] text-moss pt-48 pb-64 px-6 relative z-20 -mt-24">
        <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-drama italic text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] mb-12">
            Ready to build something <br/> <span className="text-clay">that outlives you?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#/investment" className="px-10 py-5 bg-clay text-cream rounded-[2rem] font-heading font-semibold text-lg hover:bg-clay/90 btn-magnetic shadow-lg shadow-clay/20 inline-block text-center transition-transform">
              Request the Investment Overview
            </a>
            <a href="#/book" className="px-10 py-5 bg-white text-moss rounded-[2rem] font-heading font-semibold text-lg hover:bg-white/90 btn-lift inline-block text-center transition-transform shadow-md border border-moss/10">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
      )}

      {/* MAIN FOOTER */}
      <footer className="bg-moss text-cream rounded-t-[3rem] md:rounded-t-[4rem] px-6 pt-24 pb-12 relative z-30 overflow-hidden -mt-24 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 noise-overlay mix-blend-overlay opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Footer Links & Status */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pt-12 border-t border-cream/10">
          
          <div className="md:col-span-5">
            <div className="font-heading font-bold tracking-tight text-3xl flex items-center gap-2 mb-6 text-cream">
              <svg className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700 ease-in-out" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                {/* Ring 1 */}
                <path d="M40 30 C 15 30, 20 70, 40 70 C 60 70, 60 30, 40 30 Z" />
                {/* Ring 2 */}
                <path d="M60 35 C 40 35, 40 75, 60 75 C 80 75, 85 35, 60 35 Z" />
                {/* Spark / Star */}
                <path d="M50 10 L 50 20 M 45 15 L 55 15" strokeWidth="3" />
              </svg>
              Verdant Oak <span className="text-clay italic font-serif inline-block pt-1">Weddings</span>
            </div>
            <p className="font-body text-cream max-w-sm mb-10 text-lg">
              Honest, cinematic documentation for couples who value legacy over perfection. 
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-moss border border-cream/20 shadow-inner">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4ade80]"></span>
              </div>
              <span className="font-data text-xs text-cream/90 uppercase tracking-widest font-medium">Accepting 2026 Inquiries</span>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="font-data text-sm text-moss uppercase tracking-widest mb-2 font-bold">Navigation</h4>
            {/* <a href="#/" className="font-body text-cream hover:text-clay transition-colors text-lg">Home</a> */}
            <a href="#/" className="font-body text-cream hover:text-clay transition-colors text-lg">Weddings</a>
            <a href="#/wedding-guide" className="font-body text-cream hover:text-clay transition-colors text-lg">The Guide</a>
            <a href="#/about" className="font-body text-cream hover:text-clay transition-colors text-lg">About</a>
            <a href="#/access" className="font-body text-cream hover:text-clay transition-colors text-lg">Investment Guide</a>
            {/* <a href="#/weddings" className="font-body text-cream hover:text-clay transition-colors text-lg">Weddings</a> */}
            {/* <a href="#/flagship" className="font-body text-cream hover:text-clay transition-colors text-lg">The Flagship</a> */}
            {/* <a href="#/portfolio" className="font-body text-cream hover:text-clay transition-colors text-lg">Creative Portfolio</a> */}
          </div>

          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="font-data text-sm text-moss uppercase tracking-widest mb-2 font-bold">Legal</h4>
            {/* <a href="#" className="font-body text-cream hover:text-clay transition-colors text-lg">Terms of Service</a> */}
            {/* <a href="#" className="font-body text-cream hover:text-clay transition-colors text-lg">Privacy Policy</a> */}
            <p className="font-data text-xs text-cream/80 mt-auto pt-8">
              © {new Date().getFullYear()} Verdant Oak Weddings. <br/>All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
