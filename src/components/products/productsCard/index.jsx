import React from 'react'
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
import useStyles from './style'

const ProductsCard = ({
  productLogo,
  productname,
  productDescription,
  updatedTime,
  downloads,
}) => {
  const classes = useStyles()
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
            <IconButton classes={{ root: classes.btn }}>
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
