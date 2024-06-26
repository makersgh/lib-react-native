import { ColorValue, StyleSheet } from 'react-native';

export interface DefaultStyleProps {
  fullFlex?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  isPositionAbsolute?: boolean;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: ColorValue;
  isLoading?: boolean;
}
export const defaultStylesOptions = StyleSheet.create({
  fullFlex: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
});
const getBackgroundColor = (color: ColorValue) => {
  return StyleSheet.create({
    backgroundColor: {
      backgroundColor: color,
    },
  }).backgroundColor;
};

export const defaultStyles = (props: DefaultStyleProps) => [
  props.fullFlex && defaultStylesOptions.fullFlex,
  props.vertical && defaultStylesOptions.vertical,
  props.horizontal && defaultStylesOptions.horizontal,
  props.alignCenter && defaultStylesOptions.alignCenter,
  props.justifyCenter && defaultStylesOptions.justifyCenter,
  props.spaceBetween && defaultStylesOptions.spaceBetween,
  props.spaceAround && defaultStylesOptions.spaceAround,
  props.fullWidth && defaultStylesOptions.fullWidth,
  props.fullHeight && defaultStylesOptions.fullHeight,
  props.backgroundColor && getBackgroundColor(props.backgroundColor),
  props.isPositionAbsolute && defaultStylesOptions.positionAbsolute,
  props.margin && { margin: props.margin },
  props.marginTop && { marginTop: props.marginTop },
  props.marginBottom && { marginBottom: props.marginBottom },
  props.marginVertical && { marginVertical: props.marginVertical },
  props.marginHorizontal && { marginHorizontal: props.marginHorizontal },
  props.padding && { padding: props.padding },
  props.paddingVertical && { paddingVertical: props.paddingVertical },
  props.paddingHorizontal && { paddingHorizontal: props.paddingHorizontal },
];
