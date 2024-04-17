//Since we are moving to Cloudfront, we do not need setHeader, we can use Cookie for auth
/*const TOKEN = 'token';
export const setToken = (token: string) => localStorage.setItem(TOKEN, token);

export const getToken = () => {
  const token = localStorage.getItem(TOKEN);
  return token ? `Bearer ${token}` : '';
};*/

//We are going to use Cookies approach for best security practice
export const setToken = (token: string) => {};
export const getToken = () => '';

//or should have used localStorage.removeItem(TOKEN)
export const clearToken = () => localStorage.clear();
