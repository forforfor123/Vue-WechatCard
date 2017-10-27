import stringUtil from './string'

const getHttpErrorResponseMessage = (respMessage) => {
  if (stringUtil.isJSON(respMessage)) {
    const message = JSON.parse(respMessage)
    return message[Object.keys(message)[0]]
  } else {
    return respMessage
  }
}

export default {
  getHttpErrorResponseMessage: getHttpErrorResponseMessage
}
