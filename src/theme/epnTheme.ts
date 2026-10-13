export const EPN_THEME = {
  colors: {
    primary: '#1e3453',
    accent: '#fcc54f',
    accentText: '#e4ab30',
    surface: '#FFFFFF',
    background: '#F8F9FA',
    text: '#4A4A4A',
    border: '#E2E8F0',
    error: '#D62C27',
    muted: '#c02222d0',
    mutedLight: '#A0AEC0',
  },
  radius: {
    sm: 4,
    md: 8,
    full: 9999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: '700',
    },
    h2: {
      fontSize: 22,
      fontWeight: '700',
    },
    h3: {
      fontSize: 17,
      fontWeight: '600',
    },
    body: {
      fontSize: 15,
      fontWeight: '400',
    },
    small: {
      fontSize: 13,
      fontWeight: '400',
    },
  },
} as const;
