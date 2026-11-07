import { Separador } from './Decoracion.jsx'

/**
 * Sección de recuerdo.
 * Mensaje emotivo de invitación a la misa.
 */
export default function Recuerdo({ config }) {
  return (
    <section className="seccion recuerdo" id="recuerdo">
      <div className="contenedor texto-centrado">
        <div className="reveal">
          <Separador />
          <p className="recuerdo__mensaje">{config.mensajeRecuerdo}</p>
          <Separador />
        </div>
      </div>
    </section>
  )
}
