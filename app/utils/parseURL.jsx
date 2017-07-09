
const isJson = (str) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

export default function getAllParams(location) {
  const obj = {}
  const query = location.search.substring(1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    const paramName = decodeURIComponent(pair[0])
    const paramValue = decodeURIComponent(pair[1])

    if (isJson(paramValue)) {
      obj[paramName] = JSON.parse(paramValue)
    } else {
      obj[paramName] = paramValue
    }
  }
  return obj
}
