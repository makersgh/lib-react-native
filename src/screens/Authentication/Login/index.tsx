import React, { FC } from 'react';
import { loginFormElements, loginSchema, SubmitText } from './constants';
import { useActions } from './actions';
import { FormBuilder } from 'lib_forms';
import { Button, Container, Logo, Spacer, Text } from 'lib_components';

export const Login: FC = () => {
  const { login, showPrivacyPolicy } = useActions();
  return (
    <Container fullFlex padding={20}>
      <Container alignCenter fullFlex>
        <Logo />
        <Text heading2>Welcome!</Text>
        <Spacer />
        <Text>By signing in you agree to our</Text>
        <Text isLink onPress={showPrivacyPolicy}>Term and privacy policy</Text>
      </Container>
      <FormBuilder
        onSubmit={login}
        schema={loginSchema}
        formElements={loginFormElements}
        submitText={SubmitText}
      />
      <Button onPress={login} />
    </Container>
  );
};
