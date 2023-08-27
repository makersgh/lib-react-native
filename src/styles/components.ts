import { StyleSheet } from 'react-native';

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
  marginVertical?: number;
  marginHorizontal?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}
const styles = StyleSheet.create({
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

export const defaultStyles = (props: DefaultStyleProps) => [
  props.fullFlex && styles.fullFlex,
  props.vertical && styles.vertical,
  props.horizontal && styles.horizontal,
  props.alignCenter && styles.alignCenter,
  props.justifyCenter && styles.justifyCenter,
  props.spaceBetween && styles.spaceBetween,
  props.spaceAround && styles.spaceAround,
  props.fullWidth && styles.fullWidth,
  props.fullHeight && styles.fullHeight,
  props.isPositionAbsolute && styles.positionAbsolute,
  props.margin && { margin: props.margin },
  props.marginVertical && { marginVertical: props.marginVertical },
  props.marginHorizontal && { marginHorizontal: props.marginHorizontal },
  props.padding && { padding: props.padding },
  props.paddingVertical && { paddingVertical: props.paddingVertical },
  props.paddingHorizontal && { paddingHorizontal: props.paddingHorizontal },
];
