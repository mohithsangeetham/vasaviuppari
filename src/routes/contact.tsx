import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const S = {
    sectionNum: {
      fontSize: '0.68rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase' as const,
      color: 'var(--gold)',
    },
    label: {
      fontSize: '0.65rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase' as const,
      color: 'var(--gold-light)',
      display: 'block',
      marginBottom: '0.3rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      background: 'rgba(255,255,255,0.07)',
      border: '0.5px solid rgba(245,240,232,0.2)',
      color: 'var(--cream)',
      fontFamily: 'var(--sans)',
      fontSize: '0.9rem',
      fontWeight: 300,
      outline: 'none',
      transition: 'border-color 0.2s',
    },
  }

  if (submitted) {
    return (
      <main
        style={{
          minHeight: '100vh',
          background: 'var(--ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--cream)',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '400px', padding: '2rem' }}>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '4rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--rose)',
              marginBottom: '1rem',
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '2rem',
              fontWeight: 300,
              marginBottom: '1rem',
            }}
          >
            Message sent.
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--gold-light)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Thanks for reaching out. I'll be in touch as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              background: 'transparent',
              border: '0.5px solid rgba(245,240,232,0.3)',
              color: 'var(--cream)',
              padding: '0.75rem 2rem',
              fontFamily: 'var(--sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
          >
            Send Another
          </button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--ink)', color: 'var(--cream)' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '5rem 3rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="contact-layout"
      >
        {/* Left: info */}
        <div>
          <div style={{ ...S.sectionNum, color: 'var(--gold-light)', marginBottom: '1rem' }}>04 — Contact</div>
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: 'var(--cream)',
              marginBottom: '3rem',
            }}
          >
            Let's make<br />something<br />
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>remarkable.</em>
          </h1>

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
                  paddingBottom: '1.5rem',
                  borderBottom: '0.5px solid rgba(245,240,232,0.15)',
                }}
              >
                <span style={S.label}>{label}</span>
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

        {/* Right: form */}
        <div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              fetch('/contact.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
              }).then(() => setSubmitted(true))
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} style={S.label}>{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  required
                  placeholder={placeholder}
                  style={S.input}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(245,240,232,0.2)')}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" style={S.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about the role or project..."
                style={{ ...S.input, resize: 'none' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(245,240,232,0.2)')}
              />
            </div>

            <button
              type="submit"
              style={{
                background: 'var(--gold)',
                color: 'var(--ink)',
                padding: '0.85rem 2rem',
                fontFamily: 'var(--sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
                fontWeight: 500,
                alignSelf: 'flex-start',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  )
}
