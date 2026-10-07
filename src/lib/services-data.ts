import manicureImg from "@/assets/services/manicure.jpg";
import acrylicNailsImg from "@/assets/services/acrylic-nails.jpg";
import eyelashExtensionsImg from "@/assets/services/eyelash-extensions.jpg";
import frenchManicuresImg from "@/assets/services/french-manicure.jpg";
import gelManicuresImg from "@/assets/services/gel-manicure.jpg";
import nailArtImg from "@/assets/services/nail-art.jpg";
import nailCutFilingImg from "@/assets/services/nail-cut-filing.jpg";
import nailDesignsImg from "@/assets/services/nail-designs.jpg";
import nailExtensionsImg from "@/assets/services/nail-extensions.jpg";
import nailPaintingImg from "@/assets/services/nail-painting.jpg";
import nailPolishChangesImg from "@/assets/services/nail-polish-changes.jpg";
import nailRepairImg from "@/assets/services/nail-repair.jpg";
import pedicureImg from "@/assets/services/pedicure.jpg";
import polishRemovalImg from "@/assets/services/polish-removal.jpg";
import sculptedNailsImg from "@/assets/services/sculpted-nails.jpg";
import spaServicesImg from "@/assets/services/spa-services.jpg";
import stilettoNailsImg from "@/assets/services/stiletto-nails.jpg";
import waterlessPedicuresImg from "@/assets/services/waterless-pedicures.jpg";

export interface ServiceItem {
  id: string;
  name: string;
  image: string;
  alt: string;
  shortDesc: string;
  detail: string;
  categories: string[];
  featured?: boolean;
}

