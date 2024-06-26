import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
  TextStyle,
} from 'react-native';
import styles from './styles';
import { Text } from 'lib_components';
import { DefaultStyleProps, defaultStyles } from 'lib_styles';
import { theme } from 'lib_theme';

interface OwnProps extends DefaultStyleProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  icon?: React.ReactElement;
  isTransparent?: boolean;
  height?: number;
  isFullWidth?: boolean;
  isChildrenCentered?: boolean;
  isLoading?: boolean;
  isDisable?: boolean;
  isOutline?: boolean;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
}

type ButtonProps = OwnProps & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    icon,
    backgroundColor,
    isTransparent,
    height,
    isFullWidth,
    isChildrenCentered = true,
    isLoading,
    style,
    text,
    textStyle,
    isDisable,
    isOutline,
    margin,
    childrenContainerStyle,
    ...rest
  } = props;
  const baseBackgroundColor = theme.colors.primary;
  let buttonBackgroundColor = backgroundColor || baseBackgroundColor;
  const buttonBorderColor = backgroundColor || baseBackgroundColor;
  let buttonBorderWidth = 0;
  let padding = 0;
  let width = 'auto';
  let align:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined = 'flex-start';

  if (isTransparent) {
    buttonBackgroundColor = 'transparent';
    buttonBorderWidth = 0;
    padding = 0;
  }
  if (isFullWidth) {
    width = '100%';
  }
  if (isChildrenCentered) {
    align = 'center';
  }
  if (isDisable) {
    buttonBackgroundColor = theme.colors.info;
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: buttonBackgroundColor,
          borderColor: buttonBorderColor,
          borderWidth: buttonBorderWidth,
          padding: padding,
          margin: margin,
          width,
          height: height || 50,
        },
        style,
        ...defaultStyles(props),
      ]}
      disabled={isDisable}
      {...rest}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View
        style={[
          styles.buttonChildrenContainer,
          {
            width,
            justifyContent: align,
          },
          childrenContainerStyle,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <>
            {text && (
              <Text style={[styles.text, textStyle]}>
                {text}
              </Text>
            )}
            {children}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
