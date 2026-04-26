import Header from '../components/Header'
import Footer from '../components/Footer'

const posts = [
  {
    href: '/posts/helmguard_at_palantir.html',
    image: '/images/HelmGuard at Palantir.jpg',
    alt: 'HelmGuard at Palantir',
    title: 'HelmGuard: Terraforming Enterprise Security Data',
    date: '2025',
    author: 'Jack Miller',
  },
  {
    href: '/posts/temporal_horizons_forecasting.html',
    image: '/images/temporal_horizons.png',
    alt: 'Temporal horizons visualization',
    title: 'Temporal Horizons in Forecasting: A Performance-Learnability Trade-off',
    date: '2025',
    author: 'Pau Vilimelis Aceituno, Jack Miller et al.',
  },
  {
    href: '/posts/grokking_beyond_neural_networks.html',
    image: '/images/gpc_small.png',
    alt: 'Grokking Beyond Neural Networks',
    title: 'Grokking Beyond Neural Networks',
    date: '2024',
    author: 'Jack Miller, Charles O\'Neill, Thang Bui',
  },
  {
    href: '/posts/measuring_sharpness_in_grokking.html',
    image: '/images/1200px-Logistic-curve.svg.png',
    alt: 'Measuring Sharpness in Grokking',
    title: 'Measuring Sharpness in Grokking',
    date: '2024',
    author: 'Jack Miller and Patrick Gleeson et al.',
  },
  {
    href: '/posts/feasibility_and_governance_of_cyclone_interventions.html',
    image: '/images/cyclone_3_2.png',
    alt: 'The Governance of Cyclone Interventions',
    title: 'The Governance of Cyclone Interventions',
    date: '2023',
    author: 'Jack Miller and Aaron Tang et al.',
  },
  {
    href: '/posts/llm_projects.html',
    image: '/images/llm-projects.jpeg',
    alt: 'LLM Projects',
    title: 'LLM Projects',
    date: '2023 & 2024',
    author: "Charles O'Neill, UniverseTBD and Jack Miller",
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main id="content">
        <div id="bio">
          <img src="/images/Cropped.png" alt="Profile Photo" />
          <div>
            <center>
              <p>
                Building AI-native cybersecurity at{' '}
                <a href="https://helmguard.ai" target="_blank" rel="noreferrer">HelmGuard</a>.
              </p>
              <div id="social-links">
                <a href="https://github.com/jackmiller2003" target="_blank" rel="noreferrer">
                  <i className="fab fa-github" />
                </a>
                <a href="https://scholar.google.com/citations?user=geDj6_gAAAAJ&hl=en" target="_blank" rel="noreferrer">
                  <i className="fas fa-graduation-cap" />
                </a>
                <a href="https://www.youtube.com/channel/UCCt1Gwv2Ow8UQpjsaod8QqA" target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube" />
                </a>
                <a href="https://twitter.com/jackm2003" target="_blank" rel="noreferrer">
                  <i className="fab fa-x-twitter" />
                </a>
                <a href="https://www.linkedin.com/in/jack-miller-8574211aa/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </center>
          </div>
        </div>
        <br />
        <ul id="posts">
          {posts.map((post) => (
            <li key={post.href}>
              <a href={post.href} className="post-link">
                <img src={post.image} alt={post.alt} />
                <div className="text-content">
                  <span className="post-title">{post.title}</span>
                  <div className="post-meta">
                    <span className="date">{post.date}</span>
                    <span className="author">{post.author}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}
