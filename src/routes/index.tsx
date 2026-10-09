import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Wrench,
  Globe,
  Rocket,
  ServerCog,
  MessageSquare,
  Code2,
  Smartphone,
  PhoneCall,
  Timer,
  ShieldCheck,
  User,
} from "lucide-react";

const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.replace(/[^\d]/g, "") ||
  "254717950959";

const WHATSAPP_MESSAGE =
  "Hi, I found your website and I'd like help with a website/project. Here's what I need:";

const waLink = (extra?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    extra ? `${WHATSAPP_MESSAGE} ${extra}` : WHATSAPP_MESSAGE,
  )}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Business Websites & Web Development — Fixed or Live This Week" },
      {
        name: "description",
        content:
          "Fast business websites, website repairs, landing pages and technical fixes. Get your website live or fixed within days. Fixed pricing from KES 17,500.",
      },
      { property: "og:title", content: "Need your business website fixed or live this week?" },
      {
        property: "og:description",
        content:
          "Mobile-first business websites, repairs, landing pages, deployment and technical fixes. Fixed pricing. Direct developer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Need your business website fixed or live this week?" },
      {
        name: "twitter:description",
        content:
          "Mobile-first business websites, repairs and technical fixes. Fixed pricing. Direct developer.",
      },
    ],
  }),
  component: OfferPage,
});

function OfferPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-neutral-900 antialiased">
      <Nav />
      <Hero />
      <TrustStrip />
      <Problem />
      <Services />
      <Pricing />
      <Process />
      <Why />
      <Urgency />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="border-b border-neutral-200/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#top" className="flex items-baseline gap-2 tracking-tight">
          <span className="text-base font-semibold text-neutral-900">Software Engineer</span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-neutral-400 sm:inline">
            · Nairobi
          </span>
        </a>
        <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
          <a href="#services" className="hover:text-neutral-900">Services</a>
          <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
          <a href="#process" className="hover:text-neutral-900">Process</a>
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 md:inline-block"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available this week — booking urgent jobs
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl">
            Need your business website{" "}
            <span className="underline decoration-emerald-500 decoration-[3px] underline-offset-[6px]">
              fixed or live
            </span>{" "}
            this week?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            I build and repair fast, mobile-first business websites — including landing pages,
            WhatsApp, contact forms, deployment, and annoying technical problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Get a Quote on WhatsApp
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium text-neutral-900 hover:border-neutral-900"
            >
              See What I Fix
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-1.5"><Timer className="h-4 w-4" /> Fast turnaround</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Fixed pricing</span>
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> Direct developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Construction",
    "Real estate",
    "Consultants",
    "Tours & travel",
    "Training centres",
    "Clinics",
    "Salons",
    "Photographers",
  ];
  return (
    <div className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-5">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest text-neutral-500">
          <span className="text-neutral-400">Built for</span>
          {items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Problem() {
  const problems = [
    "Your website looks terrible on phones",
    "Customers can't figure out how to contact you",
    "Your contact form doesn't work",
    "Your business has no proper website",
    "Your site broke after hosting or deployment changes",
    "Your website is slow, outdated, or incomplete",
    "You need something online before an upcoming deadline",
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            The problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Your website shouldn't be the thing losing you customers.
          </h2>
        </div>
        <ul className="md:col-span-7">
          {problems.map((p, i) => (
            <li
              key={p}
              className="flex items-start gap-4 border-b border-neutral-200 py-4 last:border-b-0"
            >
              <span className="mt-1 shrink-0 text-sm font-mono text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg text-neutral-800">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Globe,
      title: "Brand-Forward Web Presence",
      desc: "A strategically designed website that positions your business as the credible, premium option in your market — built to convert visitors into paying clients.",
    },
    {
      icon: Rocket,
      title: "High-Converting Landing Pages",
      desc: "Precision-built pages engineered around a single offer or campaign goal. Every element — copy, layout, CTA — is structured to drive measurable action.",
    },
    {
      icon: Wrench,
      title: "Performance & Reliability Fixes",
      desc: "Systematic diagnosis and resolution of broken functionality, slow load times, mobile failures, and anything else costing you credibility or clients.",
    },
    {
      icon: ServerCog,
      title: "Infrastructure & Deployment",
      desc: "Professional deployment, domain configuration, SSL, CDN, and hosting setup. Your site goes live correctly — secure, fast, and stable from day one.",
    },
    {
      icon: MessageSquare,
      title: "Lead Generation & CRM Integration",
      desc: "Multi-channel lead capture — enquiry forms, WhatsApp flows, booking links — wired directly into your sales process so no prospect slips through.",
    },
    {
      icon: Code2,
      title: "Custom Development & Integrations",
      desc: "Backend logic, API integrations, authentication, payment gateways, and bespoke features built on production-grade React and Django architectures.",
    },
  ];
  return (
    <section id="services" className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            What we deliver
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Engineered for businesses that take their digital presence seriously.
          </h2>
          <div className="mt-4 h-1 w-12 bg-emerald-500" />
        </div>

        <div className="mt-14 grid grid-cols-1 border-t border-l border-neutral-200 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative border-r border-b border-neutral-200 p-8 transition-colors duration-300 hover:bg-[#fbfaf7]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon
                  className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-neutral-900"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
              <span className="mt-6 block h-px w-0 bg-emerald-500 transition-all duration-500 group-hover:w-12" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-grow bg-neutral-200" />
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Expertise across the stack
          </p>
          <div className="h-px flex-grow bg-neutral-200" />
        </div>
      </div>
    </section>
  );
}


function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Transparent investment. Defined scope. Delivered.
          </h2>
        </div>
        <p className="text-sm text-neutral-600">
          All prices in Kenyan Shillings (KES). Scope confirmed before work begins.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <PriceCard
          tag="Priority Fix"
          price="KES 17,500"
          desc="Rapid resolution of a specific technical problem on your existing site — diagnosed, fixed, and verified."
          features={[
            "Root-cause diagnosis",
            "Broken pages & layout failures",
            "Mobile & responsive issues",
            "Form & contact failures",
            "Deployment & DNS resolution",
            "Post-fix functionality check",
          ]}
          cta="Fix My Site Now"
          waExtra="I need a priority fix on my existing site. (KES 17,500)"
        />
        <PriceCard
          tag="Starter Site"
          price="KES 25,000"
          desc="A polished, conversion-focused web presence that positions your brand and captures leads from day one."
          features={[
            "Strategic single-page design",
            "Mobile-first, performance-optimised",
            "WhatsApp & enquiry lead capture",
            "Google Maps & contact integration",
            "On-page SEO foundation",
            "Custom domain & SSL deployment",
            "48-hour delivery",
          ]}
          cta="Build My Presence"
          waExtra="I want the KES 25,000 Starter Site."
          featured
          delivery="48-hour target delivery"
        />
        <PriceCard
          tag="Business Suite"
          price="KES 55,000"
          desc="A comprehensive digital platform built to reflect your brand authority, drive qualified leads, and scale with your business."
          features={[
            "4–6 page custom architecture",
            "Brand-aligned UI & copywriting guidance",
            "Multi-channel lead generation system",
            "WhatsApp, booking & CRM integration",
            "Technical SEO & performance tuning",
            "Secure infrastructure & CDN deployment",
            "Analytics & conversion tracking setup",
            "30-day post-launch support",
          ]}
          cta="Start My Project"
          waExtra="I want the KES 55,000 Business Suite."
          delivery="3–5 day target delivery"
        />
      </div>
    </section>
  );
}

function PriceCard({
  tag,
  price,
  desc,
  features,
  cta,
  waExtra,
  featured,
  delivery,
}: {
  tag: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  waExtra: string;
  featured?: boolean;
  delivery?: string;
}) {
  return (
    <div
      className={
        "relative flex flex-col rounded-2xl border p-7 " +
        (featured
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-neutral-200 bg-white text-neutral-900")
      }
    >
      {featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-900">
          Most popular
        </span>
      )}
      <p
        className={
          "text-xs font-semibold uppercase tracking-widest " +
          (featured ? "text-neutral-400" : "text-neutral-500")
        }
      >
        {tag}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{price}</p>
      <p className={"mt-2 text-sm " + (featured ? "text-neutral-300" : "text-neutral-600")}>
        {desc}
      </p>
      {delivery && (
        <p
          className={
            "mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium " +
            (featured ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-700")
          }
        >
          <Timer className="h-3.5 w-3.5" /> {delivery}
        </p>
      )}
      <ul className="mt-6 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check
              className={"mt-0.5 h-4 w-4 shrink-0 " + (featured ? "text-emerald-400" : "text-emerald-600")}
            />
            <span className={featured ? "text-neutral-200" : "text-neutral-700"}>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={waLink(waExtra)}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition " +
          (featured
            ? "bg-white text-neutral-900 hover:bg-neutral-100"
            : "bg-neutral-900 text-white hover:bg-neutral-800")
        }
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Tell me what's wrong", body: "Send the problem through WhatsApp." },
    { n: "02", title: "Get a fixed quote", body: "I'll confirm the scope, price, and delivery time." },
    { n: "03", title: "Get it live", body: "Work starts after the agreed payment or deposit." },
  ];
  return (
    <section id="process" className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Three steps. No back-and-forth.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-neutral-900 pt-5">
              <p className="font-mono text-sm text-neutral-500">{s.n}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      icon: User,
      title: "Direct developer",
      body: "No account managers. You talk directly to the person doing the work.",
    },
    {
      icon: Timer,
      title: "Fast turnaround",
      body: "Small fixes often handled within 24 hours. Websites target 48 hours to 5 days depending on scope.",
    },
    {
      icon: ShieldCheck,
      title: "Fixed scope & pricing",
      body: "You know what you're getting — and what it costs — before work begins.",
    },
    {
      icon: Smartphone,
      title: "Practical solutions",
      body: "No bloated software or unnecessary features. Just what your business actually needs.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Why work with me</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Serious work, without the agency overhead.
          </h2>
        </div>
        <div className="grid gap-8 md:col-span-7 md:grid-cols-2">
          {items.map((i) => (
            <div key={i.title}>
              <i.icon className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold tracking-tight">{i.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Urgency() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Have something broken or unfinished?
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Don't spend another week trying to figure it out yourself.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Tell me what you're trying to get online, what isn't working, or what needs fixing.
            You'll get a straight answer with a price and a delivery date.
          </p>
          <div className="mt-8">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-medium text-neutral-900 transition hover:bg-emerald-400"
            >
              <PhoneCall className="h-4 w-4" />
              Talk to Me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Let's get it live.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          Tell me what you need fixed or built. I'll tell you what it will take, what it will cost,
          and when it can be ready.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Get a Quote on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3.5 text-sm font-medium text-neutral-900 hover:border-neutral-900"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-neutral-500 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} — Independent software engineer, Nairobi.</p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-neutral-900 hover:underline"
        >
          WhatsApp →
        </a>
      </div>
    </footer>
  );
}
