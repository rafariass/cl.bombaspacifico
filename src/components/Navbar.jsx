import { useEffect, useRef, useState } from 'react'
import { NAV_ITEMS, WHATSAPP_QUOTE_URL } from '../constants/config'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('/')
  const navbarRef = useRef(null)

  const handleNavbarBlur = (event) => !event.currentTarget.contains(event.relatedTarget) && setIsMenuOpen(false)

  const handleNavigation = (event, to) => {
    setIsMenuOpen(false)

    if (to !== '/') return

    event.preventDefault()
    window.history.replaceState(null, '', '/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event) => !navbarRef.current?.contains(event.target) && setIsMenuOpen(false)

    document.addEventListener('pointerdown', handleClickOutside)

    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    let frameId = null

    const updateActiveSection = () => {
      const headerHeight = navbarRef.current?.closest('header')?.offsetHeight ?? 0
      const offset = headerHeight + 16

      let currentSection = '/'

      NAV_ITEMS.forEach((item) => {
        if (item.to === '/') return

        const id = item.to.split('#')[1]
        const section = id && document.getElementById(id)

        if (section && section.getBoundingClientRect().top <= offset) {
          currentSection = item.to
        }
      })

      setActiveSection(currentSection)
    }

    const handleScroll = () => {
      if (frameId !== null) return

      frameId = window.requestAnimationFrame(() => {
        updateActiveSection()
        frameId = null
      })
    }

    updateActiveSection()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <header className='navbar-header'>
      <p className='navbar-banner'>
        Estamos disponibles para asesorarte y ayudarte a elegir los productos y servicios adecuados.
      </p>
      <div className='navbar-container'>
        <div ref={navbarRef} className='navbar' onBlur={handleNavbarBlur}>
          <div className='navbar-brand-group'>
            <button
              type='button'
              className='navbar-toggle'
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-controls='main-navigation'
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d={isMenuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
            <a href='/' className='navbar-brand' aria-label='Ir al inicio' onClick={(event) => handleNavigation(event, '/')}>
              <img src='./logo.png' alt='Logotipo de Bombas Pacífico' />
            </a>
          </div>
          <nav id='main-navigation' className='navbar-navigation' aria-label='Navegación principal' data-open={isMenuOpen}>
            <ul className='navbar-menu'>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className={`navbar-link ${activeSection === item.to ? 'active' : ''}`}
                    aria-current={activeSection === item.to ? 'page' : undefined}
                    onClick={(event) => handleNavigation(event, item.to)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='navbar-actions'>
            <a href={WHATSAPP_QUOTE_URL} className='navbar-quote' target='_blank' rel='noopener noreferrer' aria-label='Solicitar cotización por WhatsApp'>
              Cotizar
              <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M22 12H2m16 4l4-4l-4-4' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
