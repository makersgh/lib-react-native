import { BoxProps } from '@shopify/restyle';
import { Theme } from 'lib_theme';
import { ActivityIndicatorProps as RNActivityIndicatorProps } from 'react-native';

export type ActivityIndicatorProps = RNActivityIndicatorProps & BoxProps<Theme>;
