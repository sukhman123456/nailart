import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import student1Img from "@/assets/academy/academy-student-1.jpg";
import student2Img from "@/assets/academy/academy-student-2.jpg";
import groupSmallImg from "@/assets/academy/academy-students-group-small.jpg";
import groupLargeImg from "@/assets/academy/academy-students-group-large.jpg";

const STUDIO_PHONE = "tel:+916280776606";
const STUDIO_PHONE_DISPLAY = "062807 76606";
const WHATSAPP_BASE = "https://wa.me/916280776606";

const ACADEMY_IMAGES = [
  {
    id: "acad-large",
    src: groupLargeImg,
    title: "Growing Together as Nail Artists",
    caption: "Students celebrating course completion in the academy studio",
    alt: "Group of students holding certificates at Art Studio Batala Nail Art Academy",
  },
  {
    id: "acad-std-1",
    src: student1Img,
    title: "Certificate Completion Moment",
    caption: "Student receiving certificate recognition at Art Studio Batala",
    alt: "Student holding Certificate of Completion with academy representative",
  },
  {
    id: "acad-std-2",
    src: student2Img,
    title: "Celebrating Student Achievement",
    caption: "Dedicated skill development and certificate completion",
    alt: "Student proudly holding Certificate of Completion at Art Studio Batala",
  },
  {
    id: "acad-group-sm",
    src: groupSmallImg,
    title: "Real Students. Real Progress.",
    caption: "Students holding certificates alongside their mentor",
    alt: "Multiple students with certificates together with academy representative",
  },
];

const TRAINING_HIGHLIGHTS = [
  {
    icon: "✦",
    title: "Hands-On Learning",
    text: "Learn through practical experience in a real studio environment.",
  },
  {
    icon: "✧",
    title: "Professional Techniques",
    text: "Build your understanding of modern nail art and professional techniques.",
  },
  {
    icon: "◇",
    title: "Guided Training",
    text: "Learn with guidance throughout your training journey.",
  },
  {
    icon: "✦",
    title: "Certificate Completion",
    text: "Celebrate your learning journey with course completion recognition.",
  },
];

const LEARNING_STEPS = [
  {
    step: "01",
    title: "Learn",
    desc: "Understand the fundamentals and professional nail art techniques.",
  },
  {
    step: "02",
    title: "Practice",
    desc: "Develop your skills through hands-on practice.",
  },
  {
    step: "03",
    title: "Create",
    desc: "Explore designs and build confidence in your work.",
  },
  {
    step: "04",
    title: "Complete",
    desc: "Celebrate your progress and course completion.",
  },
];

