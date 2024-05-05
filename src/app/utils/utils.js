import Cookies from 'js-cookie';
import { EMAIL_FORMAT } from './constants';

export const setTokensInCookies = (tokens)=> {
  if (tokens && tokens.access && tokens.refresh) {
    const { access, refresh } = tokens;
    
    Cookies.set('token', `Bearer ${access.token}`);
    Cookies.set('tokenExpires', access.expires);

    Cookies.set('tokenRefresh', refresh.token);
    Cookies.set('tokenRefreshExpires', refresh.expires);
  }
}

export const isStatusOk = (response) => {
  return !response.error && (response.status >= 200 && response.status < 300);
}

export const hasError = ( password, name, isRegister)=> {
  let email = "prueba@prueba.com";
  if (!email || !password || (isRegister && !name)) {
    return 'EMPTY_FIELD';
  }
  if (!EMAIL_FORMAT.test(email)) {
    return 'BAG_EMAIL_FORMAT';
  }

  return false;
};
