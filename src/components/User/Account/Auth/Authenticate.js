import Cookies from 'js-cookie'

export const Authenticate = (token) => {
  let authResult = {};

  if(Object.keys(token).length === 0) {
    authResult = { "error": "Invalid Token" };
  } else {
    Cookies.set('access_token', token.access_token, { expires: token.expires })
    authResult = { "success": "Creds Verified" };
  }

  return authResult
}