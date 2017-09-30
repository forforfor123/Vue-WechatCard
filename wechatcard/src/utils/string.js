const isJSON = (data) => {
  return /^{(.+:.+,*){1,}}$/.test(data)
}

export default {
  isJSON: isJSON
}
