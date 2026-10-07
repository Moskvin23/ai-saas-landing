'use client';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/content';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="logo"><i />Lumora</a>
        <nav className="nav-links">
          {navLinks.map((l) => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
        </nav>
        <div className="nav-actions">
          <a href="#">Sign in</a>
          <a href="#cta" className="btn btn-primary btn-sm">Book a demo</a>
        </div>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <div className="mobile-menu">
          {navLinks.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="#cta" className="btn btn-primary" onClick={() => setOpen(false)}>Book a demo</a>
        </div>
      )}
    </header>
  );
}
