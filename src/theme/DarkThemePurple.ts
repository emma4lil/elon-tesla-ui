import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const DarkPurpleTheme: ThemeTypes = {
  name: 'DarkPurpleTheme',
  dark: true,  // This enables dark mode globally
  variables: {
    'border-color': '#7c4dff', // Brighter purple for borders
    'carousel-control-size': 10,
    'card-shadow': '0px 3px 10px rgba(0, 0, 0, 0.36)'
  },
  colors: {
    // Main colors
    primary: '#7c4dff',        // Vibrant purple
    secondary: '#b388ff',      // Lighter purple
    info: '#29b6f6',          // Bright blue
    success: '#69f0ae',       // Mint green
    accent: '#ff80ab',        // Pink accent
    warning: '#ffd54f',       // Amber
    error: '#ff8a80',         // Soft red

    // Light variants (used for alerts/badges)
    lightprimary: '#311b92',   // Deep purple
    lightsecondary: '#4527a0',
    lightsuccess: '#1b5e20',
    lighterror: '#b71c1c',
    lightwarning: '#ff6f00',

    // Text colors
    darkText: '#e0e0e0',       // Light gray for dark BG
    lightText: '#b0b0b0',      // Secondary text

    // Dark variants
    darkprimary: '#7c4dff',
    darksecondary: '#b388ff',

    // UI elements
    borderLight: '#424242',     // Dark gray borders
    inputBorder: '#616161',
    containerBg: '#121212',     // Dark background
    surface: '#1e1e1e',         // Card surfaces
    'on-surface-variant': '#e0e0e0',

    // Social colors
    facebook: '#4285f4',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',

    // Utility colors
    gray100: '#2d2d2d',
    primary200: '#9575cd',
    secondary200: '#d1c4e9'
  }
};

export { DarkPurpleTheme };