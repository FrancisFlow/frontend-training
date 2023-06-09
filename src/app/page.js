import About from '@/components/About/About'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import HeroSection from '@/components/herosection/Hero'
import Navbar from '@/components/navbar/Navbar'
import Pricing from '@/components/pricing/Pricing'
import Services from '@/components/services/Services'
import Team from '@/components/team/Team'

export default function Home() {
  return (
    <>
    <main className='page-wrapper' >
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Pricing />
      <Team />
      <Contact />
      < Footer />
    </main>
    </>
  )
}
