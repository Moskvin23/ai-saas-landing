'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Reveal from './Reveal';
import { logos, features, steps, metrics, testimonials, plans, faq } from '@/lib/content';

function Head({ title, lead }: { title: string; lead?: string }) {
  return (
    <Reveal className="center">
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

export function Logos() {
  return (
    <section className="logos container">
      <small>TRUSTED BY 1,200+ SUPPORT TEAMS</small>
      <div className="logo-row">{logos.map((l) => <span key={l}>{l}</span>)}</div>
    </section>
  );
}

export function Features() {
  return (
    <section id="product" className="section container">
      <Head title="Everything your support team needs" lead="One AI agent across every channel, trained on your knowledge and connected to your tools." />
      <div className="grid3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.08} className="card">
            <span className="icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="solutions" className="section container">
      <Head title="Live in an afternoon" lead="No ML team, no months of setup." />
      <div className="grid3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1} className="card step">
            <div className="step-num">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref}>{n.toFixed(decimals)}</span>;
}

export function Metrics() {
  return (
    <section className="container" style={{ paddingTop: 90 }}>
      <Reveal className="metrics">
        {metrics.map((m) => (
          <div key={m.label} className="metric">
            <b>{m.prefix}<Counter value={m.value} decimals={m.decimals} />{m.suffix}</b>
            <span>{m.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="customers" className="section container">
      <Head title="Loved by support leaders" />
      <div className="grid3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08} className="card quote">
            <div className="stars">★★★★★</div>
            <p>“{t.quote}”</p>
            <div className="who">
              <i style={{ background: t.color }} />
              <div><b>{t.name}</b><span>{t.role}</span></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="pricing" className="section container center">
      <Head title="Simple, transparent pricing" lead="Start free. Upgrade when Lumora pays for itself." />
      <div className="toggle" role="tablist">
        <button className={!yearly ? 'on' : ''} onClick={() => setYearly(false)}>Monthly</button>
        <button className={yearly ? 'on' : ''} onClick={() => setYearly(true)}>Yearly −20%</button>
      </div>
      <div className="plans">
        {plans.map((p, i) => {
          const price = p.monthly === null ? null : Math.round(p.monthly * (yearly ? 0.8 : 1));
          return (
            <Reveal key={p.name} delay={i * 0.08} className={`plan${p.hot ? ' hot' : ''}`}>
              {p.hot && <span className="pill">Most popular</span>}
              <h3>{p.name}</h3>
              <div className="price">
                <AnimatePresence mode="wait">
                  <motion.b key={`${p.name}-${yearly}`} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}>
                    {price === null ? 'Custom' : `$${price}`}
                  </motion.b>
                </AnimatePresence>
                {price !== null && <span>/ month</span>}
              </div>
              <p>{p.desc}</p>
              <a href="#cta" className={`btn ${p.hot ? 'btn-primary' : 'btn-ghost'}`}>{p.cta}</a>
              <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="docs" className="section container">
      <Head title="Frequently asked questions" />
      <div className="faq">
        {faq.map((f, i) => (
          <div key={f.q} className="faq-item">
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}<span>{open === i ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="cta" className="section container">
      <Reveal className="cta">
        <h2>Give your customers answers in seconds</h2>
        <p>Join 1,200+ teams using Lumora. Free plan, no credit card required.</p>
        <a href="#" className="btn btn-white">Book a demo</a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© 2026 Lumora Inc. — demo project, fictional company</span>
        <nav>{['Privacy', 'Terms', 'Security', 'Status', 'Contact'].map((l) => <a key={l} href="#">{l}</a>)}</nav>
      </div>
    </footer>
  );
}
