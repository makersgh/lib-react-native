import { useNavigation } from '@react-navigation/native';
import { FieldValues } from 'react-hook-form';

type onSubmitType = (data: FieldValues) => void;

export const useActions = () => {
  const navigator = useNavigation();
  const login: onSubmitType = (data) => {
    console.log(data);
  };

  const showPrivacyPolicy = () => {
    navigator.navigate('PrivacyPolicy');
  };

  return { login, showPrivacyPolicy };
};
