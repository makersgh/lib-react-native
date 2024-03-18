import { BoxProps } from '@shopify/restyle';
import { Theme } from 'lib_theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type IconProps = {
  isPrimary?: boolean;
} & BoxProps<Theme> &
  React.ComponentPropsWithoutRef<typeof Ionicons>;
