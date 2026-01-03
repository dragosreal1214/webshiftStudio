"use client";
import React, { useState } from "react";
import type { ReactNode, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layout,
  LineChart,
  Mail,
  Menu,
  Rocket,
  Sparkles,
  X,
  Bot,
  CalendarClock,
  MessageCircle,
  Zap,
} from "lucide-react";
import Image from "next/image";

import logo from "../../public/logo.png";

// ------------------------------
// ShiftSense Studio – AI-focused one-page site
// ------------------------------

type NavItem = { id: string; label: string };
type Service = {
  icon: ReactNode;
  title: string;
  desc: string;
  bullets: string[];
};

type SectionProps = { id?: string; children: ReactNode; className?: string };
const Section = ({ id, children, className = "" }: SectionProps) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>
    {children}
  </section>
);

const NAV: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "ideas", label: "AI Ideas" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SERVICES: Service[] = [
  {
    icon: <Layout className="size-6" />,
    title: "Conversion-First Web Design",
    desc: "Websites built to guide visitors straight into bookings, demos, and inquiries.",
    bullets: [
      "High-impact landing pages",
      "Mobile-perfect layouts",
      "Designed around your funnels",
    ],
  },
  {
    icon: <Code2 className="size-6" />,
    title: "Full-Stack Development",
    desc: "Modern, scalable builds ready for AI features, integrations, and automation.",
    bullets: ["Next.js / React", "API & CRM integration", "Secure auth & dashboards"],
  },
  {
    icon: <Bot className="size-6" />,
    title: "AI Automation & Assistants",
    desc: "Let AI handle reservations, FAQs, lead qualification, and follow-ups on autopilot.",
    bullets: [
      "24/7 AI chat on your site",
      "Automated bookings & reminders",
      "Lead scoring & smart routing",
    ],
  },
  {
    icon: <LineChart className="size-6" />,
    title: "Optimization & Growth",
    desc: "Turn data into decisions, then into revenue—with continuous AI-powered improvements.",
    bullets: ["Analytics & tracking", "A/B testing & CRO", "SEO & performance tuning"],
  },
];

// ✅ shared card style: clean in light, glassy in dark
const CARD =
  "relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm " +
  "hover:shadow-lg hover:-translate-y-1 transition duration-300 " +
  "dark:border-white/10 dark:bg-neutral-900/70 dark:backdrop-blur-xl " +
  "dark:shadow-[0_0_10px_rgba(15,23,42,0.35)] dark:hover:shadow-[0_0_26px_rgba(79,70,229,0.6)]";

const CARD_GLOW =
  "pointer-events-none absolute inset-0 bg-gradient-to-br from-black/[0.04] via-transparent to-transparent " +
  "dark:from-white/5 dark:via-transparent dark:to-transparent";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 font-semibold hover:opacity-90 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
              ShiftSense Studio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="inline-flex items-center text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors duration-200 hover:-translate-y-0.5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium shadow-sm hover:shadow-lg transition duration-200 hover:-translate-y-0.5 border-black/10 dark:border-white/10"
            >
              Automate My Business <ArrowRight className="size-4" />
            </a>
          </nav>

          <button
            className="md:hidden rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-transform duration-150 hover:scale-105"
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
                className="block rounded-lg px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition duration-150 hover:-translate-y-0.5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium shadow-sm hover:shadow-lg transition duration-200 hover:-translate-y-0.5 border-black/10 dark:border-white/10"
            >
              Automate My Business <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <Section
      id="home"
      className="bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs font-medium w-fit bg-white/60 dark:bg-neutral-900/40">
              <Rocket className="size-4" />
              AI-powered websites that work while you sleep
            </p>

            <h1 className="text-4xl md:text-5xl/tight font-extrabold tracking-tight">
              Turn clicks into clients{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
                on autopilot
              </span>
              .
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 max-w-xl">
              ShiftSense Studio designs and builds smart websites that don’t just look good—
              they{" "}
              <strong>
                answer questions, book reservations, qualify leads, and send follow-ups with AI
              </strong>
              . Your site becomes your hardest-working team member.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 font-medium shadow hover:shadow-xl transition duration-200 hover:-translate-y-0.5"
              >
                Supercharge My Website <ArrowRight className="size-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 font-medium shadow-sm hover:shadow-lg transition duration-200 hover:-translate-y-0.5 border-black/10 dark:border-white/10"
              >
                See What We Automate
              </a>
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
                  <div className="mx-auto mb-6 size-64 rounded-2xl grid place-items-center bg-white/80 dark:bg-neutral-900/60 backdrop-blur border border-black/10 dark:border-white/10">
                    <Image alt="logo" src={logo} />
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    Design • Build • Automate
                  </p>
                  <div className="flex justify-center mt-4 gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 bg-white/60 dark:bg-neutral-900/40">
                      <Bot className="size-3" /> AI chat & bookings
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 bg-white/60 dark:bg-neutral-900/40">
                      <Sparkles className="size-3" /> Automated follow-ups
                    </span>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What we can automate for you
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              From first click to confirmed booking, we design AI-driven flows that turn your
              website into a{" "}
              <span className="font-semibold">
                receptionist, sales rep, and support agent—all in one.
              </span>
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium shadow-sm hover:shadow-lg transition duration-200 hover:-translate-y-0.5 border-black/10 dark:border-white/10"
          >
            Free automation audit <ArrowRight className="size-4" />
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
              className={CARD}
            >
              <div className={CARD_GLOW} />
              <div className="relative p-5">
                <div className="size-10 rounded-xl grid place-items-center bg-gradient-to-tr from-indigo-500/15 to-fuchsia-500/15 border border-black/10 dark:border-white/20 backdrop-blur">
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-200">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- AI Ideas tags setup ---------- */

type Tag = { label: string; gradient: string };

const TAGS: Tag[] = [
  {
    label: "AI Automation",
    gradient:
      "bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 dark:text-purple-300",
  },
  {
    label: "Web Design",
    gradient:
      "bg-gradient-to-r from-pink-500/10 to-orange-500/10 text-pink-700 dark:text-pink-300",
  },
  {
    label: "Local Business",
    gradient:
      "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 dark:text-emerald-300",
  },
  {
    label: "SaaS & Dashboards",
    gradient:
      "bg-gradient-to-r from-orange-500/10 to-blue-500/10 text-blue-700 dark:text-blue-300",
  },
  {
    label: "High-Ticket B2B",
    gradient:
      "bg-gradient-to-r from-sky-500/10 to-indigo-500/10 text-sky-700 dark:text-sky-300",
  },
];

type Idea = {
  icon: ReactNode;
  label: string;
  title: string;
  desc: string;
  bullets: string[];
  tags: Tag[];
};

function AiIdeas() {
  const ideas: Idea[] = [
    {
      icon: <CalendarClock className="size-6" />,
      label: "Reservations & Bookings",
      title: "Your calendar, fully automated",
      desc: "Let visitors book tables, appointments, demos or classes without a single back-and-forth email.",
      bullets: [
        "AI asks the right questions before booking",
        "Syncs with Google / Outlook calendar",
        "Automatic reminders & cancellations",
      ],
      tags: [TAGS[0], TAGS[2]],
    },
    {
      icon: <MessageCircle className="size-6" />,
      label: "Instant Replies",
      title: "AI that answers like a human (but faster)",
      desc: "Train an assistant on your services, pricing and policies so it can answer 80% of questions instantly.",
      bullets: [
        "24/7 chat widget on your site",
        "Context from your docs & FAQs",
        "Escalation to you when needed",
      ],
      tags: [TAGS[0], TAGS[1]],
    },
    {
      icon: <Zap className="size-6" />,
      label: "Lead Qualification",
      title: "Filter out time-wasters automatically",
      desc: "AI pre-qualifies leads before they hit your inbox so you spend time only with people who are ready to buy.",
      bullets: [
        "Smart forms that adapt by answers",
        "Automatic lead scoring & tagging",
        "Pushes leads into CRM / email list",
      ],
      tags: [TAGS[0], TAGS[4]],
    },
    {
      icon: <LineChart className="size-6" />,
      label: "Follow-ups & Nurturing",
      title: "Every lead gets followed up (automatically)",
      desc: "No more ‘forgotten’ leads. Automations send follow-ups, reminders and offers based on what people did.",
      bullets: [
        "Behavior-based email sequences",
        "Reminders for abandoned bookings",
        "Personalized recommendations",
      ],
      tags: [TAGS[0], TAGS[3]],
    },
  ];

  return (
    <Section id="ideas" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Don&apos;t know where to start? Steal these AI ideas.
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              You don&apos;t need a big portfolio to see what&apos;s possible. Here&apos;s what I
              can build into your website right now to save you hours every week.
            </p>
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            {/* ✅ FIXED: bg.white/60 -> bg-white/60 */}
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 bg-white/60 dark:bg-neutral-900/60 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
              <Sparkles className="size-4" />
              Custom flows for your business, not templates.
            </span>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {ideas.map((idea) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={CARD}
            >
              <div className={CARD_GLOW} />
              <div className="relative p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  <div className="size-8 rounded-xl grid place-items-center bg-white/70 dark:bg-neutral-900/60 border border-black/10 dark:border-white/20 backdrop-blur">
                    {idea.icon}
                  </div>
                  <span>{idea.label}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{idea.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {idea.desc}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {idea.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-200">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {idea.tags.map((t) => (
                    <span
                      key={t.label}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border border-black/5 dark:border-white/10 ${t.gradient}`}
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
    </Section>
  );
}

function Process() {
  const steps = [
    {
      title: "Discover & Map",
      desc: "We audit your current flows and map what AI can take over: bookings, FAQs, leads, follow-ups, and more.",
    },
    {
      title: "Design the Experience",
      desc: "We design the ideal visitor journey—from first visit to confirmed booking—so every step feels effortless.",
    },
    {
      title: "Build & Integrate",
      desc: "We implement the website, AI assistant, and all the tools (calendars, CRMs, email, WhatsApp, etc.) so they talk to each other.",
    },
    {
      title: "Launch & Optimize",
      desc: "We go live, track how users behave, then refine prompts, flows, and UI to squeeze out maximum ROI.",
    },
  ];

  return (
    <Section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          How we work with you
        </h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={CARD}
            >
              <div className={CARD_GLOW} />
              <div className="relative pt-8 pb-10 px-6">
                <div className="absolute top-3 left-4 rounded-full border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/80 px-3 py-1 text-xs font-semibold text-neutral-900 dark:text-white">
                  Step {i + 1}
                </div>

                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {s.desc}
                </p>

                <div className="absolute bottom-3 left-4 inline-flex items-center gap-2 rounded-full bg-neutral-900/90 dark:bg-black/70 border border-white/10 px-3 py-1 text-[11px] text-white">
                  <span className="inline-block size-2.5 rounded-full bg-purple-400 animate-pulse" />
                  <span>AI-optimized step</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function About() {
  const perks = [
    "AI-first strategy on every project",
    "Deep experience with SaaS, local biz & eCom",
    "Transparent, no-nonsense collaboration",
    "We own the tech, you own the results",
  ];

  const techStack = [
    { name: "React.js", icon: <Code2 className="size-5" /> },
    { name: "Next.js", icon: <Rocket className="size-5" /> },
    { name: "ElevenLabs", icon: <Bot className="size-5" /> },
    { name: "MongoDB", icon: <Zap className="size-5" /> },
  ];

  return (
    <Section id="about" className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              We don’t just “add AI” — we design around it
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              ShiftSense Studio is a small team of designers, developers, and automation
              nerds obsessed with one thing:{" "}
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                turning your website into a machine that reliably brings you business.
              </span>{" "}
              We combine crisp UX with AI, integrating the tools you already use so nothing
              gets lost in yet another inbox.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {perks.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`${CARD} rounded-3xl p-8 flex flex-col items-center justify-center min-h-[320px]`}
            >
              <div className={CARD_GLOW} />

              <div className="relative z-10 w-full">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-8">
                  Powering our solutions with
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="size-8 rounded-lg grid place-items-center bg-gradient-to-tr from-indigo-500/15 to-fuchsia-500/15 border border-black/10 dark:border-white/20 backdrop-blur group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </div>
                      <span className="font-medium text-sm text-neutral-700 dark:text-neutral-200">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 px-4 py-3 shadow-2xl transition hover:-translate-y-1 hover:shadow-indigo-500/20">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-fuchsia-500 animate-pulse" />
                <span className="text-sm font-medium">
                  Our favourite question is “Can we automate that?”
                </span>
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
    const subject = encodeURIComponent("AI Website & Automation Inquiry – ShiftSense Studio");
    const body = encodeURIComponent(
      `Hi ShiftSense Studio,%0D%0A%0D%0AMy name is ${name}.%0D%0A%0D%0A${message}%0D%0A%0D%0AContact me at: ${email}`
    );
    window.location.href = `mailto:dragos.axinte.business@gmail.com?subject=${subject}&body=${body}`;
  };

  const quickOptions = [
    "Automate reservations / bookings",
    "Answer FAQs with AI",
    "Qualify & route leads",
    "Replace contact forms with chat",
  ];

  return (
    <Section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-white dark:from-indigo-500/25 dark:via-fuchsia-500/10 dark:to-black" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/10 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-white/80 mb-4">
              <Sparkles className="size-4" />
              Tell me what you want to stop doing manually
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Let&apos;s design a website that doesn&apos;t need you watching it 24/7.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-200 max-w-lg">
              Share what your business does and what you&apos;re sick of doing manually.
              I&apos;ll come back with a simple plan for how your website and AI can take it
              over—no fluff, no spam.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {quickOptions.map((opt) => (
                <div
                  key={opt}
                  className="flex items-start gap-2 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 dark:border-white/15 px-3 py-2 text-neutral-900 dark:text-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-300"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-500" />
                  <span>{opt}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200">
              <div className="flex items-center gap-2">
                <CalendarClock className="size-4" />
                <span>Replies usually within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4" />
                <a
                  href="mailto:dragos.axinte.business@gmail.com"
                  className="underline underline-offset-4 hover:text-indigo-700 dark:hover:text-indigo-200 transition-colors"
                >
                  dragos.axinte.business@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 p-6 sm:p-8"
          >
            {/* ✅ FIXED: flex.items-center -> flex items-center */}
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">Quick project brief</h3>
                <p className="text-xs text-neutral-500">
                  No long form. Just enough to understand your business and what to automate.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end text-xs text-neutral-500">
                <span>Avg reply time</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  &lt; 24 hours
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
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
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  What does your business do & what do you want to automate?
                </label>
                <textarea
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 min-h-32 transition-shadow"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Example: I run a restaurant / gym / agency. I want to automate reservations, answering FAQs, and follow-up messages for people who don’t complete a booking."
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 font-medium shadow hover:shadow-xl transition duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Send My Project
                <ArrowRight className="size-4" />
              </button>

              <p className="text-[11px] text-neutral-500 mt-1">
                No newsletters, no spam. Just a direct reply with ideas tailored to your
                business.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-16 bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-32 md:w-40"
          >
            <Image
              alt="Logo"
              src={logo}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-left max-w-xs md:max-w-none">
            © {new Date().getFullYear()} ShiftSense Studio. AI-powered experiences, human-first
            results.
          </p>

          <div className="text-sm">
            <a
              href="#home"
              className="group hover:text-indigo-700 dark:hover:text-indigo-200 transition-colors inline-flex items-center gap-2"
            >
              <span className="hover:underline underline-offset-4">Back to top</span>
              <ArrowRight className="size-4 -rotate-90 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <AiIdeas />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
