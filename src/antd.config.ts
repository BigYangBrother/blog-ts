import Vue from 'vue'
import moment from 'moment'

import 'moment/locale/zh-cn'

import {
  Layout, Menu, Button, Input, Table, Popconfirm, Modal, Select, ConfigProvider,
  Icon, DatePicker, Radio, Checkbox, Row, Col, Alert, Dropdown, Pagination,
  message, Tag, Tooltip, Spin, FormModel, Form, AutoComplete, InputNumber,
  notification, TimePicker, Divider, Skeleton, Result, Upload, Popover
} from 'ant-design-vue'

moment.locale('zh-cn')
Vue.prototype.$confirm = Modal.confirm
message.config({
  duration: 1.5,
  maxCount: 1
})
Vue.prototype.$message = message

notification.config({
  duration: 3
})
Vue.prototype.$notification = notification

Vue.use(Layout)
Vue.use(FormModel)
Vue.use(Form)
Vue.use(Divider)
Vue.use(Skeleton)
Vue.use(Result)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Table)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Popconfirm)
Vue.use(Modal)
Vue.use(ConfigProvider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Menu)
Vue.use(Alert)
Vue.use(Tooltip)
Vue.use(Spin)
Vue.use(Dropdown)
Vue.use(AutoComplete)
Vue.use(Upload)
Vue.use(Popover)

