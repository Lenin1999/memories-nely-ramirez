import { urlGoogleMaps, esMarcador } from '../utils/acciones.js'

/** Íconos para las tarjetas de información. */
const Iconos = {
  fecha: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  hora: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  iglesia: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v5M9.5 4.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 7 5 11v10h14V11l-7-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M10 21v-4a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  direccion: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
}

function Tarjeta({ icono, etiqueta, valor }) {
  const pendiente = esMarcador(valor)
  return (
    <div className="tarjeta reveal">
      <div className="tarjeta__icono">{icono}</div>
      <span className="tarjeta__etiqueta">{etiqueta}</span>
      <p className={`tarjeta__valor${pendiente ? ' tarjeta__valor--pendiente' : ''}`}>
        {valor}
      </p>
    </div>
  )
}

/**
 * Sección de información de la misa.
 * Datos en tarjetas visuales + botón "Cómo llegar".
 */
export default function Informacion({ config }) {
  const { misa } = config
  const maps = urlGoogleMaps(misa)

  return (
    <section className="seccion informacion" id="informacion">
      <div className="contenedor">
        <h2 className="informacion__titulo texto-centrado reveal">
          Detalles de la Santa Misa
        </h2>

        <div className="tarjetas">
          <Tarjeta icono={Iconos.fecha} etiqueta="Fecha" valor={misa.fecha} />
          <Tarjeta icono={Iconos.hora} etiqueta="Hora" valor={misa.hora} />
          <Tarjeta icono={Iconos.iglesia} etiqueta="Iglesia" valor={misa.iglesia} />
          <Tarjeta icono={Iconos.direccion} etiqueta="Dirección" valor={misa.direccion} />
        </div>

        <div className="informacion__accion reveal texto-centrado">
          <a
            className="boton"
            href={maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}
