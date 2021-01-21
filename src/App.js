import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import Header from './components/header'
import SidebarNav from './components/sidebar'
import Users from './components/users'
import Products from './components/products'
import { setUsersDatabase } from './redux/actions/users'
import { setProducts } from './redux/actions/products'

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item lg={2.5}>
          <SidebarNav />
        </Grid>
        <Grid item style={{ width: '85%', padding: 24 }}>
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
