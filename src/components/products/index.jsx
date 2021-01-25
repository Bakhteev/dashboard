import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import ProductsCard from './productsCard'
import ProductsHeader from './productsHeader'
import ProductsSearch from './productsSearch'
import { setProducts } from '../../redux/actions/products'
import { showLoader } from '../../redux/actions/users'
import Loader from '../loader'

const url = 'https://dasboard-deae2-default-rtdb.firebaseio.com'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 -16px',
  },
  card: {
    width: '33.33%',
    '@media screen and (max-width: 1600px)': {
      width: '50%',
    },
    '@media screen and (max-width: 1090px)': {
      width: '100%',
    },
  },
}))

const Products = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = React.useState('')
  const state = useSelector(({ products }) => {
    return {
      items: products.items,
      loading: products.loading
    }
  })

  const ShowLoader = () =>{dispatch(showLoader())}

  const fetch = async () => {
    ShowLoader()

    const res = await axios.get(`${url}/products.json`)

    if (!res.data) {
      return (res.data = {})
    } else {
      const payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        }
      })
      dispatch(setProducts(payload))
    }
  }

  React.useEffect(() => {
    fetch()
  }, [])
  return (
    <>
      <ProductsHeader />
      <ProductsSearch
        state={state.items}
        value={state.value}
        setSearchValue={setSearchValue}
      />
      <Grid container className={classes.container}>
        {state.loading ? (
          <Grid item xs={12}>
            <Loader />
          </Grid>
          
        ) : (
          state.items
            .filter((item) => {
              if (searchValue === '') {
                return item
              } else if (
                item.productname
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              ) {
                return item
              }
            })
            .map((item) => {
              return (
                <Grid
                  className={classes.card}
                  item
                  style={{
                    padding: '0 16px',
                    boxSizing: 'border-box',
                    marginBottom: 24,
                  }}
                >
                  <ProductsCard {...item} fetchNotes={fetch} />
                </Grid>
              )
            })
        )}
      </Grid>
    </>
  )
}

export default Products
