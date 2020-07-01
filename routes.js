import React from 'react'
import { Route, Switch} from 'react-router-dom'

export default (
    <Switch>
      <Route exact path='/portfolio' />
      <Route exact path='/about' />
      <Route exact path='/education' />
      <Route exact path='/skills' />
    </Switch>
)
