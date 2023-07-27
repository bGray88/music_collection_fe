import Cookies from 'js-cookie'

export const getAccessToken = () => Cookies.get('access_token')
export const isAuthenticated = () => !!getAccessToken()
export const getCurrentUser = () => Cookies.get('user')
export const getCurrentUserName = () => Cookies.get('user_name')