export const CATEGORIES = [
  "All",
  "Nails",
  "Manicure",
  "Pedicure",
  "Nail Art",
  "Extensions",
  "Beauty",
  "Spa",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "manicure",
    name: "Manicure",
    image: manicureImg,
    alt: "Gentle natural manicure treatment on delicate hands with clean cuticles",
    shortDesc: "Thoughtful hand care, cuticle refinement and buffing for immaculate natural nails.",
    detail: "Our signature manicure focuses on meticulous cuticle refinement, tailored natural nail shaping, hand hydration, and a protective high-gloss or matte treatment designed for long-lasting natural health.",
    categories: ["Manicure", "Nails"],
  },
  {
    id: "acrylic-nails",
    name: "Acrylic Nails",
    image: acrylicNailsImg,
    alt: "Sculpted luxury acrylic nails with marble and gold leaf accents",
    shortDesc: "Durable sculpted enhancements tailored with flawless length, shape and strength.",
    detail: "Hand-crafted acrylic enhancements constructed for optimal durability, balance and structural strength, custom sculpted to your preferred length and silhouette.",
    categories: ["Extensions", "Nails"],
    featured: true,
  },
  {
    id: "eyelash-extensions",
    name: "Eyelash Extensions",
    image: eyelashExtensionsImg,
    alt: "Lush, customized classic eyelash extensions on an elegant client",
    shortDesc: "Lush, customized lash sets creating effortless depth and elegant definition.",
    detail: "Individual eyelash extension artistry using ultra-fine, lightweight fibers tailored to accentuate your eye shape with natural elegance or dramatic volume.",
    categories: ["Beauty"],
    featured: true,
  },
  {
    id: "french-manicures",
    name: "French Manicures",
    image: frenchManicuresImg,
    alt: "Modern almond French manicure with clean white micro tips on sheer blush beds",
    shortDesc: "Timeless crisp tips with modern sheer blush beds and clean precision lines.",
    detail: "A contemporary reinvention of the iconic French tip, featuring ultra-fine micro lines or classic soft arches over sheer milky or rose-tinted nail beds.",
    categories: ["Manicure", "Nail Art"],
  },
  {
    id: "gel-manicures",
    name: "Gel Manicures",
    image: gelManicuresImg,
    alt: "High-gloss reflective nude glazed gel manicure under studio lighting",
    shortDesc: "Glossy, long-lasting gel finish with chip-resistant high-shine radiance.",
    detail: "Cured under professional LED technology for up to 3 weeks of mirror-like shine and chip-free perfection, accompanied by full restorative cuticle therapy.",
    categories: ["Manicure", "Nails"],
    featured: true,
  },
  {
    id: "nail-art",
    name: "Nail Art",
    image: nailArtImg,
    alt: "Intricate gold chrome swirls and delicate pearls hand-painted on almond nails",
    shortDesc: "Bespoke hand-painted motifs, chrome accents and editorial artistic detailing.",
    detail: "From delicate fine-line florals and gold chrome embellishments to abstract modern brushstrokes, each set is treated as an individual canvas.",
    categories: ["Nail Art"],
    featured: true,
  },
  {
    id: "nail-cut-filing",
    name: "Nail Cut & Filing",
    image: nailCutFilingImg,
    alt: "Professional manicurist shaping and filing natural nails with precision",
    shortDesc: "Precision nail shaping, filing and edge smoothing tailored to your natural nail structure.",
    detail: "Careful trimming, ergonomic bevel filing, and cuticle oil application to maintain uniform shape, prevent snagging, and encourage healthy growth.",
    categories: ["Nails", "Manicure"],
  },
  {
    id: "nail-designs",
    name: "Nail Designs",
    image: nailDesignsImg,
    alt: "Artistic modern nail designs with soft pastel tones and geometric motifs",
    shortDesc: "Curated geometric, abstract and seasonal aesthetics crafted for your personal style.",
    detail: "Trendsetting seasonal designs, glazed finishes, 3D accents, and gemstone details tailored in consultation with your studio stylist.",
    categories: ["Nail Art"],
  },
  {
    id: "nail-extensions",
    name: "Nail Extensions",
    image: nailExtensionsImg,
    alt: "Long sculpted nail extensions with elegant symmetry and natural curve",
    shortDesc: "Full-length tip extensions designed for balanced symmetry and lightweight comfort.",
    detail: "Premium extensions created with featherweight comfort, natural apex alignment, and customizable shapes including almond, coffin, square, and round.",
    categories: ["Extensions", "Nails"],
  },
  {
    id: "nail-painting",
    name: "Nail Painting",
    image: nailPaintingImg,
    alt: "Fine nail brush applying rich pigmented lacquer along the cuticle curve",
    shortDesc: "Immaculate lacquer application with rich, streak-free pigments and glossy top coats.",
    detail: "Professional multi-layer color application featuring luxury salon enamels, streak-free leveling, and fast-drying UV protective sealing.",
    categories: ["Nails"],
  },
  {
    id: "nail-polish-changes",
    name: "Nail Polish Changes",
    image: nailPolishChangesImg,
    alt: "Curated luxury nail polish bottles and seasonal color swatches",
    shortDesc: "Quick, polished color refreshes to keep your nails effortlessly on-trend.",
    detail: "Swift polish removal, quick buffing, edge touch-up, and fresh application of your chosen shade for an instant style transformation.",
    categories: ["Nails", "Manicure"],
  },
  {
    id: "nail-repair",
    name: "Nail Repair",
    image: nailRepairImg,
    alt: "Restorative cuticle oil and nourishing nail serum treatment for nail health",
    shortDesc: "Targeted reinforcement and nourishing rescue care for cracked or split nails.",
    detail: "Silk wrap, fiberglass, or builder gel reinforcement to mend damaged natural nails, heal fissures, and restore structural integrity smoothly.",
    categories: ["Nails", "Spa"],
  },
  {
    id: "pedicure",
    name: "Pedicure",
    image: pedicureImg,
    alt: "Serene spa pedicure setting with warm water basin, white petals and soft towels",
    shortDesc: "Complete foot pampering with gentle exfoliation, cuticle care and radiant polish.",
    detail: "A restorative ritual including aromatic foot soak, gentle botanical exfoliation, smoothing callus care, relaxing foot massage, and precision toenail polish.",
    categories: ["Pedicure", "Spa"],
  },
  {
    id: "polish-removal",
    name: "Polish Removal",
    image: polishRemovalImg,
    alt: "Gentle cotton pad polish removal with delicate conditioning care",
    shortDesc: "Gentle, non-damaging polish and gel soaking that protects your natural nail health.",
    detail: "Safe acetone-free or foil wrap gel soaking technique that preserves natural nail layers and restores vital moisture with organic cuticle serums.",
    categories: ["Nails", "Manicure"],
  },
  {
    id: "sculpted-nails",
    name: "Sculpted Nails",
    image: sculptedNailsImg,
    alt: "Flawless architectural apex sculpted nails with seamless natural arch",
    shortDesc: "Architectural forms custom-built with builder gel for an exquisite apex profile.",
    detail: "Advanced tip-less sculpting using tailored nail forms and builder gel to construct an organic, seamless arch that feels completely natural.",
    categories: ["Extensions", "Nails"],
  },
  {
    id: "spa-services",
    name: "Spa Services",
    image: spaServicesImg,
    alt: "Luxury spa ritual with warm stones, aromatic botanical oils and soothing massage",
    shortDesc: "Therapeutic hand and foot rituals with botanical oils and gentle massage.",
    detail: "Holistic wellness treatments combining warm herbal compresses, deep tension-relieving acupressure massage, and ultra-hydrating paraffin masks.",
    categories: ["Spa", "Beauty"],
  },
  {
    id: "stiletto-nails",
    name: "Stiletto Nails",
    image: stilettoNailsImg,
    alt: "Dramatic sharp stiletto nails with soft pearlescent glazed chrome finish",
    shortDesc: "Bold, tapered pointed silhouettes finished with striking high-fashion glazes.",
    detail: "Dramatic high-glamour nail architecture sculpted into a razor-sharp point, balanced with durable reinforcement for runway-worthy elegance.",
    categories: ["Extensions", "Nail Art"],
  },
  {
    id: "waterless-pedicures",
    name: "Waterless Pedicures",
    image: waterlessPedicuresImg,
    alt: "Clean hygienic waterless pedicure therapy with warm steamed towels and botanical balm",
    shortDesc: "Eco-luxe hygienic foot treatment focused on deep moisturizing and cuticle precision.",
    detail: "A clean, modern clinical pedicure using warm steamed towels, medical-grade softening balms, and specialized exfoliation without water basin soaking.",
    categories: ["Pedicure", "Spa"],
  },
];

export const FEATURED_SERVICES = ALL_SERVICES.filter((s) => s.featured);
