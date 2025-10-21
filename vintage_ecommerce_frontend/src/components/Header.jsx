import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Header - Sticky top navigation with brand, nav links, and search input.
 */
export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--color-surface)',
        borderBottom: '1px solid rgba(17,24,39,0.06)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0' }}>
        <Link to="/" aria-label="Vintage Local home" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, fontWeight: 800, fontSize: 20 }}>
          <span style={{ color: 'var(--color-text)' }}>Vintage</span>
          <span style={{ color: 'var(--color-primary)' }}>Local</span>
        </Link>

        <nav style={{ display: 'none', gap: 16, marginLeft: 24 }} className="nav-links-desktop">
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/listings" style={linkStyle}>Listings</Link>
          <Link to="/sell" style={linkStyle}>Sell/Swap</Link>
          <Link to="/messages" style={linkStyle}>Messages</Link>
          <Link to="/profile" style={linkStyle}>Profile</Link>
        </nav>

        <div style={{ marginLeft: 'auto', width: '100%', maxWidth: 460 }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ position: 'relative' }}>
            <label htmlFor="site-search" className="visually-hidden">Search</label>
            <input
              id="site-search"
              placeholder="Search vintage treasures near you..."
              style={{
                width: '100%',
                padding: '10px 12px',
                paddingLeft: 40,
                borderRadius: '9999px',
                background: '#f3f4f6',
                border: '1px solid rgba(17,24,39,0.08)',
                outline: 'none',
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-secondary)',
              }}
            >
              🔍
            </span>
          </form>
        </div>
      </div>
      <style>
        {`
          @media (min-width: 900px) {
            .nav-links-desktop {
              display: inline-flex;
            }
          }
          .nav-link:hover { color: var(--color-primary); }
        `}
      </style>
    </header>
  );
}

const linkStyle = {
  color: 'var(--color-muted-text)',
  fontWeight: 600,
  padding: '6px 10px',
  borderRadius: '8px',
  transition: 'background 200ms ease, color 200ms ease, transform 200ms ease',
};
