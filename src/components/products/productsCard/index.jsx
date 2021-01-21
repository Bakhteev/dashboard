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
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  btn: {
    padding: 4,
  },
}))

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
      <CardContent
        style={{ textAlign: 'center', padding: '24px 28px 10px 28px' }}
      >
        <img
          src={productLogo}
          alt={productname}
          style={{
            height: 58,
            padding: 3,
            border: '1px solid #EDF0F2',
            borderRadius: 4,
          }}
        />
        <Typography
          variant="h3"
          style={{
            margin: '19px 0 8px',
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 1.16,
          }}
        >
          {productname}
        </Typography>
        <Typography
          variant="p"
          style={{
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 1.14,
            color: '#66788A',
          }}
        >
          {productDescription}
        </Typography>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 27,
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeOutlinedIcon />
            <Typography
              variant="span"
              style={{
                marginLeft: 8,
                fontWeight: 'normal',
                fontSize: 12,
                lineHeight: 1.16,
                color: '#66788A',
              }}
            >
              {updatedTime}
            </Typography>
          </Box>
          <CardActions classes={{ root: classes.root }}>
            <IconButton classes={{ root: classes.btn }}>
              <GetAppIcon />
            </IconButton>
            <Typography
              variant="span"
              style={{
                fontWeight: 'normal',
                fontSize: 12,
                lineHeight: 1.16,
                color: '#66788A',
              }}
            >
              {downloads}
            </Typography>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductsCard
