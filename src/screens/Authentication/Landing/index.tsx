import * as React from 'react';
import { View, Image } from 'react-native';
import { Container, Text, Button, Logo } from 'lib_components';
import styles from './styles';
import useActions from './actions';
import { assets } from 'lib_styles';

export const Landing = () => {
  const { handleAuthLogin, handleAuthRegister } = useActions();

  return (
    <Container fullFlex>
      <Container alignCenter fullFlex>
        <Logo />
        <Text variant={'subHeader'} style={styles.introductionText}>
          Welcome!
        </Text>
        <Image source={assets.images.biker} style={styles.biker} />
      </Container>
      <Container style={styles.loginMethodContainer}>
        <Button
          label={"Sign up - it's free"}
          style={styles.button}
          isFullWidth
          onPress={handleAuthRegister}
        />
        <Button label={'Log in'} style={styles.button} isFullWidth onPress={handleAuthLogin} />
      </Container>
    </Container>
  );
};

export default Landing;
