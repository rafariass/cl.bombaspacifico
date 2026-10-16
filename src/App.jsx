import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BrandsSection from './components/BrandsSection'
import ProductsSection from './components/ProductsSection'
import ServicesSection from './components/ServicesSection'
import AboutUsSection from './components/AboutUsSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandsSection />
        <ProductsSection />
        <ServicesSection />
        <AboutUsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
