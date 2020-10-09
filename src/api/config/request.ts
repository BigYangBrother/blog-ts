import service from './service'
// import {message} from 'ant-design-vue'

const request = (url: string, method: string) => {
  return (req: object) => {
    return service.request({url, method, req}).then(res => {
      return res.data
    }, err => {
      throw err
    }).catch(e => {
      console.error('捕获异常：' + e)
    })
  }
}

const post = (url: string) => request(url, 'post')
const get = (url: string) => request(url, 'get')

export {
  post,
  get
}