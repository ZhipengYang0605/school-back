import Vue from 'vue'
import {
  Container,
  Aside,
  Header,
  Main,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Button,
  Icon,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Message,
  MessageBox
} from 'element-ui'

Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
