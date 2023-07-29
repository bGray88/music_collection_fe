import Cookies from 'js-cookie'

export const getAccessToken      = () => Cookies.get('access_token')
export const isAuthenticated     = () => !!getAccessToken()
export const getCurrentUserEmail = () => Cookies.get('user_email')
export const getCurrentUserName  = () => Cookies.get('user_name')
export const getCurrentUser      = () => Cookies.get('user')