import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Helmet } from "react-helmet"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <BrowserRouter>
        <Helmet>
          <title>Hidro Mourão</title>
          <meta name="description" content="Veja mais e entenda o assoreamento dos rios, um problema ambiental grave que pode estar acontecendo na sua cidade. Acesse a Hidro Mourão!" />
          <meta name="keywords" content="Campo Mourão, Assoreamento de rios, Assoreamento dos rios, Problemas hídricos, Geografia, Trabalho escolar, escola, ATO, Colégio Estadual Antônio Teodoro de Oliveira, Colégio ATO" />
        </Helmet>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
