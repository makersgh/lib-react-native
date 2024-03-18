import { VariantProps, BoxProps } from '@shopify/restyle';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native/types';
import { CardCoverImageProps } from './CardCoverImage/CardCoverImage.type';
import { TextProps } from '../Text/Text.type';
import { Theme } from 'lib_theme';

export type CardVariants = VariantProps<Theme, 'cardVariants'>;

export type CardProps = BoxProps<Theme> &
  CardVariants & {
    title?: string;
    subTitle?: string;
    titleProps?: TextProps;
    subTitleProps?: TextProps;
    coverImage?: ImageSourcePropType | string;
    coverImageSize?: CardCoverImageProps['size'];
    coverImageProps?: CardCoverImageProps;
    onPress?: () => void;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
  };
