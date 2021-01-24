import React from 'react'
import { Grid } from '@material-ui/core'
import ProductsCard from './productsCard'
import ProductsHeader from './productsHeader'
import ProductsSearch from './productsSearch'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../redux/actions/products'

const url = 'https://dasboard-deae2-default-rtdb.firebaseio.com'

const Products = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = React.useState('')
  const state = useSelector(({ products }) => {
    return {
      items: products.items,
    }
  })
  const fetchNotes = async () => {
    // showLoader()

    const res = await axios.get(`${url}/products.json`)
    // console.log(res.data)
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
  // console.log(state)
  React.useEffect(() => {
    fetchNotes()
  }, [])
  // console.log(state.items)
  return (
    <>
      <ProductsHeader />
      <ProductsSearch state={state.items} setSearchValue={setSearchValue} />
      <Grid container style={{ margin: '0 -16px' }}>
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
                item
                xs={4}
                style={{
                  padding: '0 16px',
                  boxSizing: 'border-box',
                  marginBottom: 24,
                }}
              >
                <ProductsCard {...item} />
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default Products
