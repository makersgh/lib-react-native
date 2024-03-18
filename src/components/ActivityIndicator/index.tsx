import { createBox } from '@shopify/restyle';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { ActivityIndicatorProps } from './ActivityIndicator.type';
import { Theme, useAppTheme } from 'lib_theme';

const InnerActivityIndicator = createBox<Theme, ActivityIndicatorProps>(
  RNActivityIndicator,
);

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = (props) => {
  const { colors } = useAppTheme();
  return <InnerActivityIndicator color={colors.primary} {...props} />;
};
