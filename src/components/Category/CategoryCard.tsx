import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "lib_styles";

export type CategoryCardType = {
  new1?: string;

  /** Style props */
  categoryCardPosition?: string;
  categoryCardTop?: number | string;
  categoryCardLeft?: number | string;
  categoryCardWidth?: number | string;
  categoryCardHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CategoryCard = ({
  new1,
  categoryCardPosition,
  categoryCardTop,
  categoryCardLeft,
  categoryCardWidth,
  categoryCardHeight,
}: CategoryCardType) => {
  const categoryCardStyle = useMemo(() => {
    return {
      ...getStyleValue("position", categoryCardPosition),
      ...getStyleValue("top", categoryCardTop),
      ...getStyleValue("left", categoryCardLeft),
      ...getStyleValue("width", categoryCardWidth),
      ...getStyleValue("height", categoryCardHeight),
    };
  }, [
    categoryCardPosition,
    categoryCardTop,
    categoryCardLeft,
    categoryCardWidth,
    categoryCardHeight,
  ]);

  return (
    <View style={[styles.categoryCard, categoryCardStyle]}>
      <View style={[styles.categoryCardChild, styles.image41IconPosition]} />
      <Text style={styles.new}>{new1}</Text>
      <Image
        style={[styles.image41Icon, styles.image41IconPosition]}
        resizeMode="cover"
        source={require("../../assets/ecomm/image-41.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image41IconPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  categoryCardChild: {
    width: "100%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
  },
  new: {
    top: "39%",
    left: "6.71%",
    fontSize: FontSize.headline3_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.headline2,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  image41Icon: {
    width: "49.85%",
    left: "50.15%",
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  categoryCard: {
    width: 343,
    height: 100,
  },
});

export default CategoryCard;
