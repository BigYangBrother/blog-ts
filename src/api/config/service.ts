import axios from 'axios'
import qs from 'qs'

class Service {
  constructor() {
    this.baseURL = process.env.VUE_APP_BASE_API
    this.timeout = 10000
  }

  setInterceptor = (instance: any) => {
    instance.interceptors.request.use((config: any) => {
      if (config.method === 'get') {
        config.params = config.req
      } else {
        config.data = qs.stringify(config.req)
      }
      return config
    }, (err: any) => Promise.reject(err))
    instance.interceptors.response.use((res: object) => res,
    (err: any) => {
      if (err && err.response) {
        const { status } = err.response
        if (status === 0) {
          console.error('接口请求失败，请重试')
        }
        if (status === 403) {
          console.error('登录过期，请重新登录')
        }
        if (status === 404) {
          console.error('接口404，请稍后再试')
        }
        if (status === 500) {
          console.error('接口请求失败，请稍后再试')
        }
      }
      return Promise.reject(err)
    })
  }

  request(options: any) {
    const instance = axios.create();
    const config = {
      ...options,
      baseURL: this.baseURL,
      timeout: this.timeout
    };
    this.setInterceptor(instance)
    return instance(config)
  }

}

export default new Service()