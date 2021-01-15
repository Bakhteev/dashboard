import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      position: 'static',
      zIndex: 0,
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          padding: 0,
          margin: 0,
        },
        a:{
          textDecoration: 'none',
          color:'inherit',
        }
      },
    },
  },
})
