import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/conocenos', label: 'Conócenos' }
]

const ref = 'https://wa.me/56961729686?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n.'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  const handleNavbarBlur = (event) => !event.currentTarget.contains(event.relatedTarget) && setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const handleClickOutside = (event) => !navbarRef.current?.contains(event.target) && setIsMenuOpen(false)
    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className='site-header'>
      <p className='site-header-banner'>
        Estamos disponibles para asesorarte y ayudarte a elegir los productos y servicios adecuados.
      </p>
      <div className='site-header-container'>
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
            <Link to='/' className='navbar-brand' aria-label='Ir al inicio' onClick={() => setIsMenuOpen(false)}>
              <img src='./logo.png' alt='Logotipo de Bombas Pacífico' />
            </Link>
          </div>
          <nav id='main-navigation' className='main-navigation' aria-label='Navegación principal' data-open={isMenuOpen}>
            <ul className='navbar-menu'>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end className='nav-link' onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='navbar-actions'>
            <a href={ref} className='navbar-quote' target='_blank' rel='noopener noreferrer' aria-label='Solicitar cotización por WhatsApp'>
              Cotizar
              <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M22 12H2m16 4l4-4-4-4' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
