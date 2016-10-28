/**
 * Created by kevin on 16/7/22.
 */
export const API_ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://api.jackhu.top':'http://localhost:1101'

export const CookieDomain = (process.env.NODE_ENV === 'production')
    ?'.jackhu.top':''