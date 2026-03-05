import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WeddingGuide = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      // Fade up animations for all sections
      gsap.utils.toArray('.fade-up-section').forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Timeline line animation
      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });
      
      // Image parallax
      gsap.utils.toArray('.parallax-image').forEach(img => {
          gsap.to(img, {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                  trigger: img.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
              }
          })
      })

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-cream min-h-screen text-charcoal font-body overflow-hidden">
      
      {/* 1. HERO COVER */}
      <section className="relative w-full h-screen flex flex-col justify-between p-8 md:p-12">
        <div className="absolute inset-0 overflow-hidden z-0">
            {/* Cinematic dark wedding photo overlay */}
            <div className="absolute inset-0 bg-charcoal/30 z-10" />
            <img 
              src="/assets/wedding/wedding guide photos/Wise Wedding-165.jpg" 
              alt="Wedding Couple"
              className="w-full h-[100dvh] object-cover grayscale opacity-90 parallax-image object-center"
            />
        </div>

        {/* Top Spacer */}
        <div className="z-10 text-cream text-sm tracking-widest uppercase mt-20 md:mt-0">
          Verdant Oak Weddings
        </div>

        {/* Bottom Title */}
        <div className="z-10 text-cream fade-up-section flex flex-col items-center text-center pb-12 md:pb-0">
            <h2 className="font-drama italic text-3xl md:text-7xl mb-2">Welcome to the</h2>
            <h1 className="font-heading font-black text-6xl md:text-[12vw] leading-none uppercase tracking-tighter mix-blend-overlay opacity-90">
              Wedding<br/>Guide
            </h1>
            <div className="mt-8 font-heading uppercase tracking-[0.3em] text-sm opacity-80">
              Planning Your Day
            </div>
        </div>
      </section>

      {/* 2. TABLE OF CONTENTS */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 item-start fade-up-section">
        <div className="w-full md:w-1/2">
            <div className="font-drama italic text-4xl text-moss mb-2">Table of</div>
            <h2 className="font-heading font-black text-7xl md:text-9xl tracking-tighter uppercase mb-12">Contents</h2>

            <div className="flex flex-col gap-8">
              {[
                { num: "01", title: "The Photographer", id: "section-photographer", desc: "Learn more about who will be capturing your love story." },
                { num: "02", title: "The Timeline", id: "section-timeline", desc: "From start to finish. Let me show you the steps!" },
                { num: "03", title: "Packages & Destination", id: "section-packages", desc: "Investing in one of the most important days of your life." },
                { num: "04", title: "The Engagement", id: "section-engagement", desc: "Have fun with your engagement photos - dream big!" },
                { num: "05", title: "The Booking", id: "section-booking", desc: "How to get your date set in stone." },
                { num: "06", title: "The End Details", id: "section-details", desc: "Your memories, forever captured." }
              ].map((item, i) => (
                <div 
                    key={i} 
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex gap-6 group cursor-pointer border-b border-charcoal/10 pb-4 pr-8 md:pr-0"
                >
                    <span className="font-drama italic text-4xl text-clay/50 group-hover:text-clay transition-colors mt-0.5">{item.num}</span>
                    <div>
                        <h3 className="font-heading font-bold text-xl uppercase tracking-tight mb-1 group-hover:text-moss transition-colors">{item.title}</h3>
                        <p className="text-sm text-charcoal/70">{item.desc}</p>
                    </div>
                </div>
              ))}
            </div>
        </div>
        
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] overflow-hidden rounded-3xl relative mt-4 md:mt-0">
             <img 
              src="/assets/wedding/wedding guide photos/Wise Wedding-203.jpg" 
              alt="Wedding Details"
              className="absolute inset-0 w-full h-full object-cover parallax-image"
            />
        </div>
      </section>

      {/* 3. THE PHOTOGRAPHER */}
      <section id="section-photographer" className="py-24 bg-moss text-cream">
        <div className="max-w-5xl mx-auto px-8 flex flex-col items-center text-center fade-up-section">
            <div className="w-64 h-80 overflow-hidden border-4 border-cream/20 rotate-[-2deg] mb-12">
               <img 
                  src="/assets/michael-portrait.jpg" 
                  alt="Michael Proctor"
                  className="w-full h-full object-cover"
                />
            </div>
            
            <h2 className="font-heading font-black text-6xl md:text-8xl tracking-tight uppercase mb-4">Hey, I'm Michael</h2>
            <p className="font-heading font-bold tracking-widest uppercase text-clay mb-8">The Photographer</p>

            <p className="font-body text-lg md:text-xl max-w-3xl leading-relaxed opacity-90 mb-12">
                I’m here to tell your love story and intertwine every detail of you as a couple into my photographs. 
                Wedding days are my favorite because of the love that comes out, not only between you and your partner 
                but from everyone who is there to celebrate you two. I want you to look back at your photos and know 
                exactly how you felt in that moment.
            </p>

            <div className="w-24 border-t border-cream/30 mb-12" />

            {/* Fun Facts Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl">
                <div>
                   <h4 className="font-heading font-bold uppercase mb-2">The Drive</h4>
                   <p className="text-sm opacity-80 text-cream/70">A follower of Jesus, husband, and father. My understanding of covenant and family shapes exactly how I view your wedding day.</p>
                </div>
                <div>
                   <h4 className="font-heading font-bold uppercase mb-2">The Process</h4>
                   <p className="text-sm opacity-80 text-cream/70">I run Verdant Oak, an agency that scales creative operations. I bring that same hyper-organized calm to wedding chaos.</p>
                </div>
                <div>
                   <h4 className="font-heading font-bold uppercase mb-2">The Fun Stuff</h4>
                   <p className="text-sm opacity-80 text-cream/70">A 3D-printing nerd who hand-grinds his own coffee. I obsess over the small details so you don't have to.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3.5 THE EXPERIENCE / PHILOSOPHY */}
      <section className="py-32 px-8 bg-charcoal text-cream relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/wedding/wedding guide photos/Wise Wedding-715.jpg" 
            alt="Organic Texture" 
            className="w-full h-full object-cover opacity-20 grayscale parallax-image"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center fade-up-section">
            <h2 className="font-drama italic text-4xl text-clay mb-6">The Experience</h2>
            <p className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter leading-tight mb-12">
                I BELIEVE THAT BEAUTIFUL PHOTOGRAPHY HAPPENS WHEN YOU FEEL <span className="text-clay">EFFORTLESSLY YOURSELF</span>.
            </p>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                My approach is rooted in genuine connection. I won't just pose you and tell you to smile; I will guide you through prompts that create real, authentic emotion. By the time your wedding day arrives, we won't just be vendor and client—we'll be friends.
            </p>
        </div>
      </section>

      {/* 4. THE TIMELINE */}
      <section id="section-timeline" className="py-24 px-8 max-w-4xl mx-auto relative timeline-container">
        
        <div className="text-center mb-24 fade-up-section">
            <div className="font-drama italic text-4xl text-moss mb-2">The</div>
            <h2 className="font-heading font-black text-7xl md:text-9xl tracking-tighter uppercase">Timeline</h2>
        </div>

        {/* Central Line */}
        <div className="absolute left-8 md:left-1/2 top-[300px] bottom-24 w-px bg-charcoal/20 hidden md:block" />
        <div className="absolute left-8 md:left-1/2 top-[300px] bottom-24 w-px bg-moss origin-top timeline-line hidden md:block" />

        <div className="space-y-24">
            {[
                { 
                  num: "01", title: "Inquiry", 
                  desc: "If you’re reading this guide - you’re already past step one! We start with a connection call to make sure our vibes align and we're a perfect fit for your vision." 
                },
                { 
                  num: "02", title: "Book Your Date", 
                  desc: "We’ve chatted, we’ve clicked, let’s book! To secure your date, you’ll receive a digital contract to review and sign along with an invoice for the retainer fee." 
                },
                { 
                  num: "03", title: "Engagement Session", 
                  desc: "This allows us to connect before your wedding, capture your dynamic, and get comfortable in front of the camera. Let’s make your dream engagement shoot happen." 
                },
                { 
                  num: "04", title: "Timeline & Planning", 
                  desc: "I am here for all of your scheduling needs! You'll receive a detailed questionnaire shortly before the wedding to help craft a photography timeline that flows naturally." 
                },
                { 
                  num: "05", title: "Wedding Day & Delivery", 
                  desc: "YOUR DAY! It’s here! Everything you’ve dreamed of. After the wedding, expect sneak peeks within 48 hours. Full galleries are meticulously edited and delivered in 6-8 weeks." 
                }
            ].map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-8 items-center fade-up-section ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Number */}
                    <div className={`w-full md:w-1/2 flex justify-start ${i % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <span className="font-drama italic text-8xl text-charcoal/5 leading-none">{step.num}</span>
                    </div>
                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h3 className="font-heading font-black text-3xl uppercase tracking-tight mb-4">{step.title}</h3>
                        <p className="text-charcoal/80 leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 4.5 WEDDING COLLECTIONS */}
      <section id="section-packages" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up-section">
            <h2 className="font-heading font-black text-6xl md:text-8xl tracking-tighter uppercase mb-4">The Investment</h2>
            <p className="font-drama italic text-3xl text-moss">Wedding Collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Collection 1 */}
            <div className="bg-cream border border-charcoal/10 rounded-[2rem] p-12 relative overflow-hidden hover:border-moss/50 transition-colors group fade-up-section">
                <div className="absolute top-0 left-0 w-full h-2 bg-charcoal/5 group-hover:bg-moss transition-colors" />
                <h3 className="font-heading font-black text-3xl uppercase tracking-tight mb-2">Collection One</h3>
                <div className="font-drama italic text-5xl text-charcoal mb-8">$3,000</div>
                <ul className="space-y-4 mb-12">
                    <li className="flex gap-4"><span className="text-moss">✦</span> 8 hours of wedding day coverage</li>
                    <li className="flex gap-4"><span className="text-moss">✦</span> Complimentary engagement session</li>
                    <li className="flex gap-4"><span className="text-moss">✦</span> Online digital gallery delivery</li>
                    <li className="flex gap-4"><span className="text-moss">✦</span> Custom wedding day timeline</li>
                    <li className="flex gap-4"><span className="text-moss">✦</span> Print release rights</li>
                </ul>
            </div>
            {/* Collection 2 */}
            <div className="bg-moss text-cream rounded-[2rem] p-12 relative overflow-hidden group fade-up-section shadow-xl hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 left-0 w-full h-2 bg-clay" />
                <h3 className="font-heading font-black text-3xl uppercase tracking-tight mb-2">Collection Two</h3>
                <div className="font-drama italic text-5xl text-cream mb-8">$3,500</div>
                <ul className="space-y-4 mb-12">
                    <li className="flex gap-4"><span className="text-clay">✦</span> 10 hours of wedding day coverage</li>
                    <li className="flex gap-4"><span className="text-clay">✦</span> Complimentary engagement session</li>
                    <li className="flex gap-4"><span className="text-clay">✦</span> Online digital gallery delivery</li>
                    <li className="flex gap-4"><span className="text-clay">✦</span> Custom wedding day timeline</li>
                    <li className="flex gap-4"><span className="text-clay">✦</span> Print release rights</li>
                </ul>
            </div>
        </div>

        {/* 4.6 ADD ONS */}
        <div className="fade-up-section bg-charcoal/5 rounded-[3rem] p-12 md:p-20 text-center">
            <p className="font-drama italic text-3xl text-moss mb-4">Build Your Own Collection</p>
            <h2 className="font-heading font-black text-5xl uppercase tracking-tighter mb-12">Add-Ons</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Engagement Session", price: "$500" },
                    { title: "Extra Coverage", price: "$400/hr" },
                    { title: "Second Shooter", price: "$450" },
                    { title: "35mm Film Add-on", price: "$300 (per 5 rolls)" },
                    { title: "Content Creation Add-on", price: "$350" },
                    { title: "Expedited Gallery (1 week)", price: "$500" }
                ].map((item, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-charcoal/20 pb-4 text-left group">
                        <span className="font-heading font-bold uppercase tracking-widest text-sm group-hover:text-moss transition-colors">{item.title}</span>
                        <span className="font-drama italic text-xl text-moss">{item.price}</span>
                    </div>
                ))}
            </div>
            <p className="mt-12 text-sm text-charcoal/50 max-w-2xl mx-auto leading-relaxed">
                *Engagement sessions are complimentary in collections but can be booked separately. Travel fees may apply. Contact me for a custom quote if you don't see what you need.
            </p>
        </div>
      </section>

      {/* 5. DESTINATION & ELOPEMENTS */}
      <section className="py-24 px-8 bg-cream text-charcoal max-w-5xl mx-auto flex flex-col items-center text-center fade-up-section">
        <h2 className="font-heading font-black text-4xl md:text-8xl tracking-tighter uppercase mb-4">Destination &</h2>
        <h2 className="font-heading font-black text-5xl md:text-9xl tracking-tighter uppercase mb-4">Elopements</h2>
        <p className="font-drama italic text-2xl md:text-4xl text-moss mb-12">your love in your element</p>
        
        <p className="text-lg opacity-80 max-w-3xl mb-8 leading-relaxed">
            Another thing about me is I LOVE to travel. Coast to coast within the United States or even abroad, I’ll be there to capture your destination wedding or elopement. Let’s make your dream wedding come true in a place that represents your love the best.
        </p>
        <p className="text-lg opacity-80 max-w-3xl mb-8 leading-relaxed">
            My destination wedding packages INCLUDE travel! Prices may vary on location. Please reach out directly for destination packages for location-specific travel costs.
        </p>
        <p className="text-lg opacity-80 max-w-3xl mb-8 leading-relaxed">
            Elopements don’t have to be destinations though! This can include courthouse coverage and/or local elopements. You dream it, I’ll photograph it for you! <strong className="font-heading tracking-widest uppercase">Elopement coverage begins at $500 per hour.</strong>
        </p>
        
        <div className="w-24 border-t border-charcoal/20 my-8" />
        
        <p className="text-sm opacity-60 max-w-2xl font-heading tracking-widest uppercase leading-loose">
            Experience in: Illinois, Missouri, Oregon, Tennessee, Florida, Georgia, Arkansas, Montana, Wyoming, and Mexico.
        </p>
      </section>

      {/* 6. DESTINATION GALLERY */}
      <section className="py-24 bg-charcoal text-cream overflow-hidden">
        <div className="text-center mb-16 fade-up-section">
            <h2 className="font-heading font-black text-5xl uppercase tracking-tighter mb-4">Destination</h2>
            <p className="font-drama italic text-clay text-4xl">Gallery</p>
        </div>

        <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: 'none' }}>
           {[
               "/assets/wedding/wedding guide photos/Evan Maggie Wedding-19.jpg",
               "/assets/wedding/wedding guide photos/Wise Wedding-148.jpg",
               "/assets/wedding/wedding guide photos/A7309658.jpg",
               "/assets/wedding/wedding guide photos/Wright-89.jpg"
           ].map((img, i) => (
               <div key={i} className="min-w-[80vw] md:min-w-[400px] h-[500px] flex-shrink-0 snap-center rounded-2xl overflow-hidden grayscale active:grayscale-0 hover:grayscale-0 transition-all duration-700 pointer-events-auto">
                   <img src={img} alt="Destination Preview" className="w-full h-full object-cover pointer-events-none" />
               </div>
           ))}
        </div>
      </section>

      {/* 7. INSPIRATIONAL ENGAGEMENTS */}
      <section id="section-engagement" className="py-24 px-8 bg-moss text-cream">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 fade-up-section items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
                <p className="font-drama italic text-4xl text-clay mb-2">Inspirational</p>
                <h2 className="font-heading font-black text-5xl md:text-6xl uppercase tracking-tighter mb-8">Engagements</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-8">
                    Your engagement session should be fun and give a glimpse into your wedding day! Dream BIG. I love doing something fun and different for every couple.
                </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"><img src="/assets/wedding/wedding guide photos/Wise Wedding-696.jpg" className="w-full h-full object-cover" alt="Engagement"/></div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mt-12 shadow-xl"><img src="/assets/wedding/wedding guide photos/A7309921.jpg" className="w-full h-full object-cover" alt="Engagement"/></div>
            </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-32 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-20 fade-up-section">
            <p className="font-drama italic text-4xl text-moss mb-2">Frequently Asked</p>
            <h2 className="font-heading font-black text-6xl md:text-8xl tracking-tighter uppercase mb-4">Questions</h2>
        </div>
        <div className="space-y-16 fade-up-section">
            {[
                {q: "How do you choose your second photographers?", a: "I have some amazing photographers that are always my first choice when it comes to hiring seconds. If they are not available, I will hire an experienced photographer by screening for a set criteria of experience and gallery proof."},
                {q: "Do you edit my physical appearance?", a: "Never! The only editing I do is blemish & spot touch ups. I will also remove unwanted objects in the background when possible. I do not physically alter or edit your body, clothing, or accessories."},
                {q: "Will I receive color and black & white photos?", a: "Absolutely! While every photo might not have a B&W copy, you will always receive some black & white images of your day as I deem appropriate for the image. I intentionally choose photographs that will look and feel exceptional in black & white form."},
                {q: "How do you backup and protect our photos?", a: "I use top of the line cameras that record automatically to two memory cards for prevention of losing images. Once your wedding day has wrapped up, I immediately back up your photographs to hard drives."},
                {q: "What is film photography?", a: "Think of 35mm photography as the classic, old-school way of taking photos. Most rolls hold 24 or 36 photos, so each shot is intentional. The look is part of the magic: film often has natural grain, softer tones, rich colors, and a timeless, nostalgic feel."}
            ].map((faq, i) => (
                <div key={i} className="text-center">
                    <h4 className="font-heading font-bold text-xl uppercase tracking-tight mb-4">{faq.q}</h4>
                    <p className="text-charcoal/70 leading-relaxed max-w-2xl mx-auto">{faq.a}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 9. CTA / BOOKING */}
      <section id="section-booking" className="py-24 md:py-32 px-8 text-center bg-clay/10 fade-up-section relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
          {/* Using the rings SVG as a massive faint background watermark */}
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-[800px] h-[800px] text-charcoal">
            <path d="M40 30 C 15 30, 20 70, 40 70 C 60 70, 60 30, 40 30 Z" />
            <path d="M60 35 C 40 35, 40 75, 60 75 C 80 75, 85 35, 60 35 Z" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-heading font-black text-4xl md:text-7xl tracking-tighter uppercase mb-6">Let's Get This On The Books</h2>
            <p className="text-xl text-charcoal/70 mb-8">Ready to make it official? To secure your date, I require a signed digital contract and a $500 non-refundable retainer.</p>
            <p className="text-lg font-drama italic text-moss mb-12">I can't wait to celebrate with you!</p>
            
            <a 
                href="#/book"
                className="inline-flex items-center justify-center px-10 py-5 bg-moss text-cream rounded-full font-heading font-bold uppercase tracking-widest text-sm hover:bg-charcoal transition-colors hover:scale-105 duration-300"
            >
                Let's Plan Your Big Day
            </a>
        </div>
      </section>

      {/* 10. SOCIALS */}
      <section className="py-24 px-8 text-center fade-up-section bg-cream">
        <h3 className="font-heading font-black text-3xl uppercase tracking-widest mb-12 text-charcoal">Connect With Me</h3>
        <div className="flex justify-center gap-12">
            <a href="#" className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border border-charcoal/20 flex items-center justify-center mb-4 group-hover:bg-moss group-hover:border-moss group-hover:text-cream transition-all duration-300">
                    <span className="font-heading font-bold text-xl uppercase">IG</span>
                </div>
                <span className="font-heading tracking-widest text-xs uppercase opacity-60 group-hover:opacity-100 transition-opacity">Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border border-charcoal/20 flex items-center justify-center mb-4 group-hover:bg-clay group-hover:border-clay group-hover:text-cream transition-all duration-300">
                    <span className="font-heading font-bold text-xl uppercase">PIN</span>
                </div>
                <span className="font-heading tracking-widest text-xs uppercase opacity-60 group-hover:opacity-100 transition-opacity">Pinterest</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border border-charcoal/20 flex items-center justify-center mb-4 group-hover:bg-charcoal group-hover:text-cream transition-all duration-300">
                    <span className="font-heading font-bold text-xl uppercase">FB</span>
                </div>
                <span className="font-heading tracking-widest text-xs uppercase opacity-60 group-hover:opacity-100 transition-opacity">Facebook</span>
            </a>
        </div>
      </section>

      {/* 11. CLOSING PORTRAIT */}
      <section id="section-details" className="h-[80vh] w-full relative fade-up-section flex items-center justify-center -mt-10 md:-mt-0">
         <div className="absolute inset-0 overflow-hidden bg-charcoal">
            <img 
                src="/assets/wedding/wedding guide photos/Wise Wedding-728.jpg" 
                alt="Closing couple"
                className="w-full h-full object-cover grayscale opacity-90 parallax-image"
            />
         </div>
         <div className="absolute inset-0 bg-charcoal/30" />
          
         <div className="relative z-10 text-center text-cream px-8">
             <p className="font-drama italic text-5xl md:text-7xl mb-4 text-clay">Let's create</p>
             <h2 className="font-heading font-black text-7xl md:text-9xl uppercase tracking-tighter mix-blend-overlay">Memories</h2>
         </div>
      </section>

    </div>
  );
};

export default WeddingGuide;
