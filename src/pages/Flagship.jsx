import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Flagship = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo('.hero-text span, .hero-text div, .hero-btn', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );

      // Section reveal animation
      gsap.utils.toArray('.reveal-section').forEach(section => {
        gsap.fromTo(section,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            }
          }
        );
      });
      
      // Parallax effect on images
      gsap.utils.toArray('.parallax-image').forEach(image => {
        gsap.to(image, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: image.parentElement,
            start: "top bottom", 
            end: "bottom top",
            scrub: true
          } 
        });
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-cream text-moss min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[100dvh] flex items-end pb-24 px-6 md:px-12 overflow-hidden bg-moss">
        <div className="absolute inset-0 noise-overlay mix-blend-overlay opacity-50 z-20"></div>
        {/* The Hybrid Blueprint Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center parallax-image opacity-80" 
          style={{ backgroundImage: `url('/assets/blueprint_flagship_hero_1772209297584.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-moss/20 z-10"></div>
        
        <div className="max-w-7xl w-full mx-auto relative z-30 hero-text">
          <div className="font-data text-clay text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-12 h-[1px] bg-clay"></span>
            Project 001
          </div>
          <h1 className="font-heading font-extrabold text-5xl md:text-[6rem] lg:text-[8rem] text-cream leading-[0.9] tracking-tighter mb-4">
            The Flagship <br/>
            <span className="font-drama italic font-normal text-clay text-[1.2em] relative -left-2 block md:inline-block">Location.</span>
          </h1>
          <p className="font-body text-cream/80 text-xl md:text-2xl max-w-2xl mt-8 mb-12">
            This is where theory becomes structure. The first physical implementation of the shared-equity coliving model.
          </p>
          <a href="#/book" className="hero-btn inline-flex items-center gap-4 px-10 py-5 bg-clay text-cream rounded-full font-heading font-semibold text-lg hover:bg-clay/90 btn-magnetic shadow-lg shadow-clay/20 transition-all duration-300">
            Request Flagship Prospectus
          </a>
        </div>
      </section>

      {/* 2. THE PITCH / BLUEPRINT GALLERY */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#EBEDE9] text-moss reveal-section z-20">
        <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 grid md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="font-data text-clay text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-clay"></span>
                The Blueprint
              </p>
              <h2 className="font-heading font-bold text-4xl md:text-6xl max-w-2xl">
                Designed from the <span className="font-drama italic text-moss">ground up</span> for community.
              </h2>
            </div>
            <p className="font-body text-moss/80 text-lg">
              Every hallway, every shared space, and every private unit has been meticulously planned to foster interaction without sacrificing privacy. We don't just build apartments; we architect social environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 mb-32">
            {/* Gallery Item 1 */}
            <div className="flex flex-col gap-8 reveal-section">
              <div className="rounded-[2rem] overflow-hidden border-2 border-moss/10 relative group h-[400px] md:h-[600px] shadow-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('/assets/blueprint_courtyard_plan_1772202253483.png')` }}
                ></div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl mb-4 text-moss">The Communal Hearth</h3>
                <p className="font-body text-moss/80 text-lg">
                  At the center of it all lies the courtyard. It's the physical and social anchor of the property, surrounded by overlapping pathways that guarantee spontaneous everyday interactions.
                </p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="flex flex-col gap-8 reveal-section mt-0 lg:mt-32">
              <div className="rounded-[2rem] overflow-hidden border-2 border-moss/10 relative group h-[400px] md:h-[600px] shadow-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('/assets/blueprint_residential_elevation_1772202237636.png')` }}
                ></div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl mb-4 text-moss">Architectural Integrity</h3>
                <p className="font-body text-moss/80 text-lg">
                  We reject the lifeless boxes of modern developments. The Flagship embraces character, history, and structural permanence, setting a standard for decades to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE MODEL (EQUITY SPREAD) */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-moss relative z-30 reveal-section">
         <div className="max-w-5xl mx-auto">
           <div className="text-center mb-20">
             <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight mb-6">
               The Economic <span className="font-drama italic text-clay">Engine.</span>
             </h2>
             <p className="font-body text-moss/70 text-lg md:text-xl max-w-3xl mx-auto">
               The Flagship isn't just a place to live; it's an active wealth-generation vehicle for the people who steward it.
             </p>
           </div>

           <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cream border border-charcoal/10 rounded-[2rem] p-10 flex flex-col gap-4 shadow-sm">
                 <div className="w-12 h-12 rounded-full bg-clay/10 flex items-center justify-center text-clay font-data mb-4">01</div>
                 <h3 className="font-heading font-bold text-2xl">Sweat Equity</h3>
                 <p className="font-body text-moss/70">
                   Residents who directly manage, maintain, or improve the flagship location earn accelerated equity multipliers in the local trust.
                 </p>
              </div>
              <div className="bg-moss text-cream border border-moss rounded-[2rem] p-10 flex flex-col gap-4 shadow-xl transform md:-translate-y-4">
                 <div className="w-12 h-12 rounded-full bg-cream/20 flex items-center justify-center text-cream font-data mb-4">02</div>
                 <h3 className="font-heading font-bold text-2xl">Resident Alignment</h3>
                 <p className="font-body text-cream/80">
                   Long-term stability creates value. Every month of tenancy converts a percentage of rent directly into an ownership stake in the asset.
                 </p>
              </div>
              <div className="bg-cream border border-charcoal/10 rounded-[2rem] p-10 flex flex-col gap-4 shadow-sm">
                 <div className="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center text-moss font-data mb-4">03</div>
                 <h3 className="font-heading font-bold text-2xl">Capital Return</h3>
                 <p className="font-body text-moss/70">
                   As the property appreciates and rental yields stabilize, passive investors and resident-owners share in the quarterly dividends.
                 </p>
              </div>
           </div>
         </div>
      </section>

    </div>
  );
};

export default Flagship;
