import { BoxProps } from '@shopify/restyle';
import { ImageProps as RNImageProps } from 'react-native';
import { Theme } from 'lib_theme';

export type ImageProps = BoxProps<Theme> & RNImageProps;
