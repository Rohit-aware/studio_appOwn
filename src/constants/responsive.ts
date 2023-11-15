import { Dimensions, PixelRatio, View } from "react-native";

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get("screen");


export const widthToDp = (value: number) => {

  return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * value / 100);

};




export const heightTopDp = (value: number) => {

  return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * value);

};


