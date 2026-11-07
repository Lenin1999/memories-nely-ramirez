# En memoria de Nelly Ramírez 🤍🕊️

Invitación digital conmemorativa para la **Santa Misa del primer mes** del fallecimiento de Nelly Ramírez. Es una página estática (sin backend ni base de datos), elegante y responsive, pensada para compartirse por WhatsApp.

## Características

- Diseño elegante, minimalista y emotivo (paleta blanco, beige, crema y dorado tenue).
- Totalmente responsive (celular, tablet y computadora).
- Animaciones suaves al desplazarse y detalles decorativos sutiles (flores y luces cálidas).
- Botón para **compartir por WhatsApp**.
- Botón para **copiar el enlace** de la invitación.
- Botón **"Cómo llegar"** que abre Google Maps.
- Todos los datos editables desde un único archivo de configuración.

## Requisitos previos

- [Node.js](https://nodejs.org/) versión 18 o superior (incluye `npm`).

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo (abre http://localhost:5173)
npm run dev

# 3. Generar la versión para producción (carpeta dist/)
npm run build

# 4. Previsualizar la versión de producción
npm run preview
```

## Personalizar la invitación

Edita **un solo archivo**: [`src/config.js`](./src/config.js)

Desde ahí puedes cambiar:

| Dato            | Campo en `config.js`       |
| --------------- | -------------------------- |
| Nombre          | `nombre`                   |
| Subtítulo       | `subtitulo`                |
| Frase del hero  | `fraseHero`                |
| Fotografía      | `foto`                     |
| Mensaje recuerdo| `mensajeRecuerdo`          |
| Fecha           | `misa.fecha`               |
| Hora            | `misa.hora`                |
| Iglesia         | `misa.iglesia`             |
| Dirección       | `misa.direccion`           |
| Enlace de mapa  | `misa.mapaUrl`             |
| Mensaje final   | `mensajeFinal`             |
| Firma           | `firma`                    |
| Despedida       | `despedida`                |
| Texto WhatsApp  | `mensajeWhatsApp`          |

> Los campos entre corchetes `[ ... ]` (como `[NOMBRE DE LA IGLESIA]` o `[DIRECCIÓN]`) son **marcadores de posición**. Reemplázalos cuando tengas la información real. Mientras tanto, la página los muestra como "pendientes" de forma elegante.

### Cambiar la fotografía

1. Copia tu imagen dentro de la carpeta `public/` (ej. `public/foto-nelly.jpg`).
2. En `src/config.js` escribe la ruta:
   ```js
   foto: './foto-nelly.jpg',
   ```

### Botón "Cómo llegar"

- **Opción recomendada:** pega un enlace completo de Google Maps en `misa.mapaUrl`.
- Si lo dejas vacío, el botón buscará automáticamente por el nombre de la iglesia y la dirección.

## Publicar en internet (para compartir el enlace)

Al ser una página estática, puedes subir la carpeta `dist/` (generada con `npm run build`) a cualquier hosting estático gratuito, por ejemplo:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

Una vez publicada, copia el enlace resultante y compártelo por WhatsApp desde la propia página.

## Estructura del proyecto

```
.
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── vite.svg
│   └── README-FOTO.txt
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── config.js            ← edita aquí todos los datos
    ├── hooks/
    │   └── useReveal.js
    ├── utils/
    │   └── acciones.js      ← compartir, copiar, mapas
    ├── components/
    │   ├── Decoracion.jsx
    │   ├── Hero.jsx
    │   ├── Recuerdo.jsx
    │   ├── Informacion.jsx
    │   ├── Compartir.jsx
    │   └── Despedida.jsx
    └── styles/
        ├── global.css
        └── app.css
```

---

_Con cariño, para honrar la memoria de quienes amamos._
