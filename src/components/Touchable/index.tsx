import * as React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
} from 'react-native';

export type TouchableProps = {} & TouchableNativeFeedbackProps & TouchableOpacityProps;

export const Touchable: React.FC<TouchableProps> = ({children, ...rest}) => {
  return Platform.OS === 'ios' ? (
    <TouchableOpacity {...rest}>{children}</TouchableOpacity>
  ) : (
    <TouchableNativeFeedback {...rest}>{children}</TouchableNativeFeedback>
  );
};

