import { WHATSAPP_QUOTE_URL } from '../../constants/config'

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-section-container'>
        <div className='hero-section-content'>
          <h1 className='hero-section-title'>
            Experiencia y soluciones para tus proyectos <span>hidráulicos</span>
          </h1>
          <p className='hero-section-description'>
            Somos una empresa con trayectoria en motores eléctricos sumergibles,
            bombas de pozo profundo e insumos para aplicaciones hidráulicas,
            entregando productos de calidad y asesoría especializada.
          </p>
          <a href={WHATSAPP_QUOTE_URL} className='hero-section-button' target='_blank' rel='noopener noreferrer' aria-label='Solicitar cotización por WhatsApp'>
            Cotiza con nosotros
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M22 12H2m16 4l4-4l-4-4' />
            </svg>
          </a>
        </div>
      </div>
      <svg aria-hidden='true' className='hero-section-wave' viewBox='0 0 1440 160' preserveAspectRatio='none'>
        <path d='M0 30C220 180 430 150 650 105S1080 15 1440 100V160H0Z' fill='#0074D9' opacity='0.55' />
        <path d='M0 80C250 140 420 170 710 115S1160 85 1440 125V160H0Z' fill='#1C398E' opacity='0.65' />
      </svg>
    </section>
  )
}

export default HeroSection
