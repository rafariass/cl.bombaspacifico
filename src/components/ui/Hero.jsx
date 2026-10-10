const WHATSAPP_URL = 'https://wa.me/56961729686?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n.'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className='hero-container-content'>
          <h1 className='hero-title'>
            Experiencia y soluciones para tus proyectos <span>hidráulicos</span>
          </h1>
          <p className='hero-description'>
            Somos una empresa con trayectoria en motores eléctricos sumergibles,
            bombas de pozo profundo e insumos para aplicaciones hidráulicas,
            entregando productos de calidad y asesoría especializada.
          </p>
          <a href={WHATSAPP_URL} className='hero-button' target='_blank' rel='noopener noreferrer' aria-label='Solicitar cotización por WhatsApp'>
            Cotizar
            <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M22 12H2m16 4l4-4-4-4' />
            </svg>
          </a>
        </div>
      </div>
      <svg aria-hidden='true' className='hero-wave' viewBox='0 0 1440 160' preserveAspectRatio='none'>
        <path d='M0 30C220 180 430 150 650 105S1080 15 1440 100V160H0Z' fill='#0074D9' opacity='0.55' />
        <path d='M0 80C250 140 420 170 710 115S1160 85 1440 125V160H0Z' fill='#1C398E' opacity='0.65' />
      </svg>
    </section>
  )
}

export default Hero
