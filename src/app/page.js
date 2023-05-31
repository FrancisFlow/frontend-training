import About from '@/components/About/About'
import HeroSection from '@/components/herosection/Hero'
import Navbar from '@/components/navbar/Navbar'
import Pricing from '@/components/pricing/Pricing'
import Services from '@/components/services/Services'

export default function Home() {
  return (
    <>
    <main className='page-wrapper' >
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Pricing />
    </main>
    </>
  )
}
