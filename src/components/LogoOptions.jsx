import React from 'react';

const LogoOptions = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center p-8 overflow-y-auto">
      <div className="max-w-5xl w-full bg-cream rounded-3xl p-12 shadow-2xl mt-24 text-charcoal">
        <h2 className="font-heading font-bold text-4xl mb-4 text-center">Rings & Vines (Sketched)</h2>
        <p className="font-body text-charcoal/70 text-center mb-12">Here are 4 variations combining the messy sketched rings with an organic vine/branch element.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-charcoal">
          
          {/* Option 1: Vine Wrapping Through Rings */}
          <div className="border border-charcoal/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white transition-colors">
            <div className="w-16 h-16 mb-4 text-moss">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Ring 1 */}
                <path d="M40 35 C 20 35, 20 65, 40 65 C 60 65, 60 35, 40 35 Z" />
                {/* Ring 2 */}
                <path d="M60 35 C 40 35, 40 65, 60 65 C 80 65, 80 35, 60 35 Z" />
                {/* Winding Vine */}
                <path d="M20 75 Q 35 60, 45 45 T 75 25" strokeWidth="2" />
                {/* Leaves */}
                <path d="M30 65 Q 25 55, 35 60" strokeWidth="2" />
                <path d="M60 35 Q 65 45, 55 40" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">1: The Weave</h3>
            <p className="font-body text-charcoal/70 text-xs">A single delicate vine winding straight through the intersection.</p>
          </div>

          {/* Option 2: Rings Resting on a Branch */}
          <div className="border border-charcoal/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white transition-colors">
            <div className="w-16 h-16 mb-4 text-moss">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Asymmetrical Branch Base */}
                <path d="M10 70 Q 30 65, 50 68 T 90 60" strokeWidth="4" />
                {/* Little branch offshoot */}
                <path d="M70 63 Q 80 50, 85 45" strokeWidth="2" />
                {/* Ring 1 resting */}
                <path d="M45 45 C 25 45, 25 68, 45 68 C 65 68, 65 45, 45 45 Z" />
                {/* Ring 2 resting higher */}
                <path d="M60 35 C 40 35, 40 65, 60 65 C 80 65, 80 35, 60 35 Z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">2: The Nest</h3>
            <p className="font-body text-charcoal/70 text-xs">The two rings resting organically on a thicker, rough-hewn oak branch.</p>
          </div>

          {/* Option 3: Rings Made OF Vines */}
          <div className="border border-charcoal/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white transition-colors">
            <div className="w-16 h-16 mb-4 text-moss">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Wobbly Ring 1 */}
                <path d="M40 35 C 15 35, 15 65, 40 65 C 65 65, 65 35, 40 35 Z" />
                {/* Leaves on Ring 1 */}
                <path d="M25 40 Q 20 30, 30 35" /><path d="M30 60 Q 40 70, 45 60" />
                
                {/* Wobbly Ring 2 */}
                <path d="M60 35 C 35 35, 35 65, 60 65 C 85 65, 85 35, 60 35 Z" />
                {/* Leaves on Ring 2 */}
                <path d="M75 40 Q 80 30, 70 35" /><path d="M70 60 Q 60 70, 55 60" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">3: Living Rings</h3>
            <p className="font-body text-charcoal/70 text-xs">The bands themselves are drawn as thin, uneven vines sprouting tiny leaves.</p>
          </div>

          {/* Option 4: The Laurel Arc */}
          <div className="border border-charcoal/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white transition-colors">
            <div className="w-16 h-16 mb-4 text-moss">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Small Intersecting Rings (Centered) */}
                <path d="M45 45 C 35 45, 35 55, 45 55 C 55 55, 55 45, 45 45 Z" />
                <path d="M55 45 C 45 45, 45 55, 55 55 C 65 55, 65 45, 55 45 Z" />
                {/* Laurel/Vine sweeping up underneath */}
                <path d="M20 70 C 20 80, 50 85, 80 70" strokeWidth="2"/>
                {/* Leaves on the arc */}
                <path d="M30 75 Q 35 65, 40 78" strokeWidth="2"/>
                <path d="M50 80 L 50 70" strokeWidth="2"/>
                <path d="M70 75 Q 65 65, 60 78" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">4: The Laurel</h3>
            <p className="font-body text-charcoal/70 text-xs">A smaller set of rings supported by a sweeping, leafy branch underneath.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LogoOptions;
