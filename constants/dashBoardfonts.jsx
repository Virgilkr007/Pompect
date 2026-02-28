import { Platform } from 'react-native';

const fonts = {
ui: Platform.select({ ios: 'Inter', android: 'Inter', default: 'system-ui' }),
};

const typography = {
titleLg: {
fontFamily: fonts.ui,
fontSize: 18,
fontWeight: '600',
lineHeight: 24,
},
inputMd: {
fontFamily: fonts.ui,
fontSize: 15,
fontWeight: '400',
lineHeight: 20,
},
heroTitle: {
fontFamily: fonts.ui,
fontSize: 20,
fontWeight: '700',
lineHeight: 26,
},
heroBody: {
fontFamily: fonts.ui,
fontSize: 15,
fontWeight: '800',
lineHeight: 20,
},
controlsHeader: {
fontFamily: fonts.ui,
fontSize: 15,
fontWeight: '600',
lineHeight: 20,
},
cardTitle: {
fontFamily: fonts.ui,
fontSize: 16,
fontWeight: '600',
lineHeight: 22,
},
cardBody: {
fontFamily: fonts.ui,
fontSize: 14,
fontWeight: '400',
lineHeight: 20,
},
metaXs: {
fontFamily: fonts.ui,
fontSize: 12,
fontWeight: '400',
lineHeight: 16,
},
btnMd: {
fontFamily: fonts.ui,
fontSize: 15,
fontWeight: '600',
lineHeight: 20,
},
navLabel: {
fontFamily: fonts.ui,
fontSize: 12,
fontWeight: '500',
lineHeight: 14,
},
};
export default typography;