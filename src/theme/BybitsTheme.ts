import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const BybitDarkTheme: ThemeTypes = {
  name: 'BybitDarkTheme',
  dark: true,
  variables: {
    'border-color': '#2D2D3A',
    'carousel-control-size': 10,
    'card-shadow': '0 4px 20px rgba(0, 0, 0, 0.25)',
    'hover-opacity': 0.85
  },
  colors: {
    // Core Colors
    primary: '#FCD535',      // Bybit's signature yellow
    secondary: '#f3bd5a',    // Dark slate
    info: '#2172E5',         // Bybit blue
    success: '#0ECB81',      // Bybit green
    accent: '#F6465D',       // Bybit red
    warning: '#F0B90B',      // Warning yellow
    error: '#F6465D',        // Error red

    // Light Variants (for alerts/badges)
    lightprimary: 'rgba(252, 213, 53, 0.16)',
    lightsecondary: 'rgba(246,149,13,0.5)',
    lightsuccess: 'rgba(14, 203, 129, 0.16)',
    lighterror: 'rgba(238,173,9,0.16)',
    lightwarning: 'rgba(240, 185, 11, 0.16)',

    // Vibrant Text Colors
    darkText: '#FFFFFF',       // Pure white (primary text)
    lightText: '#E9E9E9',      // Soft white (secondary text)

    // Dark Variants
    darkprimary: '#E8C34A',    // Darker yellow
    darksecondary: '#23232D',  // Darker slate

    // UI Elements
    borderLight: '#2D2D3A',     // Borders
    inputBorder: '#474D57',     // Input borders
    containerBg: '#0B0E11',     // Main background
    surface: '#1E2329',         // Card surfaces
    'on-surface-variant': '#E9E9E9', // Surface text

    // Social Colors
    facebook: '#4267B2',
    twitter: '#1DA1F2',
    linkedin: '#0E76A8',

    // Grayscale
    gray100: '#2D2D3A',
    primary200: '#F8E8A0',      // Light yellow
    secondary200: '#3E3E4B',    // Light slat
  }
};

export { BybitDarkTheme };