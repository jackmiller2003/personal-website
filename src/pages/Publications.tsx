import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const publications = [
  {
    to: '/publications/temporal-horizons',
    image: '/images/temporal_horizons.png',
    alt: 'Temporal horizons visualization',
    title: 'Temporal Horizons in Forecasting: A Performance-Learnability Trade-off',
    meta: '2025 · Pau Vilimelis Aceituno, Jack Miller et al.',
    blurb: 'Formalises why training forecasting models on longer horizons improves generalisation but exponentially increases optimisation difficulty.',
  },
  {
    to: '/publications/grokking-beyond-neural-networks',
    image: '/images/gpc_small.png',
    alt: 'Grokking Beyond Neural Networks',
    title: 'Grokking Beyond Neural Networks',
    meta: '2024 · Jack Miller, Charles O\'Neill, Thang Bui · TMLR',
    blurb: 'Shows that the grokking phenomenon extends beyond neural networks to Gaussian processes, linear regression, and Bayesian neural networks.',
  },
  {
    to: '/publications/measuring-sharpness-in-grokking',
    image: '/images/1200px-Logistic-curve.svg.png',
    alt: 'Measuring Sharpness in Grokking',
    title: 'Measuring Sharpness in Grokking',
    meta: '2024 · Jack Miller, Patrick Gleeson et al. · ICLR 2024 Workshop',
    blurb: 'Introduces a robust functional-form technique for measuring the sharpness of grokking transitions in training and validation accuracy.',
  },
  {
    to: '/publications/cyclone-interventions',
    image: '/images/cyclone_3_2.png',
    alt: 'The Governance of Cyclone Interventions',
    title: 'The Feasibility and Governance of Cyclone Interventions',
    meta: '2023 · Jack Miller, Aaron Tang et al. · Climate Risk Management',
    blurb: 'Reviews the feasibility of deliberate cyclone interventions such as aerosol injection and the governance challenges they raise.',
  },
  {
    to: '/publications/llm-projects',
    image: '/images/llm-projects.jpeg',
    alt: 'LLM Projects',
    title: 'Large Language Model Projects',
    meta: '2023–2024 · Charles O\'Neill, UniverseTBD and Jack Miller',
    blurb: 'A collection of arXiv papers on astronomy-specialised LLMs, contrastive steering, and adversarial fine-tuning.',
  },
]

export default function Publications() {
  return (
    <Layout>
      <h3>Publications</h3>
      <ul id="pub-list">
        {publications.map((pub) => (
          <li key={pub.to}>
            <Link to={pub.to}>
              <img src={pub.image} alt={pub.alt} />
              <div>
                <span className="pub-title">{pub.title}</span>
                <span className="pub-meta">{pub.meta}</span>
                <span className="pub-blurb">{pub.blurb}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
