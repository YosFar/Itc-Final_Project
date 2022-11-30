import React from 'react'
import {Router, Route} from 'react'

export const App = () => {
  return (
    <Router>
      <Route path='/' component={replace} />
      <Route path='/products/:id' component={replace} />
      <Route path='/login' component={replace} />
      <Route path='/register' component={replace} />
      <Route path='/profile' component={replace} />
      <Route path='/cart/:id' component={replace} />
      <Route path='/shipping' component={replace} />
      <Route path='/payment' component={replace} />
      <Route path='/placeorder' component={replace} />
      <Route path='/order' component={replace} />
      <Route path='/*' component={replace} />
    </Router>
  )
}
