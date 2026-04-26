import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Publications from './pages/Publications'
import Speaking from './pages/Speaking'
import Blog from './pages/Blog'
import Music from './pages/Music'
import TemporalHorizons from './pages/posts/TemporalHorizons'
import GrokkingBeyondNeuralNetworks from './pages/posts/GrokkingBeyondNeuralNetworks'
import MeasuringSharpnessInGrokking from './pages/posts/MeasuringSharpnessInGrokking'
import CycloneInterventions from './pages/posts/CycloneInterventions'
import LLMProjects from './pages/posts/LLMProjects'
import HelmGuardPalantir from './pages/posts/HelmGuardPalantir'
import AISecurityForumTelAviv from './pages/posts/AISecurityForumTelAviv'
import SecureCyberConnectPodcast from './pages/posts/SecureCyberConnectPodcast'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/speaking" element={<Speaking />} />

        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications/temporal-horizons" element={<TemporalHorizons />} />
        <Route path="/publications/grokking-beyond-neural-networks" element={<GrokkingBeyondNeuralNetworks />} />
        <Route path="/publications/measuring-sharpness-in-grokking" element={<MeasuringSharpnessInGrokking />} />
        <Route path="/publications/cyclone-interventions" element={<CycloneInterventions />} />
        <Route path="/publications/llm-projects" element={<LLMProjects />} />
        <Route path="/speaking/helmguard-palantir" element={<HelmGuardPalantir />} />
        <Route path="/speaking/ai-security-forum-tel-aviv" element={<AISecurityForumTelAviv />} />
        <Route path="/speaking/secure-cyber-connect-podcast" element={<SecureCyberConnectPodcast />} />
      </Routes>
    </BrowserRouter>
  )
}
