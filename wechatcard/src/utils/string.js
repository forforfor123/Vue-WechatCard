const escape = (rawHtml) => {
  if (rawHtml) {
    let reg = /\<|\>|\"|\'|\&/g
    rawHtml = rawHtml.replace(reg, (matchStr) => {
      switch (matchStr) {
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '\'':
          return '&quot;'
        case '\'':
          return '&#39;'
        case '&':
          return '&amp;'
      }
    })

    rawHtml = rawHtml.replace(/\n/g, '<br>')
  }

  return rawHtml
}

const isSimpleObject = (obj) => {
  return Object.prototype.toString.apply(obj).slice(8, -1) === 'Object'
}

const isJSON = (data) => {
  return /^{(.+:.+,*){1,}}$/.test(data)
}

const isEmail = (email) => {
  const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/
  return reg.test(email)
}

const isTel = (tel) => {
  const telRegs = ['^0?1[0-9]{10}$', '^09[0-9]{8}$', '^\\d{8}$', '^853[0-9]{8}$']
  if (tel) {
    for (const reg of telRegs) {
      if (new RegExp(reg).test(tel)) {
        return true
      }
    }
  }
  return false
}

module.exports = {
  escape,
  isSimpleObject,
  isJSON,
  isEmail,
  isTel
}
