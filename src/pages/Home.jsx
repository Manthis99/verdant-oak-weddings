import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// HERO COMPONENT
// ============================================================================
const Hero = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const ctaRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade up for text elements
      gsap.fromTo(
        textRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2, // slight delay on load
        }
      );

      // Animate the drafting underline in Hero
      gsap.fromTo('.drafting-line', 
        { strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut', delay: 1.2 }
      );

      // Fade up CTAs
      gsap.fromTo(
        ctaRefs.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.8,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-moss">
      {/* Background Image - Modern Industrial Warehouse Interior */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2574&auto=format&fit=crop")' }}
      ></div>
      
      {/* Gradient Overlay - Primary to black (Moss to Charcoal) */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-moss/80 to-transparent"></div>
      <div className="absolute inset-0 noise-overlay"></div>

      {/* Content positioned to bottom-left third */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 flex flex-col justify-end">
        <div className="max-w-3xl">
          <p 
            ref={(el) => (textRefs.current[0] = el)}
            className="font-data text-clay tracking-widest uppercase text-sm mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-clay"></span>
            Verdant Dwelling Protocol
          </p>
          
          <h1 className="mb-6 leading-[1.1] relative z-10">
            <span 
              ref={(el) => (textRefs.current[1] = el)}
              className="block font-heading font-bold text-cream text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4"
            >
              Build Wealth. Live in Community.
            </span>
            <span 
              ref={(el) => (textRefs.current[2] = el)}
              className="block font-drama italic text-cream/90 text-[5rem] md:text-[8rem] lg:text-[11.5rem] leading-[0.85] tracking-tighter pr-4 -ml-2 relative inline-block"
            >
              Do It Together.
              {/* Precision Architectural Underline */}
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-[110%] h-4 md:h-6 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path className="drafting-line" strokeDasharray="100" strokeDashoffset="100" d="M0,5 L100,5" stroke="var(--color-clay)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M0,2 L0,8 M100,2 L100,8 M50,3.5 L50,6.5" stroke="var(--color-clay)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
              </svg>
            </span>
          </h1>

          <p 
            ref={(el) => (textRefs.current[3] = el)}
            className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            A shared-equity coliving model for people who want more than an apartment and more than a passive investment. <strong className="text-cream font-medium">Live here. Own here. Grow here.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#/#blueprint"
              ref={(el) => (ctaRefs.current[0] = el)}
              className="px-8 py-4 bg-clay text-cream rounded-full font-heading font-semibold text-lg hover:bg-clay/90 btn-magnetic flex items-center justify-center gap-2 inline-block text-center"
            >
              See How It Works
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="#/book"
              ref={(el) => (ctaRefs.current[1] = el)}
              className="px-8 py-4 bg-cream/10 backdrop-blur-md text-cream border border-cream/20 rounded-full font-heading font-medium text-lg hover:bg-cream/20 btn-lift flex items-center justify-center inline-block text-center"
            >
              Request the Investor Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// PHILOSOPHY COMPONENT (THE MANIFESTO)
// ============================================================================
const Philosophy = () => {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    // Parallax background
    gsap.to('.philosophy-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Staggered text reveal for statements
    const quotes = gsap.utils.toArray('.manifesto-quote');
    quotes.forEach((quote) => {
      gsap.fromTo(
        quote,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quote,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section 
      id="philosophy" 
      ref={sectionRef} 
      className="relative py-32 md:py-48 bg-[#EBEDE9] text-moss overflow-hidden"
    >
      {/* Background Texture - Parallax target */}
      <div 
        className="philosophy-bg absolute -top-[20%] left-0 w-full h-[140%] bg-cover bg-center opacity-[0.05] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/assets/blueprint_abstract_community_1772202193037.png')` }}
      ></div>
      <div className="absolute inset-0 noise-overlay"></div>

      <div ref={textContainerRef} className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-24 md:gap-40">
          
          {/* Statement Pair 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 manifesto-quote">
              <p className="font-data text-clay text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-clay"></span>
                The Default
              </p>
              <p className="font-heading font-medium text-moss/70 text-xl leading-relaxed">
                Most housing isolates you. <br />Most investing disconnects you.
              </p>
            </div>
            <div className="md:col-span-8 manifesto-quote">
              <p className="font-data text-moss text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-moss"></span>
                Our Conviction
              </p>
              <h2 className="font-drama italic text-6xl md:text-[5rem] lg:text-[7.5rem] leading-[0.9] text-moss tracking-tight">
                We believe housing should build<br/>
                <span className="text-clay relative inline-block group">
                  more than equity.
                  {/* Precision Architectural Underline */}
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-4 md:h-6 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path className="philosophy-drafting-line" strokeDasharray="100" strokeDashoffset="100" d="M0,5 L100,5" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M0,2 L0,8 M100,2 L100,8 M25,4 L25,6 M50,3.5 L50,6.5 M75,4 L75,6" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                </span>
              </h2>
            </div>
          </div>

          {/* Statement Pair 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 manifesto-quote">
               <p className="font-data text-clay text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-clay"></span>
                The Reality
              </p>
              <p className="font-heading font-medium text-moss/70 text-xl leading-relaxed">
                You're told to rent alone. Or buy alone. Or invest passively and hope the numbers work.
              </p>
            </div>
            <div className="md:col-span-8 manifesto-quote flex flex-col gap-8">
              <h2 className="font-drama italic text-6xl md:text-[5rem] lg:text-[7.5rem] leading-[0.9] text-moss tracking-tight">
                You don't just want a return. <br />You want <span className="text-clay relative inline-block">
                  roots.
                  {/* Precision Architectural Underline */}
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-[120%] h-4 md:h-6 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path className="philosophy-drafting-line" strokeDasharray="100" strokeDashoffset="100" d="M0,5 L100,5" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M0,2 L0,8 M100,2 L100,8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                </span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 font-body text-moss/80 text-lg border-l border-moss/30 pl-6 lg:ml-12">
                <p>• Space shapes people.</p>
                <p>• Ownership changes behavior.</p>
                <p>• Proximity creates depth.</p>
                <p>• Shared responsibility builds stability.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ============================================================================
// PROTOCOL COMPONENT (STICKY STACKING ARCHIVE)
// ============================================================================
const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Last card doesn't scale down
        
        ScrollTrigger.create({
          trigger: card,
          start: "top 15%",
          endTrigger: ".protocol-container",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          id: `pin-${index}`,
        });

        // Scale and blur the card as the next one comes over it
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: "blur(10px)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        });
      });
      
      // Animations for SVG elements within cards
      
      // Card 1: Invest Together (Capital Pooling)
      const tl1 = gsap.timeline({ repeat: -1 });
      
      // Reset state
      tl1.set('.pool-node', { scale: 0, opacity: 0, transformOrigin: "center center" })
         .set('.pool-line', { strokeDashoffset: 100, strokeDasharray: 100 })
         .set('.pool-core', { scale: 0.5, opacity: 0.2, strokeWidth: 1 })
         .set('.pool-ring', { scale: 0.8, opacity: 0 });

      // 1. Nodes appear (investors)
      tl1.to('.pool-node', { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "back.out(2)" 
      })
      // 2. Lines draw to center (pooling capital)
      .to('.pool-line', { 
        strokeDashoffset: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.inOut" 
      }, "-=0.4")
      // 3. Core expands and strengthens
      .to('.pool-core', { 
        scale: 1.2, 
        opacity: 1, 
        strokeWidth: 4, 
        fill: "rgba(204, 88, 51, 0.2)", // Clay with opacity
        stroke: "#CC5833", // Clay
        duration: 1, 
        ease: "elastic.out(1, 0.5)" 
      })
      // 4. Ripple effect representing the shared asset
      .to('.pool-ring', {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "<0.2")
      // 5. Hold
      .to({}, { duration: 1.5 })
      // 6. Recede
      .to(['.pool-node', '.pool-line', '.pool-core'], {
         opacity: 0,
         duration: 0.8,
         ease: "power2.inOut"
      });

      // Card 2: Assembly / Cohesive Foundation
      const tl2 = gsap.timeline({ repeat: -1 });
      tl2.set('.block-left', { x: -30, opacity: 0 })
         .set('.block-right', { x: 30, opacity: 0 })
         .set('.block-center', { y: -20, opacity: 0 })
         .set('.block-top', { y: -30, opacity: 0 })
         .set('.block-core', { scaleY: 0, opacity: 0, transformOrigin: "bottom center" })
         .set('.block-assemblage', { y: 0, filter: 'drop-shadow(0px 0px 0px rgba(204,88,51,0))' })
         
         // 1. Blocks assemble together
         .to(['.block-left', '.block-right', '.block-center', '.block-top'], {
           x: 0, y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1
         })
         
         // 2. Core connects/ignites
         .to('.block-core', { scaleY: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }, "+=0.2")
         .to(['.block-left', '.block-right', '.block-center', '.block-top'], { stroke: '#CC5833', duration: 0.6 }, "<")
         .to('.block-assemblage', { filter: 'drop-shadow(0px 10px 20px rgba(204,88,51,0.4))', duration: 0.6 }, "<")
         
         // 3. Ascend together (lift up)
         .to('.block-assemblage', { y: -15, duration: 1.5, ease: 'sine.inOut' })
         
         // 4. Descend
         .to('.block-assemblage', { y: 0, duration: 1.5, ease: 'sine.inOut', delay: 0.5 })
         
         // 5. Deconstruct
         .to('.block-core', { scaleY: 0, opacity: 0, duration: 0.4 }, "+=0.2")
         .to(['.block-left', '.block-right', '.block-center', '.block-top'], { stroke: 'currentColor', duration: 0.4 }, "<")
         .to('.block-assemblage', { filter: 'drop-shadow(0px 0px 0px rgba(204,88,51,0))', duration: 0.4 }, "<")
         .to('.block-left', { x: -30, opacity: 0, duration: 0.8 }, "+=0.1")
         .to('.block-right', { x: 30, opacity: 0, duration: 0.8 }, "<")
         .to('.block-center', { y: -20, opacity: 0, duration: 0.8 }, "<")
         .to('.block-top', { y: -30, opacity: 0, duration: 0.8 }, "<");

      // Card 3: Build Long-Term Equity (Compound Bar Chart)
      const tl3 = gsap.timeline({ repeat: -1 });
      
      tl3.set('.equity-bar', { scaleY: 0, opacity: 0, transformOrigin: "bottom center" })
         .set('.equity-line', { strokeDashoffset: 300, strokeDasharray: 300 })
         .set('.equity-point', { scale: 0, opacity: 0, transformOrigin: "center center" });

      // 1. Bars grow incrementally describing time passing
      tl3.to('.equity-bar', {
        scaleY: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      })
      // 2. Trendline draws to show appreciation
      .to('.equity-line', {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, "-=0.5")
      // 3. Final value node pops
      .to('.equity-point', {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(2)"
      })
      // 4. Hold
      .to({}, { duration: 2 })
      // 5. Fade out
      .to(['.equity-bar', '.equity-line', '.equity-point'], {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="blueprint" className="bg-cream py-32 relative z-10 overflow-hidden border-t border-accent-blue/20">
      <div className="drafting-grid"></div>
      <div className="construction-line-y text-accent-blue left-8 hidden lg:block opacity-30"></div>
      <div className="construction-line-y text-accent-blue right-[10%] hidden lg:block opacity-30"></div>
      
      <div className="max-w-5xl mx-auto px-6 mb-24 relative">
        <span className="absolute -top-12 left-1/4 font-hand text-3xl text-clay -rotate-6 hidden md:block opacity-80">Phase 01: The Foundation</span>
        <h2 className="font-heading font-bold text-5xl md:text-7xl text-moss tracking-tight relative z-10">
          The <span className="font-drama italic font-normal text-moss">Architecture</span> <br/>Of Ownership.
        </h2>
      </div>

      <div ref={containerRef} className="protocol-container relative pb-[10vh]">
        
        {/* Card 1 */}
        <div className="protocol-card min-h-[70vh] w-full max-w-5xl mx-auto px-6 flex items-center justify-center mb-24 lg:mb-32 relative">
          <div className="construction-line-x text-accent-blue/40 top-1/4 -left-[20vw] right-[10vw]"></div>
          <div className="w-full bg-cream border border-accent-blue/20 rounded-[2rem] p-8 md:p-16 shadow-[0_15px_40px_-10px_rgba(33,46,64,0.1)] flex flex-col md:flex-row gap-12 items-center relative overflow-hidden mix-blend-multiply">
            {/* Watercolor Wash Effect */}
            <div className="absolute top-0 -right-20 w-[120%] h-[120%] bg-[radial-gradient(circle_at_top_right,var(--color-accent-blue)_0%,transparent_60%)] opacity-10 blur-3xl pointer-events-none mix-blend-multiply"></div>
            
            <div className="md:w-1/2 relative z-10">
              <span className="font-data text-accent-blue text-6xl md:text-8xl opacity-10 block mb-6 font-bold line-through">01</span>
              <span className="absolute top-6 left-16 font-hand text-4xl text-clay rotate-[-5deg]">1.</span>
              <h3 className="font-heading font-bold text-3xl md:text-5xl text-moss mb-4">Invest Together</h3>
              <p className="font-body text-moss/70 text-lg md:text-xl leading-relaxed">
                A small group pools capital to acquire a well-located property. Clear agreements. Transparent structure.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center relative z-10">
              <svg width="240" height="240" viewBox="0 0 240 240" className="text-moss overflow-visible">
                {/* Lines sending capital to center */}
                <line className="pool-line" x1="40" y1="40" x2="105" y2="105" stroke="currentColor" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" />
                <line className="pool-line" x1="200" y1="40" x2="135" y2="105" stroke="currentColor" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" />
                <line className="pool-line" x1="40" y1="200" x2="105" y2="135" stroke="currentColor" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" />
                <line className="pool-line" x1="200" y1="200" x2="135" y2="135" stroke="currentColor" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" />
                
                {/* Investor Nodes */}
                <circle className="pool-node" cx="40" cy="40" r="12" fill="currentColor" />
                <circle className="pool-node" cx="200" cy="40" r="12" fill="currentColor" />
                <circle className="pool-node" cx="40" cy="200" r="12" fill="currentColor" />
                <circle className="pool-node" cx="200" cy="200" r="12" fill="currentColor" />

                {/* Ripple Effect Ring */}
                <circle className="pool-ring" cx="120" cy="120" r="50" fill="none" stroke="#CC5833" strokeWidth="1" />

                {/* Shared Asset Core */}
                <circle className="pool-core" cx="120" cy="120" r="30" fill="transparent" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="protocol-card min-h-[70vh] w-full max-w-5xl mx-auto px-6 flex items-center justify-center mb-24 lg:mb-32 relative">
          <div className="construction-line-y text-clay/40 left-1/2 top-[-10vh] bottom-[-10vh] border-l border-dashed border-clay"></div>
          <span className="absolute -top-4 right-1/4 font-hand text-2xl text-accent-blue rotate-12 hidden md:block">Daily operations</span>
          
          <div className="w-full bg-cream border border-accent-blue/20 rounded-[2rem] p-8 md:p-16 shadow-[0_15px_40px_-10px_rgba(33,46,64,0.1)] flex flex-col md:flex-row gap-12 items-center relative overflow-hidden mix-blend-multiply">
            {/* Watercolor Wash Effect */}
            <div className="absolute bottom-0 -left-20 w-[120%] h-[120%] bg-[radial-gradient(circle_at_bottom_left,var(--color-moss)_0%,transparent_50%)] opacity-[0.05] blur-3xl pointer-events-none mix-blend-multiply"></div>

            <div className="md:w-1/2 relative z-10">
              <span className="font-data text-accent-blue text-6xl md:text-8xl opacity-10 block mb-6 font-bold line-through">02</span>
              <span className="absolute top-6 left-20 font-hand text-4xl text-clay rotate-[3deg]">2.</span>
              <h3 className="font-heading font-bold text-3xl md:text-5xl text-moss mb-4">Live & Operate</h3>
              <p className="font-body text-moss/70 text-lg md:text-xl leading-relaxed">
                Members live on-site and steward the space with aligned incentives and shared rhythms.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center relative z-10">
              <svg width="240" height="240" viewBox="0 0 240 240" className="text-moss overflow-visible">
                <g className="block-assemblage">
                  {/* Left Pillar */}
                  <rect className="block-left" x="70" y="120" width="30" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* Right Pillar */}
                  <rect className="block-right" x="140" y="120" width="30" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* Center Bridge */}
                  <rect className="block-center" x="100" y="100" width="40" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* Top Arch / Roof */}
                  <path className="block-top" d="M 50 100 L 190 100 L 120 40 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  
                  {/* Core Energy (Appears when assembled) */}
                  <rect className="block-core" x="100" y="120" width="40" height="60" fill="#CC5833" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="protocol-card min-h-[70vh] w-full max-w-5xl mx-auto px-6 flex items-center justify-center relative">
          <div className="construction-line-x text-cream/30 bottom-1/4 -left-[10vw] right-[20vw] mix-blend-overlay"></div>
          
          <div className="w-full bg-moss rounded-[2rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row gap-12 items-center relative overflow-hidden border border-cream/10">
            {/* Dark Watercolor Wash Effect */}
            <div className="absolute top-1/2 right-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,var(--color-moss)_0%,transparent_60%)] opacity-20 blur-3xl pointer-events-none transform -translate-y-1/2 translate-x-1/4 mix-blend-screen"></div>

            <div className="md:w-1/2 relative z-10">
              <span className="font-data text-cream text-6xl md:text-8xl opacity-5 block mb-6 font-bold line-through">03</span>
              <span className="absolute top-6 left-20 font-hand text-4xl text-accent-blue rotate-[-2deg]">3.</span>
              <h3 className="font-heading font-bold text-3xl md:text-5xl text-cream mb-4">Build Long-Term Equity</h3>
              <p className="font-body text-cream/70 text-lg md:text-xl leading-relaxed">
                Rental income and appreciation grow the value of the shared asset over time. Long-term thinking wins.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center relative z-10 w-full">
              <svg width="280" height="180" viewBox="0 0 280 180" className="text-moss overflow-visible">
                {/* Base Grid Line */}
                <line x1="20" y1="160" x2="260" y2="160" stroke="#F2F0E9" strokeOpacity="0.2" strokeWidth="2" />
                
                {/* Time/Equity Bars */}
                <rect className="equity-bar" x="40" y="100" width="24" height="60" fill="currentColor" opacity="0.3" />
                <rect className="equity-bar" x="90" y="80" width="24" height="80" fill="currentColor" opacity="0.5" />
                <rect className="equity-bar" x="140" y="55" width="24" height="105" fill="currentColor" opacity="0.7" />
                <rect className="equity-bar" x="190" y="20" width="24" height="140" fill="currentColor" opacity="0.9" />

                {/* Growth Trendline */}
                <path className="equity-line" d="M 52 100 L 102 80 L 152 55 L 202 20" fill="none" stroke="#CC5833" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Apex Point */}
                <circle className="equity-point" cx="202" cy="20" r="8" fill="#CC5833" />
                <circle className="equity-point" cx="202" cy="20" r="16" fill="none" stroke="#CC5833" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>
            <div className="absolute inset-0 noise-overlay opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-clay/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// FEATURES COMPONENT (FUNCTIONAL ARTIFACTS)
// ============================================================================
const Features = () => {
  // --- Telemetry Typewriter State ---
  const [telemetryText, setTelemetryText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullTelemetryMsg = "System analysis: Vacancy risk minimized. // Turnover reduced by 40%. // Stable. Reliable. Engineered for long-term consistency.";
  
  useEffect(() => {
    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullTelemetryMsg.length) {
        setTelemetryText(fullTelemetryMsg.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // --- Diagnostic Shuffler State & Animation ---
  const [cards, setCards] = useState([
    { id: 1, title: 'Ownership Stake', val: 'Active', color: 'border-moss' },
    { id: 2, title: 'Equity Built', val: 'Compound', color: 'border-clay/50' },
    { id: 3, title: 'Wasted Rent', val: '$0', color: 'border-moss/20' }
  ]);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(shuffleInterval);
  }, []);

  // --- Designed for Depth: The Communal Hearth ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      
      // Setup architectural blueprint states
      tl.set('.hearth-unit', { fill: 'transparent', stroke: 'currentColor' })
        .set('.hearth-window', { opacity: 0 })
        .set('.hearth-center', { scale: 0, opacity: 0, transformOrigin: 'center center' })
        .set('.hearth-glow', { opacity: 0 });
        
      // 1. Dwellings populate around the center (Individuals moving in)
      tl.to('.hearth-unit-1', { fill: 'rgba(204, 88, 51, 0.1)', duration: 0.5, ease: 'power1.out' })
        .to('.hearth-unit-2', { fill: 'rgba(204, 88, 51, 0.1)', duration: 0.5, ease: 'power1.out' }, "-=0.2")
        .to('.hearth-unit-3', { fill: 'rgba(204, 88, 51, 0.1)', duration: 0.5, ease: 'power1.out' }, "-=0.2")
        
      // 2. Life begins inside (Windows light up to signify living rhythms)
        .to('.hearth-window', { opacity: 1, duration: 0.8, stagger: 0.15, fill: '#CC5833', ease: 'power1.inOut' })
        
      // 3. Coming together (Shared center space activates/warms up)
        .to('.hearth-center', { scale: 1, opacity: 1, duration: 1, fill: '#CC5833', ease: 'back.out(1.5)' }, "-=0.2")
        .to('.hearth-glow', { opacity: 0.5, duration: 1.5, ease: 'power2.out' }, "<")
        
      // 4. Synergistic Pulse (The whole community breathes together)
        .to('.hearth-center', { scale: 1.2, duration: 2, yoyo: true, repeat: 1, ease: 'sine.inOut' })
        .to('.hearth-glow', { opacity: 0.8, duration: 2, yoyo: true, repeat: 1, ease: 'sine.inOut' }, "<")
        
      // 5. Rhythms quiet down (Fade down for the loop)
        .to(['.hearth-unit', '.hearth-window', '.hearth-center', '.hearth-glow'], { 
          opacity: 0, 
          duration: 1.5, 
          ease: 'power2.inOut' 
        }, "+=1");
        
    });
    return () => ctx.revert();
  }, []);


  return (
    <section id="benefits" className="py-24 md:py-40 bg-moss text-cream relative z-20 overflow-hidden">
      <div className="drafting-grid"></div>
      <div className="absolute inset-0 noise-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 relative">
          <div className="construction-line-x text-accent-blue/30 top-1/2 -left-[50vw]"></div>
          <span className="absolute -top-10 left-0 font-hand text-3xl text-cream/60 -rotate-3 opacity-80">Phase 02</span>

          <p className="font-data text-clay text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-clay"></span>
            Why This Model Works
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-cream max-w-2xl relative z-10">
            This is real estate that strengthens relationships <span className="font-drama italic font-normal text-[#B27D57]">instead of replacing them.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="construction-line-y text-accent-blue/20 left-1/3 hidden lg:block -top-20 bottom-[-100px]"></div>
          <div className="construction-line-y text-accent-blue/20 left-2/3 hidden lg:block -top-20 bottom-[-100px]"></div>
          
          {/* Feature 1: Diagnostic Shuffler */}
          <div className="bg-cream border border-accent-blue/20 rounded-[2rem] p-8 text-moss flex flex-col h-[420px] shadow-lg group relative overflow-hidden mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
            {/* Watercolor Wash Effect */}
            <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(circle_at_top_right,var(--color-clay)_0%,transparent_50%)] opacity-10 blur-2xl pointer-events-none mix-blend-multiply transition-opacity group-hover:opacity-20"></div>
            <span className="absolute top-4 right-4 font-hand text-2xl text-clay rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">Compound it</span>
            <h3 className="font-heading font-bold text-2xl mb-2">Shared Equity</h3>
            <p className="font-body text-moss/70 mb-8 flex-grow">
              Residents build ownership instead of paying rent into someone else’s portfolio.
            </p>
            {/* Shuffler UI */}
            <div className="relative h-40 w-full flex justify-center items-end pb-4 perspective-1000">
              {cards.map((card, i) => {
                const isTop = i === 2;
                const isMid = i === 1;
                return (
                  <div 
                    key={card.id}
                    className={`absolute w-full max-w-[200px] h-24 bg-cream border-2 rounded-xl flex items-center justify-between px-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color}`}
                    style={{
                      transform: isTop ? 'translateY(0) scale(1)' : isMid ? 'translateY(-15px) scale(0.95)' : 'translateY(-30px) scale(0.9)',
                      zIndex: i,
                      opacity: isTop ? 1 : isMid ? 0.7 : 0.4,
                      boxShadow: isTop ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none'
                    }}
                  >
                    <span className="font-heading font-medium text-sm">{card.title}</span>
                    <span className="font-data text-clay font-bold">{card.val}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Feature 2: Telemetry Typewriter */}
          <div className="bg-[#212E40] border border-accent-blue/30 rounded-[2rem] p-8 text-cream flex flex-col h-[420px] shadow-lg relative overflow-hidden group">
             {/* Dark Watercolor Wash Effect */}
             <div className="absolute top-1/2 left-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center_left,var(--color-accent-blue)_0%,transparent_60%)] opacity-10 blur-3xl pointer-events-none transform -translate-y-1/2 mix-blend-screen transition-opacity group-hover:opacity-25"></div>
             <span className="absolute bottom-32 right-8 font-hand text-3xl text-moss -rotate-6 opacity-0 group-hover:opacity-100 transition-opacity">Monitor closely</span>
             
            <h3 className="font-heading font-bold text-2xl mb-2 relative z-10">Lower Vacancy Risk</h3>
            <p className="font-body text-cream/70 mb-8 flex-grow relative z-10">
              Community-driven housing reduces turnover and increases stability.
            </p>
            {/* Typewriter UI */}
            <div className="bg-[#1A2433] border border-black/20 rounded-xl p-4 h-40 font-data text-xs md:text-sm text-[#EBEDE9] relative overflow-hidden flex flex-col shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                <div className="w-2 h-2 rounded-full bg-clay animate-pulse"></div>
                <span className="text-cream/50">LIVE SYSTEM FEED</span>
              </div>
              <div className="flex-grow text-[#AE9372]"> {/* Accent Blue / Stone color for tech text */}
                {telemetryText}
                <span className={`inline-block w-2 h-4 bg-clay align-middle ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              </div>
            </div>
          </div>

          {/* Feature 3: Resonance / Shared Rhythms */}
          <div className="bg-cream border border-accent-blue/20 rounded-[2rem] p-8 text-moss flex flex-col h-[420px] shadow-lg xl:col-span-1 md:col-span-2 lg:col-span-1 relative overflow-hidden mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 group">
             {/* Watercolor Wash Effect */}
             <div className="absolute bottom-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(circle_at_bottom_right,var(--color-moss)_0%,transparent_60%)] opacity-10 blur-2xl pointer-events-none mix-blend-multiply transition-opacity group-hover:opacity-20"></div>
             <span className="absolute top-1/2 right-4 font-hand text-3xl text-moss rotate-[-15deg] opacity-0 group-hover:opacity-100 transition-opacity z-20 mix-blend-multiply">The Hearth</span>

            <h3 className="font-heading font-bold text-2xl mb-2 relative z-10">Designed for Depth</h3>
            <p className="font-body text-moss/70 mb-8 flex-grow relative z-10">
              Shared spaces, shared rhythms, shared stewardship.
            </p>
            {/* Communal Hearth UI */}
            <div className="relative h-40 w-full border border-moss/20 rounded-xl bg-blend-multiply p-4 flex items-center justify-center overflow-hidden z-10 shadow-sm" style={{ backgroundColor: 'rgba(82, 86, 69, 0.03)' }}>
               {/* Blueprint Grid Base */}
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--color-moss) 1px, transparent 1px), linear-gradient(90deg, var(--color-moss) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.08 }}></div>
               
               <svg viewBox="0 0 200 120" className="w-full h-full text-moss z-10 overflow-visible relative">
                 {/* Courtyard Base */}
                 <rect x="70" y="30" width="80" height="70" fill="none" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1" opacity="0.3" />
                 
                 {/* Central Glow (The Shared Space / Courtyard) */}
                 <circle className="hearth-glow" cx="110" cy="65" r="40" fill="var(--color-clay)" style={{ filter: 'blur(20px)' }} />
                 <circle className="hearth-center" cx="110" cy="65" r="12" />
                 
                 {/* Left Wing (Long building) */}
                 <g transform="translate(35, 20)">
                   <rect className="hearth-unit hearth-unit-1" x="0" y="0" width="35" height="80" strokeWidth="1.5" />
                   <rect className="hearth-window" x="20" y="15" width="5" height="15" />
                   <rect className="hearth-window" x="20" y="50" width="5" height="15" />
                 </g>
                 
                 {/* Top Wing (Horizontal building) */}
                 <g transform="translate(80, 15)">
                   <rect className="hearth-unit hearth-unit-2" x="0" y="0" width="60" height="30" strokeWidth="1.5" />
                   <rect className="hearth-window" x="15" y="20" width="15" height="5" />
                 </g>
                 
                 {/* Right Wing (Small anchor building) */}
                 <g transform="translate(150, 60)">
                   <rect className="hearth-unit hearth-unit-3" x="0" y="0" width="30" height="40" strokeWidth="1.5" />
                   <rect className="hearth-window" x="5" y="15" width="10" height="5" />
                 </g>
                 
                 {/* Connecting Walkways / Blueprint lines */}
                 <path d="M 70 35 L 80 35 M 140 65 L 150 65" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
               </svg>
                <div className="absolute top-2 left-3 font-data text-[10px] text-moss/50 tracking-widest uppercase font-semibold">Blueprint: Shared Courtyard</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Stake = () => {
  return (
    <section className="py-32 md:py-48 bg-cream text-moss relative z-30 overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
      <div className="drafting-grid opacity-30"></div>
      <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-20"></div>
      
      {/* Huge Asymmetrical Blueprint Image */}
      <div className="absolute top-0 right-[-15%] w-[80vw] h-[120%] opacity-[0.04] mix-blend-multiply select-none pointer-events-none transform -rotate-6">
        <div className="w-full h-full bg-contain bg-right-top bg-no-repeat" style={{ backgroundImage: `url('/assets/blueprint_residential_elevation_1772202237636.png')` }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Who It's For */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="font-data text-clay text-sm uppercase tracking-widest mb-10 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-clay"></span>
              Alignment Protocol
            </p>
            <h2 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.0] mb-12">
              This is <br/><span className="font-drama italic font-normal text-clay text-[1.2em]">for you</span> if:
            </h2>
            <ul className="space-y-6 font-body text-moss/80 text-lg md:text-xl">
              <li className="flex items-start gap-4"><span className="text-clay mt-1">●</span> You want to live in a walkable downtown.</li>
              <li className="flex items-start gap-4"><span className="text-clay mt-1">●</span> You value character buildings over cookie-cutter.</li>
              <li className="flex items-start gap-4"><span className="text-clay mt-1">●</span> You believe wealth should be built with integrity.</li>
              <li className="flex items-start gap-4"><span className="text-clay mt-1">●</span> You want both financial return and meaningful proximity.</li>
            </ul>
          </div>

          {/* Right Column: Overlapping Cards Collage */}
          <div className="lg:col-span-8 flex flex-col gap-8 lg:pl-16 mt-16 lg:mt-32">
            
            {/* Card 1 */}
            <div className="bg-white text-moss border border-moss/10 rounded-[3rem] p-10 md:p-14 w-full md:w-[85%] shadow-xl relative z-10 transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <p className="font-data text-clay text-sm tracking-widest uppercase mb-8 font-bold">The Default</p>
              <h3 className="font-heading font-extrabold text-3xl md:text-4xl mb-8">If you do nothing:</h3>
              <ul className="space-y-6 font-heading font-semibold text-xl md:text-2xl text-moss/80 tracking-tight">
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-moss/30"></span> You rent indefinitely.</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-moss/30"></span> You move every year or two.</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-moss/30"></span> You build someone else's portfolio.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-moss border border-moss/80 rounded-[3rem] p-10 md:p-14 text-cream shadow-2xl relative overflow-hidden md:w-[85%] md:self-end transform md:rotate-2 hover:rotate-0 transition-transform duration-500 z-20 md:-mt-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-clay/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
              <p className="font-data text-clay text-sm tracking-widest uppercase mb-8 relative z-10">The Alternative</p>
              <h3 className="font-heading font-extrabold text-3xl md:text-4xl mb-8 relative z-10">If you join:</h3>
              <ul className="space-y-6 font-heading font-medium text-xl md:text-2xl text-cream relative z-10">
                <li className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-clay shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  You build equity.
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-clay shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  You plant roots.
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-clay shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  You help create a place that lasts.
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Home = () => {
    return (
        <main>
            <Hero />
            <Philosophy />
            <Protocol />
            <Features />
            <Stake />
        </main>
    )
}

export default Home;
