import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#47B881',
    color: '#fff',
    transition: '0.5s',
    '&:hover': {
      color: '#000',
    },
  },
  gutters: {
    padding: 0,
  },
  appBar: {
    marginBottom: theme.spacing(3),
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  box: {
    background: '#fff',
    boxShadow:
      '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
    borderRadius: 4,
    width: 512,
    display: 'flex',
  },
}))

export default useStyles