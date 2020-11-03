import { config } from "../constants"
import confStoreFunction from "../reducers/store"
const confStore = confStoreFunction()
const store = confStore.store

export const apiHost = config.apiHost

// const storedUserKey = "CurrentUser"
class ApiService {
  constructor() {
    this.apiUrl = `${apiHost}`
  }

  post = async (url, body) => {
    try {
      const resp = await this.makeRequest({
        url,
        method: "POST",
        body,
      })
      return this.handleResponse(resp)
    } catch (error) {
      this.handleError(error)
      return Promise.reject(error)
    }
  }

  handleResponse = ({ result, status, error, message } = {}) => {
    if (result) {
      return {
        result,
        message,
      }
    }
    if (error && error.status === 401) {
      this.logoutUser()
    }
    return Promise.reject({
      ...error,
      ...{ message },
    })
  }

  handleError = error => {
    console.log("error => ", error)
  }

  makeRequest = async ({ url = "", method = "GET", body = null }) => {
    const { language } = store.getState()

    try {
      const fullUrl = `${this.apiUrl}/${url}`

      let headers = {
        "Content-Type": "application/json",
        "Accept-Language": language,
      }

      const options = {
        method,
        headers,
      }

      if (method !== "GET" && body) {
        options.body = JSON.stringify(body || {})
      }
      const response = await fetch(fullUrl, options)

      return response.json()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default ApiService
