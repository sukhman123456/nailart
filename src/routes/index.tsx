import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  Check,
  Clock,
  Crown,
  Gem,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import masterHeroImage from "@/assets/nails-master-hero.jpg";
import masterHeroMobileImage from "@/assets/nails-master-hero-mobile.jpg";
import heroImage from "@/assets/nails-wide.jpg";
import portraitImage from "@/assets/nails-hero.jpg";
import redImage from "@/assets/nails-gallery-1.jpg";
import chromeImage from "@/assets/nails-gallery-2.jpg";
import floralImage from "@/assets/nails-gallery-3.jpg";
import gallery4 from "@/assets/services/gallery-4.jpg";
import gallery5 from "@/assets/services/gallery-5.jpg";
import gallery6 from "@/assets/services/gallery-6.jpg";
import insta1 from "@/assets/services/insta-1.jpg";
import insta2 from "@/assets/services/insta-2.jpg";
import insta3 from "@/assets/services/insta-3.jpg";
import insta4 from "@/assets/services/insta-4.jpg";

import {
  ALL_SERVICES,
  CATEGORIES,
  FEATURED_SERVICES,
  type Category,
  type ServiceItem,
} from "@/lib/services-data";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { NailArtAcademySection } from "@/components/NailArtAcademySection";

const STUDIO_PHONE = "tel:+916280776606";
const STUDIO_PHONE_DISPLAY = "062807 76606";
const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Outside+Sant+Rasila+Avenue%2C+Qadian+Road%2C+Ujjagar+Nagar%2C+Batala%2C+Punjab+143505";
const WHATSAPP_BASE = "https://wa.me/916280776606";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Styles", href: "#styles" },
  { label: "Academy", href: "#academy" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SIGNATURE_STYLES = [
  {
    title: "Champagne Chrome Glaze",
    subtitle: "High-shine mirror chrome with delicate pearlescent glow",
    image: chromeImage,
    tag: "Trending Luxury",
    alt: "Champagne Chrome almond nails with mirror reflection",
  },
  {
    title: "3D Floral & Porcelain Art",
    subtitle: "Hand-sculpted petals, golden beads & porcelain finish",
    image: floralImage,
    tag: "Bespoke Couture",
    alt: "3D floral porcelain nail art with gold beads",
  },
  {
    title: "Deep Crimson Glaze",
    subtitle: "Glossy deep royal crimson on sculpted almond nails",
    image: redImage,
    tag: "Timeless Glamour",
    alt: "Deep crimson glossy almond manicure",
  },
  {
    title: "Minimalist Nude Glaze",
    subtitle: "Sheer milky blush gel with high-reflective mirror sheen",
    image: gallery4,
    tag: "Editorial Classic",
    alt: "Reflective nude glaze gel manicure",
  },
  {
    title: "High Fashion Stiletto",
    subtitle: "Tapered architectural extensions with metallic filigree",
    image: gallery5,
    tag: "Sculpted Architecture",
    alt: "Long tapered stiletto extensions with metallic sheen",
  },
  {
    title: "Lash & Beauty Elegance",
    subtitle: "Featherlight customized classic & hybrid lash sets",
    image: gallery6,
    tag: "Complete Glow",
    alt: "Lush classic eyelash extensions on an elegant client",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: Crown,
    title: "100% Bespoke Artistry",
    desc: "Every set is treated as an individual canvas, hand-sculpted and customized to your skin tone and personal aesthetic.",
  },
  {
    icon: Gem,
    title: "Premium Safe Formulations",
    desc: "We formulate exclusively with European and Korean breathable, non-damaging gel systems that preserve your natural nail health.",
  },
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Hygiene",
    desc: "Medical autoclave sterilization, sealed single-use implements, and hospital-standard salon sanitization protocols.",
  },
  {
    icon: Sparkles,
    title: "3 to 4 Weeks Lasting Shine",
    desc: "Engineered apex structuring and chip-resistant mirror top coats that stay immaculate without lifting or dulling.",
  },
  {
    icon: Award,
    title: "Master Certified Artists",
    desc: "Our nail specialists are certified industry educators who teach advanced techniques at our in-house nail academy.",
  },
  {
    icon: MapPin,
    title: "Plush Central Batala Lounge",
    desc: "An elegant, calm retreat designed for unhurried pampering, complimentary beverages, and five-star salon care.",
  },
];



