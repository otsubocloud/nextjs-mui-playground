import axios from 'axios'
import absoluteUrl from 'next-absolute-url/index'

export const SSRAPIs = (req?: any) => {
  const host = absoluteUrl(req).origin
  return {
    ['/api/xxx']: {
      get: (params: any) => {
        return axios.get<any>(`${host}/api/xxx`, {
          params,
        })
      },
    },
  }
}

const APIs = {
  ['/api/xxx']: {
    get: (params?: any) => {
      return axios.get<any>('/api/xxx', {
        params,
      })
    },
    post: (params: any) => {
      return axios.post<any>('/api/xxx', params)
    },
  },
}

export default APIs
