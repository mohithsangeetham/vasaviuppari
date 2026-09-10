import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

const S = {
  sectionNum: {
    fontSize: '0.68rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'var(--gold)',
  },
  expYear: {
    fontSize: '0.68rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'var(--gold)',
    marginBottom: '0.5rem',
  },
  expCompany: {
    fontFamily: 'var(--serif)',
    fontSize: '1rem',
    fontStyle: 'italic' as const,
    color: 'var(--muted-fg)',
    fontWeight: 300,
  },
  expRole: {
    fontFamily: 'var(--serif)',
    fontSize: '1.5rem',
    fontWeight: 400,
    marginBottom: '1rem',
    lineHeight: 1.2,
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

const jobOrder = ['freelance-consultant', 'ras-media-stylist', 'vaibhavi-designer']

function Resume() {
  const jobs = [...allJobs].sort((a, b) => {
    const ai = jobOrder.indexOf(a._meta.path)
    const bi = jobOrder.indexOf(b._meta.path)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  const eduOrder = ['de-montfort-ma', 'iidt-bdes']
  const educations = [...allEducations].sort((a, b) => {
    const ai = eduOrder.indexOf(a._meta.path)
    const bi = eduOrder.indexOf(b._meta.path)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          padding: '5rem 3rem 4rem',
          borderBottom: '0.5px solid var(--border-color)',
        }}
      >
        <div style={S.sectionNum}>03 — Experience</div>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            marginTop: '0.5rem',
          }}
        >
          Where I've<br />
          <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Worked.</em>
        </h1>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <a
            href="/Vasavi_Uppari_MASTER_CV_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'var(--ink)',
              color: 'var(--cream)',
              padding: '0.75rem 2rem',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
          >
            Download CV (PDF)
          </a>
        </div>
      </div>

      {/* Work Experience */}
      <section style={{ padding: '4rem 3rem' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
        >
          {jobs.map((job, i) => (
            <div
              key={job._meta.path}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '3rem',
                padding: '3rem 0',
                borderBottom: i < jobs.length - 1 ? '0.5px solid var(--border-color)' : 'none',
              }}
              className="exp-item"
            >
              <div>
                <div style={S.expYear}>
                  {job.startDate} — {job.endDate || 'Present'}
                </div>
                <div style={S.expCompany}>{job.company}</div>
                <div style={{ ...S.expCompany, marginTop: '0.25rem', fontStyle: 'normal', fontSize: '0.8rem' }}>
                  {job.location}
                </div>
              </div>
              <div>
                <div style={S.expRole}>{job.jobTitle}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted-fg)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  {job.summary}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {job.tags.map((tag) => (
                    <span key={tag} style={S.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section
        style={{
          padding: '4rem 3rem',
          borderTop: '0.5px solid var(--border-color)',
          background: '#f0ebe1',
        }}
      >
        <div style={{ ...S.sectionNum, marginBottom: '2.5rem' }}>Education</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {educations.map((edu, i) => (
            <div
              key={edu._meta.path}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '3rem',
                padding: '3rem 0',
                borderBottom: i < educations.length - 1 ? '0.5px solid var(--border-color)' : 'none',
              }}
              className="exp-item"
            >
              <div>
                <div style={S.expYear}>
                  {edu.startDate} — {edu.endDate || 'Present'}
                </div>
                <div style={S.expCompany}>{edu.school}</div>
              </div>
              <div>
                <div style={S.expRole}>{edu.summary}</div>
                {edu.content && (
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-fg)', lineHeight: 1.8 }}>
                    {edu.content}
                  </p>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                  {edu.tags.map((tag) => (
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
          .exp-item { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </main>
  )
}
