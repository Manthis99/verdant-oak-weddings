import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import photos from '../utils/weddingPhotos.json';

gsap.registerPlugin(ScrollTrigger);

const PortfolioHero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.drafting-line', 
                { strokeDashoffset: 100 }, 
                { strokeDashoffset: 0, duration: 1.5, ease: 'power3.inOut', delay: 0.5 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[50dvh] bg-cream text-charcoal flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
            <div className="drafting-grid"></div>
            <div className="absolute inset-0 noise-overlay"></div>
            
            {/* Architectural Background */}
            <div className="absolute top-0 right-[-10%] w-[60vw] h-[120%] opacity-15 select-none pointer-events-none transform rotate-3 mix-blend-multiply">
                <div className="w-full h-full bg-contain bg-right-top bg-no-repeat grayscale opacity-60" style={{ backgroundImage: `url('/assets/blueprint_residential_elevation_1772202237636.png')` }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
                <p className="font-data text-accent-blue text-sm uppercase tracking-widest mb-8 flex items-center justify-center gap-3">
                    <span className="w-8 h-[1px] bg-accent-blue opacity-50"></span>
                    Selected Work
                    <span className="w-8 h-[1px] bg-accent-blue opacity-50"></span>
                </p>
                <h1 className="font-drama italic text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 text-charcoal relative inline-block">
                    The visual <br/><span className="text-moss">archive.</span>
                    <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-6 pointer-events-none text-accent-blue" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path className="drafting-line" strokeDasharray="100" strokeDashoffset="0" d="M0,5 L100,5" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
                        <path d="M0,2 L0,8 M100,2 L100,8 M50,3.5 L50,6.5" stroke="currentColor" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                </h1>
                <p className="font-body text-charcoal/70 text-lg md:text-xl max-w-xl mx-auto mb-12">
                    Moments captured with intent. Built to last, engineered for depth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button onClick={() => document.getElementById('photo-archive')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-charcoal text-cream rounded-full font-heading font-semibold text-sm hover:bg-charcoal/90 btn-magnetic shadow-lg">
                        View Photo Archive
                    </button>
                    <button onClick={() => document.getElementById('video-archive')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-charcoal rounded-full font-heading font-semibold text-sm hover:bg-cream border border-charcoal/10 btn-magnetic shadow-lg">
                        View Video Archive
                    </button>
                </div>
            </div>
        </section>
    );
};

export const MasonryGallery = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const images = gsap.utils.toArray('.gallery-item');
            images.forEach((img, i) => {
                gsap.fromTo(img, 
                    { opacity: 0, y: 30 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: img,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }, galleryRef);
        return () => ctx.revert();
    }, []);

    // Helper to add random handwritten annotations
    const renderAnnotation = (index) => {
        const notes = [
            "Check color grade.",
            "Push shadows here",
            "Perfect composition",
            "Ref: Mid-century",
            "Print framing 8x10",
            "Highlight focus"
        ];
        if (index % 12 === 0) {
            return (
                <div className="absolute -top-4 -right-4 z-50 bg-[#F4F1EA] px-3 py-1 shadow-md border border-charcoal/10 transform rotate-3 font-hand text-charcoal text-xl">
                    {notes[(index / 12) % notes.length]}
                </div>
            );
        }
        if (index % 19 === 0) {
            return (
                <div className="absolute -bottom-6 -left-6 z-50 transform -rotate-6 font-hand text-accent-blue text-2xl opacity-80">
                    {notes[(index / 19) % notes.length]}
                </div>
            );
        }
        return null;
    };

    return (
        <section ref={galleryRef} className="py-24 bg-cream text-charcoal relative overflow-hidden">
            <div className="drafting-grid"></div>
            <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-50"></div>
            
            {/* Global Construction Lines */}
            <div className="construction-line-y text-accent-blue/30 left-[20%] hidden lg:block h-[200%] -top-20"></div>
            <div className="construction-line-y text-moss/20 right-[30%] hidden lg:block h-[200%] -top-20"></div>
            <div className="construction-line-x text-clay/20 top-[30%] hidden lg:block w-[200%] -left-20"></div>

            <div className="max-w-[95%] xl:max-w-[90%] mx-auto px-4 relative z-10">
                {/* CSS Columns for Masonry Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {photos.map((photo, index) => (
                        <div key={index} className="gallery-item relative break-inside-avoid group cursor-pointer tap-highlight-transparent">
                            {renderAnnotation(index)}
                            
                            {/* Photo Container */}
                            <div className="relative overflow-hidden bg-white p-2 md:p-3 shadow-lg hover:shadow-2xl active:shadow-2xl border border-charcoal/5 transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:rotate-1 active:-translate-y-2 active:rotate-1 z-45">
                                <img 
                                    src={`/assets/wedding/${photo}`} 
                                    alt={`Wedding Portfolio ${index + 1}`} 
                                    className="w-full h-auto object-cover transition-all duration-700 ease-out"
                                    loading="lazy"
                                />
                                {/* Measurement Detail overlay on hover */}
                                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                                    <span className="font-data text-[10px] bg-white/90 px-2 py-1 text-charcoal shadow-sm border border-charcoal/10 uppercase tracking-widest">
                                        FIG. {String(index + 1).padStart(3, '0')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Bottom fading edge */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export const VideoArchive = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.video-card', 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: videoRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, videoRef);
        return () => ctx.revert();
    }, []);

    // Placeholder data for video portfolio
    const videos = [
        { title: "Cinematic Feature 01", location: "Highlight Film", date: "2024", id: "B6YO1o6t13s" },
        { title: "Meaning Over Perfection", location: "Documentary", date: "2024", id: "5hHaTjQfdHw" },
        { title: "Moments That Matter", location: "Highlight Film", date: "2023", id: "jyub_SdF4co" },
        { title: "Telling It Honestly", location: "Super 8 & Digital", date: "2023", id: "J4ztqwfltq0" },
        { title: "The Visual Archive", location: "Feature Film", date: "2023", id: "F3fkYijcLw8" }
    ];

    return (
        <section id="video-archive" ref={videoRef} className="py-24 bg-[#EBEDE9] text-moss relative overflow-hidden shadow-[inset_0_20px_40px_rgba(0,0,0,0.05)] border-t border-moss/10">
            <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-20"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
                    <p className="font-data text-clay text-sm uppercase tracking-widest mb-4">Motion Picture</p>
                    <h2 className="font-drama italic text-5xl md:text-7xl leading-[0.9] text-moss">Video Archive</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {videos.map((vid, i) => (
                        <div key={i} className="video-card group relative">
                            {/* Tape effect */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/10 backdrop-blur-sm rotate-[-2deg] shadow-sm z-20 pointer-events-none"></div>
                            
                            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-moss/10 shadow-2xl mb-6 z-45">
                                <iframe 
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${vid.id}?modestbranding=1&rel=0`}
                                    title={vid.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    frameBorder="0"
                                ></iframe>
                            </div>
                            
                            <div className="border-l-2 border-clay/50 pl-4">
                                <h3 className="font-heading text-2xl mb-2 text-moss">{vid.title}</h3>
                                <p className="font-data text-sm text-moss/50 uppercase tracking-widest">{vid.location} • {vid.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    return (
        <main className="w-full bg-cream min-h-screen">
            <PortfolioHero />
            <div id="photo-archive">
                <MasonryGallery />
            </div>
            <VideoArchive />
        </main>
    );
};

export default Portfolio;

