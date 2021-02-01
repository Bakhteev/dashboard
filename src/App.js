import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import Header from './components/header'
import SidebarNav from './components/sidebar'
import Users from './components/users'
import Products from './components/products'
import SignUp from './components/signUp'
import Login from './components/login'

import { useStyles } from './styles'

// import { AuthProvider } from './context/authContext'
import PrivateRoute from './components/PrivateRoute'
import { useAuth } from './context/authContext'

function App() {
  const classes = useStyles()
  const { currentUser } = useAuth()
  return (
    <>
      {currentUser ? (
        <div className="App">
          <Header />
          <Grid container>
            <Grid item>
              <SidebarNav />
            </Grid>
            <Grid item className={classes.rightgrid}>
              <Switch>
                <PrivateRoute exact path="/users" component={Users} />
                <PrivateRoute exact path="/products" component={Products} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div
          className="App"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Switch>
            <Route path="/signUp" render={() => <SignUp />} />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </div>
      )}
    </>
  )
}

export default connect()(App)
