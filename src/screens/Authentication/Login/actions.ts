import { useNavigation } from '@react-navigation/native';
import { FieldValues } from 'react-hook-form';

type onSubmitType = (data: FieldValues) => void;

export const useActions = () => {
  const navigator = useNavigation();
  const login: onSubmitType = (data) => {
    console.log(data);
  };
  const register: onSubmitType = (data) => {
    console.log(data);
  };
  const forgetPassword = () => {
    navigator.navigate('ForgetPassword');
  };

  const showPrivacyPolicy = () => {
    navigator.navigate('PrivacyPolicy');
  };

  return { login, register, forgetPassword, showPrivacyPolicy };
};
