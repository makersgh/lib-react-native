import { createBox } from '@shopify/restyle';
import { Image as RNImage } from 'react-native';
import { ImageProps } from './Image.type';
import { Theme } from 'lib_theme';

export const Image = createBox<Theme, ImageProps>(RNImage);
