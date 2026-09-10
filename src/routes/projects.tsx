import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const S = {
  sectionNum: {
    fontSize: '0.68rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'var(--gold)',
  },
  tag: {
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--muted-fg)',
    border: '0.5px solid var(--border-color)',
    padding: '0.3rem 0.7rem',
  },
}

const gradients = [
  'linear-gradient(145deg,#e8ddd0,#c9b89a)',
  'linear-gradient(145deg,#ddd0c8,#b8a090)',
  'linear-gradient(145deg,#d8cfc5,#c0a888)',
]
const icons = ['✦', '◈', '◉']

function Projects() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          padding: '5rem 3rem 4rem',
          borderBottom: '0.5px solid var(--border-color)',
        }}
      >
        <div style={S.sectionNum}>02 — Selected Work</div>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            marginTop: '0.5rem',
          }}
        >
          Design. Styling.<br />
          <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Brand.</em>
        </h1>
        <p
          style={{
            marginTop: '1.5rem',
            fontSize: '0.9rem',
            color: 'var(--muted-fg)',
            maxWidth: '480px',
            lineHeight: 1.8,
          }}
        >
          Six years of work across Hyderabad and Leicester — from bespoke garment construction
          to commercial campaign styling to brand-building from scratch.
        </p>
      </div>

      {/* Projects Grid */}
      <section style={{ padding: '4rem 3rem', background: '#f0ebe1' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}
          className="work-grid"
        >
          {allProjects.map((project, i) => (
            <div
              key={project._meta.path}
              style={{
                position: 'relative',
                overflow: 'hidden',
                border: '0.5px solid var(--border-color)',
                transition: 'border-color 0.3s',
                background: 'var(--cream)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            >
              <div
                style={{
                  aspectRatio: '3/4',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <>
                    <div style={{ position: 'absolute', inset: 0, background: gradients[i % gradients.length] }} />
                    <span
                      style={{
                        position: 'relative',
                        fontFamily: 'var(--serif)',
                        fontSize: '5rem',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        opacity: 0.15,
                        color: 'var(--ink)',
                        userSelect: 'none',
                      }}
                    >
                      {icons[i % icons.length]}
                    </span>
                  </>
                )}
              </div>
              <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.62rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
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
                  {project.title}
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-fg)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={S.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
