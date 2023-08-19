import * as React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';

interface OwnProps {
  children?: React.ReactNode;
  fullFlex?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  isPositionAbsolute?: boolean;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

type ContainerProps = OwnProps & TouchableOpacityProps;

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, style, ...rest } = props;
  const {
    colors: { card },
  } = useTheme();
  return (
    <TouchableOpacity disabled={!props.onPress} style={[
      { backgroundColor: card },
      style,
      props.fullFlex && styles.fullFlex,
      props.vertical && styles.vertical,
      props.horizontal && styles.horizontal,
      props.alignCenter && styles.alignCenter,
      props.justifyCenter && styles.justifyCenter,
      props.spaceBetween && styles.spaceBetween,
      props.spaceAround && styles.spaceAround,
      props.fullWidth && styles.fullWidth,
      props.fullHeight && styles.fullHeight,
      props.isPositionAbsolute && styles.positionAbsolute,
      props.margin && { margin: props.margin },
      props.marginVertical && { marginVertical: props.marginVertical },
      props.marginHorizontal && { marginHorizontal: props.marginHorizontal },
      props.padding && { padding: props.padding },
      props.paddingVertical && { paddingVertical: props.paddingVertical },
      props.paddingHorizontal && { paddingHorizontal: props.paddingHorizontal }
    ]} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Container;
