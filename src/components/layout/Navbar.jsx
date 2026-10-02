import { NavLink } from 'react-router'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/energia-solar', label: 'Energía Solar' },
  { to: '/conocenos', label: 'Conócenos' }
]

const getMobileLinkClasses = ({ isActive }) => `nav-link-mobile ${isActive ? 'bg-blue-900! text-white!' : ''}`
const getDesktopLinkClasses = ({ isActive }) => `nav-link-desktop ${isActive ? 'border-b-blue-900!' : ''}`

const Navbar = () => {
  return (
    <div className='w-full shadow-sm'>
      <p className='p-1 text-center text-white bg-blue-900 text-xs lg:text-base'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, labore!
      </p>
      <div className='container mx-auto'>
        <div className='navbar bg-base-100 py-0'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div tabIndex={0} role='button' className=' px-1 btn btn-ghost lg:hidden'>
                <svg aria-label='Menu' xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                </svg>
              </div>
              <ul tabIndex={-1} className='menu dropdown-content bg-white! rounded-box z-1 mt-3 w-52 p-2 shadow'>
                {navItems.map((item) => (
                  <li key={`Mobile-${item.to}`} className=''>
                    <NavLink to={item.to} className={getMobileLinkClasses} onClick={() => document.activeElement?.blur()}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <img src='/logo.jpg' className='w-48 object-contain' alt='Logotipo de la empresa' />
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal p-0'>
              {navItems.map((item) => (
                <li key={`Mobile-${item.to}`} className=''>
                  <NavLink to={item.to} className={getDesktopLinkClasses}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='navbar-end'>
            <button className='btn bg-blue-900 text-white px-8 py-6'>
              Cotizar
              <svg className='hidden lg:flex' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M22 12H2m16 4l4-4l-4-4' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
