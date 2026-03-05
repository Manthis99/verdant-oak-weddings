import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MasonryGallery, VideoArchive } from './Portfolio';

gsap.registerPlugin(ScrollTrigger);

const WeddingsHero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }

        let ctx = gsap.context(() => {
            gsap.fromTo('.hero-text', 
                { y: 40, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
            );
            gsap.fromTo('.drafting-line', 
                { strokeDashoffset: 100 }, 
                { strokeDashoffset: 0, duration: 1.5, ease: 'power3.inOut', delay: 0.8 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[90dvh] bg-cream text-moss flex items-center md:items-end pb-12 md:pb-32 overflow-hidden pt-40 md:pt-48">
            <div className="drafting-grid opacity-60"></div>
            <div className="absolute inset-0 noise-overlay"></div>
            
            {/* Architectural Background */}
            <div className="absolute top-0 right-0 w-[80vw] h-[120%] opacity-10 select-none pointer-events-none transform rotate-3 mix-blend-multiply">
                <div className="w-full h-full bg-contain bg-right-top bg-no-repeat grayscale opacity-60" style={{ backgroundImage: `url('/assets/blueprint_residential_elevation_1772202237636.png')` }}></div>
            </div>

            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-0">
                <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale-[20%] mix-blend-multiply filter blur-[1px]">
                    <source src="/assets/web-background-video.mov" type="video/mp4" />
                </video>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                {/* Paper Block for contrast & readability */}
                <div className="bg-cream/90 backdrop-blur-xl p-8 md:p-12 lg:p-16 border border-moss/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] relative max-w-5xl rounded-br-[4rem] md:rounded-br-[6rem]">
                    
                    <p className="hero-text font-data text-accent-blue text-sm uppercase tracking-widest mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-accent-blue"></span>
                        Honest & Cinematic
                    </p>
                    <h1 className="hero-text font-drama italic text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight mb-12 relative z-10">
                        <span className="absolute -top-10 -left-6 md:-left-12 font-hand text-3xl text-clay opacity-80 rotate-[-10deg] hidden md:block">not posed!</span>
                        Your wedding deserves to be <span className="text-moss relative inline-block">
                            remembered
                            <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-6 pointer-events-none text-clay" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path className="drafting-line" strokeDasharray="100" strokeDashoffset="0" d="M0,5 L100,5" stroke="currentColor" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
                                <path d="M0,2 L0,8 M100,2 L100,8 M50,3.5 L50,6.5" stroke="currentColor" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
                            </svg>
                        </span> the way it <br className="hidden md:block"/>actually felt.
                    </h1>
                    
                    <div className="hero-text flex flex-col md:flex-row gap-8 items-start relative z-10 mt-8">
                        <div className="construction-line-x text-accent-blue top-0 opacity-30"></div>
                        <p className="font-body text-moss/80 text-xl md:text-2xl max-w-xl border-l-2 border-clay/50 pl-6">
                            I create honest, cinematic wedding films and photos for couples who care more about meaning than perfection.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 relative mt-4 md:mt-0">
                             <span className="absolute -right-8 -top-8 font-hand text-2xl text-accent-blue rotate-12 hidden lg:block">The Archives &rarr;</span>
                            <button onClick={() => document.getElementById('photo-archive')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-moss text-cream rounded-full font-heading font-semibold text-sm hover:bg-moss/90 btn-magnetic shadow-lg whitespace-nowrap text-center">
                                View Photos
                            </button>
                            <button onClick={() => document.getElementById('video-archive')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-moss rounded-full font-heading font-semibold text-sm hover:bg-cream border border-moss/10 btn-magnetic shadow-lg whitespace-nowrap text-center">
                                View Videos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Philosophy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.phil-line', 
                { strokeDashoffset: 100 }, 
                { strokeDashoffset: 0, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 md:py-48 bg-cream text-moss relative border-t border-accent-blue/10">
            <div className="construction-line-y text-accent-blue left-1/2 hidden md:block"></div>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                 
                 <div className="mb-24 md:mb-40 relative">
                    <span className="absolute -left-16 top-10 font-hand text-3xl text-clay -rotate-6 hidden lg:block border rounded-full border-clay px-4 py-1">Crucial</span>
                    <p className="font-heading font-medium text-moss/60 text-2xl leading-relaxed mb-6">
                        Most wedding media focuses on: <span className="text-moss border-b border-moss/30 pb-1">Manufactured Perfection.</span>
                    </p>
                    <h2 className="font-drama italic text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] text-moss mt-12 pb-8">
                        I focus on <br/>
                        <span className="text-moss relative inline-block">
                            Authentic Stories.
                            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 pointer-events-none text-clay" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path className="phil-line" strokeDasharray="100" strokeDashoffset="0" d="M0,5 L100,5" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                                <path d="M0,2 L0,8 M100,2 L100,8" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
                            </svg>
                        </span>
                    </h2>
                 </div>

                 <div className="grid md:grid-cols-2 gap-16 items-start relative">
                     <div className="bg-white/50 p-8 rounded-2xl border border-moss/5 shadow-sm">
                         <p className="font-data text-accent-blue text-sm uppercase tracking-widest mb-6">01 // The Problem</p>
                         <p className="font-body text-moss/80 text-xl leading-relaxed border-l-2 border-accent-blue/30 pl-6">
                             My job isn’t to manufacture emotion or pose you into someone you aren't. Too many weddings feel like a 10-hour photoshoot instead of a celebration.
                         </p>
                     </div>
                     <div className="bg-white/50 p-8 rounded-2xl border border-moss/5 shadow-sm mt-8 md:mt-16">
                         <p className="font-data text-clay text-sm uppercase tracking-widest mb-6 border-b border-clay/20 pb-2 inline-block">02 // The Solution</p>
                         <p className="font-body text-moss/80 text-xl leading-relaxed border-l-4 border-clay pl-6 relative">
                             <span className="absolute -left-12 top-0 font-hand text-2xl text-clay rotate-[-15deg]">Focus!</span>
                             It’s to notice emotion, protect it, and tell it honestly. Turning your everyday scenes into timeless memories.
                         </p>
                     </div>
                 </div>

            </div>
        </section>
    )
}

const TheApproach = () => {
    return (
        <section className="py-24 md:py-48 bg-moss text-cream relative overflow-hidden rounded-t-[3rem] -mt-10 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
             <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay"></div>
             
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
                    
                    {/* Left Column: Sticky Headers */}
                    <div className="lg:col-span-12 flex flex-col md:flex-row gap-0">
                        <div className="w-full md:w-5/12 lg:sticky lg:top-40 lg:pr-12 md:pr-8">
                            <p className="font-data text-accent-blue text-sm uppercase tracking-widest mb-6 border-b border-cream/10 pb-4 inline-block">The Approach</p>
                            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.0] mb-8 mt-4 md:mt-0">
                                I bring <span className="font-drama italic text-accent-blue font-normal text-[1.2em]">structure</span> when the day needs it...
                            </h2>
                            <p className="font-body text-cream/70 text-xl leading-relaxed mb-12 lg:mb-0">
                                I've spent years behind a camera in high-pressure, real-world environments. Stories where moments matter, and there are no do-overs.
                            </p>
                        </div>

                        {/* Right Column: Stacked Cards & Headshot */}
                        <div className="w-full md:w-7/12 flex flex-col-reverse md:flex-col gap-8 md:gap-12 relative mt-0">
                        
                            <div className="bg-moss border border-cream/10 rounded-[2rem] p-8 md:p-14 shadow-2xl relative overflow-hidden transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
                                <h3 className="font-drama italic text-3xl md:text-4xl mb-6 relative z-10 text-accent-blue">...and invisibility when it doesn't.</h3>
                                <p className="font-body text-cream/80 text-lg leading-relaxed relative z-10 mb-8 max-w-lg">
                                    You shouldn't have to think about the camera. You should be present with your people, knowing that the details, the tears, and the quiet glances are being captured intentionally.
                                </p>
                                <div className="font-data text-xs uppercase tracking-widest text-cream/40 flex flex-wrap gap-4">
                                    <span>No contrived moments</span>
                                    <span>•</span>
                                    <span>Natural light & direction</span>
                                </div>
                            </div>

                            {/* The #3 Headshot - Expanded / Moved Right */}
                            <div className="mt-12 relative w-[90%] md:w-[80%] max-w-xl mx-auto lg:ml-auto p-4 md:p-5 bg-[#F9F8F6] shadow-2xl rotate-[-2deg] hover:rotate-0 hover:-translate-y-2 transition-transform duration-500 border border-cream/5 group z-45">
                                {/* Tape effect on top */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-md rotate-[-1deg] shadow-sm mix-blend-screen opacity-70"></div>
                                
                                <img src="/assets/michael-headshot-wedding.jpg" alt="Michael Proctor" className="w-full aspect-[4/3] object-cover transition-all duration-700 mx-auto border border-moss/5" />
                                
                                <div className="mt-4 flex justify-between items-end">
                                    <span className="font-data text-[10px] text-moss/40 uppercase tracking-widest border border-moss/10 px-2 py-1">FIG. 001</span>
                                    <div className="absolute -bottom-6 -right-4 md:-right-10 font-hand text-3xl md:text-5xl text-clay rotate-[-6deg] drop-shadow-md bg-cream/95 px-4 py-2 border border-moss/5">
                                        Hi, I'm Michael!
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
             </div>
        </section>
    )
}

const SplitCTA = () => {
    return (
        <section id="connect" className="bg-[#EBEDE9] relative z-20 overflow-hidden min-h-[60vh] flex flex-col pb-16 md:pb-0">
            <div className="absolute inset-0 noise-overlay opacity-20 mix-blend-multiply pointer-events-none"></div>

            <div className="flex-grow grid md:grid-cols-2 relative z-10 text-moss">
                
                {/* Left: Connect */}
                <div className="p-8 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-moss/10 group relative hover:bg-cream transition-colors duration-500">
                    <p className="font-data text-clay text-sm uppercase tracking-widest mb-6 border-b border-moss/10 pb-2 inline-block self-start">Step 01</p>
                    <h2 className="font-drama italic text-4xl md:text-7xl leading-[1.0] mb-8">
                        Let's start the <br/><span className="text-clay">conversation.</span>
                    </h2>
                    <p className="font-body text-moss/70 text-lg mb-12 max-w-sm">
                        Tell me about your day, your vision, and what matters most to you.
                    </p>
                    <a href="mailto:info@verdantoakcreative.com" className="inline-block px-10 py-5 bg-clay text-cream rounded-full font-heading font-semibold text-lg hover:bg-clay/90 btn-magnetic shadow-lg shadow-clay/20 self-start text-center">
                        Email Michael
                    </a>
                </div>

                {/* Right: Pricing Lead Gen */}
                <div className="p-8 pb-32 md:p-24 flex flex-col justify-center group relative hover:bg-cream transition-colors duration-500">
                    <p className="font-data text-moss text-sm uppercase tracking-widest mb-6 border-b border-moss/10 pb-2 inline-block self-start">Step 02</p>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] mb-8">
                        View the <br/><span className="text-moss italic font-drama text-[1.4em]">Investment</span> Guide.
                    </h2>
                    <p className="font-body text-moss/70 text-lg mb-12 max-w-sm">
                        Access the unlisted pricing page to review packages for photo and video coverage.
                    </p>
                    <a href="#/access" className="inline-block px-10 py-5 bg-moss text-cream rounded-full font-heading font-semibold text-lg hover:bg-moss/90 btn-magnetic shadow-lg shadow-moss/20 self-start text-center">
                        View Pricing
                    </a>
                </div>

            </div>
        </section>
    )
}

const Weddings = () => {
    return (
        <main className="w-full bg-moss">
            <WeddingsHero />
            <Philosophy />
            <TheApproach />
            
            {/* Integrated Portfolio Masonry Gallery */}
            <div id="photo-archive" className="bg-cream pt-24 pb-12 rounded-t-[3rem] -mt-10 relative z-30 shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
                <div className="max-w-7xl mx-auto px-6 text-center mb-8">
                     <p className="font-data text-accent-blue text-sm uppercase tracking-widest mb-4">The visual archive</p>
                     <h2 className="font-drama italic text-5xl md:text-6xl text-moss">Featured Work</h2>
                </div>
                <MasonryGallery />
            </div>

            <VideoArchive />

            <SplitCTA />
        </main>
    )
}

export default Weddings;
