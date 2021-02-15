import { makeStyles } from '@material-ui/core/styles'
import signUp from '../../assets/signUp/signUp.png'

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: 'center',
  },
  gridItem1: {
    padding: '55px 64px 0',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 1.6,
    textAlign: 'right',
    letterSpacing: -0.05,
    color: '#9EA0A5',
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 1.16,
    letterSpacing: -0.06,
    color: '#212529',
  },
  subTitle: {
    margin: '4px 0 40px',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 1.4,
    letterSpacing: -0.05,
    color: '#9EA0A5',
  },
  input: { marginTop: 0, marginBottom: 18 },
  btn: { width: '100%', marginTop: theme.spacing(3) },
  leftSide: {
    background: `url(${signUp}) no-repeat left`,
    maxWidth: '29%',
    height: '640px',
    display: 'flex',
    alignItems: 'flex-end',
  },
  itemBox: { padding: '0 18px 24px 24px' },
  leftSideText: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: -0.0571429,
    color: '#FFFFFF',
  },
  row: {
    display: 'flex',
    marginTop: 18,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 12,
  },
  name: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 1.14,
    letterSpacing: -0.05,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  position: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 1.14,
    letterSpacing: -0.0428571,
    color: '#FFFFFF',
  },
}))

export default useStyles
