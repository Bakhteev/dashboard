import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  selected: {
    backgroundColor: 'rgba(144, 202, 249, 0.24)!important',
  },
  row: {
    cursor: 'pointer',
  },
  table: {
    width: '100%',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  avatar: {
    maxWidth: '32px',
    borderRadius: '50%',
  },
}))

export default useStyles
