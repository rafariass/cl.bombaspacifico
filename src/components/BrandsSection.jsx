import { useEffect, useRef } from 'react'
import { MAILTO_QUOTE_URL, BRANDS } from '../constants/config'

const BrandsSection = () => {
  const carouselRef = useRef(null)
  const hoveredRef = useRef(false)
  const focusedRef = useRef(false)
  const pausedUntilRef = useRef(0)

  const AUTOPLAY_INTERVAL = 3000
  const INTERACTION_DELAY = 5000

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel || BRANDS.length < 2) return

    const total = BRANDS.length
    const items = Array.from(carousel.querySelectorAll('.brands-section-item'))

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
    <section id='brands' className='brands-section' aria-labelledby='brands-title'>
      <div className='brands-section-container'>
        <div className='brands-section-header'>
          <p className='brands-section-label'>Nuestras marcas</p>
          <h2 id='brands-title' className='brands-section-title'>Marcas que impulsan tus proyectos</h2>
          <p className='brands-section-description'>
            Conoce las marcas de nuestro catálogo de bombas, motores
            sumergibles y equipos hidráulicos. Ofrecemos soluciones
            para diferentes necesidades de bombeo, acompañadas de
            asesoría especializada para ayudarte a seleccionar
            el equipamiento adecuado.
          </p>
        </div>
        <div
          ref={carouselRef}
          className='carousel brands-section-track'
          aria-label='Logotipos de nuestras marcas'
          aria-live='off'
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerDown={pauseTemporarily}
          onPointerUp={pauseTemporarily}
          onFocus={() => { focusedRef.current = true }}
          onBlur={handleBlur}
        >
          {[0, 1, 2].map((copyIndex) => (
            BRANDS.map((brand) => (
              <div key={`${copyIndex}-${brand.name}`} className='carousel-item brands-section-item' aria-hidden={copyIndex !== 1}>
                <img src={brand.image} alt={brand.name} loading='lazy' draggable='false' />
              </div>
            ))
          ))}
        </div>
        <div className='brands-section-footer'>
          <p>¿Buscas una marca o un equipo específico? Nuestro equipo de ventas puede ayudarte.</p>
          <a href={MAILTO_QUOTE_URL} rel='noopener noreferrer' className='brands-section-contact'>Consultar disponibilidad</a>
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
