const summary = 'Senior Software Engineer with 8+ years of experience architecting distributed backend systems and cloud platforms at enterprise scale. Experienced designing event-driven, AWS-native infrastructure that powers billions of requests, petabytes of media delivery, and mission-critical applications.'

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Nike, Inc.',
    location: 'Beaverton, Oregon',
    dates: 'April 2025 – Present',
    bullets: [
      'Architected and delivered Nike\'s next-generation media platform, replacing Brightcove, Cloudinary, and Akamai with a unified AWS-native solution projected to save $28M over 3 years while reducing media delivery costs by 95%.',
      'Led the migration of 150,000+ production videos across Nike.com, Nike App, SNKRS, NRC, and NTC, completing cutover 6 weeks ahead of contract expiration with zero production incidents.',
      'Designed a fault-tolerant, event-driven video platform using AWS MediaConvert, Lambda, SQS/SNS, Step Functions, CloudFront, and S3 supporting automated transcoding, subtitle generation in 75 languages, and intelligent AV1/HEVC/AVC delivery across 9 Nike business units.',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'Nike, Inc.',
    location: 'Beaverton, Oregon',
    dates: 'February 2020 – April 2025',
    bullets: [
      'Built a self-service platform enabling internal teams to provision and manage event-driven infrastructure at scale.',
      'Developed Go-based control plane APIs and Kubernetes Custom Resource Definitions (CRDs) for declarative infrastructure management.',
      'Enabled multi-region, globally distributed streaming systems supporting Nike\'s core digital platforms.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Nike, Inc.',
    location: 'Beaverton, Oregon',
    dates: 'July 2018 – February 2020',
    bullets: [
      'Built Go-based APIs supporting Kafka-based streaming systems processing high-volume event data.',
      'Developed developer tooling including SDKs, CLI tools, and a Terraform provider to improve internal platform adoption.',
      'Implemented message transformation and filtering systems enabling flexible downstream data consumption.',
    ],
  },
]

const skills = [
  {
    title: 'Languages',
    items: ['Go', 'TypeScript', 'Python', 'Java', 'Node.js'],
  },
  {
    title: 'Cloud & Platform',
    items: ['AWS', 'Lambda', 'S3', 'CloudFront', 'ECS', 'VPC', 'Terraform'],
  },
  {
    title: 'Data & Systems',
    items: ['Kafka', 'DynamoDB', 'PostgreSQL', 'Snowflake', 'etcd', 'Kubernetes'],
  },
  {
    title: 'Media & Delivery',
    items: ['AWS MediaConvert', 'MediaLive', 'MediaPackage', 'AV1/HEVC/AVC', 'CDN delivery'],
  },
]

const leadership = [
  {
    title: 'Mentor, Emerging Leaders',
    detail: 'Mentored early-career engineers through interview preparation, onboarding, and career development in software engineering.',
  },
]

const education = [
  {
    school: 'Florida State University',
    degree: 'B.S. Computer Science',
    dates: 'Fall 2013 – Spring 2018',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="resume-header">
        <div className="header-copy">
          <p className="eyebrow">Software engineer • platform builder • technical leader</p>
          <h1>Cameron Stacy</h1>
          <p className="lead">
            Senior Software Engineer focused on building resilient distributed systems, cloud-native platforms, and event-driven infrastructure that drive measurable business impact.
          </p>
          <div className="action-row">
            <a className="primary-btn" href="/resume.pdf" download="cameron_stacy_resume.pdf">
              Download PDF
            </a>
            <a className="secondary-btn" href="mailto:hello@cameronstacy.com">
              hello@cameronstacy.com
            </a>
          </div>
        </div>
        <div className="profile-card">
          <img src="/static/images/self.png" alt="Cameron Stacy" />
          <div className="profile-meta">
            <span>8+ years</span>
            <span>Distributed systems</span>
            <span>AWS + media platforms</span>
          </div>
        </div>
      </header>

      <main className="resume-document">
        <section className="resume-section">
          <h2>Summary</h2>
          <p>{summary}</p>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          {experience.map((role) => (
            <article key={`${role.company}-${role.title}`} className="entry-card">
              <div className="entry-header">
                <div>
                  <h3>{role.title}</h3>
                  <p className="entry-company">{role.company} · {role.location}</p>
                </div>
                <span className="entry-dates">{role.dates}</span>
              </div>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="resume-grid">
          <div className="resume-section">
            <h2>Skills</h2>
            <div className="skill-groups">
              {skills.map((group) => (
                <div key={group.title} className="skill-group">
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h2>Leadership</h2>
            {leadership.map((item) => (
              <article key={item.title} className="entry-card compact">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}

            <h2 className="section-spacing">Education</h2>
            {education.map((item) => (
              <article key={item.school} className="entry-card compact">
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <p className="entry-company">{item.dates}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
