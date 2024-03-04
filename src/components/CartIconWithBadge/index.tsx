import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Container from '../Container';
import styles from './styles';
interface CartIconWithBadgeProps {
  iconName: string;
  count: number;
  color: string;
  size: number;
}
export const CartIconWithBadge = (props: CartIconWithBadgeProps) => {
  return (
    <Container horizontal fullFlex fullWidth alignCenter justifyCenter>
      <Icon name={props.iconName} color={props.color} size={props.size} />
      {props.count > 0 && (
        <Container style={styles.badge}>
          <Text style={styles.badgeText}>{props.count}</Text>
        </Container>
      )}
    </Container>
  );
};

export default CartIconWithBadge;
