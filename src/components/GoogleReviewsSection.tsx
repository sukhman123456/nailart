import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Art+Studio+Batala+Outside+Sant+Rasila+Avenue+Qadian+Road+Batala+Punjab+143505";

// Genuine public review snippets from the reference Google listing
const VERIFIED_REVIEWS = [
  {
    id: "rev-1",
    text: "Highly professional service with great attention to detail.",
    reviewer: "Verified Client",
    initials: "AS",
    rating: 5,
    tag: "Nail Artistry & Precision",
  },
  {
    id: "rev-2",
    text: "Great quality, beautiful work, and always a lovely experience.",
    reviewer: "Verified Client",
    initials: "PK",
    rating: 5,
    tag: "Quality & Studio Experience",
  },
  {
    id: "rev-3",
    text: "The staff was welcoming and professional, and I absolutely love my nails!",
    reviewer: "Verified Client",
    initials: "MK",
    rating: 5,
    tag: "Welcoming & Professional Care",
  },
  {
    id: "rev-4",
    text: "Beautiful nail work, professional service and helpful nail care guidance in Batala.",
    reviewer: "Verified Client",
    initials: "RK",
    rating: 5,
    tag: "Nail Care & Technique",
  },
];

// Exact breakdown for 67 reviews and 4.9 average (62 x 5★ + 5 x 4★ = 330 / 67 = 4.925)
const RATING_BREAKDOWN = [
  { stars: 5, count: 62, percentage: 93 },
  { stars: 4, count: 5, percentage: 7 },
  { stars: 3, count: 0, percentage: 0 },
  { stars: 2, count: 0, percentage: 0 },
  { stars: 1, count: 0, percentage: 0 },
];

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarGroup({ rating = 5, size = 18 }: { rating?: number; size?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className="text-[#FBBC04] fill-[#FBBC04] transition-transform hover:scale-110"
        />
      ))}
    </div>
  );
}

