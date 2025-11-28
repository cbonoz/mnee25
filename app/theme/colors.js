// OpenQuote Brand Color Palette
export const colors = {
  // Primary brand colors - Updated to lavender/blue theme
  primary: '#6b9eff',
  primaryLight: '#8ab4ff',
  primaryDark: '#4a7fd4',
  
  // Secondary colors - Complementary palette
  secondary: '#cceaf4',
  secondaryLight: '#e0f2ff',
  secondaryDark: '#9dcbf0',
  
  // Neutral colors
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Status colors
  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4d4f',
  info: '#6b9eff',
  
  // Background colors
  background: {
    primary: '#ffffff',
    secondary: '#f5f9fd',
    tertiary: '#f0f6fb',
    gradient: 'linear-gradient(135deg, #f0f8ff 0%, #cceaf4 100%)',
    gradientPrimary: 'linear-gradient(135deg, #6b9eff 0%, #cceaf4 100%)',
  },
  
  // Brand specific colors
  brand: {
    blue: '#cceaf4', // Light blue primary
    lavender: '#e0f2ff', // Light lavender background
    cyan: '#b3e5fc', // Light cyan accent
  }
};

// Ant Design theme configuration
export const antdTheme = {
  token: {
    colorPrimary: colors.primary,
    colorSuccess: colors.success,
    colorWarning: colors.warning,
    colorError: colors.error,
    colorInfo: colors.info,
    colorLink: colors.primary,
    colorLinkHover: colors.primaryLight,
    colorLinkActive: colors.primaryDark,
    borderRadius: 6,
    colorBgContainer: colors.white,
    colorBgLayout: colors.background.secondary,
  },
  components: {
    Button: {
      colorPrimary: colors.primary,
      colorPrimaryHover: colors.primaryLight,
      colorPrimaryActive: colors.primaryDark,
      borderRadius: 6,
      fontWeight: 600,
    },
    Input: {
      borderRadius: 6,
      colorPrimary: colors.primary,
    },
    Card: {
      borderRadius: 12,
    },
    Steps: {
      colorPrimary: colors.primary,
    },
    Select: {
      colorPrimary: colors.primary,
      borderRadius: 6,
    },
    Form: {
      labelColor: colors.gray[700],
    },
  },
};

export default colors;
