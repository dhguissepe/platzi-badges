import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.js'
import BadgeNew from './pages/BadgeNew.js'
import Badges from './pages/Badges.js'
import BadgeEdit from './pages/BadgeEdit'
import BadgeDetails from './pages/BadgeDetailsContainer'
import NotFound from './pages/NotFound.js'
import Layout from './components/Layout.js'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* Al añadir exact al Route. Le decimos que el path tiene que ser exacto
          esto sirve de mucho en este caso que /badges y /badges/new coinciden en
          badges. */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          {/* Cuando colocamos ':badgeId' le decimos a react-router que ahí va un ID
          cualquiera que corresponde a algún badge. */}
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          {/* No hay que olvidar Renderizar la ruta del 404. Es la que se renderiza
          cuando ninguna otra ruta coincide. No lleva ruta ni exact, Solo el componente
          NotFound. */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App