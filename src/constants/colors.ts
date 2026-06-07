export const colors = {
  primary: '#075E54',
  primaryLight: '#128C7E',
  primaryDark: '#054740',
  secondary: '#25D366',
  secondaryLight: '#DCF8C6',
  accent: '#34B7F1',
  
  background: '#FFFFFF',
  surface: '#F5F5F5',
  error: '#DC2626',
  success: '#059669',
  warning: '#D97706',
  info: '#3B82F6',
  
  text: '#111827',
  textSecondary: '#6B7280',
  textLight: '#9CA3AF',
  textInverse: '#FFFFFF',
  
  border: '#E5E7EB',
  divider: '#F3F4F6',
  
  online: '#25D366',
  offline: '#9CA3AF',
  typing: '#34B7F1',
  
  dark: {
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#A0A0A0',
    border: '#2C2C2C',
    divider: '#2C2C2C',
  },
} as const;

export type ColorScheme = typeof colors;
