import { createMuiTheme } from '@material-ui/core/styles'

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
      },
    },
  },
})
