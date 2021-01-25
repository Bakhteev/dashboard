import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {  connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import Header from './components/header'
import SidebarNav from './components/sidebar'
import Users from './components/users'
import Products from './components/products'

import { useStyles } from './styles'

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item lg={2.5}>
          <SidebarNav />
        </Grid>
        <Grid item className={classes.rightgrid}>
          <Switch>
            <Route exact path="/users" render={() => <Users />} />
            <Route exact path="/products" render={() => <Products />} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  )
}

export default connect()(App)
