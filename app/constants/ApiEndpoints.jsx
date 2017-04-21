
const env = 'dev'
const domain = (env === 'prod') ? 'https://api.huoshui.org' : 'https://api.huoshui.tk'

export const URL_REVIEW = `${domain}/reviews`

export const URL_COURSE = `${domain}/courses?populate=[Prof,School,Reviews,Stat]`
