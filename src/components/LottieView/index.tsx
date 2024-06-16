import React from 'react';
import RNLottie, { AnimatedLottieViewProps } from 'lottie-react-native';
import { createBox } from '@shopify/restyle';
import { LottieViewProps } from './LottieView.type';
import { Theme } from 'lib_theme';

const InnerLottie = createBox<Theme, AnimatedLottieViewProps>(RNLottie);

export const LottieView: React.FC<LottieViewProps> = (props) => {
  return <InnerLottie {...props} />;
};
