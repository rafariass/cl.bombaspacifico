import { useEffect, useRef } from 'react'

const HREF = 'mailto:contacto@bombaspacifico.cl?subject=Solicitud%20de%20asesor%C3%ADa%20y%20cotizaci%C3%B3n'
const BRANDS = [
  { name: 'Marca 1', image: './assets/imgs/marcas/calpeda.png' },
  { name: 'Marca 2', image: './assets/imgs/marcas/dreno.png' },
  { name: 'Marca 3', image: './assets/imgs/marcas/franklin.png' },
  { name: 'Marca 4', image: './assets/imgs/marcas/ksb.png' },
  { name: 'Marca 5', image: './assets/imgs/marcas/leo.png' },
  { name: 'Marca 6', image: './assets/imgs/marcas/pedrollo.png' },
  { name: 'Marca 6', image: './assets/imgs/marcas/reggio.png' },
  { name: 'Marca 6', image: './assets/imgs/marcas/stairs.png' },
  { name: 'Marca 6', image: './assets/imgs/marcas/tecson.png' }
]

const AUTOPLAY_INTERVAL = 3000
const INTERACTION_DELAY = 5000

const BrandsCarousel = () => {
  const carouselRef = useRef(null)
  const hoveredRef = useRef(false)
  const focusedRef = useRef(false)
  const pausedUntilRef = useRef(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel || BRANDS.length < 2) return

    const total = BRANDS.length
    const items = Array.from(carousel.querySelectorAll('.brands-carousel-item'))

    let currentIndex = total

    const getPosition = (index) => (
      items[index].offsetLeft - items[0].offsetLeft
    )

    const getCurrentIndex = () => {
      let nearestIndex = 0
      let nearestDistance = Infinity

      items.forEach((_, index) => {
        const distance = Math.abs(carousel.scrollLeft - getPosition(index))

        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestIndex = index
        }
      })

      return nearestIndex
    }

    const scrollToIndex = (index, behavior = 'smooth') => {
      carousel.scrollTo({
        left: getPosition(index),
        behavior
      })
    }

    const handleScrollEnd = () => {
      const index = getCurrentIndex()

      if (index < total) {
        currentIndex = index + total
        scrollToIndex(currentIndex, 'instant')
      } else if (index >= total * 2) {
        currentIndex = index - total
        scrollToIndex(currentIndex, 'instant')
      } else {
        currentIndex = index
      }
    }

    const resizeObserver = new window.ResizeObserver(() => {
      scrollToIndex(currentIndex, 'instant')
    })

    scrollToIndex(total, 'instant')

    carousel.addEventListener('scrollend', handleScrollEnd)
    resizeObserver.observe(carousel)

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const intervalId = prefersReducedMotion
      ? null
      : window.setInterval(() => {
        if (
          hoveredRef.current ||
          focusedRef.current ||
          Date.now() < pausedUntilRef.current
        ) return

        const index = getCurrentIndex()
        scrollToIndex(index + 1)
      }, AUTOPLAY_INTERVAL)

    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId)
      }

      carousel.removeEventListener('scrollend', handleScrollEnd)
      resizeObserver.disconnect()
    }
  }, [])

  const pauseTemporarily = () => {
    pausedUntilRef.current = Date.now() + INTERACTION_DELAY
  }

  const handlePointerEnter = (event) => {
    if (event.pointerType === 'mouse') {
      hoveredRef.current = true
    }
  }

  const handlePointerLeave = (event) => {
    if (event.pointerType === 'mouse') {
      hoveredRef.current = false
    }
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      focusedRef.current = false
    }
  }

  return (
    <section className='brands-carousel' aria-labelledby='brands-title'>
      <div className='brands-carousel-container'>
        <div className='brands-carousel-header'>
          <p className='brands-carousel-label'>Nuestras marcas</p>
          <h2 id='brands-title' className='brands-carousel-title'>Marcas que impulsan tus proyectos</h2>
          <p className='brands-carousel-description'>
            Conoce las marcas de nuestro catálogo de bombas, motores
            sumergibles y equipos hidráulicos. Ofrecemos soluciones
            para diferentes necesidades de bombeo, acompañadas de
            asesoría especializada para ayudarte a seleccionar
            el equipamiento adecuado.
          </p>
        </div>
        <div
          ref={carouselRef}
          className='carousel brands-carousel-track'
          aria-label='Logotipos de nuestras marcas'
          aria-live='off'
          tabIndex={0}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerDown={pauseTemporarily}
          onPointerUp={pauseTemporarily}
          onFocus={() => { focusedRef.current = true }}
          onBlur={handleBlur}
        >
          {[0, 1, 2].map((copyIndex) => (
            BRANDS.map((brand) => (
              <div key={`${copyIndex}-${brand.name}`} className='carousel-item brands-carousel-item' aria-hidden={copyIndex !== 1}>
                <img src={brand.image} alt={brand.name} loading='lazy' draggable='false' />
              </div>
            ))
          ))}
        </div>
        <div className='brands-carousel-footer'>
          <p>¿Buscas una marca o un equipo específico? Nuestro equipo de ventas puede ayudarte.</p>
          <a href={HREF} rel='noopener noreferrer' className='brands-carousel-contact'>Consultar disponibilidad</a>
        </div>
      </div>
    </section>
  )
}

export default BrandsCarousel
