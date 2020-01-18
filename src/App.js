import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

// pages
import home from './pages/home'
import PageNotFound from './pages/PageNotFound'

function App () {
  return (
    <BrowserRouter basename='/'>
      <>
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/404' exact component={PageNotFound} />
          <Redirect to='/404' />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default App
