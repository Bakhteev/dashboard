import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.75, 3.75, 1.75, 3),
    justifyContent: 'space-between',
    
  },
  box: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: theme.spacing(1),
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.0555556px',
  },
}))

export default useStyles
