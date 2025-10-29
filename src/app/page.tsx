"use client";
import React, { useMemo, useState } from "react";
import type { ReactNode, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layout,
  LineChart,
  Mail,
  Menu,
  Palette,
  Rocket,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";

import logo_white from "../../public/logo_white.png"

// ------------------------------
// WebShiftStudio – One‑file React SPA (Next.js + TypeScript version)
// Tech: React + Tailwind + Framer Motion + Lucide icons
// Notes: No backend required. The contact form opens an email draft.
// ------------------------------

// Types
type NavItem = { id: string; label: string };
type Service = {
  icon: ReactNode;
  title: string;
  desc: string;
  bullets: string[];
};

type PortfolioItem = {
  title: string;
  tag: string;
  image: string;
  url: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  stars: number;
};

const NAV: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SERVICES: Service[] = [
  {
    icon: <Layout className="size-6" />,
    title: "Web Design",
    desc: "Clean, modern interfaces tailored to your brand and audience.",
    bullets: ["Responsive layouts", "Design systems", "Accessibility (WCAG)"]
  },
  {
    icon: <Code2 className="size-6" />,
    title: "Web Development",
    desc: "Fast, maintainable websites and web apps using modern stacks.",
    bullets: ["React/Next.js", "API integration", "CMS setup"]
  },
  {
    icon: <LineChart className="size-6" />,
    title: "SEO & Performance",
    desc: "Get discovered and keep users engaged with blazing speed.",
    bullets: ["Core Web Vitals", "Technical SEO", "Analytics"]
  },
  {
    icon: <Palette className="size-6" />,
    title: "Brand & Content",
    desc: "Cohesive visuals and copy that convert visitors into customers.",
    bullets: ["Brand kits", "Copywriting", "Asset production"]
  },
];

const PORTFOLIO: PortfolioItem[] = [
  {
    title: "NovaTech SaaS",
    tag: "Web App",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    url: "#",
  },
  {
    title: "GreenFields Farms",
    tag: "Marketing Site",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    url: "#",
  },
  {
    title: "Orbit Finance",
    tag: "Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    url: "#",
  },
  {
    title: "Café Aurora",
    tag: "eCommerce",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1600&auto=format&fit=crop",
    url: "#",
  },
  {
    title: "Peak Fitness",
    tag: "Marketing Site",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
    url: "#",
  },
  {
    title: "Atlas Logistics",
    tag: "Web App",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    url: "#",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Elena Prieto",
    role: "CMO, Orbit Finance",
    quote:
      "WebShiftStudio rebuilt our site and conversions jumped 38% within a month.",
    stars: 5,
  },
  {
    name: "Marcus Young",
    role: "Founder, NovaTech",
    quote:
      "Fast, communicative, and pixel‑perfect. They felt like part of our team.",
    stars: 5,
  },
  {
    name: "Sofia Reyes",
    role: "Owner, Café Aurora",
    quote:
      "Our online sales doubled after the redesign. Couldn’t be happier!",
    stars: 5,
  },
];

type SectionProps = { id?: string; children: ReactNode; className?: string };
const Section = ({ id, children, className = "" }: SectionProps) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

function useFilteredPortfolio(filter: string) {
  return useMemo(
    () => PORTFOLIO.filter((p) => (filter === "All" ? true : p.tag === filter)),
    [filter]
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
   <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-black/5 dark:border-white/10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-20 items-center justify-between">
      <a href="#home" className="flex items-center gap-3 font-semibold">
        <span className="text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
          WebShiftStudio
        </span>
      </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium shadow-sm hover:shadow transition border-black/10 dark:border-white/10"
            >
              Get a Quote <ArrowRight className="size-4" />
            </a>
          </nav>
          <button
            className="md:hidden rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition border-black/10 dark:border-white/10"
            >
              Get a Quote <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <Section id="home" className="bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs font-medium w-fit">
              <Rocket className="size-4" />
              Launch your next website with confidence
            </p>
            <h1 className="text-4xl md:text-5xl/tight font-extrabold tracking-tight">
              Your business, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">elevated online</span>.
            </h1>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-xl">
              WebShiftStudio designs and builds lightning‑fast websites that turn
              visitors into customers. Strategy, design, development, and SEO—under one roof.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 font-medium shadow hover:shadow-lg transition"
              >
                Start a Project <ArrowRight className="size-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 font-medium shadow-sm hover:shadow transition border-black/10 dark:border-white/10"
              >
                View Portfolio
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900 bg-gradient-to-tr from-indigo-500 to-fuchsia-500"
                  />
                ))}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                Trusted by 120+ growing brands
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl border border-black/10 dark:border-white/10 shadow-xl overflow-hidden bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20">
              <div className="absolute inset-0 grid place-items-center p-6">
                <div className="text-center">
                  <div className="mx-auto mb-6 size-64 rounded-2xl grid place-items-center bg-white/70 dark:bg-neutral-900/60 backdrop-blur border border-black/10 dark:border-white/10">
                    <Image alt="logo" src={logo_white} />
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Design • Build • Grow</p>
                  <div className="flex justify-center">
                    <Sparkles className="size-8 mt-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              Everything you need to launch and grow a high‑performing website.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition border-black/10 dark:border-white/10"
          >
            Free discovery call <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/50 dark:bg-neutral-900/40 backdrop-blur shadow-sm hover:shadow-md transition"
            >
              <div className="size-10 rounded-xl grid place-items-center bg-gradient-to-tr from-indigo-500/15 to-fuchsia-500/15 border border-black/10 dark:border-white/10">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}


