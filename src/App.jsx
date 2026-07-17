import { useState } from 'react'

const blogPosts = [
  {
    title: 'Designing platform-level abstractions',
    excerpt: 'How I think about building reusable systems that scale cleanly across teams and products.',
    date: 'Jul 2026',
  },
  {
    title: 'From streaming systems to product impact',
    excerpt: 'What I learned translating platform engineering work into measurable business outcomes.',
    date: 'Jun 2026',
  },
]

const resumeSummary = 'Senior Software Engineer with 8+ years of experience architecting distributed backend systems and cloud platforms at enterprise scale. Experienced designing event-driven, AWS-native infrastructure that powers billions of requests, petabytes of media delivery, and mission-critical applications. Strong track record leading complex technical initiatives across engineering, product, and business stakeholders, with a focus on scalable architecture, operational excellence, and measurable business impact.'

const experience = [
  {
    id: 'media-platform',
    title: 'Senior Software Engineer',
    company: 'Nike Media Platform',
    period: '2025 – Present',
    highlight: 'Rebuilt a global media platform with AWS-native infrastructure and massive cost savings.',
    bullets: [
      'Designed a unified media platform replacing Brightcove, Cloudinary, and Akamai.',
      'Led a 150,000+ video migration with zero production incidents.',
      'Built event-driven services for transcoding, localization, and intelligent content delivery.',
    ],
  },
  {
    id: 'data-platform',
    title: 'Software Engineer II',
    company: 'Near Real-Time Data Platform',
    period: '2020 – 2025',
    highlight: 'Created self-service infrastructure for event-driven systems at enterprise scale.',
    bullets: [
      'Built control plane APIs and CRDs for declarative infrastructure management.',
      'Enabled multi-region streaming systems supporting core digital experiences.',
      'Partnered across product and platform teams to accelerate delivery.',
    ],
  },
  {
    id: 'streaming-platform',
    title: 'Software Engineer',
    company: 'Nike Streaming Platform',
    period: '2018 – 2020',
    highlight: 'Delivered streaming APIs and tooling that helped modernize internal platform adoption.',
    bullets: [
      'Built Go-based APIs for Kafka-driven event processing systems.',
      'Developed tooling and SDKs that improved platform usability.',
      'Implemented message transformation and access governance for shared systems.',
    ],
  },
]

const technicalSkills = [
  'Distributed systems',
  'AWS',
  'Event-driven architecture',
  'Go, TypeScript, Python, Java',
  'Kafka, DynamoDB, PostgreSQL, Snowflake',
  'Terraform, GitHub Actions, Jenkins',
]

function App() {
  const [activeRole, setActiveRole] = useState(experience[0].id)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const activeExperience = experience.find((role) => role.id === activeRole) ?? experience[0]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`New message from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.location.href = `mailto:hello@cameronstacy.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy-block">
          <p className="eyebrow">Senior software engineer • platform builder • technical leader</p>
          <h1>Cameron Stacy</h1>
          <p className="hero-text">
            I build resilient distributed systems and cloud-native platforms that turn complex infrastructure into reliable product experiences.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#resume">Explore my work</a>
            <a className="secondary-btn" href="/resume.pdf" download="cameron_stacy_resume.pdf">
              Download resume
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-glow" />
          <img src="/static/images/self.png" alt="Cameron Stacy" />
          <div className="hero-stats">
            <div>
              <strong>8+ years</strong>
              <span>engineering experience</span>
            </div>
            <div>
              <strong>Global scale</strong>
              <span>media and platform systems</span>
            </div>
            <div>
              <strong>AWS + distributed</strong>
              <span>event-driven systems</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="resume" className="card story-card">
          <div className="section-heading">
            <p className="eyebrow">Career story</p>
            <h2>From platform engineering to high-impact systems</h2>
          </div>
          <p className="summary-text">{resumeSummary}</p>

          <div className="role-switcher" role="tablist" aria-label="Career highlights">
            {experience.map((role) => (
              <button
                key={role.id}
                className={`role-pill ${activeRole === role.id ? 'active' : ''}`}
                onClick={() => setActiveRole(role.id)}
              >
                {role.company}
              </button>
            ))}
          </div>

          <div className="role-card">
            <div className="role-meta">
              <div>
                <p className="eyebrow">Selected focus</p>
                <h3>{activeExperience.title} · {activeExperience.company}</h3>
              </div>
              <span>{activeExperience.period}</span>
            </div>
            <p className="role-highlight">{activeExperience.highlight}</p>
            <ul>
              {activeExperience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="skill-grid">
            {technicalSkills.map((skill) => (
              <div key={skill} className="skill-chip">{skill}</div>
            ))}
          </div>
        </section>

        <section id="blog" className="card">
          <div className="section-heading">
            <p className="eyebrow">Writing</p>
            <h2>Notes on systems, product, and scale</h2>
          </div>
          <div className="blog-list">
            {blogPosts.map((post) => (
              <article key={post.title} className="blog-item">
                <p className="post-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="card">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s talk about the next challenge</h2>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
            </label>
            <button type="submit">Send message</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