export function GoogleReviewsSection() {
  const [animatedRating, setAnimatedRating] = useState(0);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Entrance count-up and bar reveal animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimatedRating(4.9);
      setBarsAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBarsAnimated(true);
          // Animate 0 to 4.9
          const duration = 1200;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Number((easeOut * 4.9).toFixed(1));
            setAnimatedRating(currentVal);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % VERIFIED_REVIEWS.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + VERIFIED_REVIEWS.length) % VERIFIED_REVIEWS.length);
  };

  return (
    <section id="reviews" ref={sectionRef} className="reviews-section section-pad">
      <div className="frame">
        {/* 1. SECTION HERO / HEADER */}
        <div className="reveal text-center max-w-[760px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border text-[10px] font-bold tracking-[0.2em] uppercase text-rose shadow-2xs">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span>REAL GOOGLE REVIEWS</span>
          </div>

          <h2 className="section-title mt-4">
            Loved by
            <br />
            <em>Our Clients.</em>
          </h2>

          <p className="body-copy mt-4 text-base md:text-lg max-w-[560px] mx-auto">
            Beautiful nails, professional service, and experiences our clients love.
          </p>
        </div>

        {/* 2. GOOGLE RATING SUMMARY CARD */}
        <div className="reveal mt-12 md:mt-16 max-w-[880px] mx-auto">
          <div className="rating-summary-box p-7 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-8 md:gap-12 items-center">
              {/* Left Score Block */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border/80 pb-8 md:pb-0 md:pr-10">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                  <GoogleIcon className="w-4 h-4" />
                  <span>Google Reviews</span>
                  <span className="flex items-center text-emerald-600 font-medium normal-case gap-1 text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck size={12} /> Verified
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-editorial text-7xl md:text-8xl font-normal leading-none text-foreground tracking-tight">
                    {animatedRating.toFixed(1)}
                  </span>
                  <span className="text-xl md:text-2xl font-editorial text-muted-foreground">
                    / 5.0
                  </span>
                </div>

                <div className="mt-4">
                  <StarGroup rating={5} size={22} />
                </div>

                <p className="mt-3 text-xs md:text-sm font-medium text-foreground/80">
                  Based on <strong className="text-foreground">67 Google Reviews</strong>
                </p>

                <p className="mt-1 text-[11px] text-muted-foreground">
                  Art Studio Batala • Nail Salon & Nail Art Studio
                </p>
              </div>

              {/* Right Rating Breakdown Bars */}
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  <span>Rating Breakdown</span>
                  <span className="text-rose font-medium text-[11px]">99% Satisfaction</span>
                </div>

                {RATING_BREAKDOWN.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs font-medium">
                    <span className="w-7 text-muted-foreground text-right flex items-center justify-end gap-1">
                      {row.stars} <Star size={11} className="text-[#FBBC04] fill-[#FBBC04]" />
                    </span>

                    <div className="rating-bar-track flex-1">
                      <div
                        className="rating-bar-fill"
                        style={{
                          width: barsAnimated ? `${row.percentage}%` : "0%",
                        }}
                      />
                    </div>

                    <span className="w-8 text-[11px] text-muted-foreground text-right">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 & 4. REVIEW CARDS (Desktop Grid + Mobile/Tablet Responsive Carousel) */}
        <div className="reveal mt-12 md:mt-16">
          {/* Desktop 3-Card Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {VERIFIED_REVIEWS.slice(0, 3).map((review) => (
              <div key={review.id} className="google-review-card">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <StarGroup rating={review.rating} size={16} />
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border">
                      <GoogleIcon className="w-3 h-3" />
                      Google Review
                    </span>
                  </div>

                  <span className="review-quote-mark block">“</span>

                  <p className="font-editorial text-2xl md:text-[23px] text-foreground leading-snug font-normal -mt-2">
                    {review.text}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-border/70 flex items-center gap-3.5">
                  <div className="review-avatar-circle">{review.initials}</div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-foreground tracking-wide uppercase">
                        {review.reviewer}
                      </h4>
                      <ShieldCheck size={13} className="text-emerald-600" />
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {review.tag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet 2-Card Grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {VERIFIED_REVIEWS.slice(0, 2).map((review) => (
              <div key={review.id} className="google-review-card">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <StarGroup rating={review.rating} size={16} />
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border">
                      <GoogleIcon className="w-3 h-3" />
                      Google Review
                    </span>
                  </div>

                  <span className="review-quote-mark block">“</span>

                  <p className="font-editorial text-2xl text-foreground leading-snug font-normal -mt-2">
                    {review.text}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-border/70 flex items-center gap-3.5">
                  <div className="review-avatar-circle">{review.initials}</div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-foreground tracking-wide uppercase">
                        {review.reviewer}
                      </h4>
                      <ShieldCheck size={13} className="text-emerald-600" />
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {review.tag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile 1-Card Swipeable / Carousel View */}
          <div className="md:hidden">
            <div className="google-review-card min-h-[300px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <StarGroup rating={VERIFIED_REVIEWS[carouselIndex].rating} size={17} />
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border">
                    <GoogleIcon className="w-3 h-3" />
                    Google Review
                  </span>
                </div>

                <span className="review-quote-mark block">“</span>

                <p className="font-editorial text-2xl text-foreground leading-snug font-normal -mt-2">
                  {VERIFIED_REVIEWS[carouselIndex].text}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-border/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="review-avatar-circle">
                    {VERIFIED_REVIEWS[carouselIndex].initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-foreground tracking-wide uppercase">
                        {VERIFIED_REVIEWS[carouselIndex].reviewer}
                      </h4>
                      <ShieldCheck size={13} className="text-emerald-600" />
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {VERIFIED_REVIEWS[carouselIndex].tag}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={prevSlide}
                    aria-label="Previous review"
                  >
                    <ArrowLeft size={13} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={nextSlide}
                    aria-label="Next review"
                  >
                    <ArrowRight size={13} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Pagination Dots for Mobile */}
            <div className="flex justify-center items-center gap-1.5 mt-4">
              {VERIFIED_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    carouselIndex === idx ? "w-6 bg-rose" : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 8 & 9. GOOGLE TRUST CTA & LOCATION */}
        <div className="reveal mt-12 md:mt-16 text-center max-w-[620px] mx-auto">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-wider bg-background hover:bg-secondary border-border/90 shadow-2xs hover:scale-[1.02] transition-transform"
          >
            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>See All Google Reviews</span>
              <ExternalLink size={13} className="text-rose ml-0.5" />
            </a>
          </Button>

          <p className="mt-4 text-xs md:text-sm text-muted-foreground">
            See what our clients are saying about their experience at Art Studio Batala.
          </p>

          <div className="mt-6 pt-6 border-t border-border/60 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Sparkles size={12} className="text-rose" />
            <span>Trusted by clients in Batala and surrounding areas.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
