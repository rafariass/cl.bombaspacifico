import { Link } from 'react-router'
import { PRODUCTS } from '../../constants/config'

const FeaturedProducts = () => {
  return (
    <section className='featured-products' aria-labelledby='featured-products-title'>
      <div className='featured-products-container'>
        <div className='featured-products-header'>
          <p className='featured-products-label'>Nuestros productos</p>
          <h2 id='featured-products-title' className='featured-products-title'>Soluciones para cada necesidad de bombeo</h2>
          <p className='featured-products-description'>Conoce nuestras principales categorías de productos, diseñadas para responder a diferentes necesidades de bombeo y aplicaciones hidráulicas.</p>
        </div>
        <div className='featured-products-grid'>
          {PRODUCTS.map((product) => (
            <article key={product.id} className='featured-products-card'>
              <div className='featured-products-image'>
                <img src={product.image} alt={product.title} loading='lazy' />
              </div>
              <div className='featured-products-card-body'>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <Link to={product.url} className='featured-products-link'>
                  Ver más
                  <svg className='' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M22 12H2m16 4l4-4l-4-4' />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
