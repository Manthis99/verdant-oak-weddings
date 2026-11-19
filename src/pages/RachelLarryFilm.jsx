import React from 'react';
import { Film } from 'lucide-react';

// Supply the actual YouTube ID after upload; never use a sample video as a fallback.
const RachelLarryFilm = ({ youtubeVideoId = null }) => {
    const hasVideo = typeof youtubeVideoId === 'string' && /^[A-Za-z0-9_-]{11}$/.test(youtubeVideoId);

    return (
        <main className="relative min-h-screen overflow-hidden bg-cream px-6 pb-24 pt-36 text-charcoal md:pb-32 md:pt-48">
            <div className="drafting-grid" aria-hidden="true"></div>
            <div className="noise-overlay" aria-hidden="true"></div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <header className="mb-12 text-center md:mb-16">
                    <p className="mb-6 font-data text-xs uppercase tracking-[0.25em] text-moss">
                        Your wedding film
                    </p>
                    <h1 className="font-drama text-6xl italic leading-tight tracking-tight sm:text-7xl md:text-9xl">
                        Rachel <span className="text-moss">&amp;</span> Larry
                    </h1>
                </header>

                <section aria-label="Rachel and Larry's wedding film" className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal text-cream shadow-2xl">
                    {hasVideo ? (
                        <div className="aspect-video">
                            <iframe
                                className="h-full w-full border-0"
                                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0`}
                                title="Rachel & Larry — Wedding Film"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <div className="flex min-h-80 flex-col items-center justify-center px-6 py-16 text-center md:aspect-video">
                            <Film className="mb-8 h-10 w-10 text-cream/60" strokeWidth={1} aria-hidden="true" />
                            <h2 className="font-drama text-4xl italic sm:text-5xl">Your film is coming soon.</h2>
                            <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-cream/70">
                                Once it is ready, you can watch it right here.
                            </p>
                        </div>
                    )}
                </section>

                <section aria-labelledby="marriage-prayer-title" className="mx-auto mt-20 max-w-2xl border-t border-moss/20 pt-16 text-center md:mt-28 md:pt-20">
                    <p className="mb-5 font-data text-xs uppercase tracking-[0.2em] text-moss">
                        A prayer for your marriage
                    </p>
                    <h2 id="marriage-prayer-title" className="font-drama text-4xl italic text-charcoal md:text-5xl">
                        At Start of Day
                    </h2>

                    <figure className="mt-10">
                        <p className="mb-6 font-data text-xs uppercase tracking-[0.2em] text-clay">As one</p>
                        <blockquote className="space-y-7 font-body text-lg leading-relaxed text-charcoal/85 md:text-xl md:leading-relaxed">
                            <p>
                                Make of our marriage<br />
                                a holy habitation, O God.<br />
                                Ever dwell in us and between us,<br />
                                teaching us how to be to one another<br />
                                a truer husband and a truer wife,
                            </p>
                            <p>
                                your mercy mediating,<br />
                                your love surrounding,<br />
                                your Spirit quickening our hearts<br />
                                unto conviction, repentance, and forgiveness,<br />
                                unto compassion, kindness, and <span className="whitespace-nowrap">generosity—</span>
                            </p>
                            <p>
                                That we would<br />
                                in tenderness<br />
                                seek always to know one another more,<br />
                                and in tenderness<br />
                                allow ourselves to be<br />
                                more known.
                            </p>
                            <p className="font-drama text-3xl italic text-moss">Amen.</p>
                        </blockquote>
                        <figcaption className="mx-auto mt-10 max-w-md font-body text-sm leading-relaxed text-moss">
                            From <cite>Every Moment Holy</cite><br />
                            “A Liturgy for a Husband &amp; Wife at Start of Day”
                        </figcaption>
                    </figure>
                </section>

                <p className="mt-10 text-center font-drama text-3xl italic text-moss">
                    With love, Michael
                </p>
            </div>
        </main>
    );
};

export default RachelLarryFilm;
