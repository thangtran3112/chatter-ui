/* eslint-disable no-undef */
import { getToken } from './token';

/**
 * Wrapping the common fetch function for REST API with our customed authorization header
 */
export const commonFetch = async (input: RequestInfo, init?: RequestInit) => {
  return fetch(input, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      authorization: getToken(),
    },
  });
};
