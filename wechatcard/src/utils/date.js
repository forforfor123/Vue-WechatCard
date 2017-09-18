// Usage formatDate(new Date(), 'yyyy年MM月dd日'), it's will be return a string like '2016年05月17日'.
const formatDate = (date, fmt) => {
  const properties = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let key in properties) {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? properties[key] : ('00' + properties[key]).substr(('' + properties[key]).length))
    }
  }
  return fmt
}

export {
  formatDate
}
