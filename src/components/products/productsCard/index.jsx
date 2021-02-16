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
  fetchNotes,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const Counter = async (id) => {
    const counterValue = { downloads: downloads + 1 }
    try {
      const res = await axios.patch(`${url}/products/${id}.json`, counterValue)
      const payload = {
        ...res.data,
        downloads: res.data.downloads,
      }
      dispatch(counter(payload))
      fetchNotes()
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return (
    <Card style={{ display: 'flex' }}>
      <CardContent className={classes.cardContent}>
        <img src={productLogo} alt={productname} className={classes.icon} />
        <Typography variant="h3" className={classes.title}>
          {productname}
        </Typography>
        <Typography component="p" className={classes.description}>
          {productDescription}
        </Typography>
        <Box className={classes.row}>
          <Box className={classes.rowLeft}>
            <AccessTimeOutlinedIcon />
            <Typography component="span" className={classes.date}>
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
            <Typography component="span" className={classes.downloads}>
              {downloads}
            </Typography>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductsCard
