import { ABOUT_US_ITEMS } from '../constants/config'

const AboutUsSection = () => {
  return (
    <section id='about-us' className='about-us-section' aria-label='Conócenos'>
      <div className='about-us-section-intro'>
        <div className='about-us-section-intro-container'>
          <div className='about-us-section-intro-content'>
            <p className='about-us-section-intro-label'>
              El respaldo de Bombas Pacífico
            </p>
            <h2 id='about-us-transition-title' className='about-us-section-intro-title'>
              Conoce lo que <span>nos mueve</span>
            </h2>
            <div className='about-us-section-intro-divider' aria-hidden='true' />
            <p className='about-us-section-intro-description'>
              Cada proyecto representa una oportunidad para poner nuestros
              conocimientos y experiencia al servicio de nuestros clientes.
              La ingeniería, la asesoría, el servicio y la calidad son los
              pilares que orientan nuestro trabajo y definen la manera
              en que enfrentamos cada desafío.
            </p>
          </div>
        </div>
      </div>
      <div className='about-us-section-details'>
        <div className='about-us-section-container'>
          {ABOUT_US_ITEMS.map((item) => (
            <article key={item.id} className='about-us-section-row' data-reverse={item.reverse}>
              <div className='about-us-section-content'>
                <p className='about-us-section-label'>
                  {item.label}
                </p>
                <h2 className='about-us-section-title'>
                  {item.title} <span>{item.highlight}</span>
                </h2>
                <div className='about-us-section-divider' aria-hidden='true' />
                <p className='about-us-section-description'>
                  {item.description}
                </p>
              </div>
              <div className='about-us-section-media'>
                <img src={item.image} alt={item.alt} loading='lazy' />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