// Types for the modal portfolio
type Tag = { label: string; gradient: string };
type Project = {
  title: string;
  tags: Tag[];
  image: string;
  description: string;
};

function PortfolioWithModal() {
  const TAGS: Tag[] = [
    {
      label: "Web Design",
      gradient:
        "bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 dark:text-purple-300",
    },
    {
      label: "Brand Identity",
      gradient:
        "bg-gradient-to-r from-pink-500/10 to-orange-500/10 text-pink-700 dark:text-pink-300",
    },
    {
      label: "UI/UX",
      gradient:
        "bg-gradient-to-r from-orange-500/10 to-blue-500/10 text-blue-700 dark:text-blue-300",
    },
  ];

  const PROJECTS: Project[] = [
    {
      title: "NovaTech SaaS",
      tags: [TAGS[0], TAGS[2]],
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
      description:
        "NovaTech is a modern SaaS platform built with React and Node.js for seamless project management and analytics.",
    },
    {
      title: "GreenFields Farms",
      tags: [TAGS[0], TAGS[1]],
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      description:
        "A vibrant marketing website that showcases GreenFields’ organic products and sustainability mission.",
    },
    {
      title: "Orbit Finance",
      tags: [TAGS[2]],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      description:
        "Orbit Finance provides a sleek, data-driven dashboard for investment tracking with real-time analytics.",
    },
    {
      title: "Café Aurora",
      tags: [TAGS[0], TAGS[1]],
      image:
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1600&auto=format&fit=crop",
      description:
        "A full eCommerce experience for Café Aurora featuring menu browsing, online orders, and loyalty integration.",
    },
    {
      title: "Peak Fitness",
      tags: [TAGS[0]],
      image:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
      description:
        "Peak Fitness website motivates visitors with immersive visuals and custom workout program sign-ups.",
    },
    {
      title: "Atlas Logistics",
      tags: [TAGS[2], TAGS[0]],
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
      description:
        "Atlas Logistics’ web app optimizes delivery routes with AI to increase efficiency and reduce costs.",
    },
  ];

  // Type selected explicitly so it's not inferred as `null` only
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Portfolio</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A selection of websites and products we’ve crafted.
            </p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((item) => (
            <motion.div
              key={item.title}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="cursor-pointer group block overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 backdrop-blur shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <ArrowRight className="size-4 opacity-70" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t: Tag) => (
                    <span
                      key={t.label}
                      className={`text-xs font-medium px-2 py-1 rounded-full border border-black/5 dark:border-white/10 ${t.gradient}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-neutral-900 rounded-3xl max-w-lg w-full p-6 shadow-xl border border-black/10 dark:border-white/10"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <X className="size-5" />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="rounded-2xl w-full h-56 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((t: Tag) => (
                  <span
                    key={t.label}
                    className={`text-xs font-medium px-2 py-1 rounded-full border border-black/5 dark:border-white/10 ${t.gradient}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Discover",
      desc: "We learn your goals, audience, and brand to set a winning strategy.",
    },
    {
      title: "Design",
      desc: "Wireframes to hi‑fi mockups—crafted for clarity and conversion.",
    },
    {
      title: "Develop",
      desc: "We build lightning‑fast, accessible sites with modern tooling.",
    },
    { title: "Launch", desc: "SEO, analytics, and hand‑off with training and docs." },
  ];
  return (
    <Section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Process</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-neutral-900/40 backdrop-blur"
            >
              <div className="absolute -top-3 left-4 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-1 text-xs font-semibold">
                Step {i + 1}
              </div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Happy Clients</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              Real results from real businesses.
            </p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-neutral-900/40 backdrop-blur"
            >
              <div className="flex items-center gap-1 text-amber-500" aria-label={`${t.stars} stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium">{t.name}</div>
              <div className="text-xs text-neutral-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function About() {
  const perks = [
    "Conversion‑focused design",
    "Performance budget in every project",
    "Transparent pricing & timelines",
    "Friendly communication, always",
  ];
  return (
    <Section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About WebShiftStudio</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              We’re a boutique team of designers and engineers helping companies
              of all sizes make a bigger impact online. We ship fast, refine with
              data, and sweat the details that matter.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-black/10 dark:border-white/10 shadow-xl overflow-hidden bg-gradient-to-tr from-fuchsia-600/20 to-indigo-600/20" />
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 px-4 py-3 shadow">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4" />
                <span className="text-sm font-medium">100% satisfaction policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("Project Inquiry – WebShiftStudio");
    const body = encodeURIComponent(
      `Hi WebShiftStudio,%0D%0A%0D%0AMy name is ${name}.%0D%0A%0D%0A${message}%0D%0A%0D%0AContact me at: ${email}`
    );
    window.location.href = `mailto:hello@webshift.studio?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              Tell us about your goals. We’ll reply within one business day.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <Mail className="size-4" />
              <a href="mailto:hello@webshift.studio" className="underline underline-offset-4">hello@webshift.studio</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-neutral-900/40 backdrop-blur shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Project details</label>
                <textarea
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 min-h-28"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your goals, timeline, and budget."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 font-medium shadow hover:shadow-lg transition"
              >
                Send Inquiry <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5" />
            <span className="font-semibold">WebShiftStudio</span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} WebShiftStudio. All rights reserved.
          </p>
          <div className="text-sm">
            <a href="#home" className="hover:underline underline-offset-4">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <PortfolioWithModal />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
