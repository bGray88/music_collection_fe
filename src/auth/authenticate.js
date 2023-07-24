import Cookies from 'js-cookie'

export const Authenticate = (token) => {
  let authResult = {};
  
  if(!!token) {
    authResult = { "error": "Invalid Token" };
  } else {
    Cookies.set('access_token', token.access_token, { expires: token.expires })
    authResult = { "success": "Creds Verified" };
  }

  return authResult
}