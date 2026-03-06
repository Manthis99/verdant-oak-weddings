import React, { useEffect, useRef, useState, useMemo } from 'react';
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
    const [showAllMobile, setShowAllMobile] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Creates an evenly spaced, diverse array of 12 photos across the entire collection
    const diverseMobilePhotos = useMemo(() => {
        if (photos.length <= 12) return photos;
        const result = [];
        const step = photos.length / 12;
        for (let i = 0; i < 12; i++) {
            // Use math.floor to get an exact index from the step interval
            result.push(photos[Math.floor(i * step)]);
        }
        return result;
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Typical md breakpoint
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
            <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-20 pointer-events-none z-0"></div>
            
            {/* Global Construction Lines */}
            <div className="construction-line-y text-accent-blue/30 left-[20%] hidden lg:block h-[200%] -top-20"></div>
            <div className="construction-line-y text-moss/20 right-[30%] hidden lg:block h-[200%] -top-20"></div>
            <div className="construction-line-x text-clay/20 top-[30%] hidden lg:block w-[200%] -left-20"></div>

            <div className="max-w-[95%] xl:max-w-[90%] mx-auto px-4 relative z-10">
                {/* CSS Columns for Masonry Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {(isMobile && !showAllMobile ? diverseMobilePhotos : photos).map((photo, index) => (
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

                {/* Mobile View More Button */}
                {isMobile && !showAllMobile && photos.length > 12 && (
                    <div className="mt-16 text-center w-full relative z-20">
                        <button 
                            onClick={() => setShowAllMobile(true)}
                            className="px-10 py-5 bg-charcoal text-cream rounded-full font-heading font-semibold text-sm md:text-lg hover:bg-charcoal/90 btn-magnetic shadow-[0_10px_30px_rgba(0,0,0,0.15)] inline-flex items-center gap-3 active:scale-95 transition-all"
                        >
                            Load More Photos
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
            
            {/* Bottom fading edge */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export const VideoArchive = () => {
    const videoRef = useRef(null);
    const [activeVideoIndex, setActiveVideoIndex] = useState(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.video-row', 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    stagger: 0.15,
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

    const videos = [
        { client: "Zach & Marissa", title: "Cinematic Feature 01", category: "Highlight Film", date: "2024", id: "B6YO1o6t13s", thumb: "/assets/wedding/zach_marissa_feature_v3.jpg" },
        { client: "The Wrights", title: "Meaning Over Perfection", category: "Documentary", date: "2024", id: "5hHaTjQfdHw", thumb: "/assets/wedding/the_wrights_feature.jpg" },
        { client: "Matthew & Kayla Walker", title: "A Lasting Change", category: "Destination Wedding", date: "2022", id: "e71Fnrf9dkg", thumb: "/assets/wedding/matthew_kayla_feature.jpg" },
        { client: "Tommy & Katy Rivera", title: "Telling It Honestly", category: "Super 8 & Digital", date: "2023", id: "J4ztqwfltq0", thumb: "/assets/wedding/A7309490.jpg" },
        { client: "Colton & Carlee Day", title: "Destination Story", category: "Documentary", date: "2024", id: "VQg4Yzz4mBI", thumb: "/assets/wedding/carlee_colton_thumb.png" },
        { client: "Joshua & Kayla Resto", title: "Our Perfect Day", category: "Highlight", date: "2022", id: "8oTBDVPsETA", thumb: "/assets/wedding/Evan Maggie Wedding-1(1).jpg" },
        { client: "Noah & Kate", title: "Moments That Matter", category: "Highlight Film", date: "2023", id: "jyub_SdF4co", thumb: "/assets/wedding/A7309466.jpg" },
        { client: "CJ & Elli", title: "The Visual Archive", category: "Feature Film", date: "2023", id: "F3fkYijcLw8", thumb: "/assets/wedding/A7309658.jpg" },
        { client: "Robby & Jordan Tucker", title: "Wedding Film", category: "Highlight", date: "2024", id: "flrePRRpblM", thumb: "/assets/wedding/robby_jordan_thumb.png" },
        { client: "Preston & Jessika", title: "A Celebration of Love", category: "Highlight", date: "2023", id: "QNawhCavyZY", thumb: "/assets/wedding/preston_jessika_thumb.jpg" },
        { client: "Sam & Alyssa Freed", title: "Together Forever", category: "Highlight", date: "2023", id: "LjPIrZ5ZDtM", thumb: "/assets/wedding/sam_alyssa_thumb.png" }
    ];

    return (
        <section id="video-archive" ref={videoRef} className="py-24 md:py-32 bg-[#F5F3EE] text-moss relative overflow-hidden shadow-[inset_0_20px_40px_rgba(0,0,0,0.05)] border-t border-moss/10">
            <div className="absolute inset-0 noise-overlay mix-blend-multiply opacity-20 pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-40">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div className="video-row">
                        <h2 className="font-heading font-black text-5xl md:text-7xl tracking-tighter text-charcoal mb-4">The Archive</h2>
                        <p className="font-body text-charcoal/70 text-lg md:text-xl max-w-xl">
                            An index of cinematic wedding documentaries, highlight films, and targeted visual narratives.
                        </p>
                    </div>
                    <div className="font-data text-accent-blue text-sm uppercase tracking-widest font-bold video-row">
                        {videos.length} ENTRIES FOUND
                    </div>
                </div>

                <div className="w-full">
                    {/* Featured Top 3 Videos */}
                    <div className="w-full mb-20 md:mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                            {/* Main Feature: Video 1 */}
                            <div className="col-span-1 md:col-span-12 relative group cursor-pointer video-row" onClick={() => setActiveVideoIndex(activeVideoIndex === 0 ? null : 0)}>
                                <div className="relative w-full aspect-[4/3] sm:aspect-[2/1] lg:aspect-[2.8/1] bg-black rounded-[2rem] overflow-hidden shadow-2xl mb-6 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500">
                                    <img src={videos[0].thumb} alt={videos[0].client} className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-charcoal/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
                                        <span className="font-data text-xs md:text-sm text-white/70 uppercase tracking-widest mb-3 block">{videos[0].category}</span>
                                        <h3 className="font-drama italic text-5xl md:text-7xl lg:text-[5rem] text-cream leading-tight">{videos[0].title}</h3>
                                    </div>
                                </div>
                                
                                {/* Expanded Detail / Video Player */}
                                <div className={`relative z-50 isolate mix-blend-normal overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeVideoIndex === 0 ? 'max-h-[1000px] mt-6 pb-6' : 'max-h-0'}`}>
                                    <div className="relative w-full aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-charcoal/10">
                                        {activeVideoIndex === 0 && (
                                            <iframe 
                                                className="absolute top-0 left-0 w-full h-full"
                                                src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&modestbranding=1&rel=0`}
                                                title={videos[0].title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                frameBorder="0"
                                            ></iframe>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between text-charcoal px-2">
                                    <h4 className="font-heading font-black tracking-tight text-2xl md:text-3xl">{videos[0].client}</h4>
                                    <div className="flex items-center gap-4 font-data text-xs uppercase tracking-widest text-charcoal/50 font-bold">
                                        <span>{videos[0].date}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-clay"></span>
                                        <span>Feature 01</span>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 & 3 */}
                            {[1, 2].map(i => (
                                <div key={i} className="col-span-1 md:col-span-6 relative group cursor-pointer mt-8 md:mt-0 video-row" onClick={() => setActiveVideoIndex(activeVideoIndex === i ? null : i)}>
                                    <div className="relative w-full aspect-[4/3] sm:aspect-video bg-black rounded-[2rem] overflow-hidden shadow-xl mb-6 group-hover:shadow-2xl transition-all duration-500">
                                        {/* Apply object-position to shift the Walker frame down slightly to hide the top black screen recording border */}
                                        <img src={videos[i].thumb} alt={videos[i].client} className={`w-full h-full object-cover ${i === 2 ? 'object-[center_12%]' : 'object-center'} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out`} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-charcoal/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                                            <span className="font-data text-[10px] md:text-xs text-white/70 uppercase tracking-widest mb-2 block">{videos[i].category}</span>
                                            <h3 className="font-drama italic text-3xl md:text-5xl text-cream leading-tight">{videos[i].title}</h3>
                                        </div>
                                    </div>

                                    {/* Expanded Detail / Video Player */}
                                    <div className={`relative z-50 isolate mix-blend-normal overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeVideoIndex === i ? 'max-h-[800px] mt-6 pb-6' : 'max-h-0'}`}>
                                        <div className="relative w-full aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-charcoal/10">
                                            {activeVideoIndex === i && (
                                                <iframe 
                                                    className="absolute top-0 left-0 w-full h-full"
                                                    src={`https://www.youtube.com/embed/${videos[i].id}?autoplay=1&modestbranding=1&rel=0`}
                                                    title={videos[i].title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    frameBorder="0"
                                                ></iframe>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-charcoal px-2">
                                        <h4 className="font-heading font-bold text-xl md:text-2xl">{videos[i].client}</h4>
                                        <div className="flex items-center gap-3 font-data text-[10px] uppercase tracking-widest text-charcoal/50 font-bold">
                                            <span>Feature 0{i+1}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full mb-8 flex items-center gap-4 video-row">
                        <span className="font-data text-accent-blue text-sm uppercase tracking-widest font-bold">Complete Archive</span>
                        <div className="h-px bg-accent-blue/20 flex-grow"></div>
                    </div>

                    {/* Header Row (Desktop Only) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b-2 border-charcoal/20 font-data text-xs text-charcoal/50 uppercase tracking-widest mb-6 video-row">
                        <div className="col-span-4">Client / Entity</div>
                        <div className="col-span-5">Project Title</div>
                        <div className="col-span-3 text-right">Category</div>
                    </div>

                    {/* List Rows */}
                    <div className="flex flex-col gap-4 md:gap-0">
                        {videos.slice(3).map((vid, sliceIndex) => {
                            const i = sliceIndex + 3;
                            return (
                            <div key={i} className="video-row group flex flex-col border-b border-charcoal/10 md:py-6 relative">
                                {/* The clickable row */}
                                <div 
                                    onClick={() => setActiveVideoIndex(activeVideoIndex === i ? null : i)}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center cursor-pointer p-4 md:p-0 rounded-2xl md:rounded-none bg-white md:bg-transparent shadow-sm md:shadow-none hover:bg-white/50 transition-colors"
                                >
                                    {/* Column 1: Number + Thumb + Client */}
                                    <div className="col-span-1 md:col-span-4 flex items-center gap-6">
                                        <span className="font-data text-charcoal/30 text-xs hidden md:block">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="w-16 h-16 md:w-12 md:h-12 shrink-0 rounded-lg md:rounded-full overflow-hidden border border-charcoal/10 relative">
                                            <div className="absolute inset-0 bg-moss/10 mix-blend-overlay z-10 pointer-events-none"></div>
                                            <img src={vid.thumb} alt={vid.client} className="w-full h-full object-cover grayscale-[30%]" />
                                        </div>
                                        <div className="flex flex-col md:block">
                                            <span className="font-data text-[10px] text-charcoal/50 uppercase tracking-widest md:hidden mb-1">Client</span>
                                            <h3 className="font-heading font-bold text-lg md:text-xl text-charcoal group-hover:text-moss transition-colors">{vid.client}</h3>
                                        </div>
                                    </div>

                                    {/* Column 2: Project Title */}
                                    <div className="col-span-1 md:col-span-5 flex flex-col md:block">
                                        <span className="font-data text-[10px] text-charcoal/50 uppercase tracking-widest md:hidden mb-1">Project Title</span>
                                        <p className="font-drama italic text-2xl md:text-3xl text-charcoal/80">{vid.title}</p>
                                    </div>

                                    {/* Column 3: Category & Play Button */}
                                    <div className="col-span-1 md:col-span-3 flex items-center justify-between md:justify-end gap-6">
                                        <div className="flex flex-col md:items-end">
                                            <span className="font-data text-[10px] text-charcoal/50 uppercase tracking-widest md:hidden mb-1">Category</span>
                                            <p className="font-data text-xs text-charcoal/60 uppercase tracking-widest text-left md:text-right">{vid.category}</p>
                                        </div>
                                        <div className={`w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center transition-all duration-300 shrink-0 ${activeVideoIndex === i ? 'bg-moss border-moss text-cream' : 'text-charcoal group-hover:bg-moss/10 group-hover:border-moss/30 group-hover:text-moss'}`}>
                                            {activeVideoIndex === i ? (
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                            ) : (
                                                <svg className="w-4 h-4 translate-x-px" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Detail / Video Player */}
                                <div className={`relative z-50 isolate mix-blend-normal overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeVideoIndex === i ? 'max-h-[800px] mt-6 md:mt-8 pb-6 md:pb-8' : 'max-h-0'}`}>
                                    <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-charcoal/10 mix-blend-normal">
                                        {activeVideoIndex === i && (
                                            <iframe 
                                                className="absolute top-0 left-0 w-full h-full"
                                                src={`https://www.youtube.com/embed/${vid.id}?autoplay=1&modestbranding=1&rel=0`}
                                                title={vid.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                frameBorder="0"
                                            ></iframe>
                                        )}
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
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

