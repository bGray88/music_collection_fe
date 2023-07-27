import Cookies from 'js-cookie'

export const Authenticate = (token) => {
  console.log(token);

  if (token !== {} && token.access_token) {
    Cookies.set('access_token', token.access_token, { expires: token.expires })
    return { "success": "Creds Verified" };
  } else {
    return { "error": "Invalid Token" };
  }
}