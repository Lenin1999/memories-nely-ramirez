/**
 * ============================================================
 *  ARCHIVO DE CONFIGURACIÓN
 *  Edita aquí todos los datos de la invitación.
 *  No necesitas tocar ningún otro archivo para personalizar.
 * ============================================================
 *
 *  Los campos entre corchetes [ ... ] son marcadores de
 *  posición. Reemplázalos con la información real cuando la
 *  tengas disponible.
 */

// Importamos la imagen como módulo para que Vite la incluya en el build.
// Así funciona tanto en local como en producción (Vercel, etc.).
import fotoNely from './images/nelly.jpeg'

export const config = {
  // --- Persona a quien se recuerda ---
  nombre: 'Nely Graciela Ramírez Mejia',

  // --- Textos principales ---
  subtitulo: 'Misa conmemorativa del primer mes',
  fraseHero:
    'Aunque ya no estés físicamente con nosotros, tu recuerdo y amor vivirán eternamente en nuestros corazones.',

  // --- Fotografía central ---
  // La imagen se importa arriba (import fotoNely from './images/nelly.jpeg').
  // Para cambiarla: reemplaza el archivo en src/images/ o ajusta el import.
  // Si se deja vacío (foto: ''), se mostrará un marco decorativo de reemplazo.
  foto: fotoNely,

  // --- Sección de recuerdo ---
  mensajeRecuerdo:
    'Con profundo amor y nostalgia, invitamos a familiares y amigos a acompañarnos en la Santa Misa al cumplirse un mes de su sensible fallecimiento. Será un momento para elevar nuestras oraciones, recordar su vida y agradecer por todos los momentos compartidos.',

  // --- Información de la misa ---
  // IMPORTANTE: mantén los marcadores [ ... ] mientras no tengas el dato real.
  misa: {
    fecha: 'Domingo 22 de noviembre de 2026',
    hora: '13:00',
    iglesia: 'Palmitopamba',
    direccion: 'Parroquia Nanegal, Palmitopamba',
    // Para el botón "Cómo llegar":
    // Opción A (recomendada): pega aquí un enlace completo de Google Maps.
    //   Ej: 'https://maps.app.goo.gl/XXXXXXXX'
    // Opción B: deja vacío y el botón buscará automáticamente por la dirección.
    mapaUrl: 'https://maps.app.goo.gl/RU7zh3zT8fV8rJiBA',
  },

  // --- Sección final ---
  mensajeFinal:
    'Agradecemos de corazón su compañía, sus oraciones y muestras de cariño en este momento.',
  firma: 'Familia Ibarra Ramírez',
  despedida: 'Que Dios la tenga en su santa gloria.',

  // --- Compartir ---
  // Texto que acompañará el enlace al compartir por WhatsApp.
  mensajeWhatsApp:
    'Te invitamos a la Santa Misa conmemorativa del primer mes del fallecimiento de Nely Ramírez. 🤍🕊️',
}

export default config
