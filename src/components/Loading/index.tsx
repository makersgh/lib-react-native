import React, { memo } from "react";
import { View, ActivityIndicator, Text } from "react-native";

import styles from "./styles";

export const Loading = ({
  style,
  textStyle,
  children,
  full = false,
  transparent = false,
}) => {
  return (
    <View style={[full ? styles.backgroundFull : styles.background, style]}>
      <ActivityIndicator size="large" color={styles.loadingColor} />
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};
export default memo(Loading);
