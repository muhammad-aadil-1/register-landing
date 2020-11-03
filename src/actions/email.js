import Api from "./../api/index"
const apiService = new Api()

export const sendEmail = async (formName, data) => {
  try {
    const { result, message } = await apiService.post(
      "api/common/form-submit",
      { formName, data }
    )
    return {
      result,
      message,
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
