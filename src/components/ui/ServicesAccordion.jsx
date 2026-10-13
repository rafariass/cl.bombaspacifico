import { SERVICES } from '../../constants/config'

const ServicesAccordion = () => {
  return (
    <section className='services-accordion-section' aria-label='Detalle de nuestros servicios'>
      <div className='services-accordion-container'>
        <div className='services-accordion'>
          {SERVICES.map((service) => (
            <details key={service.id} name='services-accordion' className='collapse collapse-arrow services-accordion-item'>
              <summary className='collapse-title services-accordion-title'>
                <span>{service.title}</span>
              </summary>
              <div className='collapse-content services-accordion-content'>
                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesAccordion
