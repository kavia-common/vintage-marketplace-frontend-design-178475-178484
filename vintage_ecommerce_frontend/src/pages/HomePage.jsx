import React from 'react';

/**
 * PUBLIC_INTERFACE
 * HomePage - Landing page with hero banner and category tiles.
 * Renders: Hero with overlay and CTAs, followed by a responsive grid of category tiles.
 */
export default function HomePage() {
  return (
    <>
      <section className="hero-section" style={heroSectionStyle}>
        <div style={heroOverlayStyle} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 760, padding: '40px 0' }}>
            <h1 style={heroTitleStyle}>Discover and trade local vintage gems</h1>
            <p style={heroSubtitleStyle}>
              Browse unique finds from your neighborhood. Buy, sell, or swap with a trusted local community.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
              <a className="btn btn-primary" href="/listings">Browse</a>
              <a className="btn btn-outline" href="/sell">Sell an Item</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '32px 0' }}>
        <header style={{ marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 22 }}>Browse by category</h2>
          <p style={{ margin: '6px 0 0', color: 'var(--color-secondary)' }}>
            Find fashion, furniture, and more. Curated categories for quick discovery.
          </p>
        </header>

        <div className="category-grid" style={gridStyle}>
          {categories.map((cat) => (
            <a key={cat.title} href={cat.href} className="card shadow-hover" style={{ ...tileStyle, backgroundImage: cat.bg }}>
              <div style={tileOverlayStyle} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={tileTitleStyle}>{cat.title}</h3>
                <p style={tileSubtitleStyle}>{cat.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <style>
        {responsiveCSS}
      </style>
    </>
  );
}

const heroImage = 'linear-gradient(0deg, rgba(17,24,39,0.15), rgba(17,24,39,0.15)), url("/assets/placeholder-hero.jpg")';

const heroSectionStyle = {
  position: 'relative',
  isolation: 'isolate',
  minHeight: 340,
  display: 'flex',
  alignItems: 'center',
  background: heroImage,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderBottomLeftRadius: 'var(--radius-xl)',
  borderBottomRightRadius: 'var(--radius-xl)',
  boxShadow: 'var(--shadow-sm)',
};

const heroOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'var(--gradient-hero-overlay)',
  zIndex: 1,
};

const heroTitleStyle = {
  margin: 0,
  fontSize: 36,
  lineHeight: 1.2,
  color: 'var(--color-text)',
  textShadow: '0 1px 0 rgba(255,255,255,0.6)',
};

const heroSubtitleStyle = {
  marginTop: 8,
  color: 'var(--color-secondary)',
  fontSize: 16,
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: 16,
};

const tileStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 'var(--radius-lg)',
  padding: 20,
  minHeight: 160,
  color: 'white',
  display: 'flex',
  alignItems: 'flex-end',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textDecoration: 'none'
};

const tileOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg, rgba(17,24,39,0.15) 0%, rgba(17,24,39,0.5) 100%)',
  zIndex: 1,
};

const tileTitleStyle = {
  margin: 0,
  fontSize: 20,
  fontWeight: 800,
  textShadow: '0 1px 2px rgba(0,0,0,0.35)',
};

const tileSubtitleStyle = {
  margin: '4px 0 0',
  fontSize: 13,
  opacity: 0.9,
  textShadow: '0 1px 2px rgba(0,0,0,0.35)',
};

const categories = [
  {
    title: 'Men',
    subtitle: 'Vintage jackets, denim, and tees',
    href: '/listings?cat=men',
    bg: 'url("/assets/categories/men.jpg")',
  },
  {
    title: 'Women',
    subtitle: 'Timeless dresses and accessories',
    href: '/listings?cat=women',
    bg: 'url("/assets/categories/women.jpg")',
  },
  {
    title: 'Kids',
    subtitle: 'Adorable outfits, shoes, and more',
    href: '/listings?cat=kids',
    bg: 'url("/assets/categories/kids.jpg")',
  },
  {
    title: 'Furniture',
    subtitle: 'Mid-century modern to rustic finds',
    href: '/listings?cat=furniture',
    bg: 'url("/assets/categories/furniture.jpg")',
  },
  {
    title: 'Sports',
    subtitle: 'Retro gear and memorabilia',
    href: '/listings?cat=sports',
    bg: 'url("/assets/categories/sports.jpg")',
  },
];

const responsiveCSS = `
  @media (min-width: 640px) {
    .hero-section { min-height: 420px; }
  }
  @media (min-width: 768px) {
    .hero-section { min-height: 460px; }
    .category-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  @media (min-width: 1024px) {
    .category-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  }
`;
