//
// PUBLIC_INTERFACE
// Theme tokens for the Ocean Professional theme.
// Provides color constants and CSS variable injection for consistent styling across components.
//
export const theme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    success: '#06b6d4',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    mutedText: '#6b7280',
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.06)',
    md: '0 4px 12px rgba(0,0,0,0.08)',
    lg: '0 12px 24px rgba(0,0,0,0.12)',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  gradients: {
    heroOverlay: 'linear-gradient(180deg, rgba(59,130,246,0.10) 0%, rgba(248,250,252,0.65) 100%)',
    tileOverlay: 'linear-gradient(180deg, rgba(17,24,39,0.1) 0%, rgba(17,24,39,0.5) 100%)',
  }
};

// PUBLIC_INTERFACE
export function injectThemeVariables() {
  /**
   * Inject CSS variables into :root for global usage in CSS files.
   */
  const root = document.documentElement;
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-secondary', theme.colors.secondary);
  root.style.setProperty('--color-success', theme.colors.success);
  root.style.setProperty('--color-error', theme.colors.error);
  root.style.setProperty('--color-background', theme.colors.background);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-muted-text', theme.colors.mutedText);

  root.style.setProperty('--shadow-sm', theme.shadows.sm);
  root.style.setProperty('--shadow-md', theme.shadows.md);
  root.style.setProperty('--shadow-lg', theme.shadows.lg);

  root.style.setProperty('--radius-sm', theme.radius.sm);
  root.style.setProperty('--radius-md', theme.radius.md);
  root.style.setProperty('--radius-lg', theme.radius.lg);
  root.style.setProperty('--radius-xl', theme.radius.xl);

  root.style.setProperty('--gradient-hero-overlay', theme.gradients.heroOverlay);
  root.style.setProperty('--gradient-tile-overlay', theme.gradients.tileOverlay);
}
