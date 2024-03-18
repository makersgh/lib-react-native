import RNDateTimePicker, {
  AndroidNativeProps,
  IOSNativeProps,
} from '@react-native-community/datetimepicker';
import { BoxProps } from '@shopify/restyle';
import { Theme } from 'lib_theme';
export type DateTimePickerProps = React.ComponentPropsWithoutRef<
  typeof RNDateTimePicker
> &
  IOSNativeProps &
  AndroidNativeProps &
  BoxProps<Theme>;
