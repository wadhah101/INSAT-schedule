import Axios, { AxiosInstance } from 'axios'

export const axiosInstance = (): AxiosInstance =>
  Axios.create({
    baseURL: process.env.SERVER_BASE_URL,
  })
