import { commonService } from "./common";
import { setTokensInCookies } from "../utils/utils";
import Cookies from 'js-cookie';

export const register = async (email, name, password) => {
  const body = {
    email,
    password,
    name,
  }

  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
  }

  const response = await commonService(
    '/auth/register',
    method,
    body,
    headers,
  );

  setTokensInCookies(response.tokens);
  return response;
}

export const login = async (email, password) => {
  const body = {
    email,
    password,
  }

  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
  }

  const response = await commonService(
    '/products',
    method,
    body,
    headers,
  );

  setTokensInCookies(response.tokens);
  return response;
}

export const logout = async () => {
  const body = {
    refreshToken: Cookies.get('tokenRefresh')
  };

  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
  }

  const response = await commonService(
    '/auth/logout',
    method,
    body,
    headers,
  );

  return response;
}

