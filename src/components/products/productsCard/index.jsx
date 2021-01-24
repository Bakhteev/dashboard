import React from 'react'
import axios from 'axios'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core'
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined'
import GetAppIcon from '@material-ui/icons/GetApp'
import { counter } from '../../../redux/actions/products'
import { useDispatch } from 'react-redux'
import useStyles from './style'

const url = 'https://dasboard-deae2-default-rtdb.firebaseio.com'

const ProductsCard = ({
  id,
  productLogo,
  productname,
  productDescription,
  updatedTime,
  downloads,
  value,
}) => {
  console.log(value)
  const classes = useStyles()
  const dispatch = useDispatch()

  const Counter = (id) => {
    const counterValue = axios.patch(`${url}/products/${id}.json`, {
      downloads: downloads + 1,
    })
    console.log(counterValue)
    dispatch(counter())

  }

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <img src={productLogo} alt={productname} className={classes.icon} />
        <Typography variant="h3" className={classes.title}>
          {productname}
        </Typography>
        <Typography variant="p" className={classes.description}>
          {productDescription}
        </Typography>
        <Box className={classes.row}>
          <Box className={classes.rowLeft}>
            <AccessTimeOutlinedIcon />
            <Typography variant="span" className={classes.date}>
              {updatedTime}
            </Typography>
          </Box>
          <CardActions classes={{ root: classes.root }}>
            <IconButton
              classes={{ root: classes.btn }}
              onClick={() => Counter(id)}
            >
              <GetAppIcon />
            </IconButton>
            <Typography variant="span" className={classes.downloads}>
              {downloads}
            </Typography>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductsCard
