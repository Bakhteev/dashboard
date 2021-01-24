import React from 'react'
import { Grid } from '@material-ui/core'
import ProductsCard from './productsCard'
import ProductsHeader from './productsHeader'
import ProductsSearch from './productsSearch'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../redux/actions/products'
import { makeStyles } from '@material-ui/core/styles'

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
      downloads: products.items.downloads,
    }
  })

  const fetchNotes = async () => {
    // showLoader()

    const res = await axios.get(`${url}/products.json`)

    if (!res.data) {
      return (res.data = {})
    } else {
      // hideLoader()
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
    fetchNotes()
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
        {state.items
          .filter((item) => {
            if (searchValue === '') {
              return item
            } else if (
              item.productname.toLowerCase().includes(searchValue.toLowerCase())
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
                <ProductsCard {...item} fetchNotes={fetchNotes} />
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default Products
