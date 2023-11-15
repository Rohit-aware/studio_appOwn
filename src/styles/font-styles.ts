import { TextStyle } from "react-native/types";

import { moderateScale } from 'react-native-size-matters';
import Typography from "../constants/typography";
import Colors from "../constants/colors";

interface FontStyleProp<T = TextStyle> {
  InterMedium10: T;
  InterMedium12: T;
  InterMedium14: T;
  InterMedium16: T;
  InterMedium20: T;
  InterLight10: T;
  InterLight12: T;
  InterLight14: T;
  InterLight16: T;
  InterLight20: T;
  InterRegular10: T;
  InterRegular12: T;
  InterRegular14: T;
  InterRegular16: T;
  InterRegular20: T;
  InterSemiBold10: T;
  InterSemiBold12: T;
  InterSemiBold14: T;
  InterSemiBold16: T;
  InterSemiBold18: T;
  InterSemiBold20: T;
  InterSemiBold24: T;
  InterBold10: T;
  InterBold12: T;
  InterBold14: T;
  InterBold16: T;
  InterBold18: T;
  InterBold20: T;
  InterBold24: T;

  lexisALTBold: T
  lemondaBold24: T
  quicksandRegular12: T

  _InterBold: (
    fontFamily: typeof Typography.InterBold,
    fontSize: number,
    color: string
  ) => T;

  _InterSemiBold: (
    fontFamily: typeof Typography.InterSemiBold,
    fontSize: number,
    color: string
  ) => T;

  _InterRegular: (
    fontFamily: typeof Typography.InterRegular,
    fontSize: number,
    color: string
  ) => T;
  _InterMedium: (
    fontFamily: typeof Typography.InterMedium,
    fontSize: number,
    color: string
  ) => T;
  _InterLight: (
    fontFamily: typeof Typography.InterLight,
    fontSize: number,
    color: string
  ) => T;

}

const fontStyles: FontStyleProp<TextStyle> = {
  _InterBold: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _InterLight: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _InterSemiBold: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _InterRegular: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _InterMedium: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },


  InterBold10: {
    fontFamily: Typography.InterBold,
    fontSize: moderateScale(10, 0.3),
    color: Colors.black
  },
  InterBold12: {
    fontFamily: Typography.InterBold,
    fontSize: moderateScale(12, .3),
    color: Colors.black
  },
  InterBold14: {
    fontFamily: Typography.InterBold,
    fontSize: moderateScale(14, .3),
    color: Colors.black
  },
  InterBold16: {
    fontFamily: Typography.InterBold,
    fontSize: moderateScale(16, .3),
    color: Colors.black
  },
  InterBold18: {
    fontFamily: Typography.InterBold,
    fontSize: moderateScale(18, .3),
    color: Colors.black
  },
  InterBold20: {
    fontFamily: Typography.InterBold,
    fontSize: moderateScale(20, .3),
    color: Colors.black
  },
  InterBold24: {
    fontFamily: Typography.InterBold,
    fontSize: moderateScale(24, .3),
    color: Colors.black
  },
  InterSemiBold10: {
    fontFamily: Typography.InterSemiBold,
    fontSize: moderateScale(10, .3),
    color: Colors.black
  },
  InterSemiBold12: {
    fontFamily: Typography.InterSemiBold,
    fontSize: moderateScale(12, .3),
    color: Colors.black
  },
  InterSemiBold14: {
    fontFamily: Typography.InterSemiBold,
    fontSize: moderateScale(14, .3),
    color: Colors.black
  },
  InterSemiBold16: {
    fontFamily: Typography.InterSemiBold,
    fontSize: moderateScale(16, .3),
    color: Colors.black
  },
  InterSemiBold18: {
    fontFamily: Typography.InterSemiBold,
    fontSize: moderateScale(18, .3),
    color: Colors.black
  },
  InterSemiBold20: {
    fontFamily: Typography.InterSemiBold,
    fontSize: moderateScale(20, .3),
    color: Colors.black
  },
  InterSemiBold24: {
    fontFamily: Typography.InterSemiBold,
    fontSize: moderateScale(24, .3),
    color: Colors.black
  },
  InterRegular10: {
    fontFamily: Typography.InterRegular,
    fontSize: moderateScale(10, .3),
    color: Colors.black
  },
  InterRegular12: {
    fontFamily: Typography.InterRegular,
    fontSize: moderateScale(12, .3),
    color: Colors.black
  },
  InterRegular14: {
    fontFamily: Typography.InterRegular,
    fontSize: moderateScale(14, .3),
    color: Colors.black
  },
  InterRegular16: {
    fontFamily: Typography.InterRegular,
    fontSize: moderateScale(16, 0.3),
    color: Colors.black
  },
  InterRegular20: {
    fontFamily: Typography.InterRegular,
    fontSize: moderateScale(20, .3),
    color: Colors.black
  },
  InterLight10: {
    fontFamily: Typography.InterLight,
    fontSize: moderateScale(10, .3),
    color: Colors.black
  },
  InterLight12: {
    fontFamily: Typography.InterLight,
    fontSize: moderateScale(12, .3),
    color: Colors.black
  },
  InterLight14: {
    fontFamily: Typography.InterLight,
    fontSize: moderateScale(14, .3),
    color: Colors.black
  },
  InterLight16: {
    fontFamily: Typography.InterLight,
    fontSize: moderateScale(16, .3),
    color: Colors.black
  },
  InterLight20: {
    fontFamily: Typography.InterLight,
    fontSize: moderateScale(20, .3),
    color: Colors.black
  },
  InterMedium10: {
    fontFamily: Typography.InterMedium,
    fontSize: moderateScale(10, .3),
    color: Colors.black
  },
  InterMedium12: {
    fontFamily: Typography.InterMedium,
    fontSize: moderateScale(12, .3),
    color: Colors.black
  },
  InterMedium14: {
    fontFamily: Typography.InterMedium,
    fontSize: moderateScale(14, .3),
    color: Colors.black
  },
  InterMedium16: {
    fontFamily: Typography.InterMedium,
    fontSize: moderateScale(16, .3),
    color: Colors.black
  },
  InterMedium20: {
    fontFamily: Typography.InterMedium,
    fontSize: moderateScale(20, 0.3),
    color: Colors.black
  },

};

export default fontStyles;
