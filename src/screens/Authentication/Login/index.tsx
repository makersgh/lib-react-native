import React, { FC } from 'react';
import { loginFormElements, loginSchema, SubmitText } from './constants';
import { useActions } from './actions';
import { FormBuilder } from 'lib_forms';
import { Button, Container, Logo } from 'lib_components';

export const Login: FC = () => {
  const { login } = useActions();
  return (
    <Container fullFlex padding={20}>
      <Container alignCenter fullFlex>
        <Logo />
      </Container>
      <FormBuilder
        onSubmit={login}
        schema={loginSchema}
        formElements={loginFormElements}
        submitText={SubmitText}
      />
      <Button onPress={login}/>
    </Container>
  );
};
