import { StackScreen } from 'lib_navigation';
import { Landing } from './Landing';
import { Login } from './Login';
import { Register } from './Register';

export const Authentication: StackScreen = {
  name: 'Authentication',
  options: {
    headerShown:false
  },
  stackScreens: [
    {
      name: 'Landing',
      component: Landing,
    },
    {
      name: 'Register',
      component: Register,
    },
    {
      name: 'Login',
      component: Login,
    },
    // {
    //   name: 'Forget Password',
    //   component: ForgetPassword
    // }
  ],
};