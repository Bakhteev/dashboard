import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'static',
    height: '91vh',
  },
  sidebar: {
    width: '270px',
    flexShrink: 1,
  },
  avatar: {
    padding: theme.spacing(3, 7),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    margin: theme.spacing(2, 0, 0.5),
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '125%',
    textAlign: 'center',
    letterSpacing: '-0.05px',
    color: '#3A3B3F',
  },
  profession: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '133%',
    textAlign: 'center',
    color: '#9EA0A5',
  },
  list: {
    padding: theme.spacing(0, 4),
  },
  listItem: {
    margin: theme.spacing(1.62, 0),
    padding: 0
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(1, 2),
  },
  activeLink: {
    borderRadius: '4px',
    borderLeft: '3px solid #1665D8',
  },
  span: {
    margin: theme.spacing(2, 0, 1, 4),
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '15px',
    color: 'rgba(0, 0, 0, 0.328974)',
  },
  btn: {
    padding: theme.spacing(1.62, 0),
    marginLeft: theme.spacing(4),
    justifyContent: 'flex-start',
  },
}))

export default useStyles
