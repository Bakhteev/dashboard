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

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#47B881',
    color: '#fff',
    transition: '0.5s',
    '&:hover': {
      color: '#000',
    },
  },
  gutters:{
    padding: 0,
    
  }
}))
const ProductsSearch = () => {
  const classes = useStyles()
  return (
    <AppBar
      component="div"
      position="static"
      color="transparent"
      elevation="0"
      style={{ marginBottom: 24 }}
    >
      <Toolbar
        style={{ display: 'flex', justifyContent: 'space-between' }}
        classes={{ gutters: classes.gutters }}
      >
        <Box
          style={{
            background: '#fff',
            boxShadow:
              '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
            borderRadius: 4,
            width: 512,
            display: 'flex',
            
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search users by name, id"
            inputProps={{ 'aria-label': 'Search users by name, id' }}
            fullWidth
          />
        </Box>
        <Button classes={{ root: classes.root }}>NEW PRODUCT</Button>
      </Toolbar>
    </AppBar>
  )
}

export default ProductsSearch
