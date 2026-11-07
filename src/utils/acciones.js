/**
 * Utilidades para las funcionalidades interactivas:
 *  - Compartir por WhatsApp
 *  - Copiar el enlace de la invitación
 *  - Abrir Google Maps
 */

/** Devuelve la URL actual de la invitación. */
export function obtenerEnlace() {
  return window.location.href
}

/** Abre WhatsApp con el mensaje + enlace de la invitación. */
export function compartirWhatsApp(mensaje) {
  const texto = `${mensaje}\n\n${obtenerEnlace()}`
  const url = `https://wa.me/?text=${encodeURIComponent(texto)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Copia el enlace al portapapeles.
 * Devuelve una promesa que resuelve en true/false según el resultado.
 */
export async function copiarEnlace() {
  const enlace = obtenerEnlace()
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(enlace)
      return true
    }
    // Fallback para navegadores antiguos o contextos no seguros.
    const textarea = document.createElement('textarea')
    textarea.value = enlace
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(textarea)
    return ok
  } catch {
    return false
  }
}

/**
 * Construye la URL de Google Maps.
 * Si existe un enlace directo configurado, lo usa;
 * de lo contrario, busca por la dirección.
 */
export function urlGoogleMaps({ mapaUrl, direccion, iglesia }) {
  if (mapaUrl && mapaUrl.trim()) return mapaUrl.trim()

  const consulta = [iglesia, direccion]
    .filter((v) => v && !/^\[.*\]$/.test(v.trim())) // ignora marcadores [ ... ]
    .join(', ')

  const q = consulta || 'iglesia'
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

/** Comprueba si un valor sigue siendo un marcador de posición [ ... ]. */
export function esMarcador(valor) {
  return !valor || /^\[.*\]$/.test(String(valor).trim())
}
