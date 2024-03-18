import { VariantProps } from '@shopify/restyle';
import { Theme } from 'lib_theme';
import { ImageProps } from 'react-native';

export type CardCoverImageSizeVariants = VariantProps<
  Theme,
  'cardCoverImageSizeVariants',
  'size'
>;

export type CardCoverImageProps = ImageProps & CardCoverImageSizeVariants;
