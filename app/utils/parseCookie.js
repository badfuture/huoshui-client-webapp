const getCookieValue = (a) => {
  const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`)
  return b ? b.pop() : ''
}

export function getCookie(name) {
  const val = getCookieValue(name)
  if (name === 'token') {
    return val
  }
  return JSON.parse(decodeURIComponent(val))
}

export function deleteAllCookies() {
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
  }
}
