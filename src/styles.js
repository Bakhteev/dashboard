import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          padding: 0,
          margin: 0,
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        ul:{
          margin: 0,
          padding: 0,
          listStyle: 'none'
        }
      },
    },
  },
})

export const useStyles = makeStyles((theme) => ({
  rightgrid: {
    width: '85%',
    padding: 24,
    '@media screen and (max-width: 1800px)': {
      width: '80%',
    },
    '@media screen and (max-width: 1350px)': {
      width: '75%',
    },
  },
}))



