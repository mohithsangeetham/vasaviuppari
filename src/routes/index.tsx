import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const S = {
  sectionNum: {
    fontSize: '0.68rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'var(--gold)',
  },
  sectionTitle: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
    fontWeight: 300,
    lineHeight: 1.1,
  },
  muted: { color: 'var(--muted-fg)' },
  border: { borderColor: 'var(--border-color)' },
}

function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: 'calc(100vh - 4.5rem)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="hero-section"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '5rem 3rem',
          }}
          className="hero-text-col"
        >
          <div
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span style={{ display: 'inline-block', width: '2rem', height: '0.5px', background: 'var(--gold)' }} />
            Fashion · Styling · Marketing
          </div>
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginBottom: '0.25rem',
            }}
          >
            Vasavi<br />
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Uppari</em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.2rem',
              fontWeight: 300,
              color: 'var(--muted-fg)',
              marginBottom: '2.5rem',
              fontStyle: 'italic',
            }}
          >
            Designer, Stylist &amp; Marketing Professional
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--muted-fg)',
              maxWidth: '360px',
              lineHeight: 1.8,
              marginBottom: '3rem',
            }}
          >
            Six years of hands-on industry experience across design, commercial styling,
            and brand marketing. Based in Leicester, UK — open to roles across the UK.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link
              to="/projects"
              style={{
                background: 'var(--ink)',
                color: 'var(--cream)',
                padding: '0.75rem 2rem',
                fontFamily: 'var(--sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
            >
              View Work
            </Link>
            <Link
              to="/contact"
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted-fg)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-fg)')}
            >
              Get in Touch →
            </Link>
          </div>
        </div>

        {/* Hero visual */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
          }}
          className="hero-visual-col"
        >
          <div
            style={{
              width: '100%',
              maxWidth: '460px',
              aspectRatio: '3/4',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src="/profile-photo.jpg"
              alt="Vasavi Uppari"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              left: '3rem',
              top: '3rem',
              bottom: '3rem',
              width: '0.5px',
              background: 'var(--gold)',
              opacity: 0.4,
            }}
          />
        </div>
      </section>

      {/* ── STATS ── */}
      <div
        style={{
          borderTop: '0.5px solid var(--border-color)',
          borderBottom: '0.5px solid var(--border-color)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          margin: '0 3rem',
        }}
        className="stats-row"
      >
        {[
          { num: '60+', label: 'Bespoke Garments Made' },
          { num: '100+', label: 'Models Styled' },
          { num: '6', label: 'Years Experience' },
          { num: '2×', label: 'Countries, One Vision' },
        ].map(({ num, label }) => (
          <div
            key={label}
            style={{
              padding: '2.5rem 2rem',
              borderRight: '0.5px solid var(--border-color)',
              textAlign: 'center',
            }}
            className="stat-item"
          >
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '3rem',
                fontWeight: 300,
                color: 'var(--ink)',
                display: 'block',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              {num}
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted-fg)',
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ── ABOUT ── */}
      <section style={{ padding: '6rem 3rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            borderBottom: '0.5px solid var(--border-color)',
            paddingBottom: '2rem',
          }}
        >
          <div>
            <div style={S.sectionNum}>01 — About</div>
            <h2 style={S.sectionTitle}>
              The Work.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>The Story.</em>
            </h2>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.6rem',
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.4,
                borderLeft: '2px solid var(--gold)',
                paddingLeft: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              "I made the garments, styled the shoots, built the brand — all at once."
            </p>
            <div style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted-fg)' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                B.Des Fashion Design and MA Fashion Management &amp; Marketing from De Montfort University, Leicester,
                with Merit. My dissertation explored how social media influencers shape UK fashion consumer
                behaviour — a question I had already lived from the brand side.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                My six years in Hyderabad were built doing things rather than overseeing them.
                Every pattern drafted by hand. Every model styled personally. Every Instagram
                campaign written, photographed, and posted without an agency. When Vaibhavi
                Boutique grew into a franchise, it was because the work was consistently good.
              </p>
              <p>
                I relocated to the UK in late 2024 and am now looking for my first permanent UK
                role in fashion — open to design, styling, marketing, or wherever my full set of
                skills is genuinely useful.
              </p>
            </div>
          </div>
          <div>
            <ul style={{ listStyle: 'none' }}>
              {[
                'Fashion Design & Garment Construction',
                'Commercial Styling & Art Direction',
                'Brand Marketing & Campaign Strategy',
                'Influencer Marketing',
                'Trend Research & Collection Development',
                'Fabric Sourcing (Indian textile markets)',
                'Social Media Content Creation',
                'Client & Account Management',
                'Adobe Photoshop & Canva',
                'Microsoft Office',
                'Digital Fashion Illustration',
              ].map((skill) => (
                <li
                  key={skill}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.9rem 0',
                    borderBottom: '0.5px solid var(--border-color)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.03em',
                    color: 'var(--ink)',
                  }}
                >
                  <span style={{ color: 'var(--gold)', fontFamily: 'var(--serif)', fontSize: '1rem' }}>—</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section style={{ background: '#f0ebe1', padding: '6rem 3rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            borderBottom: '0.5px solid var(--border-color)',
            paddingBottom: '2rem',
          }}
        >
          <div>
            <div style={S.sectionNum}>02 — Selected Work</div>
            <h2 style={S.sectionTitle}>
              Design.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Styling. Brand.</em>
            </h2>
          </div>
          <p style={{ maxWidth: '260px', fontSize: '0.8rem', color: 'var(--muted-fg)', lineHeight: 1.7 }}>
            A selection from 6 years across Hyderabad and Leicester.
          </p>
        </div>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}
          className="work-grid"
        >
          {[
            {
              cat: 'Fashion Design',
              title: 'Bespoke Bridal & Occasion Wear',
              desc: '60+ garments handmade at Vaibhavi Boutique. Every pattern drafted, every seam personally finished. Client referrals grew the boutique to franchise level.',
              image: '/bespoke-bridal-wear.png',
            },
            {
              cat: 'Commercial Styling',
              title: 'Campaign Styling — Ras Media',
              desc: 'Styled 100+ models on commercial brand shoots. Worked directly with brand and creative teams on campaign briefs. Every look on brief, every deadline met.',
              image: '/campaign-styling.png',
            },
            {
              cat: 'Brand Marketing',
              title: 'Vaibhavi Boutique — Growth to Franchise',
              desc: 'Built the brand\'s entire marketing operation: social media, influencer gifting, seasonal launches. No agency. The boutique reached franchise level.',
              image: '/vaibhavi-brand-marketing.png',
            },
          ].map(({ cat, title, desc, image }) => (
            <div
              key={title}
              style={{
                position: 'relative',
                overflow: 'hidden',
                border: '0.5px solid var(--border-color)',
                cursor: 'default',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            >
              <div
                style={{
                  aspectRatio: '3/4',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={image}
                  alt={title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
                <div
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {cat}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-fg)', lineHeight: 1.7 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to="/projects"
            style={{
              display: 'inline-block',
              border: '0.5px solid var(--ink)',
              padding: '0.75rem 2.5rem',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)' }}
          >
            All Projects →
          </Link>
        </div>
      </section>

      {/* ── CONTACT TEASER ── */}
      <section
        style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '6rem 3rem' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center',
          }}
          className="contact-grid"
        >
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: 'var(--cream)',
            }}
          >
            Let's make<br />something<br />
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>remarkable.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { label: 'Email', value: 'vasavisagar07@gmail.com', href: 'mailto:vasavisagar07@gmail.com' },
              { label: 'Phone', value: '+44 7554 939987', href: 'tel:+447554939987' },
              { label: 'LinkedIn', value: 'linkedin.com/in/vasavi-uppari', href: 'https://linkedin.com/in/vasavi-uppari' },
              { label: 'Location', value: 'Leicester, UK — Open to London & UK-wide', href: null },
            ].map(({ label, value, href }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '0.5px solid rgba(245,240,232,0.15)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-light)',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: 'var(--cream)',
                  }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ color: 'var(--gold-light)', textDecoration: 'none' }}
                    >
                      {value}
                    </a>
                  ) : value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-section { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-text-col { padding: 2rem 1.5rem 3rem !important; }
          .hero-visual-col { order: -1 !important; padding: 2rem 1.5rem 0 !important; }
          .hero-visual-col > div:first-child { max-width: 280px !important; margin: 0 auto !important; }
          .hero-visual-col > div:last-child { display: none !important; }
          .stats-row { grid-template-columns: 1fr 1fr !important; margin: 0 1.5rem !important; }
          .stat-item:last-child { border-right: none !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .work-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  )
}
