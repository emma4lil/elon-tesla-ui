import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const DarkThemeOrange: ThemeTypes = {
  name: 'DarkThemeOrange',
  dark: true,
  variables: {
    'border-color': '#FF7700',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#FF7700',      // Orange as primary color
    secondary: '#FFA500',    // Lighter orange as secondary
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#FF9E40',  // Light orange
    lightsecondary: '#FFB74D',
    lightsuccess: '#b9f6ca',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkText: '#FFFFFF',      // White text for dark theme
    lightText: '#E0E0E0',     // Light gray text
    darkprimary: '#E65100',   // Dark orange
    darksecondary: '#EF6C00',
    borderLight: '#424242',   // Dark gray border
    inputBorder: '#616161',
    containerBg: '#121212',   // Very dark gray/black background
    surface: '#1E1E1E',       // Dark surface
    'on-surface-variant': '#2D2D2D',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#212121',       // Dark gray
    primary200: '#FFAB40',    // Light orange
    secondary200: '#FFD180'   // Very light orange
  }
};

export { DarkThemeOrange };