import { Separador, Flor } from './Decoracion.jsx'

/**
 * Sección final: agradecimiento, firma y frase de despedida.
 */
export default function Despedida({ config }) {
  return (
    <footer className="seccion despedida" id="final">
      <div className="contenedor texto-centrado reveal">
        <p className="despedida__mensaje">{config.mensajeFinal}</p>

        <Separador />

        <p className="despedida__firma">{config.firma}</p>

        <p className="despedida__frase">
          <Flor className="despedida__flor" />
          {config.despedida}
        </p>
      </div>
    </footer>
  )
}
