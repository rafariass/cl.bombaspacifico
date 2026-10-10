const HREF = 'mailto:contacto@bombaspacifico.cl?subject=Solicitud%20de%20asesor%C3%ADa%20y%20cotizaci%C3%B3n'

const Footer = () => {
  return (
    <footer className='footer'>
      <svg aria-hidden='true' className='footer-cta-wave' viewBox='0 0 1440 120' preserveAspectRatio='none'>
        <path d='M0 0H1440V5C1320 72 1250 82 1100 82H240C120 82 50 75 0 65Z' />
      </svg>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-info'>
            <h2 className='footer-info-title'>
              ¿Necesitas una solución en sistemas de bombeo?
            </h2>
            <p className='footer-info-description'>
              Contáctanos y nuestro equipo te asesorará para encontrar la mejor alternativa para tu proyecto.
            </p>
          </div>
          <a href={HREF} rel='noopener noreferrer' className='btn-footer'>
            Contactar
            <svg className='' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M22 12H2m16 4l4-4l-4-4' />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
