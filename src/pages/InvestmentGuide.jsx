import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { servicesData } from '../utils/pricingData';

const PricingCard = ({ pkg, isMiddle }) => (
    <div className={`flex flex-col relative transition-all duration-500 ease-out p-6 md:p-8 rounded-3xl ${isMiddle ? 'bg-white/5 border border-clay/30 lg:scale-[1.03] shadow-2xl relative z-10' : 'bg-transparent border border-white/5'}`}>
        
        {/* Glow behind the middle card */}
        {isMiddle && (
            <div className="absolute inset-0 bg-clay/5 rounded-3xl blur-2xl -z-10 pointer-events-none"></div>
        )}

        {/* Note Pin */}
        {pkg.note && (
             <div className="relative pl-4 mb-6">
                 <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-clay"></div>
                 <p className="italic text-cream/90 text-sm md:text-base">{pkg.note}</p>
             </div>
        )}

        <h2 className={`font-heading font-bold text-3xl mb-2 ${isMiddle ? 'text-clay' : 'text-cream'}`}>{pkg.name}</h2>
        <p className="font-data text-2xl text-cream/80 mb-8 border-b border-white/10 pb-6">{pkg.price}</p>
        
        <div className="flex flex-col gap-6 font-body text-cream/80 text-lg leading-relaxed flex-grow">
            <p>Up to <strong className="text-cream">{pkg.hours} of coverage</strong></p>
            <p><strong className="text-cream">{pkg.shooters}</strong></p>
            
            <p><strong className="text-cream">{pkg.deliverable.split(' ').slice(0, 3).join(' ') + ' '}</strong> {pkg.deliverable.split(' ').slice(3).join(' ')}</p>
            
            {pkg.extras.map((extra, idx) => (
                <p key={idx}><strong className="text-cream">{extra.split(',')[0]}</strong>{extra.includes(',') ? ',' + extra.split(',').slice(1).join(',') : ''}</p>
            ))}

            {pkg.bestFor && (
                <div className="mt-4 pt-6 border-t border-white/10">
                    <p className="font-bold text-cream mb-2">Best for:</p>
                    <p className="text-sm md:text-base text-cream/60">{pkg.bestFor}</p>
                </div>
            )}
        </div>
    </div>
);


const InvestmentGuide = () => {
    const containerRef = useRef(null);
    const gridRef = useRef(null);
    const [activeTab, setActiveTab] = useState('video'); // 'video', 'photo', 'both'

    useEffect(() => {
        if (localStorage.getItem('unlocked_investment') !== 'true') {
            window.location.hash = '#/access';
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

    // Animate grid change
    useEffect(() => {
        if (!gridRef.current) return;
        gsap.fromTo(gridRef.current.children, 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', overwrite: true }
        );
    }, [activeTab]);

    return (
        <main ref={containerRef} className="bg-[#111111] text-cream min-h-screen pt-40 pb-32 px-6 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 noise-overlay opacity-50 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header & Toggle Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8 stagger-fade">
                    <div>
                        <p className="font-data text-clay text-sm uppercase tracking-widest mb-4">Pricing & Packages</p>
                        <h1 className="font-drama italic text-5xl md:text-7xl">Investment Guide</h1>
                    </div>
                    
                    {/* The Toggle */}
                    <div className="bg-[#1A1A1A] border border-white/10 p-1.5 rounded-[2rem] md:rounded-full flex flex-wrap md:flex-nowrap justify-center gap-1 self-start md:self-end shrink-0 w-full md:w-auto">
                        {['video', 'photo', 'both'].map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 md:px-6 py-3 rounded-full font-heading font-semibold text-xs md:text-sm transition-all duration-300 flex-grow md:flex-grow-0 whitespace-nowrap ${
                                    activeTab === tab 
                                    ? 'bg-clay text-cream shadow-md' 
                                    : 'text-cream/50 hover:text-cream hover:bg-white/5'
                                }`}
                            >
                                {tab === 'video' ? 'Videography' : tab === 'photo' ? 'Photography' : 'The Full Suite'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Introductory Note + Image Pair */}
                <div className="grid md:grid-cols-12 gap-12 items-center mb-24 stagger-fade">
                    <div className="md:col-span-7">
                        <div className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-clay/10 blur-3xl rounded-full"></div>
                            <div className="w-12 h-[1px] bg-clay mb-8"></div>
                            <p className="font-body text-cream/90 text-xl md:text-2xl leading-relaxed italic relative z-10">
                                These collections are designed to cover most weddings really well. If your day looks a little different, we'll adjust thoughtfully. No upselling. No weird pressure. Just making sure nothing important gets missed.
                            </p>
                        </div>
                    </div>
                    
                    {/* Atmospheric Image */}
                    <div className="md:col-span-5 h-[400px] relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
                        <div className="absolute inset-0 bg-moss/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                        <img 
                            src={activeTab === 'photo' ? "/assets/wedding/Cass and Cory Wedding Screen Grabs_1.4.1.jpg" : activeTab === 'both' ? "/assets/wedding/Wright Wedding-18.jpg" : "/assets/wedding/Evan Maggie Wedding-10.jpg"} 
                            alt="Wedding documentation" 
                            className="w-full h-full object-cover grayscale-[30%] transform group-hover:scale-105 transition-transform duration-[2s]"
                        />
                        <div className="absolute bottom-4 left-4 z-20 font-data text-[10px] text-white/50 uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            {activeTab === 'video' ? 'Motion.01' : activeTab === 'photo' ? 'Stills.01' : 'Hybrid.01'}
                        </div>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div ref={gridRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {servicesData[activeTab].map((pkg, idx) => (
                        <PricingCard key={`${activeTab}-${idx}`} pkg={pkg} isMiddle={idx === 1} />
                    ))}
                </div>

                {/* Interstitial Imagery row before CTA */}
                <div className="mt-24 mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 px-4 stagger-fade opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700">
                     <div className="aspect-square rounded-2xl overflow-hidden"><img src="/assets/wedding/evan_maggie_france-2025-24.jpg" alt="Detail" className="w-full h-full object-cover"/></div>
                     <div className="aspect-square rounded-2xl overflow-hidden md:translate-y-8"><img src="/assets/wedding/Esther and Zeke Engagment-137.jpg" alt="Detail" className="w-full h-full object-cover"/></div>
                     <div className="aspect-square rounded-2xl overflow-hidden hidden md:block"><img src="/assets/wedding/Wright Wedding-19.jpg" alt="Detail" className="w-full h-full object-cover"/></div>
                     <div className="aspect-square rounded-2xl overflow-hidden hidden md:block md:translate-y-8"><img src="/assets/wedding/Cass and Cory Wedding Screen Grabs_1.7.1.jpg" alt="Detail" className="w-full h-full object-cover"/></div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 text-center stagger-fade pt-16 relative">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-clay/50 to-transparent"></div>
                     <a href="#/book" className="inline-block px-10 py-5 bg-clay text-cream rounded-[2rem] font-heading font-semibold text-lg hover:bg-clay/90 btn-magnetic shadow-lg shadow-clay/20 text-center transition-all duration-300">
                        Inquire with Michael
                    </a>
                </div>

            </div>
        </main>
    );
};

export default InvestmentGuide;
