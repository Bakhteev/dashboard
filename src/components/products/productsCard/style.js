import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  btn: {
    padding: 4,
  },
  cardContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '24px 28px 10px 28px',
  },
  icon: {
    maxHeight: 58,
    padding: 3,
    border: '1px solid #EDF0F2',
    borderRadius: theme.spacing(0.5),
  },
  title: {
    margin: '19px 0 8px',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 1.16,
  },
  description: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 1.14,
    color: '#66788A',
    display: 'flex',
    flex: '1 1 auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 27,
  },
  rowLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    marginLeft: theme.spacing(1),
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 1.16,
    color: '#66788A',
  },
  downloads: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 1.16,
    color: '#66788A',
  },
}))

export default useStyles
