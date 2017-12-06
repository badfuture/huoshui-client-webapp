
const Links = {
  qq: 'http://connect.qq.com/widget/shareqq/index.html',
  weibo: 'https://service.weibo.com/share/share.php',
}

module.exports = {
  getQQUrl: ({ url, title, summary }) => {
    const payload = {
      url,
      title,
      summary,
      pics: 'https://webapp.huoshui.org/images/sample/sample2.png',
      desc: `课评: ${title} (来自活水)`, // an independent qq Message
      site: 'QQ分享', // not really rendered
    }
    const params = []
    for (const i in payload) {
      params.push(`${i}=${encodeURIComponent(payload[i] || '')}`)
    }
    return `${Links.qq}?${params.join('&')}`
  },
  getWeiboUrl: ({ url, title }) => {
    const payload = {
      url,
      title,
      pic: 'https://webapp.huoshui.org/images/sample/sample2.png',
      appkey: '',
    }
    const params = []
    for (const i in payload) {
      params.push(`${i}=${encodeURIComponent(payload[i] || '')}`)
    }
    return `${Links.weibo}?${params.join('&')}`
  },
}
