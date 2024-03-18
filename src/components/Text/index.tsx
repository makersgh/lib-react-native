import React from 'react';
import { createText } from '@shopify/restyle';
import { TextProps } from './Text.type';
import { Theme } from 'lib_theme';

const InnerText = createText<Theme>();

export const Text: React.FC<TextProps> = (props) => {
  return <InnerText {...props} />;
};
