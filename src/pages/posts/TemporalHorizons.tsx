import PostLayout from '../../components/PostLayout'

export default function TemporalHorizons() {
  return (
    <PostLayout>
      <h2>Temporal Horizons in Forecasting: A Performance-Learnability Trade-off</h2>
      <p><i>Preprint available on arXiv. See the full paper <a href="https://arxiv.org/pdf/2506.03889v2.pdf" target="_blank" rel="noreferrer">here</a>.</i></p>
      <p>
        When training machine learning models to predict the future, a critical question emerges: how far ahead
        should we train them to forecast? This seemingly simple choice hides a fundamental trade-off that we've
        uncovered in our recent work. Too short a horizon might miss crucial long-term patterns, while too long
        a horizon can make the training process exponentially harder.
      </p>
      <img src="/images/temporal_horizons.png" alt="Temporal horizons visualization" style={{ maxWidth: '600px', margin: '20px auto', display: 'block' }} />
      <p>
        In this paper, we formalize the <i>performance-learnability trade-off</i> in autoregressive forecasting.
        Our key insight is that the geometry of the loss landscape — the mathematical surface that optimization
        algorithms navigate during training — changes dramatically with the forecasting horizon. For chaotic
        systems like weather, this landscape becomes exponentially rougher as we look further into the future.
        For periodic systems, the roughness grows linearly.
      </p>
      <h3>Key Findings</h3>
      <p><strong>The Loss Landscape Gets Rougher with Longer Horizons</strong><br />
        We prove that for chaotic systems, the number of local minima and maxima in the loss landscape grows
        exponentially with the training horizon. This means that training a model to predict 10 steps ahead can
        be exponentially harder than training it to predict just 1 step ahead. As the horizon approaches
        infinity, the loss landscape actually becomes fractal — making gradient descent essentially impossible.</p>
      <p><strong>Long-Horizon Models Generalise Better</strong><br />
        Despite being harder to train, models trained on longer horizons generalise remarkably well to
        short-term predictions. We show that a model trained to predict 10 steps ahead will typically perform
        better at 1-step predictions than a model trained specifically for 1-step forecasting. This creates our
        central trade-off: better performance requires navigating a more difficult optimisation landscape.</p>
      <p><strong>Optimal Horizons Depend on System Dynamics</strong><br />
        Through extensive experiments on systems ranging from the Lorenz attractor to ecological models, we
        found that the optimal training horizon depends on the underlying dynamics of the system — particularly
        whether it's chaotic (exponential error growth) or periodic (linear error growth).</p>
      <h3>Links</h3>
      <ul>
        <li><a href="https://arxiv.org/html/2506.03889v2" target="_blank" rel="noreferrer">Full paper on arXiv</a></li>
        <li><a href="https://arxiv.org/pdf/2506.03889v2.pdf" target="_blank" rel="noreferrer">PDF version</a></li>
      </ul>
    </PostLayout>
  )
}
