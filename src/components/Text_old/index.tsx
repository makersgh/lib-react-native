import { createText } from '@shopify/restyle';
import { Theme, theme } from 'lib_theme';
import * as React from 'react';
import { Text as BaseText, TextProps as BaseTextProps } from 'react-native';

const InnerText = createText<Theme>();

interface TextProps extends BaseTextProps {
  children?: React.ReactNode;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isBold?: boolean;
  isSemiBold?: boolean;
  isHeadingTitle?: boolean;
  heading1?: boolean;
  heading2?: boolean;
  heading3?: boolean;
  heading4?: boolean;
  isCenter?: boolean;
  isWhite?: boolean;
  hasMargin?: boolean;
  isLink?: boolean;
  isError?: boolean;
  price?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  isSecondary,
  isWhite,
  isBold,
  isSemiBold,
  isHeadingTitle,
  isCenter,
  hasMargin,
  heading1,
  heading2,
  heading3,
  heading4,
  isLink,
  isError,
  style,
  price,
  ...rest
}) => {
  let color = theme.colors.text;
  let fontSize = heading1
    ? theme.textVariants.largeHeader.fontSize
    : heading2
    ? theme.textVariants.header.fontSize
    : heading3
    ? theme.textVariants.subHeader.fontSize
    : heading4
    ? theme.textVariants.primary.fontSize
    : theme.textVariants.primary.fontSize;
  let marginTop = 0;
  let textDecorationLine:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined = 'none';
  let textAlign: 'auto' | 'center' | 'left' | 'right' | 'justify' | undefined;

  if (isSecondary) {
    color = theme.colors.secondary;
    fontSize = 13;
  }

  if (isHeadingTitle) {
    fontSize = theme.textVariants.header.fontSize;
  }

  if (isWhite) {
    color = theme.colors.white;
  }

  if (isCenter) {
    textAlign = 'center';
  }

  if (hasMargin) {
    marginTop = 10;
  }

  if (isLink) {
    textDecorationLine = 'underline';
  }

  if (isError) {
    color = theme.colors.danger;
  }

  // const fontFamily =
  //   isBold || heading1 || heading2 || heading3 || heading4
  //     ? theme.
  //     : isSemiBold
  //     ? theme.defaultFontFamilySemibold
  //     : theme.defaultFontFamilyRegular;
  return (
    <InnerText
      {...rest}
      style={[
        {
          color,
          // fontFamily,
          fontSize,
          textAlign,
          marginTop,
          textDecorationLine,
        },
        style,
      ]}
    >
      {children}
    </InnerText>
  );
};

export default Text;
