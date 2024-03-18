import { VariantProps, TextProps as RestyleTextProps } from '@shopify/restyle';
import { Theme } from 'lib_theme';
import { TextProps as RNTextProps } from 'react-native';

export type TextVariants = VariantProps<Theme, 'textVariants'>;

export type TextProps = RestyleTextProps<Theme, true> &
  TextVariants & {
    children?: React.ReactNode;
  } & RNTextProps;
