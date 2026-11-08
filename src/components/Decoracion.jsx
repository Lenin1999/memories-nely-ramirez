/**
 * Elementos decorativos sutiles reutilizables:
 *  - Flor  : ícono SVG de flor/loto para separadores.
 *  - Separador : línea dorada con flor al centro.
 *  - Particulas : pequeñas luces cálidas flotantes de fondo.
 */

export function Flor({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2c1.3 1.6 1.3 3.9 0 5.5C10.7 5.9 10.7 3.6 12 2Z"
        fill="currentColor"
      />
      <path
        d="M22 12c-1.6 1.3-3.9 1.3-5.5 0C18.1 10.7 20.4 10.7 22 12Z"
        fill="currentColor"
      />
      <path
        d="M12 22c-1.3-1.6-1.3-3.9 0-5.5 1.3 1.6 1.3 3.9 0 5.5Z"
        fill="currentColor"
      />
      <path
        d="M2 12c1.6-1.3 3.9-1.3 5.5 0C5.9 13.3 3.6 13.3 2 12Z"
        fill="currentColor"
      />
      <path
        d="M19.1 4.9c-.3 2-1.9 3.6-3.9 3.9.3-2 1.9-3.6 3.9-3.9ZM19.1 19.1c-2-.3-3.6-1.9-3.9-3.9 2 .3 3.6 1.9 3.9 3.9ZM4.9 19.1c.3-2 1.9-3.6 3.9-3.9-.3 2-1.9 3.6-3.9 3.9ZM4.9 4.9c2 .3 3.6 1.9 3.9 3.9-2-.3-3.6-1.9-3.9-3.9Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function Separador() {
  return (
    <div className="separador" aria-hidden="true">
      <span className="linea" />
      <Flor />
      <span className="linea derecha" />
    </div>
  )
}

export function Particulas() {
  // Pequeñas luces cálidas flotando de fondo (decorativas).
  const puntos = Array.from({ length: 14 })
  return (
    <div className="particulas" aria-hidden="true">
      {puntos.map((_, i) => (
        <span
          key={i}
          className="particula"
          style={{
            left: `${(i * 7.3) % 100}%`,
            animationDelay: `${(i % 7) * 1.8}s`,
            animationDuration: `${14 + (i % 5) * 4}s`,
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
          }}
        />
      ))}
    </div>
  )
}

/**
 * Pétalos que caen suavemente meciéndose.
 * Fondo decorativo sereno, acorde al tono conmemorativo.
 */
export function Petalos() {
  const petalos = Array.from({ length: 16 })
  return (
    <div className="petalos" aria-hidden="true">
      {petalos.map((_, i) => (
        <span
          key={i}
          className="petalo"
          style={{
            left: `${(i * 6.4 + (i % 3) * 4) % 100}%`,
            animationDelay: `${(i % 8) * 2.1}s`,
            animationDuration: `${12 + (i % 6) * 3}s`,
            // tamaños y giros variados para un movimiento más orgánico
            '--tam': `${10 + (i % 4) * 4}px`,
            '--giro': `${(i % 2 === 0 ? 1 : -1) * (180 + (i % 5) * 60)}deg`,
            '--deriva': `${(i % 2 === 0 ? 1 : -1) * (30 + (i % 4) * 20)}px`,
          }}
        >
          <PetaloSVG />
        </span>
      ))}
    </div>
  )
}

function PetaloSVG() {
  // Pétalo simple en tonos cálidos, semitransparente.
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2c5 3.5 7 8 5.5 12.5C16 19 13.5 21.5 12 22c-1.5-.5-4-3-5.5-7.5C5 10 7 5.5 12 2Z"
        fill="currentColor"
      />
      <path
        d="M12 4c0 6 0 12 0 17"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
