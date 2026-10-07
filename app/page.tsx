import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import { Logos, Features, HowItWorks, Metrics, Testimonials, Pricing, FAQ, CTA, Footer } from '@/components/Sections';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Metrics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
