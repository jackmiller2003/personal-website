import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const talks = [
  {
    to: '/speaking/secure-cyber-connect-podcast',
    image: 'https://img.youtube.com/vi/OrLZ6_ZMxJc/mqdefault.jpg',
    alt: 'Secure Cyber Connect Podcast',
    title: 'Secure Cyber Connect Podcast',
    meta: '2025 · Secure Cyber Connect',
    blurb: 'An overview of what HelmGuard does and how we think about third-party security risk.',
  },
  {
    to: '/speaking/ai-security-forum-tel-aviv',
    image: 'https://img.youtube.com/vi/2eNeROsSSwM/mqdefault.jpg',
    alt: 'AI Security Forum Tel Aviv',
    title: 'Building Trustworthy Supply Chains with AI',
    meta: '2025 · AI Security Forum, Tel Aviv',
    blurb: 'How an attacker could compromise critical national infrastructure by exploiting vulnerabilities in its third-party supply chain.',
  },
  {
    to: '/speaking/helmguard-palantir',
    image: 'https://img.youtube.com/vi/tbvEftV0YN0/mqdefault.jpg',
    alt: 'HelmGuard at Palantir DevCon',
    title: 'HelmGuard: Terraforming Enterprise Security Data',
    meta: '2025 · Palantir Developer Conference',
    blurb: 'Demonstrating how HelmGuard uses Palantir Agent Studio to automate enterprise security workflows and third-party risk management.',
  },
]

export default function Speaking() {
  return (
    <Layout>
      <h3>Speaking</h3>
      <ul id="pub-list">
        {talks.map((talk) => (
          <li key={talk.to}>
            <Link to={talk.to}>
              <img src={talk.image} alt={talk.alt} />
              <div>
                <span className="pub-title">{talk.title}</span>
                <span className="pub-meta">{talk.meta}</span>
                <span className="pub-blurb">{talk.blurb}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