const GALLERY_ITEMS = [
  {
    id: "g1",
    src: redImage,
    title: "Deep Crimson Glaze",
    category: "Colour & Finish",
    alt: "Glossy deep red almond-shaped manicure on ivory fabric",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g2",
    src: chromeImage,
    title: "Champagne Chrome Glow",
    category: "Sculpted Details",
    alt: "Pearlescent champagne chrome almond nails against blush backdrop",
    aspect: "aspect-[4/3]",
  },
  {
    id: "g3",
    src: floralImage,
    title: "Botanical French Tips",
    category: "Artful Details",
    alt: "Soft pink floral nail art and French tips on oval nails",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g4",
    src: gallery4,
    title: "Minimalist Nude Glaze",
    category: "Gel Manicures",
    alt: "Reflective high gloss nude gel manicure under warm studio lighting",
    aspect: "aspect-[4/3]",
  },
  {
    id: "g5",
    src: gallery5,
    title: "High Fashion Stiletto",
    category: "Extensions",
    alt: "Long tapered stiletto nails with soft metallic sheen",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g6",
    src: gallery6,
    title: "Lash & Beauty Elegance",
    category: "Beauty Services",
    alt: "Lush classic eyelash extensions on an elegant client",
    aspect: "aspect-[4/3]",
  },
];

const INSTA_POSTS = [
  { id: "i1", src: insta1, tag: "Precision French", alt: "Editorial manicure studio detail" },
  { id: "i2", src: insta2, tag: "Sculpted Architecture", alt: "Nail extensions sculpting" },
  { id: "i3", src: insta3, tag: "Fine Line Art", alt: "Intricate hand-painted nail motifs" },
  { id: "i4", src: insta4, tag: "Natural Nail Care", alt: "Precision filing and clean cuticles" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nail Art Studio Batala | Nail Art, Manicure & Beauty Services" },
      {
        name: "description",
        content:
          "Explore premium nail art, manicures, pedicures, extensions, eyelash extensions and beauty services at Nail Art Studio Batala.",
      },
      { property: "og:title", content: "Nail Art Studio Batala | Nail Art, Manicure & Beauty Services" },
      {
        property: "og:description",
        content:
          "Explore premium nail art, manicures, pedicures, extensions, eyelash extensions and beauty services at Nail Art Studio Batala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NailArtStudioBatala,
});

function useScrollReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el) => el.classList.add("visible"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "60px 0px 60px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function WhatsAppLogo({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramLogo({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function Eyebrow({ children, line = false }: { children: React.ReactNode; line?: boolean }) {
  return (
    <p className="label-editorial text-rose flex items-center">
      {line && <span className="hero-line" />}
      {children}
    </p>
  );
}

