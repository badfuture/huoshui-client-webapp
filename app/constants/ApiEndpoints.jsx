
const env = 'prod'
export const DOMAIN = (env === 'prod') ? 'https://api.huoshui.org' : 'https://api.huoshui.tk'

export const URL_LOGIN = `/auth/login`
export const URL_SIGNUP = `/auth/signup`

export const URL_REVIEW = `/reviews`

export const URL_COURSE = `/courses`
