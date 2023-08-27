import * as React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { DefaultStyleProps, defaultStyles } from 'lib_styles';

interface OwnProps extends DefaultStyleProps {
  children?: React.ReactNode;
}

type ContainerProps = OwnProps & TouchableOpacityProps;

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, style, ...rest } = props;
  const {
    colors: { card },
  } = useTheme();
  return (
    <TouchableOpacity
      disabled={!props.onPress}
      style={[
        { backgroundColor: card },
        style,
        ...defaultStyles(props)
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Container;
