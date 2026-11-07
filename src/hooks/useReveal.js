import { useEffect } from 'react'

/**
 * Hook que activa las animaciones suaves al desplazarse.
 * Observa todos los elementos con la clase ".reveal" y les
 * añade ".visible" cuando entran en pantalla.
 */
export function useReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal')

    // Fallback: si no hay soporte de IntersectionObserver, mostrar todo.
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elementos.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
