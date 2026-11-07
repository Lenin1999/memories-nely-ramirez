import { config } from './config.js'
import { useReveal } from './hooks/useReveal.js'
import { Particulas } from './components/Decoracion.jsx'
import Hero from './components/Hero.jsx'
import Recuerdo from './components/Recuerdo.jsx'
import Informacion from './components/Informacion.jsx'
import Compartir from './components/Compartir.jsx'
import Despedida from './components/Despedida.jsx'
import './styles/app.css'

export default function App() {
  // Activa las animaciones suaves al desplazarse.
  useReveal()

  return (
    <div className="app">
      <Particulas />
      <main>
        <Hero config={config} />
        <Recuerdo config={config} />
        <Informacion config={config} />
        <Compartir config={config} />
        <Despedida config={config} />
      </main>
    </div>
  )
}
