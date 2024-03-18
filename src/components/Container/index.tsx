import * as React from 'react';
import { SafeAreaView, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { DefaultStyleProps, defaultStyles, defaultStylesOptions } from 'lib_styles';
import { theme } from 'lib_theme';

interface OwnProps {
  children?: React.ReactNode;
  isSafeAreaView?: boolean;
}

type ContainerProps = OwnProps & DefaultStyleProps & TouchableOpacityProps;

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, style, isSafeAreaView, ...rest } = props;
  const {
    colors: { card },
  } = theme;
  return (
    <TouchableOpacity
      disabled={!props.onPress}
      style={[ style, ...(defaultStyles(props) as any)]}
      {...rest}
    >
      {isSafeAreaView ? (
        <SafeAreaView style={defaultStylesOptions.fullFlex}>{children}</SafeAreaView>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Container;
