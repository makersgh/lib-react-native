import { StackScreen } from 'lib_navigation';
import { Landing } from './Landing';
import { Login } from './Login';
import { Register } from './Register';

export const Authentication: StackScreen = {
  name: 'Authentication',
  stackScreens: [
    {
      name: 'Landing',
      component: Landing
    },
    {
      name: 'Register',
      component: Register,
      options: {
      headerShown: true
      }
    },
    {
      name: 'Login',
      component: Login,
      options: {
      headerShown: true
      }
    },
    // {
    //   name: 'Forget Password',
    //   component: ForgetPassword
    // }
  ],
  
};