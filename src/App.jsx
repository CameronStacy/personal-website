import { useState } from 'react'

const blogPosts = [
  {
    title: 'Building a calm personal site',
    excerpt: 'A simple approach to creating a site that highlights your work without overcomplicating the stack.',
    date: 'Jul 2026',
  },
  {
    title: 'Why I keep a small technical notebook',
    excerpt: 'Short notes about debugging habits, API experiments, and the systems I keep revisiting.',
    date: 'Jun 2026',
  },
]

const resumeSummary = 'Senior Software Engineer with 8+ years of experience architecting distributed backend systems and cloud platforms at enterprise scale. Experienced designing event-driven, AWS-native infrastructure that powers billions of requests, petabytes of media delivery, and mission-critical applications. Strong track record leading complex technical initiatives across engineering, product, and business stakeholders, with a focus on scalable architecture, operational excellence, and measurable business impact.'

const experience = [
  {
    company: 'Nike, Inc.',
    location: 'Beaverton, Oregon',
    title: 'Senior Software Engineer, Nike Media Platform',
    date: 'April 2025 - Present',
    bullets: [
      'Architected and delivered Nike\'s next-generation media platform, replacing Brightcove, Cloudinary, and Akamai with a unified AWS-native solution projected to save $28M over 3 years while reducing media delivery costs by 95%.',
      'Led the migration of 150,000+ production videos across Nike.com, Nike App, SNKRS, NRC, and NTC, completing cutover 6 weeks ahead of contract expiration with zero production incidents, eliminating over $2.4M/year in vendor contracts.',
      'Designed a fault-tolerant, event-driven video platform using AWS MediaConvert, Lambda, SQS/SNS, Step Functions, CloudFront, and S3 supporting automated transcoding, subtitle generation in 75 languages, and intelligent AV1/HEVC/AVC delivery across 9 Nike business units.',
    ],
  },
  {
    company: 'Nike, Inc.',
    location: 'Beaverton, Oregon',
    title: 'Software Engineer II, Near Real-Time Data Platform',
    date: 'February 2020 - April 2025',
    bullets: [
      'Built a self-service platform enabling internal teams to provision and manage event-driven infrastructure at scale.',
      'Developed Go-based control plane APIs and Kubernetes Custom Resource Definitions (CRDs) for declarative infrastructure management.',
      'Enabled multi-region, globally distributed streaming systems supporting Nike’s core digital platforms.',
    ],
  },
  {
    company: 'Nike, Inc.',
    location: 'Beaverton, Oregon',
    title: 'Software Engineer, Nike Streaming Platform',
    date: 'July 2018 - February 2020',
    bullets: [
      'Built Go-based APIs supporting Kafka-based streaming systems processing high-volume event data.',
      'Developed developer tooling (SDKs, CLI tools, Terraform provider) to improve internal platform adoption and usability.',
      'Implemented message transformation and filtering systems enabling flexible downstream data consumption.',
    ],
  },
]

const technicalSkills = [
  'Programming Languages: TypeScript, Go, Python, Java, Node.js',
  'APIs & Web: REST APIs, GraphQL, backend systems, publishing platforms',
  'Cloud & Infrastructure: AWS (VPC, ECS, S3, ELB, Lambda, Step Functions, CloudFront)',
  'Media Systems: AWS Elemental (MediaLive, MediaPackage, MediaConvert), NMP media pipelines',
  'Data Systems: Kafka, DynamoDB, PostgreSQL, Snowflake, etcd',
  'DevOps & Tooling: Terraform, GitHub Actions, Jenkins',
  'Architecture: Event-driven systems, distributed systems, media delivery platforms, publishing systems',
]

const education = [
  'Florida State University',
  'BS Computer Science',
  'Fall 2013 - Spring 2018',
]

const leadership = [
  'Mentor, Emerging Leaders',
  'Mentored early-career engineers through interview preparation, onboarding, and career development in software engineering.',
]

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Senior software engineer • platform builder • technical leader</p>
            <h1>Cameron Stacy</h1>
            <p className="hero-copy">
              I build large-scale distributed systems, cloud-native platforms, and event-driven infrastructure that power mission-critical experiences at global scale.
            </p>
            <div className="hero-actions">
              <nav className="nav-links" aria-label="Site sections">
                <a href="#resume">Resume</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
              </nav>
              <a className="download-btn" href="/resume.pdf" download="cameron_stacy_resume.pdf">
                Download PDF resume
              </a>
            </div>
          </div>
          <div className="profile-card">
            <img src="/static/images/self.png" alt="Cameron Stacy" />
            <div className="profile-badges">
              <span>8+ years</span>
              <span>Distributed systems</span>
              <span>AWS</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="resume" className="card resume-card">
          <div className="section-heading">
            <p className="eyebrow">Resume</p>
            <h2>Experience, skills, and leadership</h2>
          </div>
          <p className="resume-copy">{resumeSummary}</p>
          <div className="highlight-strip">
            <span>Global-scale platform work</span>
            <span>Event-driven architecture</span>
            <span>Cloud infrastructure</span>
            <span>Leadership and execution</span>
          </div>

          <div className="resume-section">
            <h3>Experience</h3>
            {experience.map((role) => (
              <article key={`${role.company}-${role.title}`} className="resume-entry">
                <div className="resume-entry-heading">
                  <div>
                    <h4>{role.company}</h4>
                    <p className="resume-location">{role.location}</p>
                  </div>
                  <span>{role.date}</span>
                </div>
                <p className="resume-role-title">{role.title}</p>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="resume-grid">
            <div className="resume-section">
              <h3>Technical Skills</h3>
              <ul>
                {technicalSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="resume-section">
              <h3>Education</h3>
              <ul>
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3>Leadership Experience</h3>
            <article className="resume-entry">
              <p className="resume-role-title">{leadership[0]}</p>
              <p>{leadership[1]}</p>
            </article>
          </div>
        </section>

        <section id="blog" className="card">
          <div className="section-heading">
            <p className="eyebrow">Blog</p>
            <h2>Technical writing</h2>
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
            <h2>Say hello</h2>
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
