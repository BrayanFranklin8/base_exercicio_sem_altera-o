import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import temaLight from './themes/light'

import EstiloGlobal from './styles'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
