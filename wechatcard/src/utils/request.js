import stringUtilFunc from './string'

const getErrorMessage = (respMessage) => {
  if (stringUtilFunc.isJSON(respMessage)) {
    const message = JSON.parse(respMessage)
    return message[Object.keys(message)[0]]
  } else {
    return respMessage
  }
}

const showToast = (message) => {
  alert(message)
}

export default {
  getErrorMessage: getErrorMessage,
  showToast: showToast
}
