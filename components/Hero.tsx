'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tickets } from '@/lib/content';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// Chat plays step by step: question -> typing -> answer -> thanks -> resolved
function Chat() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const times = [600, 1500, 2900, 3900, 4500];
    const ids = times.map((t, i) => setTimeout(() => setStep(i + 1), t));
    return () => ids.forEach(clearTimeout);
  }, []);

  const pop = { initial: { opacity: 0, y: 10, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 } };

  return (
    <div className="chat">
      <AnimatePresence>
        {step >= 1 && <motion.div key="q" className="bubble me" {...pop}>Hi! Where is my order #48213? It was supposed to arrive yesterday.</motion.div>}
        {step === 2 && <motion.div key="t" className="typing" {...pop}><i /><i /><i /></motion.div>}
        {step >= 3 && (
          <motion.div key="a" className="bubble ai" {...pop}>
            Hi Emma! Your order shipped on Oct 3 with UPS and is out for delivery today before 6 PM. Here is your tracking link. I also added a $10 credit for the delay.
            <div className="chips"><span>↗ Orders API</span><span>↗ Shipping policy</span></div>
          </motion.div>
        )}
        {step >= 4 && <motion.div key="th" className="bubble me" {...pop}>Perfect, thank you!</motion.div>}
        {step >= 5 && <motion.div key="r" className="resolved" {...pop}>✓ Resolved automatically in 4 seconds · CSAT 5/5</motion.div>}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <motion.span className="badge" {...fade(0)}>✦ New: Voice support agent is live</motion.span>
        <motion.h1 {...fade(0.08)}>Resolve 70% of support tickets before a human ever sees them</motion.h1>
        <motion.p className="lead" {...fade(0.16)}>
          Lumora is an AI support agent that learns from your help center, docs and past tickets — and answers customers instantly in chat, email and WhatsApp.
        </motion.p>
        <motion.div className="ctas" {...fade(0.24)}>
          <a href="#cta" className="btn btn-primary">Book a demo</a>
          <a href="#pricing" className="btn btn-ghost">Start free — no card</a>
        </motion.div>
        <motion.p className="proof" {...fade(0.3)}>★★★★★ 4.9 on G2 · SOC 2 Type II · GDPR ready</motion.p>

        <motion.div className="mock" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mock-bar"><span style={{ background: '#ff5f57' }} /><span style={{ background: '#febc2e' }} /><span style={{ background: '#28c840' }} /></div>
          <div className="mock-body">
            <aside className="inbox">
              <div className="inbox-title">Inbox · 128 open</div>
              {tickets.map((t, i) => (
                <div key={t.name} className={`ticket${i === 0 ? ' active' : ''}`}>
                  <b>{t.name}</b>
                  <span>{t.q}</span>
                  <em style={{ color: t.ok ? 'var(--green)' : 'var(--amber)' }}>● {t.status}</em>
                </div>
              ))}
            </aside>
            <Chat />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
