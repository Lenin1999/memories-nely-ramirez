import { useState } from 'react'
import { compartirWhatsApp, copiarEnlace } from '../utils/acciones.js'

/**
 * Sección para compartir la invitación:
 *  - Botón de WhatsApp
 *  - Botón para copiar el enlace
 */
export default function Compartir({ config }) {
  const [copiado, setCopiado] = useState(false)

  const manejarCopiar = async () => {
    const ok = await copiarEnlace()
    setCopiado(ok)
    setTimeout(() => setCopiado(false), 2500)
  }

  return (
    <section className="seccion compartir" id="compartir">
      <div className="contenedor texto-centrado reveal">
        <p className="compartir__texto">
          Comparte esta invitación con familiares y amigos
        </p>

        <div className="compartir__botones">
          <button
            className="boton compartir__wa"
            onClick={() => compartirWhatsApp(config.mensajeWhatsApp)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.65c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.55-3.7 8.25-8.26 8.25-1.5 0-2.97-.4-4.25-1.17l-.3-.18-3.15.82.84-3.07-.2-.32a8.17 8.17 0 0 1-1.26-4.35c0-4.55 3.7-8.25 8.26-8.25Zm-4.6 4.44c-.22 0-.57.08-.87.4-.3.33-1.14 1.12-1.14 2.72s1.17 3.16 1.33 3.38c.16.22 2.3 3.5 5.56 4.9.78.34 1.38.54 1.85.69.78.25 1.49.21 2.05.13.63-.1 1.92-.79 2.2-1.55.27-.76.27-1.4.19-1.54-.08-.13-.3-.21-.63-.37-.33-.17-1.92-.95-2.22-1.05-.3-.11-.52-.17-.73.16-.22.33-.84 1.05-1.03 1.27-.19.22-.38.25-.7.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.15-.67.15-.15.33-.38.49-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.73-1.77-1.01-2.42-.26-.63-.53-.55-.73-.56l-.62-.01Z" />
            </svg>
            Compartir por WhatsApp
          </button>

          <button className="boton boton--contorno" onClick={manejarCopiar}>
            {copiado ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                ¡Enlace copiado!
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Copiar enlace
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
