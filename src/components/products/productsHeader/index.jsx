import { Box, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import logo from '../../../assets/products/logo2.svg'
import useStyles from './style'

const ProductsHeader = () => {
  const classes = useStyles()
  return (
      <Box className={classes.header}>
        <Paper
          variant="outlined"
          classes={{ root: classes.root, outlined: classes.root }}
          className={classes.paper}
        >
          <Box className={classes.flex}>
            <Grid
              item
              xs={5}
              className={classes.logo}
              classes={{ root: classes.root }}
            >
              <img src={logo} alt="" />
            </Grid>
            <Grid item xs={7} className={classes.textBlock}>
              <Typography variant="span" className={classes.supTitle}>
                PRODUCTS
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Devias Products
              </Typography>
            </Grid>
          </Box>
        </Paper>
      </Box>
  )
}

export default ProductsHeader
