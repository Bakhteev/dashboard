import headerImg from '../../../assets/products/headerImg.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexBasis: 0,
    backgroundColor: 'transparent',
    border: 'none',
  },
  header: {
    background: `url(${headerImg}) no-repeat`,
    backgroundSize: 'cover',
    width: '100%',
    height: 284,
    position: 'relative',
  },
  paper: {
    display: 'inline-block',
    position: 'absolute',
    bottom: 0,
    left: 20,
    transform: 'translateY(50%)',
  },
  flex: {
    display: 'flex',
  },
  logo: {
    padding: 21,
    borderRadius: '50%',
    backgroundColor: '#fff',
  },
  textBlock: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  supTitle: {
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 1.6,
    textTransform: 'uppercase',
    color: '#9EA0A5',
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.15,
    letterSpacing: -0.0555556,
  },
}))

export default useStyles
