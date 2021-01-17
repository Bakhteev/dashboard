import { makeStyles } from '@material-ui/core/styles'
import popUpBg from '../../../../assets/navSidebar/popupbg.png'

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'block',
    widht: '960px',
    height: '640px',
  },
  paper: {
    margin: 0,
    maxWidth: 960,
  },
  item: {
    padding: theme.spacing(6.875, 8, 8),
  },
  itemDialogContent: {
    alignItems: 'center',
    padding: 0,
    overflow: 'visible',
  },
  itemBox: {
    background: `url(${popUpBg}) no-repeat center`,
    backgroundSize: 'cover',
    height: '640px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 252,
  },
  dialogActions: {
    justifyContent: 'flex-start',
    padding: 0,
  },
  dialogTitle: {
    padding: theme.spacing(1, 0, 0.5),
  },
  dialogContentText: {
    marginBottom: theme.spacing(5),
  },
  textField: {
    marginTop: 0,
    marginBottom: theme.spacing(2.25),
  },
  itemBtn: {
    width: '100%',
  },
}))

export default useStyle
