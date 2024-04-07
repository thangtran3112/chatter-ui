import router from '../components/Routes';
import client from '../constants/apollo-client';
import { authenticatedVar } from '../constants/authenticated';
import { clearToken } from './token';

export const onLogout = () => {
  authenticatedVar(false);
  clearToken();
  //somehow, without refreshing login page, we are not clear of resetStore(), causing Unauthorized
  window.location.href = '/login';
  //another option is router.navigate('/login')
  //not sure if router could work, outside of <BrowserRouter>component scope

  //we still want the router to keep track of its path, because, the App is subscribing to router path
  router.navigate('/login');
  client.resetStore();
};
