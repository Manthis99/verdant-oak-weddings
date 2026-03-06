import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// ABOUT - HERO
// ============================================================================
const AboutHero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[85dvh] bg-moss text-cream flex items-end pb-32 overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      {/* Subtle glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-moss/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full pt-48">
        <p className="hero-text font-data text-clay text-sm uppercase tracking-widest mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-clay"></span>
          About Michael
        </p>
        <h1 className="hero-text font-drama italic text-6xl md:text-8xl lg:text-[7rem] leading-[1.05] tracking-tight max-w-4xl mb-12">
          I document moments <br />that <span className="text-[#D98A6C]">outlast us.</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start pb-12">
          <div className="hero-text md:w-3/5 relative z-20">
            <p className="font-body text-cream/90 text-xl md:text-2xl leading-relaxed">
              For the last several years, I’ve worked at the intersection of creativity, operations, and visual storytelling. I’ve led marketing teams, launched campaigns, and helped businesses clarify their message.
            </p>
            <br/>
            <p className="font-body text-cream/90 text-lg md:text-xl leading-relaxed border-l-2 border-moss/40 pl-6">
              But under all of that, I’ve always been drawn to something deeper. I’m not just interested in beautiful imagery. <strong className="text-cream">I’m interested in legacy.</strong>
            </p>
          </div>
          
          {/* Headshot 1: Hero Polaroid */}
          <div className="hero-text relative w-[85%] sm:w-2/3 md:w-2/5 mx-auto mt-16 md:mt-0 p-5 md:p-6 bg-[#F9F8F6] shadow-2xl rotate-2 hover:rotate-0 hover:-translate-y-2 transition-transform duration-500 border border-cream/5 z-10 group">
             {/* Tape effect */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/40 backdrop-blur-md rotate-[-2deg] shadow-sm mix-blend-screen opacity-70 z-20"></div>
             
             <img src="/assets/headshot-1.jpg" alt="Michael Proctor" className="w-full aspect-[3/4] object-cover filter contrast-105" />
             
             <div className="mt-5 pb-2 px-2 flex justify-between items-end border-t border-charcoal/10 pt-4">
                 <span className="font-data text-xs text-charcoal/50 uppercase tracking-widest font-semibold flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-clay"></span>
                   Creative Director
                 </span>
                 <span className="font-hand text-4xl text-charcoal/80 -rotate-3">Michael.</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// ABOUT - WHY WEDDINGS
// ============================================================================
const WhyWeddings = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-up').forEach((el) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-cream text-charcoal relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col gap-32">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 fade-up">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal">Why Weddings?</h2>
            </div>
            <div className="md:col-span-8 fade-up">
              <p className="font-heading font-bold text-charcoal/80 text-2xl md:text-3xl leading-relaxed mb-6">
                Most wedding media focuses on perfection over presence.
              </p>
              <div className="font-data text-clay text-sm md:text-base uppercase tracking-widest leading-loose mb-10 font-medium">
                <p>We pose.</p>
                <p>We perform.</p>
                <p>We stage.</p>
                <p>We forget the actual day.</p>
              </div>
              <p className="font-body text-charcoal/90 text-xl leading-relaxed max-w-xl">
                I started shooting weddings because I hate how manufactured the industry has become. Your wedding day shouldn't feel like a 10-hour photoshoot you have to endure.
              </p>
            </div>
          </div>

          <div className="bg-moss text-cream rounded-[3rem] p-12 md:p-20 shadow-xl overflow-hidden relative fade-up">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-clay/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <p className="font-data text-moss text-xs uppercase tracking-widest mb-6 border-b border-moss/20 pb-4 inline-block">The Paradigm Shift</p>
            <h3 className="font-drama italic text-4xl md:text-6xl leading-[1.1] mb-12">
              When we trade flawless staging for honest documentation, <span className="text-[#EFA689]">everything changes.</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 font-heading font-medium text-xl md:text-2xl text-cream/90">
              <p className="border-l-2 border-moss/50 pl-6">
                <span className="block text-sm font-data text-cream/70 mb-2">INSTEAD OF</span>
                You don't just pose.
              </p>
              <p className="border-l-2 border-[#EFA689]/50 pl-6">
                <span className="block text-sm font-data text-[#EFA689] mb-2">YOU BECOME</span>
                You experience.
              </p>
              <p className="border-l-2 border-moss/50 pl-6 mt-4 sm:mt-0">
                <span className="block text-sm font-data text-cream/70 mb-2">INSTEAD OF</span>
                Cameras dictating the schedule.
              </p>
              <p className="border-l-2 border-[#EFA689]/50 pl-6 mt-4 sm:mt-0">
                <span className="block text-sm font-data text-[#EFA689] mb-2">YOU FIND</span>
                A day that breathes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// ABOUT - BACKGROUND
// ============================================================================
const Background = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.bg-item').forEach((el) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-cream text-charcoal relative">
      <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <p className="font-data text-clay text-sm uppercase tracking-widest mb-16 flex items-center gap-3 bg-item">
          <span className="w-8 h-[1px] bg-clay"></span>
          My Background
        </p>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="bg-item font-heading font-medium text-2xl leading-relaxed text-charcoal/90">
            Professionally, I’ve spent the last several years running a creative agency and managing complex productions.
          </div>
          <div className="bg-item text-lg md:text-xl font-body text-charcoal/80 leading-relaxed">
            I’m entirely comfortable holding a camera in high-stress environments. I know how to direct clearly, stay calm when schedules change, and anticipate the moments that actually matter.
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8 text-charcoal bg-item">
          <div className="bg-white border border-charcoal/10 rounded-[2rem] p-10 md:p-12 shadow-xl">
            <h4 className="font-heading font-bold text-2xl mb-2">Verdant Oak</h4>
            <p className="font-data text-moss/80 text-xs tracking-widest uppercase mb-6">Creative Agency</p>
            <p className="font-body text-charcoal/80 text-lg">
              I lead a small team helping businesses clarify their message and grow with integrity through strategic campaigns and visual storytelling.
            </p>
          </div>
          <div className="bg-[#EBEDE9] border border-charcoal/10 rounded-[2rem] p-10 md:p-12 shadow-lg flex flex-col items-start">
            <h4 className="font-heading font-bold text-2xl mb-2">Creative Portfolio</h4>
            <p className="font-data text-moss/80 text-xs tracking-widest uppercase mb-6">Commercial Work</p>
            <p className="font-body text-charcoal/80 text-lg mb-8">
              When I'm not shooting weddings, I'm producing brand films, editorial photography, and commercial campaigns.
            </p>
            {/* <a href="#/portfolio" className="mt-auto inline-block px-8 py-4 bg-moss text-cream rounded-full font-heading font-semibold text-sm hover:bg-moss/90 btn-lift shadow-xl">
              View Commercial Work
            </a> */}
          </div>
        </div>

        <div className="mt-32 border-t border-charcoal/10 pt-16 bg-item max-w-2xl mx-auto text-center">
          <p className="font-body text-charcoal/70 text-xl leading-relaxed mb-8">
            But whether I’m producing a brand documentary or shooting a wedding day, my core values remain the same:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 font-drama italic text-4xl md:text-5xl text-clay">
            <span>Honesty.</span>
            <span>Presence.</span>
            <span>Artistic Intent.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

// ============================================================================
// ABOUT - BELIEFS
// ============================================================================
const Beliefs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.belief-list li', 
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.belief-list', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-moss text-cream relative">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-12">
          What I <span className="font-drama italic font-normal text-[#EFA689]">Believe</span>
        </h2>
        
        <p className="font-body text-xl md:text-2xl text-cream/80 leading-relaxed mb-20 max-w-2xl">
          I follow Jesus, and that shapes how I understand covenant, commitment, and why your wedding day actually matters beyond the party.
        </p>

        <ul className="belief-list space-y-8 font-heading text-2xl md:text-3xl text-cream/90 pl-6 border-l-2 border-moss relative">
          <li className="flex items-center gap-6">
            <span className="w-1.5 h-1.5 bg-[#EFA689] rounded-full -ml-[27px]"></span>
            A wedding is meant to be experienced, not performed.
          </li>
          <li className="flex items-center gap-6">
            <span className="w-1.5 h-1.5 bg-[#EFA689] rounded-full -ml-[27px]"></span>
            The messy, unscripted moments hold the most weight.
          </li>
          <li className="flex items-center gap-6">
            <span className="w-1.5 h-1.5 bg-[#EFA689] rounded-full -ml-[27px]"></span>
            True joy doesn't need to be staged.
          </li>
          <li className="flex items-center gap-6">
            <span className="w-1.5 h-1.5 bg-[#EFA689] rounded-full -ml-[27px]"></span>
            <span className="text-[#EFA689] italic font-serif">A marriage is a legacy.</span>
          </li>
        </ul>

        <div className="mt-32 p-12 lg:p-16 border border-white/10 bg-moss rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-moss/20 rounded-full blur-[80px] -z-0 translate-x-1/2 -translate-y-1/2"></div>
          <p className="font-heading text-xl md:text-2xl leading-relaxed relative z-10 text-cream/80 max-w-2xl">
            My goal isn't to make you look like models in a magazine editoral.
            <br/><br/>
            It’s to document you so honestly that when your grandkids find these photos in a drawer fifty years from now, <strong className="text-cream border-b-2 border-clay pb-1">they know exactly who you were.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// ABOUT - PERSONAL
// ============================================================================
const Personal = () => {
    return (
        <section className="bg-cream text-charcoal py-32 md:py-48 rounded-t-[3rem] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
                
                {/* The Vision */}
                <div>
                   <p className="font-data text-moss text-sm uppercase tracking-widest mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-moss"></span>
                    The Vision
                  </p>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl mb-10">I want to deliver galleries where:</h3>
                  <ul className="space-y-4 font-body text-xl text-charcoal/80 pl-6 border-l-2 border-charcoal/10 mb-16">
                      <li className="flex items-start gap-4"><span className="text-clay mt-1.5 text-[0.6rem]">●</span>Tears aren't airbrushed away.</li>
                      <li className="flex items-start gap-4"><span className="text-clay mt-1.5 text-[0.6rem]">●</span>Movement is preserved over stiffness.</li>
                      <li className="flex items-start gap-4"><span className="text-clay mt-1.5 text-[0.6rem]">●</span>Audio tells the real story.</li>
                      <li className="flex items-start gap-4"><span className="text-clay mt-1.5 text-[0.6rem]">●</span>You look like *you*, not a character.</li>
                  </ul>
                  
                  <div className="font-drama text-3xl md:text-4xl text-charcoal/90 leading-snug italic max-w-md">
                      Grainy film. Grandparents laughing. The chaotic energy of an open dance floor. Quiet moments before the ceremony.
                  </div>
                  <p className="mt-8 font-heading font-bold text-2xl text-moss">
                      Documentation that builds depth.
                  </p>
                </div>

                {/* Personal */}
                <div className="bg-[#EBEDE9] rounded-[3rem] p-10 md:p-14 border border-charcoal/5 self-start">
                  <p className="font-data text-charcoal/60 text-xs uppercase tracking-widest mb-10 border-b border-charcoal/10 pb-4">A Bit More Personal</p>
                  <h3 className="font-drama italic text-4xl mb-8">Outside of work, <br/><span className="text-clay">I'm a builder.</span></h3>
                  
                  <ul className="space-y-6 font-body text-charcoal/80 text-lg mb-12">
                      <li>I 3D print tools to solve small problems.</li>
                      <li>I hand grind coffee beans.</li>
                      <li>I love figuring out how things work and making them better.</li>
                  </ul>

                  {/* Headshot 2: Taller Archival Image */}
                  <div className="relative p-2 bg-white shadow-xl rotate-[-1deg] border border-charcoal/10 group overflow-hidden">
                      <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-20 z-20 pointer-events-none"></div>
                      <img src="/assets/headshot-2.jpg" alt="Michael Proctor Working" className="w-full aspect-[4/5] object-cover object-center filter contrast-[1.05] grayscale-[0.2]" />
                      
                      {/* Technical Meta overlay */}
                      <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="font-data text-[10px] bg-white/90 px-3 py-1.5 text-charcoal shadow-sm border border-charcoal/10 uppercase tracking-widest flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse"></div>
                             BUILDING THE MODEL
                          </span>
                      </div>
                      
                      {/* Hand note */}
                      <div className="absolute -top-3 -right-6 z-30 font-hand text-2xl text-accent-blue rotate-6 opacity-90 drop-shadow-sm bg-cream/80 px-2 py-1 border border-charcoal/5">
                         Let's connect.
                      </div>
                  </div>
                </div>

            </div>
        </section>
    )
}

// ============================================================================
// ABOUT MAIN PAGE
// ============================================================================
const About = () => {
  return (
    <main className="bg-moss w-full h-full">
      <AboutHero />
      <WhyWeddings />
      <Background />
      <Beliefs />
      <Personal />
    </main>
  );
};

export default About;
