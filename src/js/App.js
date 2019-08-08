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
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App