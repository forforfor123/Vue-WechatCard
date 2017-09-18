import { isSimpleObject, isJSON } from './string'

const setDocumentTitle = (title) => {
  document.title = title
  const iframe = document.createElement('iframe')

  const loadHandler = () => {
    window.setTimeout(() => {
      iframe.removeEventListener('load', loadHandler)
      document.body.removeChild(iframe)
    }, 0)
  }
  iframe.style.display = 'none'
  // iframe.setAttribute('src', '/favicon.png')
  iframe.addEventListener('load', loadHandler)
  document.body.appendChild(iframe)
}

// param of style is a string. for example, it should be like 'color: red; top: 10rem;'
const showToast = (message, time, style) => {
  const DEFAULT_TIME = 2000
  const $body = document.getElementsByTagName('body')[0]
  const $toastDom = document.getElementsByClassName('toast')

  if ($toastDom.length > 0) {
    $toastDom[0].getElementsByClassName('text-wrapper')[0].textContent = message
  } else {
    // format toast html
    const $toast = document.createElement('div')
    const $text = document.createElement('div')
    $toast.setAttribute('class', 'toast')
    $text.setAttribute('class', 'text-wrapper')
    $text.textContent = message
    $toast.appendChild($text)
    if (style) $toast.style.cssText = style
    $body.appendChild($toast)

    setTimeout(() => {
      $body.removeChild($toastDom[0])
    }, time || DEFAULT_TIME)
  }
}

const getErrorMessage = (respMessage) => {
  if (isJSON(respMessage)) {
    const message = JSON.parse(respMessage)
    return message[Object.keys(message)[0]]
  } else {
    return respMessage
  }
}


module.exports = {
  setDocumentTitle: setDocumentTitle,
  showToast: showToast,
  getErrorMessage: getErrorMessage
}
