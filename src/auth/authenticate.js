import Cookies from 'js-cookie'

export const Authenticate = (token) => {
  let authResult = {};

  console.log(token);

  if(token.access_token) {
    Cookies.set('access_token', token.access_token, { expires: token.expires })
    authResult = { "success": "Creds Verified" };
  } else {
    authResult = { "error": "Invalid Token" };
  }

  return authResult
}