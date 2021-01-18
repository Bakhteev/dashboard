import { Grid } from '@material-ui/core'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header'
import SidebarNav from './components/sidebar'
import Users from './components/users'
import Products from './components/products'

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item lg={2.5}>
          <SidebarNav />
        </Grid>
        <Grid item style={{ minWidth: '80%', padding:24 }}>
          <Switch>
            <Route exact path="/users" render={() => <Users />} />
            <Route exact path="/products" render={() => <Products />} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
