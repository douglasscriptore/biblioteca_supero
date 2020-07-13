import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Biblioteca from '../pages/Biblioteca'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Biblioteca} />
    </Switch>
  )
}
