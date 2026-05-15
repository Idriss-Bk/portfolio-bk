"use client";
import React, { useEffect, useRef, useState } from "react";

const customDevProjects = [
  {
    title: "Amber Homes",
    description: "Real-estate platform with dynamic listings, smooth animations, and scalable data management.",
    date: "09/2025",
    url: "https://amberhomes-liart.vercel.app/",
    tools: ["React", "Next.js", "Tailwind CSS", "GSAP", "MySQL"],
  },
  {
    title: "Carnetix",
    description: "Used-car marketplace with transparent listings and certified vehicle history checks.",
    date: "2026",
    url: "https://carnetix.vercel.app/",
    tools: ["React", "Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Quizzical",
    description: "An interactive quiz app with a modern design for playing trivia quizzes.",
    date: "03/2023",
    url: "https://quizzical-uz1g.vercel.app/",
    tools: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Urban Tyres",
    description: "A sleek automotive website showcasing tire products and services.",
    date: "09/2023",
    url: "http://tirespedia.com",
    tools: ["Next.js", "Tailwind CSS", "GraphQL", "WordPress"],
  },
  {
    title: "Foud Recipes",
    description: "Discover and create delicious recipes with step-by-step guides.",
    date: "01/2025",
    url: "https://www.foudrecipes.com/",
    tools: ["Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    title: "BeautyPool",
    description: "Interactive beauty and self-care hub with modern CMS integration.",
    date: "06/2024",
    url: "https://www.beautypool.ae/",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Directus CMS"],
  },
  {
    title: "Cycleway Coffee",
    description: "Modern, responsive website for a coffee shop featuring menu, location, and unique offerings.",
    date: "08/2024",
    url: "https://www.cyclewaycoffee.net/",
    tools: ["React", "Next.js", "Tailwind CSS", "GraphQL", "WordPress"],
  },
  {
    title: "Ben Jamil",
    description: "Lebanese food: an interactive culinary platform with menus and reservations.",
    date: "12/2024",
    url: "https://libanes-food.vercel.app/",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Smartway",
    description: "Business website project showcase built for modern companies.",
    date: "01/2026",
    url: "https://smartway.ma",
    tools: ["Business"],
  },
];

const wordpressProjects = [
  {
    title: "Naranj",
    description: "A restaurant website with a modern, responsive design and interactive features.",
    date: "11/2022",
    url: "https://www.naranj.ma/",
    tools: ["WordPress", "GraphQL"],
  },
  {
    title: "Amornakoch",
    description: "Restaurant website highlighting the menu, booking, and a virtual tour experience.",
    date: "2020",
    url: "https://amornakoch.com",
    tools: ["WordPress"],
  },
  {
    title: "Terrasse Marjana",
    description: "Rooftop restaurant website with reservations, menu, gallery, and venue details.",
    date: "2022",
    url: "https://terrassemarjana.com",
    tools: ["WordPress"],
  },
  {
    title: "BenJamil",
    description: "Restaurant website built with WordPress and GraphQL integration.",
    date: "11/2024",
    url: "https://benjamil.com/",
    tools: ["WordPress", "GraphQL"],
  },
];

const shopifyProjects = [
  {
    title: "Instore Fashion",
    description: "Shopify fashion store with a clean shopping experience and optimized product browsing.",
    date: "02/2026",
    url: "https://instorefashion.myshopify.com/",
    tools: ["Shopify"],
  },
  {
    title: "The Sagio",
    description: "Shopify-based fashion storefront focused on brand style and smooth customer journey.",
    date: "07/2025",
    url: "https://thesagio.com/",
    tools: ["Shopify"],
  },
  {
    title: "Hexed Fashion",
    description: "Modern Shopify fashion website with curated collections and responsive layout.",
    date: "10/2024",
    url: "https://hexedfashion.co.uk/",
    tools: ["Shopify"],
  },
  {
    title: "Ulla Johnson",
    description: "Shopify fashion project with premium visuals and collection-focused browsing.",
    date: "04/2026",
    url: "https://ullajohnson.com/",
    tools: ["Shopify"],
  },
  {
    title: "Fashion Declare",
    description: "Shopify fashion platform built for storytelling, product discovery, and conversion.",
    date: "05/2025",
    url: "https://fashiondeclare.com/",
    tools: ["Shopify"],
  },
  {
    title: "Gango Brand",
    description: "Shopify brand storefront with polished visuals and conversion-oriented shopping flow.",
    date: "11/2025",
    url: "https://gangobrand.com/en",
    tools: ["Shopify"],
  },
  {
    title: "Ghada",
    description: "Shopify fashion niche website with product-first layout and mobile-friendly shopping.",
    date: "06/2023",
    url: "https://www.ghada.ma/",
    tools: ["Shopify"],
  },
  {
    title: "Chula Fashion",
    description: "Shopify fashion storefront with focused merchandising and responsive design.",
    date: "07/2024",
    url: "https://chulafashion.myshopify.com/",
    tools: ["Shopify"],
  },
  {
    title: "Fashion Fusion",
    description: "Shopify fashion niche store with strong visual hierarchy and smooth navigation.",
    date: "10/2022",
    url: "https://www.fashionfusion.co.za/",
    tools: ["Shopify"],
  },
  {
    title: "Lemaire",
    description: "Shopify fashion project with minimalist presentation and premium e-commerce flow.",
    date: "08/2022",
    url: "https://www.lemaire.fr/",
    tools: ["Shopify"],
  },
  {
    title: "Shaping New Tomorrow",
    description: "Shopify apparel storefront emphasizing product quality and conversion-focused UX.",
    date: "04/2025",
    url: "https://shapingnewtomorrow.com/",
    tools: ["Shopify"],
  },
  {
    title: "Fashion Clinic",
    description: "Shopify fashion website designed for clear product structure and clean UX.",
    date: "12/2023",
    url: "https://fashionclinic.com/",
    tools: ["Shopify"],
  },
  {
    title: "Justyol",
    description: "Shopify fashion store tailored for modern catalog browsing and quick checkout.",
    date: "02/2024",
    url: "https://justyol.com/",
    tools: ["Shopify"],
  },
  {
    title: "YourTech",
    description: "Shopify technology store with structured product categories and streamlined purchase flow.",
    date: "09/2024",
    url: "https://www.yourtech.ma/",
    tools: ["Shopify"],
  },
  {
    title: "Tech Tiger",
    description: "Shopify tech niche website with clear product comparisons and modern e-commerce UI.",
    date: "05/2026",
    url: "https://www.tech-tiger.co.uk/",
    tools: ["Shopify"],
  },
  {
    title: "Tech Space",
    description: "Shopify-powered technology storefront with scalable catalog and responsive shopping experience.",
    date: "01/2023",
    url: "https://techspace.ma/",
    tools: ["Shopify"],
  },
  {
    title: "Garnish Online",
    description: "Shopify tech store built for product discovery, trust, and conversion.",
    date: "03/2025",
    url: "https://garnishonline.myshopify.com/",
    tools: ["Shopify"],
  },
  {
    title: "Comda Tech Collection",
    description: "Shopify tech collection page optimized for browsing accessories and gadgets.",
    date: "11/2024",
    url: "https://www.comda.com/collections/tech",
    tools: ["Shopify"],
  },
  {
    title: "Renee's Garden",
    description: "Shopify gardening store with seasonal product organization and user-friendly shopping.",
    date: "06/2022",
    url: "https://www.reneesgarden.com/",
    tools: ["Shopify"],
  },
  {
    title: "Seeds Now",
    description: "Shopify gardening niche storefront focused on seed collections and easy checkout.",
    date: "08/2025",
    url: "https://seedsnow.myshopify.com/",
    tools: ["Shopify"],
  },
  {
    title: "Garden In Minutes",
    description: "Shopify garden tools website with practical product filtering and responsive UX.",
    date: "02/2023",
    url: "https://gardeninminutes.com/",
    tools: ["Shopify"],
  },
  {
    title: "The Happy Gardening Life",
    description: "Shopify gardening storefront designed for educational product discovery and conversion.",
    date: "07/2026",
    url: "https://thehappygardeninglife.com/",
    tools: ["Shopify"],
  },
  {
    title: "Team Grow",
    description: "Shopify gardening project with clean layout, clear categories, and optimized shopping flow.",
    date: "04/2024",
    url: "https://teamgrow.us/",
    tools: ["Shopify"],
  },
  {
    title: "Swan Hose",
    description: "Shopify gardening store focused on durable products and frictionless purchasing.",
    date: "10/2025",
    url: "https://swanhose.com/",
    tools: ["Shopify"],
  },
];

const SECTIONS = [
  {
    id: "custom",
    label: "Built with Code",
    number: "01",
    accent: "#0f0f0f",
    accentLight: "#f5f5f5",
    tagline: "React · Next.js · MySQL · Supabase",
    description: "Custom-engineered experiences from the ground up.",
    projects: customDevProjects,
    bg: "#0a0a0a",
    cardBg: "#141414",
    cardBorder: "#2a2a2a",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    tagBg: "#1f1f1f",
    tagColor: "#aaaaaa",
    markerColor: "#ffffff",
  },
  {
    id: "wordpress",
    label: "WordPress",
    number: "02",
    accent: "#21759b",
    accentLight: "#e8f4f8",
    tagline: "WordPress · GraphQL · WooCommerce",
    description: "Content-driven sites with powerful CMS flexibility.",
    projects: wordpressProjects,
    bg: "#f7f5f0",
    cardBg: "#ffffff",
    cardBorder: "#e0ddd6",
    textPrimary: "#1a1a1a",
    textSecondary: "#777777",
    tagBg: "#eef7fb",
    tagColor: "#21759b",
    markerColor: "#21759b",
  },
  {
    id: "shopify",
    label: "Shopify",
    number: "03",
    accent: "#96bf48",
    accentLight: "#f0f7e6",
    tagline: "Shopify · Liquid · Themes",
    description: "High-converting storefronts built to sell.",
    projects: shopifyProjects,
    bg: "#0e1a0c",
    cardBg: "#152011",
    cardBorder: "#263d1e",
    textPrimary: "#f0f7e6",
    textSecondary: "#7a9968",
    tagBg: "#1e3318",
    tagColor: "#96bf48",
    markerColor: "#96bf48",
  },
];

const CARD_WIDTH = 340;
const CARD_GAP = 24;
const SECTION_PADDING = 80;

const ProjectCard = ({ project, section, index }) => {
  const [imgError, setImgError] = React.useState(false);
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{
        width: `${CARD_WIDTH}px`,
        flexShrink: 0,
        background: section.cardBg,
        border: `1px solid ${section.cardBorder}`,
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        opacity: 0,
        transform: "translateY(40px)",
      }}
    >
      {/* Screenshot */}
      <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", background: section.cardBorder, position: "relative" }}>
        {!imgError ? (
          <img
            src={screenshotUrl}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: `linear-gradient(135deg, ${section.cardBorder}, ${section.cardBg})`,
          }}>
            <span style={{ fontSize: "32px", opacity: 0.3, color: section.textPrimary }}>◻</span>
          </div>
        )}
        {/* Index badge */}
        <div style={{
          position: "absolute", top: "12px", left: "12px",
          background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
          color: "#fff", fontSize: "11px", fontWeight: 600,
          padding: "4px 10px", borderRadius: "100px",
          letterSpacing: "0.05em",
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "8px" }}>
          <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: section.textPrimary, lineHeight: 1.2 }}>
            {project.title}
          </h3>
          <span style={{ fontSize: "11px", color: section.textSecondary, marginLeft: "8px", flexShrink: 0, paddingTop: "2px" }}>
            {project.date}
          </span>
        </div>
        <p style={{ margin: "0 0 14px", fontSize: "13px", color: section.textSecondary, lineHeight: 1.6, flex: 1 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {project.tools.filter(Boolean).map((tool) => (
            <span key={tool} style={{
              background: section.tagBg,
              color: section.tagColor,
              fontSize: "11px", fontWeight: 600,
              padding: "3px 9px", borderRadius: "6px",
              letterSpacing: "0.03em",
            }}>
              {tool}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            color: section.markerColor,
            fontSize: "13px", fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

const SectionPanel = ({ section, sectionIndex }) => {
  const trackRef = useRef(null);
  const titleRef = useRef(null);
  const gsapCtx = useRef(null);

  useEffect(() => {
    let gsap, ScrollTrigger;
    const load = async () => {
      const g = await import("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js").catch(() => null);
      const st = await import("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js").catch(() => null);

      // Fallback to window.gsap if ESM fails
      if (window.gsap) {
        gsap = window.gsap;
        ScrollTrigger = window.ScrollTrigger;
      } else if (g && g.default) {
        gsap = g.default;
      }

      if (!gsap) return;
      if (!ScrollTrigger && window.ScrollTrigger) ScrollTrigger = window.ScrollTrigger;
      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

      const track = trackRef.current;
      if (!track) return;

      const cards = track.querySelectorAll(".project-card");
      const totalWidth = cards.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP + SECTION_PADDING * 2;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      if (!ScrollTrigger || scrollDistance <= 0) {
        // Animate cards in statically
        gsap.to(cards, {
          opacity: 1, y: 0,
          stagger: 0.08, duration: 0.6, ease: "power2.out",
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track.closest(".section-panel"),
          start: "top top",
          end: () => `+=${scrollDistance + 300}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
        },
      });

      // Slide track horizontally
      tl.to(track, {
        x: -scrollDistance,
        ease: "none",
      });

      // Animate cards in as they approach
      cards.forEach((card, i) => {
        gsap.to(card, {
          opacity: 1, y: 0,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: track.closest(".section-panel"),
            start: "top 80%",
          },
        });
      });
    };

    load();
    return () => {
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const totalCards = section.projects.length;
  const trackWidth = totalCards * (CARD_WIDTH + CARD_GAP) - CARD_GAP + SECTION_PADDING * 2;

  return (
    <section
      className="section-panel"
      style={{
        minHeight: "100vh",
        background: section.bg,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ padding: "60px 80px 40px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em",
              color: section.markerColor, marginBottom: "10px",
              textTransform: "uppercase",
            }}>
              {section.number} / {section.tagline}
            </div>
            <h2
              ref={titleRef}
              style={{
                margin: 0,
                fontSize: "clamp(48px, 6vw, 80px)",
                fontWeight: 900,
                color: section.textPrimary,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {section.label}
            </h2>
            <p style={{
              margin: "12px 0 0",
              fontSize: "16px",
              color: section.textSecondary,
              maxWidth: "420px",
            }}>
              {section.description}
            </p>
          </div>
          <div style={{
            fontSize: "clamp(80px, 10vw, 140px)",
            fontWeight: 900,
            color: section.markerColor,
            opacity: 0.08,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            userSelect: "none",
          }}>
            {totalCards}
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: `${CARD_GAP}px`,
            paddingLeft: `${SECTION_PADDING}px`,
            paddingRight: `${SECTION_PADDING}px`,
            alignItems: "center",
            width: `${trackWidth}px`,
            willChange: "transform",
          }}
        >
          {section.projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              section={section}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "28px", right: "60px",
        display: "flex", alignItems: "center", gap: "8px",
        color: section.textSecondary, fontSize: "12px", fontWeight: 500,
        letterSpacing: "0.06em",
      }}>
        <span>SCROLL</span>
        <span style={{ fontSize: "18px" }}>→</span>
      </div>

      {/* Section number watermark */}
      <div style={{
        position: "absolute", bottom: "-20px", left: "60px",
        fontSize: "200px", fontWeight: 900,
        color: section.markerColor,
        opacity: 0.04,
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-0.06em",
      }}>
        {section.number}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const heroRef = useRef(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    const loadGSAP = () => {
      if (window.gsap) { setGsapLoaded(true); return; }
      const script1 = document.createElement("script");
      script1.src = "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js";
      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.src = "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js";
        script2.onload = () => {
          window.gsap.registerPlugin(window.ScrollTrigger);
          setGsapLoaded(true);
        };
        document.head.appendChild(script2);
      };
      document.head.appendChild(script1);
    };
    loadGSAP();
  }, []);

  useEffect(() => {
    if (!gsapLoaded || !heroRef.current) return;
    const { gsap } = window;
    gsap.from(heroRef.current.querySelectorAll(".hero-line"), {
      y: 80, opacity: 0,
      duration: 1.2, stagger: 0.15,
      ease: "power4.out",
    });
  }, [gsapLoaded]);

  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />

        <div style={{ textAlign: "center", position: "relative" }}>
          <div className="hero-line" style={{
            fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em",
            color: "#555", textTransform: "uppercase", marginBottom: "24px",
          }}>
            Portfolio · {new Date().getFullYear()}
          </div>
          <h1 className="hero-line" style={{
            margin: "0 0 16px",
            fontSize: "clamp(72px, 12vw, 160px)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
          }}>
            My Work
          </h1>
          <p className="hero-line" style={{
            margin: "24px auto 0",
            maxWidth: "500px",
            fontSize: "16px",
            color: "#666",
            lineHeight: 1.7,
          }}>
            Explore projects across three disciplines — custom development, WordPress, and Shopify.
          </p>

          {/* Category pills */}
          <div className="hero-line" style={{
            display: "flex", gap: "12px", justifyContent: "center",
            marginTop: "40px", flexWrap: "wrap",
          }}>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  padding: "10px 24px",
                  border: `1px solid ${s.markerColor}44`,
                  borderRadius: "100px",
                  color: s.markerColor,
                  fontSize: "13px", fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "background 0.2s",
                  background: `${s.markerColor}11`,
                }}
                onMouseEnter={e => e.currentTarget.style.background = `${s.markerColor}22`}
                onMouseLeave={e => e.currentTarget.style.background = `${s.markerColor}11`}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Scroll down */}
          <div className="hero-line" style={{
            marginTop: "80px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
            color: "#444", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            <span>Scroll to explore</span>
            <div style={{
              width: "1px", height: "48px",
              background: "linear-gradient(to bottom, #444, transparent)",
            }} />
          </div>
        </div>
      </section>

      {/* Three sections */}
      {SECTIONS.map((section, i) => (
        <div key={section.id} id={section.id}>
          <SectionPanel section={section} sectionIndex={i} />
        </div>
      ))}

      {/* Footer */}
      <footer style={{
        background: "#050505",
        padding: "60px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #1a1a1a",
      }}>
        <span style={{ fontSize: "24px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" }}>
          My Work
        </span>
        <span style={{ fontSize: "13px", color: "#444" }}>
          {SECTIONS.reduce((a, s) => a + s.projects.length, 0)} projects total
        </span>
      </footer>
    </div>
  );
};

export default Portfolio;