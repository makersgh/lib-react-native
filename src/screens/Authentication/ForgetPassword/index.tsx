import React, { FC } from 'react';
import {
  forgetPasswordFormElements,
  forgetPasswordSchema,
  ForgetPasswordText,
  RegisterText,
} from './constants';
import { useActions } from './actions';
import { FormBuilder } from 'lib_forms';
import { Button, Container, Logo, Text } from 'lib_components';
import { assets } from 'lib_styles';

export const ForgetPassword: FC = () => {
  const { forgetPassword } = useActions();
  return (
    <Container fullFlex padding={20}>
      <Container alignCenter fullFlex>
        <Logo imgSource={assets.images.forgetPassword} />
        <Text heading2>Forget Password</Text>
      </Container>
      <FormBuilder schema={forgetPasswordSchema} formElements={forgetPasswordFormElements} />
      <Button onPress={forgetPassword} text={ForgetPasswordText}/>
    </Container>
  );
};
