import * as React from 'react';
import { Container, Text, Button, Logo } from 'lib_components';
import styles from './styles';
import useActions from './actions';

export const Landing = () => {
  const { myState, myCallback } = useActions();

  return (
    <Container fullFlex>
      <Container alignCenter fullFlex>
        <Logo />
        <Text heading2 style={styles.introductionText}>
          Welcome!
        </Text>
        <Text heading2 style={styles.introductionText}>
          {myState}
        </Text>
      </Container>
      <Container style={styles.loginMethodContainer}>
        <Button text={'My Button'} style={styles.button} isFullWidth onPress={myCallback} />
      </Container>
    </Container>
  );
};

export default Landing;
