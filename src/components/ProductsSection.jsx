import { PRODUCTS } from '../constants/config'

const ProductsSection = () => {
  return (
    <section id='products' className='products-section' aria-labelledby='featured-products-title'>
      <div className='products-section-container'>
        <div className='products-section-header'>
          <p className='products-section-label'>Nuestros productos</p>
          <h2 id='featured-products-title' className='products-section-title'>Soluciones para cada necesidad de bombeo</h2>
          <p className='products-section-description'>Conoce nuestras principales categorías de productos, diseñadas para responder a diferentes necesidades de bombeo y aplicaciones hidráulicas.</p>
        </div>
        <div className='products-section-grid'>
          {PRODUCTS.map((product) => (
            <article key={product.id} className='products-section-card'>
              <div className='products-section-image'>
                <img src={product.image} alt={product.title} loading='lazy' />
              </div>
              <div className='products-section-card-body'>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href={product.url} className='products-section-link'>
                  Ver más
                  <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M22 12H2m16 4l4-4l-4-4' />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
