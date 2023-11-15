import { I18nManager, TextStyle, TouchableWithoutFeedback } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { ViewStyle } from 'react-native/types';

interface commonStyles {
  flexOne: ViewStyle;
  // hitSlop: HitSlop;
  flexGrow: ViewStyle;
  flexRow: ViewStyle;
  flexColumn: ViewStyle;
  flexColumnJACA: ViewStyle;
  flexRowJCAC: ViewStyle;
  alignSelfCenter: ViewStyle;
  centerJCAC: ViewStyle;
  commonSpace: ViewStyle;
  commonShadow: ViewStyle;
  RowJFSAC: ViewStyle;
  RowJFEAC: ViewStyle;
  RowJFS: ViewStyle;
  RowJSBAC: ViewStyle;
  writingDirection: TextStyle;
  transformLRTRTL: ViewStyle;
  _flexGrowBg: (value: string) => ViewStyle;
  _flexOneBg: (value: string) => ViewStyle;
  _commonSpace: (value: number) => ViewStyle;
  _commonShadow: (value: {
    shadowColor: string;
    width: number;
    height: number;
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  }) => ViewStyle;
}

const commonStyles: commonStyles = {
  writingDirection: {
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  transformLRTRTL: {
    transform: [
      {
        scaleX: I18nManager.isRTL ? -1 : 1,
      },
    ],
  },

  flexOne: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },

  _flexGrowBg(value) {
    return {
      flexGrow: 1,
      backgroundColor: value,
    };
  },
  _flexOneBg(value) {
    return {
      flex: 1,
      backgroundColor: value,
    };
  },
  flexRowJCAC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexColumnJACA: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerJCAC: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  RowJFSAC: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
  RowJFEAC: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' },
  RowJSBAC: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  RowJFS: { flexDirection: 'row', justifyContent: 'flex-start' },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  commonSpace: {
    paddingHorizontal: moderateScale(20),
  },
  _commonSpace: value => {
    return {
      paddingHorizontal: moderateScale(value),
    };
  },
  commonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 0.65,

    elevation: 3,
  },
  _commonShadow: value => {
    return {
      shadowColor: value.shadowColor,
      shadowOffset: {
        width: value.width,
        height: value.height,
      },
      shadowOpacity: value.shadowOpacity,
      shadowRadius: value.shadowRadius,

      elevation: value.elevation,
    };
  },
};

export default commonStyles;
