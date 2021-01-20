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
  const dispatch = useDispatch()
  const state = useSelector(({ usersDatabase, setProducts }) => {
    return {
      items: usersDatabase.items,
      // products: setProducts.items,
    }
  })
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response.data)
      .then(({ users, products }) =>
        dispatch(setUsersDatabase(users), dispatch(setProducts(products)))
      )
  }, [])
  console.log(state.products)
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item lg={2.5}>
          <SidebarNav />
        </Grid>
        <Grid item style={{ minWidth: '80%', padding: 24 }}>
          <Switch>
            <Route
              exact
              path="/users"
              render={() => <Users state={state.items} />}
            />
            <Route
              exact
              path="/products"
              render={() => <Products state={state.products} />}
            />
          </Switch>
        </Grid>
      </Grid>
    </div>
  )
}

export default connect()(App)
