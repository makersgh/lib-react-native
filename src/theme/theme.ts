import { createTheme } from '@shopify/restyle';
import { palette } from './theme-palette';
import { StyleProp, ViewStyle } from 'react-native';

export const theme = createTheme({
  borderRadii: {
    none: 0,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    xxl: 32,
    xxxl: 100,
  },
  spacing: {
    'none': 0,
    'xxs': 2,
    'xs': 4,
    's': 8,
    'm': 16,
    'l': 24,
    'xl': 32,
    'xxl': 64,
    '10%': '10%',
    '20%': '20%',
    '30%': '30%',
    '40%': '40%',
    '50%': '50%',
  },
  colors: {
    primary: palette.blue,
    secondary: palette.orange,
    background: palette.gray[100],
    card: palette.white,
    text: palette.gray[900],
    border: palette.gray[300],
    danger: palette.red,
    warning: palette.yellow,
    success: palette.green,
    info: palette.blue,
    black: palette.black,
    white: palette.white,
    transparent: 'transparent',
    facebook: palette.facebook,
    google: palette.google,
    dividerDefaultColor: '#E6E6E6',
    mapsRoutelines: '#4a80f5'
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      color: 'text',
      fontSize: 16,
    },
    primary: {
      color: 'primary',
      fontSize: 16,
    },
    secondary: {
      color: 'secondary',
      fontSize: 14,
    },
    largeHeader: {
      fontWeight: 'bold',
      fontSize: 28,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    subHeader: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
  buttonVariants: {
    defaults: {
      backgroundColor: 'primary',
    },
    primary: {
      backgroundColor: 'primary',
    },
    danger: {
      backgroundColor: 'danger',
    },
    warning: {
      backgroundColor: 'warning',
    },
    success: {
      backgroundColor: 'success',
    },
    info: {
      backgroundColor: 'info',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'primary',
    },
    transparent: {
      backgroundColor: 'transparent',
    },
    facebook: {
      backgroundColor: 'facebook',
    },
    google: {
      backgroundColor: 'google',
    },
  },
  buttonSizeVariants: {
    defaults: {
      paddingVertical: 'm',
      paddingHorizontal: 'm',
    },
    xs: {
      paddingVertical: 'xs',
      paddingHorizontal: 'xs',
    },
    s: {
      paddingVertical: 's',
      paddingHorizontal: 's',
    },
    m: {
      paddingVertical: 'm',
      paddingHorizontal: 'm',
    },
    l: {
      paddingVertical: 'l',
      paddingHorizontal: 'l',
    },
  },
  cardVariants: {
    defaults: {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    flat: {
      borderWidth: 1,
      borderColor: 'border',
    },
  },
  cardCoverImageSizeVariants: {
    defaults: {
      height: 125,
    },
    s: {
      height: 100,
    },
    m: {
      height: 150,
    },
    l: {
      height: 150,
    },
  },
  get input(): StyleProp<ViewStyle> {
    return {
      borderRadius: 5,
      height: 45,
      borderBottomWidth: 0.5,
      borderBottomColor: this.colors.border,
    };
  },
  get button() {
    return {
      borderRadius: 8,
      height: 45,
      backgroundColor: theme.colors.primary,
    };
  },
  get buttonDisbled() {
    return {
      ...this.button,
      backgroundColor: theme.colors.disbled,
    };
  },
  get text() {
    return {
    };
  },
  textFontSizes: {
    heading1: 26,
    heading2: 22,
    heading3: 20,
    heading4: 17,
    regular: 14,
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: palette.gray[100],
    secondary: palette.gray[400],
    background: palette.gray[950],
    card: palette.gray[800],
    border: palette.gray[600],
  },
};