export function NailArtAcademySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const whatsappAcademyUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    "Hi Art Studio Batala, I would like to enquire about your Professional Nail Art Training & Academy Courses."
  )}`;

  return (
    <section id="academy" className="academy-section section-pad">
      <div className="frame">
        {/* 2. SECTION HEADER */}
        <div className="reveal text-center max-w-[780px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border text-[10px] font-bold tracking-[0.22em] uppercase text-rose shadow-2xs">
            <GraduationCap size={13} className="text-rose" />
            <span>NAIL ART ACADEMY</span>
          </div>

          <h2 className="section-title mt-4">
            Learn the Art.
            <br />
            <em>Master the Craft.</em>
          </h2>

          <p className="font-editorial text-2xl md:text-3xl text-foreground/90 mt-3 font-normal">
            Turn Your Passion for Nail Art Into Professional Skills.
          </p>

          <p className="body-copy mt-4 text-base md:text-lg max-w-[620px] mx-auto">
            At Art Studio Batala, aspiring nail artists learn through practical training, guided
            techniques and hands-on experience in a professional studio environment.
          </p>
        </div>

        {/* 9. QUALITATIVE TRUST STRIP */}
        <div className="reveal mt-12 md:mt-16">
          <div className="academy-trust-strip rounded-full max-w-[980px] mx-auto">
            <span className="academy-trust-item">PRACTICAL TRAINING</span>
            <span className="text-gold text-xs">◆</span>
            <span className="academy-trust-item">REAL STUDENT EXPERIENCE</span>
            <span className="text-gold text-xs">◆</span>
            <span className="academy-trust-item">PROFESSIONAL GUIDANCE</span>
            <span className="text-gold text-xs">◆</span>
            <span className="academy-trust-item">SKILL-FOCUSED LEARNING</span>
          </div>
        </div>

        {/* 3. PREMIUM INTRO SPLIT LAYOUT */}
        <div className="reveal mt-16 md:mt-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Side Content */}
          <div>
            <p className="label-editorial text-rose flex items-center gap-2">
              <Sparkles size={13} />
              STUDENT JOURNEY
            </p>

            <h3 className="section-title text-4xl md:text-5xl mt-3 font-normal">
              Your Journey to
              <br />
              Becoming a Nail Artist
              <br />
              <em>Starts Here.</em>
            </h3>

            <p className="body-copy mt-6 text-base leading-relaxed">
              Students get an opportunity to learn professional nail art techniques in a practical
              environment, develop their skills and understand the fundamentals of professional nail
              services.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Practical Hands-On Training",
                "Professional Nail Art Techniques",
                "Guided Learning Environment",
                "Course Completion Certificate",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/80"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-light text-rose text-xs">
                    <Check size={13} />
                  </span>
                  <span className="text-xs font-semibold text-foreground tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                onClick={() => setEnquiryOpen(true)}
                className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-wider shadow-sm transition-transform hover:scale-[1.02]"
              >
                Enquire About Training
                <ArrowUpRight size={15} className="ml-1.5" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-wider bg-background"
              >
                <a href={STUDIO_PHONE}>
                  <Phone size={14} className="mr-2 text-rose" />
                  Call Studio
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side Featured Real Student Photo */}
          <div
            className="academy-image-card aspect-[4/5] max-h-[560px]"
            onClick={() => setSelectedPhotoIndex(1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedPhotoIndex(1);
            }}
            aria-label="View student certificate completion moment"
          >
            <img
              src={student1Img}
              alt="Student holding Certificate of Completion with academy representative at Art Studio Batala"
              loading="lazy"
              width={700}
              height={875}
              className="object-cover object-top"
            />
            <div className="academy-image-overlay">
              <span className="label-editorial text-primary-foreground/80">STUDENT ACHIEVEMENT</span>
              <p className="font-editorial text-2xl text-primary-foreground mt-1">
                Certificate Completion
              </p>
              <p className="text-[11px] text-primary-foreground/75 mt-0.5">
                Practical Training Recognition • Art Studio Batala
              </p>
            </div>
          </div>
        </div>

        {/* 4, 5, 6. REAL STUDENT SHOWCASE GALLERY (EDITORIAL MASONRY) */}
        <div className="reveal mt-20 md:mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="label-editorial text-rose flex items-center gap-2">
                <Users size={14} />
                REAL STUDENT JOURNEYS
              </p>
              <h3 className="section-title text-4xl md:text-5xl mt-3 font-normal">
                Authentic Moments.
                <br />
                <em>Real Achievements.</em>
              </h3>
            </div>
            <p className="body-copy max-w-[340px]">
              Actual moments from our training academy in Batala, celebrating practical learning,
              guidance and course completion.
            </p>
          </div>

          {/* Editorial Masonry Grid using ALL 4 real photos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Wide Hero Group Image (Photo 4) - Given Visual Prominence */}
            <div
              className="md:col-span-12 academy-image-card min-h-[360px] md:min-h-[480px]"
              onClick={() => setSelectedPhotoIndex(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelectedPhotoIndex(0);
              }}
              aria-label="View large group of students in studio"
            >
              <img
                src={groupLargeImg}
                alt="Large group of students and learners holding certificates in Art Studio Batala"
                loading="lazy"
                width={1200}
                height={700}
                className="object-cover object-center"
              />
              <div className="academy-image-overlay">
                <span className="label-editorial text-primary-foreground/85">
                  THE ACADEMY COMMUNITY
                </span>
                <p className="font-editorial text-2xl md:text-3xl text-primary-foreground mt-1">
                  Growing Together as Nail Artists
                </p>
                <p className="text-xs text-primary-foreground/80 mt-1">
                  Students celebrating course completion in the academy studio in Batala
                </p>
              </div>
            </div>

            {/* Student Photo 2 */}
            <div
              className="md:col-span-4 academy-image-card aspect-[4/5]"
              onClick={() => setSelectedPhotoIndex(2)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelectedPhotoIndex(2);
              }}
              aria-label="View student certificate moment"
            >
              <img
                src={student2Img}
                alt="Student receiving certificate recognition at Art Studio Batala"
                loading="lazy"
                width={600}
                height={750}
                className="object-cover object-top"
              />
              <div className="academy-image-overlay">
                <span className="label-editorial text-primary-foreground/80">PRACTICAL LEARNING</span>
                <p className="font-editorial text-xl text-primary-foreground mt-1">
                  Celebrating Student Achievement
                </p>
              </div>
            </div>

            {/* Small Group Photo 3 */}
            <div
              className="md:col-span-4 academy-image-card aspect-[4/5]"
              onClick={() => setSelectedPhotoIndex(3)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelectedPhotoIndex(3);
              }}
              aria-label="View students with certificates"
            >
              <img
                src={groupSmallImg}
                alt="Multiple students with certificates together with academy representative"
                loading="lazy"
                width={600}
                height={750}
                className="object-cover object-top"
              />
              <div className="academy-image-overlay">
                <span className="label-editorial text-primary-foreground/80">COMMUNITY</span>
                <p className="font-editorial text-xl text-primary-foreground mt-1">
                  Real Students. Real Progress.
                </p>
              </div>
            </div>

            {/* 7. STUDENT ACHIEVEMENT MINI CARD */}
            <div className="md:col-span-4 flex flex-col justify-between p-8 rounded-2xl bg-card border border-gold/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Award size={140} className="text-gold" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-[10px] font-bold tracking-widest text-rose uppercase">
                  <Award size={12} />
                  <span>ACHIEVEMENT</span>
                </div>

                <h4 className="font-editorial text-3xl font-normal mt-5 text-foreground">
                  Celebrating
                  <br />
                  <em>Every Achievement.</em>
                </h4>

                <p className="body-copy mt-4 text-sm leading-relaxed">
                  From learning the fundamentals to completing their training, every student journey is
                  a step toward greater confidence and creativity.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-border/80">
                <p className="text-[11px] font-semibold text-rose uppercase tracking-widest">
                  Art Studio Batala Certificate
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Course completion recognition presented upon hands-on training completion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. TRAINING HIGHLIGHTS (4 CARDS) */}
        <div className="reveal mt-20 md:mt-28">
          <div className="text-center max-w-[620px] mx-auto mb-12">
            <p className="label-editorial text-rose">WHAT STUDENTS EXPERIENCE</p>
            <h3 className="section-title text-3xl md:text-5xl mt-3 font-normal">
              Training
              <br />
              <em>Highlights.</em>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINING_HIGHLIGHTS.map((item, index) => (
              <div key={item.title} className="academy-highlight-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl text-rose font-serif">{item.icon}</span>
                    <span className="label-editorial text-muted-foreground/60 text-[9px]">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="font-editorial text-2xl font-normal mt-4 text-foreground">
                    {item.title}
                  </h4>

                  <p className="body-copy mt-3 text-xs leading-relaxed">{item.text}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rose">
                    Art Studio Batala
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10. STUDENT JOURNEY TIMELINE */}
        <div className="reveal mt-20 md:mt-28 bg-card border border-border rounded-2xl p-8 md:p-14 shadow-sm">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <p className="label-editorial text-rose">FOUR GUIDED PHASES</p>
            <h3 className="section-title text-3xl md:text-5xl mt-3 font-normal">
              Your Learning
              <br />
              <em>Journey.</em>
            </h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            <div className="hidden md:block timeline-line" />

            {LEARNING_STEPS.map((step) => (
              <div key={step.step} className="timeline-step flex flex-col items-center text-center">
                <div className="timeline-node">{step.step}</div>
                <h4 className="font-editorial text-2xl font-normal mt-5 text-foreground">
                  {step.title}
                </h4>
                <p className="body-copy mt-2 text-xs leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 11. IMAGE + TEXT STORY SECTION */}
        <div className="reveal mt-20 md:mt-28 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div
            className="academy-image-card aspect-[4/3] rounded-2xl overflow-hidden"
            onClick={() => setSelectedPhotoIndex(0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedPhotoIndex(0);
            }}
            aria-label="View academy group training experience"
          >
            <img
              src={groupLargeImg}
              alt="Students learning and completing practical training at Art Studio Batala"
              loading="lazy"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-[10px] font-bold tracking-widest text-rose uppercase">
              <HeartHandshake size={13} />
              <span>THE ACADEMY EXPERIENCE</span>
            </div>

            <h3 className="section-title text-4xl md:text-5xl mt-4 font-normal">
              Learn Together.
              <br />
              <em>Grow Together.</em>
            </h3>

            <p className="body-copy mt-6 text-base leading-relaxed">
              A professional learning environment is about more than techniques. It is about
              practice, creativity, confidence and the experience of learning alongside other
              aspiring nail artists.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-gold" />
              <span className="label-editorial text-rose">ART STUDIO ACADEMY • BATALA</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <Button
                onClick={() => setEnquiryOpen(true)}
                className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-wider"
              >
                Enquire About Training
                <ArrowRight size={14} className="ml-1.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* 12. CALL TO ACTION (CTA) */}
        <div className="reveal mt-20 md:mt-28">
          <div className="bg-secondary border border-border/90 rounded-2xl p-8 md:p-14 lg:p-16 text-center max-w-[900px] mx-auto shadow-sm">
            <p className="label-editorial text-rose">READY TO START YOUR JOURNEY?</p>
            <h3 className="section-title text-4xl md:text-6xl mt-4 font-normal">
              Turn Your Passion for Nail Art
              <br />
              <em>Into a Skill.</em>
            </h3>

            <p className="body-copy mt-5 max-w-[540px] mx-auto text-base">
              Explore nail art training at Art Studio Batala and take the next step toward developing
              your creative skills.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => setEnquiryOpen(true)}
                className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-wider shadow-sm transition-transform hover:scale-[1.02]"
              >
                Enquire About Training
                <ArrowUpRight size={15} className="ml-1.5" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-wider bg-background hover:bg-background/80 transition-transform hover:scale-[1.02]"
              >
                <a href={STUDIO_PHONE}>
                  <Phone size={14} className="mr-2 text-rose" />
                  Contact Us ({STUDIO_PHONE_DISPLAY})
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Academy Fullscreen Lightbox */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Academy Photo Lightbox"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-5 top-5 text-primary-foreground hover:bg-white/10"
            aria-label="Close lightbox"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <X size={24} />
          </Button>

          <div
            className="flex h-full max-h-[88vh] max-w-[min(90vw,880px)] flex-col items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={ACADEMY_IMAGES[selectedPhotoIndex].src}
              alt={ACADEMY_IMAGES[selectedPhotoIndex].alt}
              className="min-h-0 max-h-[76vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center text-primary-foreground mt-2">
              <p className="label-editorial text-primary-foreground/75">
                ART STUDIO BATALA • NAIL ART ACADEMY
              </p>
              <h4 className="font-editorial text-2xl mt-1">
                {ACADEMY_IMAGES[selectedPhotoIndex].title}
              </h4>
              <p className="text-xs text-primary-foreground/80 mt-1 max-w-[500px]">
                {ACADEMY_IMAGES[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Academy Training Enquiry Modal */}
      {enquiryOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="academy-enquiry-title"
          onClick={() => setEnquiryOpen(false)}
        >
          <div
            className="modal-box p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEnquiryOpen(false)}
              className="absolute top-5 right-5 z-10 rounded-full p-2 bg-background/80 backdrop-blur-md text-foreground/80 hover:text-foreground hover:bg-background border border-border transition-colors"
              aria-label="Close enquiry modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 text-rose text-xs font-semibold tracking-widest uppercase">
              <GraduationCap size={15} />
              <span>NAIL ART TRAINING ENQUIRY</span>
            </div>

            <h3
              id="academy-enquiry-title"
              className="font-editorial text-3xl md:text-4xl font-normal mt-2 text-foreground"
            >
              Enquire About Training
            </h3>

            <p className="body-copy mt-2 text-xs leading-relaxed">
              Connect directly with Art Studio Batala to learn about practical nail art training,
              hands-on technique guidance, and batch schedules.
            </p>

            <div className="my-5 border-t border-border/80" />

            <div className="flex flex-col gap-3">
              <Button asChild className="rounded-full py-6 text-xs font-semibold tracking-wider uppercase">
                <a href={whatsappAcademyUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} className="mr-2 text-emerald-400" />
                  Enquire via WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full py-6 text-xs font-semibold tracking-wider uppercase">
                <a href={STUDIO_PHONE}>
                  <Phone size={15} className="mr-2 text-rose" />
                  Call Studio ({STUDIO_PHONE_DISPLAY})
                </a>
              </Button>
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 text-center">
              <p className="text-[11px] text-muted-foreground">
                Outside Sant Rasila Avenue, Qadian Road, Batala, Punjab
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
