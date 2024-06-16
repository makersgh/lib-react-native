import { StackScreen } from 'lib_navigation';
import { Login } from './Login';
import { ForgetPassword } from './ForgetPassword';

export const Authentication: StackScreen = {
  name: 'Authentication',
  stackScreens: [
    {
      name: 'Login',
      component: Login,
    },
    {
      name: 'ForgetPassword',
      component: ForgetPassword,
      options: {
        headerShown: true,
        title: '',
      },
    },
  ],
};