function SiteHeader({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled || open ? "scrolled" : ""}`}>
      <div className="frame flex h-full items-center justify-between gap-6">
        <a href="#home" className="brand" aria-label="Nail Art Studio Batala Shaher, home" onClick={() => setOpen(false)}>
          <span className="brand-crown">
            <Crown size={15} />
          </span>
          <span className="brand-title">NAIL ART STUDIO</span>
          <span className="brand-subtitle">B A T A L A • S H A H E R</span>
        </a>

        <nav className="desktop-nav flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-[10px]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            size="sm"
            onClick={onOpenBooking}
            className="rounded-full px-5 text-xs font-semibold tracking-wider uppercase transition-transform hover:scale-[1.02]"
          >
            Book Appointment
            <ArrowUpRight size={14} className="ml-1" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {open && (
        <nav className="mobile-menu lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-editorial text-2xl text-foreground hover:text-rose transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-2.5">
            <Button
              className="w-full rounded-full py-6 text-sm font-semibold tracking-wider uppercase"
              onClick={() => {
                setOpen(false);
                onOpenBooking();
              }}
            >
              Book Appointment
              <ArrowUpRight size={16} className="ml-1.5" />
            </Button>
            <Button asChild variant="outline" className="w-full rounded-full py-5 text-xs border-emerald-600/30 text-emerald-700 bg-emerald-50/40">
              <a
                href={`${WHATSAPP_BASE}?text=Hi%20Nail%20Art%20Studio%20Batala%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={14} className="mr-2 text-emerald-600" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full rounded-full py-5 text-xs">
              <a href={STUDIO_PHONE} onClick={() => setOpen(false)}>
                <Phone size={14} className="mr-2 text-rose" />
                Call Studio ({STUDIO_PHONE_DISPLAY})
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function ServiceDetailModal({
  service,
  onClose,
  onBook,
}: {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (service: ServiceItem) => void;
}) {
  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="modal-box p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 rounded-full p-2 bg-background/80 backdrop-blur-md text-foreground/80 hover:text-foreground hover:bg-background border border-border transition-colors"
          aria-label="Close service details"
        >
          <X size={20} />
        </button>

        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-secondary border border-border">
          <img
            src={service.image}
            alt={service.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {service.categories.map((cat) => (
              <span
                key={cat}
                className="bg-background/90 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-border"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 text-rose text-xs font-semibold tracking-widest uppercase">
            <Sparkles size={14} />
            <span>Nail Art Studio Batala</span>
          </div>

          <h3 id="modal-title" className="font-editorial text-3xl md:text-4xl font-normal mt-2 text-foreground">
            {service.name}
          </h3>

          <p className="mt-3 text-sm text-foreground/80 leading-relaxed font-medium">
            {service.shortDesc}
          </p>

          <div className="my-5 border-t border-border/70" />

          <div>
            <h4 className="label-editorial text-rose">Studio Care & Artistry</h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {service.detail}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              className="flex-1 rounded-full py-6 text-xs font-semibold tracking-wider uppercase"
              onClick={() => {
                onBook(service);
                onClose();
              }}
            >
              Book Appointment
              <ArrowUpRight size={15} className="ml-1.5" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full py-6 text-xs font-semibold tracking-wider uppercase"
            >
              <a
                href={`${WHATSAPP_BASE}?text=Hi%2C%20I%20am%20interested%20in%20booking%20${encodeURIComponent(
                  service.name
                )}%20at%20Nail%20Art%20Studio%20Batala.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={15} className="mr-2 text-emerald-600" />
                Inquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppointmentModal({
  isOpen,
  onClose,
  initialService,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}) {
  const [selectedService, setSelectedService] = useState<string>(
    initialService?.name ?? ALL_SERVICES[0].name
  );
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("11:00 AM");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService.name);
    }
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Nail Art Studio Batala,\n\nI would like to book an appointment:\n- Service: ${selectedService}\n- Preferred Date: ${
      date || "Earliest available"
    }\n- Preferred Time: ${time}\n- Client Name: ${name || "Client"}\n- Phone: ${phone || "Provided on chat"}\n\nPlease confirm availability. Thank you!`
  );

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onClick={onClose}
    >
      <div
        className="modal-box p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 rounded-full p-2 bg-background/80 backdrop-blur-md text-foreground/80 hover:text-foreground hover:bg-background border border-border transition-colors"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2 text-rose text-xs font-semibold tracking-widest uppercase">
          <Sparkles size={14} />
          <span>RESERVATION</span>
        </div>

        <h3 id="booking-title" className="font-editorial text-3xl md:text-4xl font-normal mt-2 text-foreground">
          Book an Appointment
        </h3>
        <p className="body-copy mt-1 text-xs">
          Schedule your session at Nail Art Studio Batala. We will confirm your timing immediately.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Select Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-3.5 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-rose"
            >
              {ALL_SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                <Calendar size={13} className="text-rose" /> Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-card border border-border rounded-lg px-3.5 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-rose"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                <Clock size={13} className="text-rose" /> Preferred Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-card border border-border rounded-lg px-3.5 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-rose"
              >
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:30 PM">02:30 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:30 PM">05:30 PM</option>
                <option value="07:00 PM">07:00 PM</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Jasleen Kaur"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-card border border-border rounded-lg px-3.5 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-rose"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-card border border-border rounded-lg px-3.5 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-rose"
              />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/80 flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1 rounded-full py-6 text-xs font-semibold tracking-wider uppercase">
              <a href={`${WHATSAPP_BASE}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} className="mr-2 text-emerald-500" />
                Book via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full py-6 text-xs font-semibold tracking-wider uppercase">
              <a href={STUDIO_PHONE}>
                <Phone size={15} className="mr-2 text-rose" />
                Call Studio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NailArtStudioBatala() {
  useScrollReveals();

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<ServiceItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return ALL_SERVICES;
    return ALL_SERVICES.filter((s) => s.categories.includes(activeCategory));
  }, [activeCategory]);

  const openBookingFor = (service: ServiceItem) => {
    setBookingInitialService(service);
    setBookingOpen(true);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight")
        setLightboxIndex((c) => (c === null ? null : (c + 1) % GALLERY_ITEMS.length));
      if (event.key === "ArrowLeft")
        setLightboxIndex((c) => (c === null ? null : (c + GALLERY_ITEMS.length - 1) % GALLERY_ITEMS.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      <SiteHeader onOpenBooking={() => setBookingOpen(true)} />

      <main>
        {/* 2. MASTER HERO SECTION - PURE MASTER VISUAL (100% CLEAN & UNOBSTRUCTED) */}
        <section id="home" className="hero-showcase">
          <picture className="w-full block">
            <source media="(max-width: 767px)" srcSet={masterHeroMobileImage} />
            <img
              src={masterHeroImage}
              alt="Nail Art Studio Batala Shaher - Luxury Nail Salon & Master Academy with 3D Floral Nails, Gold Accents and Plush Salon Interior"
              className="hero-showcase-img"
              width={2048}
              height={960}
              fetchPriority="high"
            />
          </picture>
        </section>

        {/* Quick Studio Accolades & Actions Bar - Cleanly Below Hero Image */}
        <section className="studio-accolades-bar">
          <div className="frame">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-6">
              {/* Left: Studio Identity & Highlights */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 shrink-0">
                    <img
                      src={chromeImage}
                      alt="Signature Chrome Nails"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-background border border-gold/40 shadow-xs"
                    />
                    <img
                      src={floralImage}
                      alt="Signature Floral Nails"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-background border border-rose/40 shadow-xs"
                    />
                    <img
                      src={redImage}
                      alt="Signature Crimson Nails"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-background border border-gold/40 shadow-xs"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-amber-500 text-xs">
                        {"★".repeat(5)}
                      </div>
                      <span className="font-bold text-xs text-foreground">4.9 / 5.0</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
                      120+ Verified Client Reviews • Batala Shaher
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block h-8 w-px bg-border/70" />

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/15 text-foreground text-[10px] font-bold uppercase tracking-wider border border-gold/30">
                    <Crown size={12} className="text-gold" />
                    Certified Masters
                  </span>
                </div>
              </div>

              {/* Right: Strong CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-wider shadow-sm transition-transform hover:scale-[1.02]"
                >
                  <a href="#services">
                    Explore Services
                    <ArrowRight size={15} className="ml-1.5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setBookingOpen(true)}
                  className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-wider bg-background border-border hover:bg-card transition-transform hover:scale-[1.02]"
                >
                  Book Appointment
                  <ArrowUpRight size={15} className="ml-1.5 text-rose" />
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="rounded-full px-5 py-6 text-xs font-semibold uppercase tracking-wider text-emerald-700 hover:bg-emerald-50 border border-emerald-600/30 transition-transform hover:scale-[1.02]"
                >
                  <a
                    href={`${WHATSAPP_BASE}?text=Hi%20Nail%20Art%20Studio%20Batala%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20nail%20session.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={15} className="mr-1.5 text-emerald-600" />
                    WhatsApp VIP
                  </a>
                </Button>
              </div>
            </div>

            {/* 4 Studio Highlights Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 pb-6 border-t border-border/60 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-gold text-xs">
                  ✦
                </span>
                <div>
                  <p className="text-xs font-bold text-foreground">100% Bespoke Art</p>
                  <p className="text-[10px] text-muted-foreground">Hand-crafted couture</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-light text-rose text-xs">
                  ✦
                </span>
                <div>
                  <p className="text-xs font-bold text-foreground">5,000+ Sculpted</p>
                  <p className="text-[10px] text-muted-foreground">Clients across Punjab</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-gold text-xs">
                  ✦
                </span>
                <div>
                  <p className="text-xs font-bold text-foreground">Master Academy</p>
                  <p className="text-[10px] text-muted-foreground">Certified ISO training</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-light text-rose text-xs">
                  ✦
                </span>
                <div>
                  <p className="text-xs font-bold text-foreground">Hospital-Grade Clean</p>
                  <p className="text-[10px] text-muted-foreground">Autoclave sterilized tools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / PHILOSOPHY */}
        <section id="about" className="section-pad bg-background">
          <div className="frame">
            <div className="reveal grid gap-8 lg:grid-cols-[1.1fr_2fr] lg:gap-20 items-start">
              <div>
                <Eyebrow line>OUR PHILOSOPHY</Eyebrow>
                <p className="label-editorial mt-3 text-muted-foreground">BATALA • ESTABLISHED ARTISTRY</p>
              </div>
              <div>
                <h2 className="section-title max-w-[840px]">
                  Where beauty
                  <br />
                  meets <em>precision.</em>
                </h2>
                <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
                  <span className="mt-3 hidden h-px w-20 shrink-0 bg-gold md:block" />
                  <p className="body-copy max-w-[580px] text-base">
                    At Nail Art Studio Batala, nail care is an expression of personal style. Every detail is
                    considered, every finish thoughtfully made, for nails and beauty treatments that feel
                    effortlessly and beautifully your own.
                  </p>
                </div>
              </div>
            </div>

            <div className="rule mt-16 md:mt-24" />
            <div className="mt-5 flex flex-wrap justify-between gap-4">
              <span className="label-editorial text-muted-foreground">NAIL ART STUDIO BATALA</span>
              <span className="label-editorial text-rose">LUXURY • MINIMAL • PROFESSIONAL</span>
              <span className="label-editorial text-muted-foreground">BATALA, PUNJAB</span>
            </div>
          </div>
        </section>

        {/* 9. FEATURED SERVICES */}
        <section className="section-pad bg-secondary/60">
          <div className="frame">
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <Eyebrow line>MOST CELEBRATED</Eyebrow>
                <h2 className="section-title mt-4">
                  Featured
                  <br />
                  <em>Services.</em>
                </h2>
              </div>
              <p className="body-copy max-w-[340px]">
                Four distinct studio favorites crafted with precision technique, premium formulas and an eye
                for timeless beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="featured-card group"
                  onClick={() => setActiveModalService(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalService(service);
                    }
                  }}
                  aria-label={`View details for ${service.name}`}
                >
                  <div className="featured-card-media">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="eager"
                      decoding="async"
                      width={600}
                      height={420}
                    />
                    <span className="service-card-badge">{service.categories[0]}</span>
                  </div>
                  <div className="featured-card-content flex flex-col flex-grow">
                    <h3 className="featured-card-title">{service.name}</h3>
                    <p className="service-card-desc mt-2">{service.shortDesc}</p>
                    <div className="service-card-action mt-5">
                      <span>Explore Service</span>
                      <ArrowRight size={14} className="text-rose group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. BEAUTY EXPERIENCE COLLAGE */}
        <section className="section-pad bg-background">
          <div className="frame">
            <div className="reveal grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
              <div>
                <Eyebrow line>THE STUDIO EXPERIENCE</Eyebrow>
                <h2 className="section-title mt-5">
                  Your Beauty,
                  <br />
                  <em>Your Style.</em>
                </h2>
                <p className="body-copy mt-8 max-w-[460px] text-base">
                  Whether you prefer timeless elegance, detailed nail art or a completely new look, choose the
                  service that fits your style.
                </p>
                <div className="mt-8 flex flex-col gap-4 text-sm text-foreground/85">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-light text-rose text-xs">
                      <Check size={13} />
                    </span>
                    <span>Bespoke consultations tailored to your hands and lifestyle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-light text-rose text-xs">
                      <Check size={13} />
                    </span>
                    <span>Hospital-grade hygiene & sterilized professional tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-light text-rose text-xs">
                      <Check size={13} />
                    </span>
                    <span>Long-lasting salon formulas & chip-resistant finishes</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button
                    onClick={() => setBookingOpen(true)}
                    className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-wider"
                  >
                    Book an Appointment
                    <ArrowUpRight size={15} className="ml-1.5" />
                  </Button>
                </div>
              </div>

              {/* Overlapping collage */}
              <div className="reveal collage-wrap">
                <div className="collage-item-1">
                  <img
                    src={portraitImage}
                    alt="Artistic manicure and delicate French tips"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="collage-item-2">
                  <img
                    src={floralImage}
                    alt="Detailed botanical floral nail artistry"
                    loading="lazy"
                    width={600}
                    height={800}
                  />
                </div>
                <div className="collage-item-3">
                  <img
                    src={chromeImage}
                    alt="Champagne chrome finish reflection"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3, 4, 5, 6, 7. ALL SERVICES SECTION */}
        <section id="services" className="section-pad bg-secondary/50">
          <div className="frame">
            <div className="reveal text-center max-w-[700px] mx-auto">
              <Eyebrow>OUR SERVICES</Eyebrow>
              <h2 className="section-title mt-4">
                Full Studio
                <br />
                <em>Menu.</em>
              </h2>
              <p className="body-copy mt-4 text-base">
                From classic nail care to detailed nail art, explore our complete range of beauty services.
              </p>
            </div>

            {/* 5. CATEGORY FILTER */}
            <div className="reveal mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-2 max-w-[900px] mx-auto">
              {CATEGORIES.map((category) => {
                const count =
                  category === "All"
                    ? ALL_SERVICES.length
                    : ALL_SERVICES.filter((s) => s.categories.includes(category)).length;
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`filter-pill ${isActive ? "active" : ""}`}
                    aria-pressed={isActive}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>

            {/* 6. SERVICE CARDS GRID */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="service-card group"
                  onClick={() => setActiveModalService(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalService(service);
                    }
                  }}
                  aria-label={`Explore service: ${service.name}`}
                >
                  <div className="service-card-media">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading={idx < 6 ? "eager" : "lazy"}
                      decoding="async"
                      width={640}
                      height={480}
                    />
                    <span className="service-card-badge">{service.categories[0]}</span>
                  </div>

                  <div className="service-card-content">
                    <h3 className="service-card-title">{service.name}</h3>
                    <p className="service-card-desc">{service.shortDesc}</p>
                    <div className="service-card-action">
                      <span>Explore Service</span>
                      <ArrowRight
                        size={14}
                        className="text-rose group-hover:translate-x-1.5 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-xs text-muted-foreground">
                Showing {filteredServices.length} of {ALL_SERVICES.length} studio services. Click any card for
                details and direct booking.
              </p>
            </div>
          </div>
        </section>

        {/* 4. SIGNATURE NAIL ART STYLES & CATEGORIES */}
        <section id="styles" className="section-pad bg-background">
          <div className="frame">
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Eyebrow line>COUTURE ARTISTRY</Eyebrow>
                <h2 className="section-title mt-4">
                  Signature
                  <br />
                  <em>Styles & Aesthetics.</em>
                </h2>
              </div>
              <p className="body-copy max-w-[360px]">
                Explore our most celebrated nail aesthetics — from subtle pearl chrome sheens to ornate 3D bridal sculpture.
              </p>
            </div>

            <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {SIGNATURE_STYLES.map((style) => (
                <div key={style.title} className="style-showcase-card group">
                  <div className="style-card-media">
                    <img
                      src={style.image}
                      alt={style.alt}
                      loading="lazy"
                      width={600}
                      height={450}
                    />
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-background/90 backdrop-blur-md border border-border text-foreground">
                      {style.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-editorial text-2xl text-foreground group-hover:text-rose transition-colors">
                      {style.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {style.subtitle}
                    </p>
                    <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-rose">
                      <span>Bespoke Handcrafted</span>
                      <Sparkles size={14} className="text-gold" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NAIL ART ACADEMY & STUDENT TRAINING */}
        <NailArtAcademySection />

        {/* 6. WHY CHOOSE US / THE STUDIO STANDARDS */}
        <section id="why-us" className="section-pad bg-secondary/40">
          <div className="frame">
            <div className="reveal text-center max-w-[700px] mx-auto mb-14 md:mb-18">
              <Eyebrow line>THE STUDIO STANDARD</Eyebrow>
              <h2 className="section-title mt-4">
                Why Choose
                <br />
                <em>Nail Art Studio Batala?</em>
              </h2>
              <p className="body-copy mt-4 text-base">
                Discover what sets our studio apart — hospital-standard hygiene, non-damaging European formulas, and master-level artistry.
              </p>
            </div>

            <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {WHY_CHOOSE_US.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="why-card group">
                    <div className="why-icon-bubble group-hover:scale-105 transition-transform">
                      <IconComponent size={24} className="text-foreground" />
                    </div>
                    <h3 className="font-editorial text-2xl text-foreground group-hover:text-rose transition-colors">
                      {item.title}
                    </h3>
                    <p className="body-copy text-xs leading-relaxed mt-3">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11. APPOINTMENT CTA SECTION */}
        <section className="section-pad bg-background">

          <div className="frame">
            <div className="reveal bg-secondary border border-border rounded-2xl p-8 md:p-14 lg:p-20 text-center max-w-[960px] mx-auto shadow-sm">
              <Eyebrow>YOUR NEXT LOOK</Eyebrow>
              <h2 className="section-title mt-4">
                Ready for
                <br />
                <em>Your Next Look?</em>
              </h2>
              <p className="body-copy mt-5 max-w-[480px] mx-auto text-base">
                Book your appointment at Nail Art Studio Batala. Experience refined nail artistry, attentive
                care and enduring elegance.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-wider shadow-sm transition-transform hover:scale-[1.02]"
                >
                  Book an Appointment
                  <ArrowUpRight size={15} className="ml-1.5" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-wider bg-background hover:bg-background/80 transition-transform hover:scale-[1.02]"
                >
                  <a
                    href={`${WHATSAPP_BASE}?text=Hi%20Nail%20Art%20Studio%20Batala%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={15} className="mr-2 text-emerald-600" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 12. GALLERY SECTION */}
        <section id="gallery" className="section-pad bg-secondary/40">
          <div className="frame">
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Eyebrow line>THE PORTFOLIO</Eyebrow>
                <h2 className="section-title mt-4">
                  Studio
                  <br />
                  <em>Gallery.</em>
                </h2>
              </div>
              <p className="body-copy max-w-[340px]">
                A curated showcase of bespoke nail designs, manicures, pedicures, extensions and beauty work.
              </p>
            </div>

            <div className="reveal gallery-grid">
              {GALLERY_ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-card ${item.aspect}`}
                  onClick={() => setLightboxIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxIndex(index);
                    }
                  }}
                  aria-label={`Enlarge photo: ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  <div className="gallery-card-overlay">
                    <span className="label-editorial text-primary-foreground/80">{item.category}</span>
                    <span className="font-editorial text-2xl text-primary-foreground mt-1">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[11px] leading-6 text-muted-foreground text-center">
              Click any image to view in fullscreen. All imagery represents fine nail craftsmanship and beauty styling.
            </p>
          </div>
        </section>

        {/* 13. INSTAGRAM-STYLE SHOWCASE */}
        <section className="section-pad bg-background">
          <div className="frame">
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <Eyebrow line>SOCIAL SHOWCASE</Eyebrow>
                <h2 className="section-title mt-4">
                  Follow
                  <br />
                  <em>Our Work.</em>
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <p className="body-copy max-w-[340px]">
                  See our latest nail looks, designs and studio moments.
                </p>
                <Button asChild variant="outline" className="rounded-full text-xs font-semibold uppercase tracking-wider">
                  <a
                    href="https://www.instagram.com/art_studio_academy_batala/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={14} className="mr-2 text-rose" />
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>

            <div className="reveal insta-grid">
              {INSTA_POSTS.map((post) => (
                <div key={post.id} className="insta-card group">
                  <img
                    src={post.src}
                    alt={post.alt}
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                  <div className="insta-overlay">
                    <div className="flex flex-col items-center gap-1.5 text-center px-4">
                      <Instagram size={22} />
                      <span className="text-xs font-semibold">{post.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS SECTION */}
        <GoogleReviewsSection />

        {/* CONTACT / VISIT THE STUDIO */}
        <section id="contact" className="section-pad bg-secondary">

          <div className="frame grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-24">
            <div className="reveal">
              <Eyebrow line>COME FIND US</Eyebrow>
              <h2 className="section-title mt-6">
                Let's Create
                <br />
                Your <em>Next Look.</em>
              </h2>
              <p className="body-copy mt-6 max-w-[460px]">
                We welcome you to our studio in Batala for attentive, personalized nail artistry and beauty
                treatments. Appointments and walk-in inquiries welcome.
              </p>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-wider"
                >
                  Book an Appointment
                  <ArrowUpRight size={15} className="ml-1.5" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-wider bg-background"
                >
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                    <MapPin size={15} className="mr-2 text-rose" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <div className="reveal flex flex-col justify-end">
              <div className="rule mb-8" />
              <p className="label-editorial text-rose">VISIT THE STUDIO</p>
              <h3 className="font-editorial mt-3 text-4xl text-foreground">Art Studio & Academy Batala</h3>
              <address className="body-copy mt-3 max-w-[380px] not-italic text-sm">
                Outside Sant Rasila Avenue, Qadian Road, Ujjagar Nagar, Batala, Punjab 143505
              </address>
              <div className="rule my-7" />
              <p className="label-editorial text-rose">DIRECT INQUIRIES</p>
              <a
                className="font-editorial mt-3 w-fit text-3xl md:text-4xl text-foreground hover:text-rose transition-colors"
                href={STUDIO_PHONE}
              >
                {STUDIO_PHONE_DISPLAY}
              </a>

              {/* INSTAGRAM + WHATSAPP CONTACT ACTION CTA BUTTONS */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full max-w-[420px]">
                <a
                  href="https://www.instagram.com/art_studio_academy_batala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-instagram flex-1"
                  aria-label="Follow Art Studio & Academy Batala on Instagram"
                >
                  <InstagramLogo size={20} />
                  <span>Instagram</span>
                </a>
                <a
                  href={`https://wa.me/916280776606?text=${encodeURIComponent(
                    "Hi, I’m interested in your Nail Art Studio & Academy courses/services. Please share more details."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex-1"
                  aria-label="Chat with Art Studio & Academy Batala on WhatsApp"
                >
                  <WhatsAppLogo size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-background py-16 md:py-20 border-t border-border">
        <div className="frame">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
            <div>
              <a href="#home" className="brand inline-block text-left">
                <span className="flex items-center gap-1.5 text-gold text-xs -mb-0.5">
                  <Crown size={15} className="text-gold" />
                </span>
                NAIL ART STUDIO
                <span className="tracking-[0.38em]">B A T A L A • S H A H E R</span>
              </a>
              <p className="mt-6 text-xs text-muted-foreground leading-relaxed max-w-[320px]">
                Refined nail care, artistic nail designs, extensions and professional beauty treatments in
                Batala Shaher, Punjab.
              </p>
            </div>

            <div>
              <p className="label-editorial text-rose">EXPLORE</p>
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3.5">
                {NAV_ITEMS.map((item) => (
                  <a key={item.href} href={item.href} className="footer-link">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="label-editorial text-rose">STUDIO LOCATION</p>
              <p className="mt-5 max-w-[280px] text-xs leading-6 text-muted-foreground">
                Outside Sant Rasila Avenue, Qadian Road, Ujjagar Nagar, Batala, Punjab 143505
              </p>
              <a href={STUDIO_PHONE} className="footer-link mt-3 block font-semibold">
                {STUDIO_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="rule mt-14" />
          <div className="mt-6 flex flex-wrap justify-between items-center gap-4 text-[11px] text-muted-foreground">
            <span>© {new Date().getFullYear()} Nail Art Studio Batala. All rights reserved.</span>
            <span className="label-editorial text-[9px] text-rose">
              BEAUTIFUL NAILS • EFFORTLESS CONFIDENCE
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBook={openBookingFor}
      />

      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setBookingInitialService(null);
        }}
        initialService={bookingInitialService}
      />

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Lightbox"
          onClick={() => setLightboxIndex(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-5 top-5 text-primary-foreground hover:bg-white/10"
            aria-label="Close lightbox"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-primary-foreground hover:bg-white/10"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((c) =>
                c === null ? null : (c + GALLERY_ITEMS.length - 1) % GALLERY_ITEMS.length
              );
            }}
          >
            <ArrowLeft size={24} />
          </Button>

          <div
            className="flex h-full max-h-[85vh] max-w-[min(88vw,780px)] flex-col items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[lightboxIndex].src}
              alt={GALLERY_ITEMS[lightboxIndex].alt}
              className="min-h-0 max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
            />
            <div className="text-center text-primary-foreground">
              <p className="label-editorial text-primary-foreground/75">
                {GALLERY_ITEMS[lightboxIndex].category} • 0{lightboxIndex + 1} / 0{GALLERY_ITEMS.length}
              </p>
              <h4 className="font-editorial text-2xl mt-1">{GALLERY_ITEMS[lightboxIndex].title}</h4>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-primary-foreground hover:bg-white/10"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((c) => (c === null ? null : (c + 1) % GALLERY_ITEMS.length));
            }}
          >
            <ArrowRight size={24} />
          </Button>
        </div>
      )}
      {/* FLOATING LUXURY INSTAGRAM & WHATSAPP ACTIONS DOCK */}
      <div className="floating-actions-dock" role="complementary" aria-label="Social and booking contact">
        <a
          href="https://www.instagram.com/art_studio_academy_batala/"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-cta floating-cta-instagram"
          aria-label="Follow Art Studio & Academy Batala on Instagram"
        >
          <InstagramLogo size={19} />
          <span>Instagram</span>
        </a>
        <a
          href={`${WHATSAPP_BASE}?text=Hi%20Nail%20Art%20Studio%20Batala%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-cta floating-cta-whatsapp"
          aria-label="Chat with Nail Art Studio Batala on WhatsApp"
        >
          <WhatsAppLogo size={19} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
