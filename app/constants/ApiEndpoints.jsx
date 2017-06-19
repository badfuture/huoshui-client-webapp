
const env = 'prod'
let domain = ''
if (env === 'prod') {
  domain = 'https://api.huoshui.org'
} else if (env === 'dev') {
  domain = 'https://api.huoshui.tk'
} else if (env === 'local') {
  domain = 'http://localhost:1337'
}

export const DOMAIN = domain

export const URL_LOGIN = `/auth/login`
export const URL_SIGNUP = `/auth/signup`

export const URL_REVIEW = `/reviews`
export const URL_PROF = `/profs`
export const URL_COURSE = `/courses`

export const URL_COMMENT = `/comments`
export const URL_FEEDBACK = `/feedback`
export const URL_SEARCH = `/search`
