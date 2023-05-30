import About from '@/components/About/About'
import HeroSection from '@/components/herosection/Hero'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
  return (
    <>
    <main className='page-wrapper' >
      <Navbar />
      <HeroSection />
      <About />
    </main>
    </>
  )
}
