import Api from "./../api/index"
const apiService = new Api()

export const payNeteller = async params => {
  try {
    const { result, message } = await apiService.post(
      "api/neteller/pay",
      params
    )
    return {
      result,
      message,
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

export const payPaysafe = async params => {
  try {
    const { result, message } = await apiService.post(
      "api/paysafe/pay",
      params
    )
    return {
      result,
      message,
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

export const payQubePay = async params => {
  try {
    const { result, message } = await apiService.post("api/qubepay/pay", params)
    return {
      result,
      message,
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

export const cashuCode = async params => {
  try {
    const { result, message } = await apiService.post("api/cashu/code", params)
    return {
      result,
      message,
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
