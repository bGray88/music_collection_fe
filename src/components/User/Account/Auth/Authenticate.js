import Cookies from 'js-cookie'

const Authenticate = async (token, navigate) => {
  try {
    Cookies.set('access_token', token.access_token, { expires: token.expires })

    return true
  } catch (error) {
    navigate('/');
    return false
  }
}

export default Authenticate;