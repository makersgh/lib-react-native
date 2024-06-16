import React, { FC } from 'react';
import { loginFormElements, loginSchema, LoginText, RegisterText } from './constants';
import { useActions } from './actions';
import { FormBuilder } from 'lib_forms';
import { Box, Button, Container, Logo, Spacer, Text } from 'lib_components';
import { assets } from 'lib_styles';
import { theme } from 'lib_theme';

export const Login: FC = () => {
  const { formRef, error, login, register, forgetPassword, showPrivacyPolicy } = useActions();
  return (
    <Container isSafeAreaView fullFlex padding={16} backgroundColor={theme.colors.white}>
      <Box alignItems={'center'}>
        <Logo imgSource={assets.images.signin} />
        <Text>Welcome!</Text>
        <Spacer />
        <Text>By signing in you agree to our</Text>
        <Text color={'info'} onPress={showPrivacyPolicy}>
          Term and privacy policy
        </Text>
      </Box>
      <Box flex={1} paddingVertical={'l'} justifyContent={'center'}>
        <FormBuilder
          ref={formRef}
          // onSubmit={login}
          schema={loginSchema}
          formElements={loginFormElements}
        />
      </Box>
      {error ? <Text color={'danger'}>{error}</Text> : null}
      <Text color={'info'} onPress={forgetPassword}>
        Forgot Password
      </Text>
      <Spacer />
      <Box flexDirection={'row'}>
        <Box flex={1}>
          <Button onPress={login} label={LoginText} isFullWidth />
        </Box>
        <Spacer width={10} />
        <Box flex={1}>
          <Button onPress={register} label={RegisterText} isFullWidth />
        </Box>
      </Box>
    </Container>
  );
};
