import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'

export const sidebarItems = [
  { text: 'Dashboard', icon: <DashboardOutlinedIcon />, link: '/' },
  { text: 'Users', icon: <PeopleAltOutlinedIcon />, link: '/' },
  { text: 'Products', icon: <ShoppingBasketOutlinedIcon />, link: '/' },
  { text: 'Authentication', icon: <LockOpenOutlinedIcon />, link: '/' },
  { text: 'Typography', icon: <TextFieldsOutlinedIcon />, link: '/' },
  { text: 'Icons & Images', icon: <ImageOutlinedIcon />, link: '/' },
]
