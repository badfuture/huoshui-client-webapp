// Huoshui API endpoints
const env = process.env.NODE_ENV
let domain = ''
if (env === 'prod' || env === 'production') {
  domain = 'https://api.huoshui.org'
} else if (env === 'dev' || env === 'development') {
  domain = 'http://localhost:1337'
}

export const DOMAIN = domain

export const URL_LOGIN = `/auth/login`
export const URL_SIGNUP = `/auth/signup`

export const URL_USER = `/users`
export const URL_REVIEW = `/reviews`
export const URL_PROF = `/profs`
export const URL_COURSE = `/courses`

export const URL_COMMENT = `/comments`
export const URL_FEEDBACK = `/feedback`
export const URL_SEARCH = `/search`
export const URL_STAT = `/stat`
export const URL_TAG = `/tags`

// Qiniuyun Object Store Service
export const OSS_DOMAIN = 'http://oss.huoshui.org'
export const OSS_DOMAIN_SITE = `${OSS_DOMAIN}/site`
export const OSS_DOMAIN_USER = `${OSS_DOMAIN}/user`
