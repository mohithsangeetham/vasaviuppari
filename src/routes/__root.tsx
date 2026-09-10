import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Vasavi Uppari — Fashion Designer · Stylist · Marketing' },
      { name: 'description', content: 'Portfolio of Vasavi Uppari — fashion designer, commercial stylist, and brand marketing professional based in Leicester, UK.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap',
      },
    ],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
})

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      style={{
        fontSize: '0.75rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--muted-fg)',
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
      activeProps={{ style: { color: 'var(--ink)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' } }}
      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--ink)')}
      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--muted-fg)')}
    >
      {children}
    </Link>
  )
}

function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.25rem 3rem',
        background: 'rgba(245,240,232,0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '0.5px solid var(--border-color)',
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.1rem',
          fontWeight: 400,
          letterSpacing: '0.04em',
          color: 'var(--ink)',
          textDecoration: 'none',
        }}
      >
        Vasavi Uppari
      </Link>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="nav-links-desktop">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/resume">Experience</NavLink></li>
        <li><NavLink to="/projects">Work</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          padding: '4px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: 'block',
              width: '1.4rem',
              height: '1px',
              background: 'var(--ink)',
              transition: '0.2s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)' :
                         menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(245,240,232,0.98)',
            backdropFilter: 'blur(8px)',
            borderBottom: '0.5px solid var(--border-color)',
            padding: '1.5rem 3rem',
            flexDirection: 'column',
            gap: '1.25rem',
            display: 'flex',
          }}
        >
          {([['/', 'Home'], ['/resume', 'Experience'], ['/projects', 'Work'], ['/contact', 'Contact']] as const).map(([to, label]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted-fg)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

function SiteFooter() {
  return (
    <footer
      style={{
        padding: '2rem 3rem',
        borderTop: '0.5px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}
    >
      <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--muted-fg)' }}>
        © 2025 Vasavi Uppari — All rights reserved
      </span>
      <span style={{
        fontSize: '0.72rem',
        letterSpacing: '0.08em',
        color: 'var(--muted-fg)',
        fontStyle: 'italic',
        fontFamily: 'var(--serif)',
      }}>
        Leicester, United Kingdom
      </span>
    </footer>
  )
}

function RootLayout() {
  return (
    <>
      <SiteNav />
      <div style={{ paddingTop: '4.5rem' }}>
        <Outlet />
      </div>
      <SiteFooter />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
