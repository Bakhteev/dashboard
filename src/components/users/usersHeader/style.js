import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
  },
  boxLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  searcheWrapper: {
    marginLeft: theme.spacing(2),
  },
}))

export default useStyles
