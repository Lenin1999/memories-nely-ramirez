import { Flor } from './Decoracion.jsx'

/**
 * Sección principal (Hero).
 * Muestra el título, subtítulo, fotografía central, frase emotiva
 * y un botón para desplazarse hacia los detalles.
 */
export default function Hero({ config }) {
  const { nombre, subtitulo, fraseHero, foto } = config

  return (
    <header className="hero" id="inicio">
      <div className="hero__velo" aria-hidden="true" />

      <div className="hero__contenido reveal visible">
        <p className="hero__memoria">En memoria de</p>
        <h1 className="hero__nombre">{nombre}</h1>

        <div className="hero__adorno" aria-hidden="true">
          <span className="linea" />
          <Flor />
          <span className="linea derecha" />
        </div>

        <p className="hero__subtitulo">{subtitulo}</p>

        <div className="hero__foto-marco">
          {foto ? (
            <img
              className="hero__foto"
              src={foto}
              alt={`Fotografía de ${nombre}`}
              loading="eager"
            />
          ) : (
            <div className="hero__foto hero__foto--placeholder">
              <Flor className="hero__foto-icono" />
              <span>Fotografía de {nombre}</span>
              <small>Reemplaza en src/config.js</small>
            </div>
          )}
          <span className="hero__foto-halo" aria-hidden="true" />
        </div>

        <p className="hero__frase">“{fraseHero}”</p>

        <a href="#recuerdo" className="boton hero__boton">
          Ver la invitación
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 5v14M6 13l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  )
}
