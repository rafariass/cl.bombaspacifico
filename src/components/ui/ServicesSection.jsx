const ServicesSection = () => {
  return (
    <section className='services-section' aria-labelledby='services-title'>
      <div className='services-showcase'>
        <div className='services-container'>
          <div className='services-layout'>
            <div className='services-info'>
              <p className='services-label'>Nuestros servicios</p>
              <h2 id='services-title' className='services-title'>Te acompañamos en cada etapa de <span>tu proyecto.</span></h2>
              <p className='services-description'>
                Ofrecemos un servicio técnico especializado y soluciones
                a medida durante todo el ciclo de vida de tus equipos,
                para garantizar su máximo rendimiento y confiabilidad.
              </p>
            </div>
          </div>
        </div>
        <svg aria-hidden='true' className='services-wave' viewBox='0 0 1440 100' preserveAspectRatio='none'>
          <path d='M0 65C260 130 430 20 720 55S1170 100 1440 35V100H0Z' fill='#1C398E' opacity='0.55' />
          <path d='M0 85C280 45 480 110 740 70S1170 30 1440 80V100H0Z' fill='#00B8DB' opacity='0.35' />
        </svg>
      </div>
    </section>
  )
}

export default ServicesSection
