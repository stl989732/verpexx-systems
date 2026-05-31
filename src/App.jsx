import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AutomationMotion from './components/AutomationMotion.jsx'
import Services from './components/Services.jsx'
import SystemVisual from './components/SystemVisual.jsx'
import Offer from './components/Offer.jsx'
import Process from './components/Process.jsx'
import Results from './components/Results.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import InquiryFormPopup from './components/InquiryFormPopup.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-900 text-white overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-grid-faint bg-[size:60px_60px] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[60vh] bg-radial-glow"
      />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <AutomationMotion />
          <Services />
          <SystemVisual />
          <Offer />
          <Process />
          <Results />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      <InquiryFormPopup />
    </div>
  )
}
