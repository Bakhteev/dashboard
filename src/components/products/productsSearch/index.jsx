import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Button,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
import AddProduct from './popUP'

const ProductsSearch = ({ products, setSearchValue, notifications }) => {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')

  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleInput = (event) => {
    setInputValue(event.target.value)
    setSearchValue(event.target.value)
  }
  return (
    <AppBar
      component="div"
      position="static"
      color="transparent"
      elevation="0"
      className={classes.appBar}
    >
      <Toolbar
        className={classes.toolBar}
        classes={{ gutters: classes.gutters }}
      >
        <Box className={classes.box}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search products by name"
            inputProps={{ 'aria-label': 'Search products by name' }}
            fullWidth
            value={inputValue}
            onChange={(event) => handleInput(event)}
          />
        </Box>
        <Button classes={{ root: classes.root }} onClick={handleClickOpen}>
          NEW PRODUCT
        </Button>
        <AddProduct
          setOpen={setOpen}
          open={open}
          products={products}
          notifications={notifications}
        />
      </Toolbar>
    </AppBar>
  )
}

export default ProductsSearch
