import React from 'react'
import { Grid } from '@material-ui/core'
import ProductsCard from './productsCard'
import ProductsHeader from './productsHeader'
import ProductsSearch from './productsSearch'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../redux/actions/products'

const Products = () => {
  const dispatch = useDispatch()
  const state = useSelector(({ products }) => {
    return {
      items: products.items,
    }
  })
  React.useEffect(async () => {
    await axios
      .get(`https://dasboard-deae2.web.app/database.json`)
      .then((response) => response.data)
      .then(({ products }) => dispatch(setProducts(products)))
  }, [])
  console.log(state.items)
  return (
    <>
      <ProductsHeader />
      <ProductsSearch />
      <Grid container style={{margin: 0 -12,
      }}>
        {state.items.map((item) => {
          return (
            <Grid item xs={4} style={{ padding: '0 12px', boxSizing:'border-box', marginBottom: 24,
             }}>
              <ProductsCard {...item} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Products
