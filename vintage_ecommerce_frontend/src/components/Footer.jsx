import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Footer - Site-wide footer with links and subtle styling.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid rgba(17,24,39,0.06)',
        marginTop: 32
      }}
    >
      <div
        className="container"
        style={{
          padding: '20px 0',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ color: 'var(--color-muted-text)', fontSize: 14 }}>
          © {year} Vintage Local. All rights reserved.
        </div>
        <nav style={{ display: 'flex', gap: 16, fontSize: 14 }}>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/help" style={linkStyle}>Help</Link>
          <Link to="/terms" style={linkStyle}>Terms</Link>
          <Link to="/privacy" style={linkStyle}>Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: 'var(--color-secondary)',
  transition: 'color 200ms ease',
};
