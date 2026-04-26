import PostLayout from '../../components/PostLayout'

export default function MeasuringSharpnessInGrokking() {
  return (
    <PostLayout>
      <h2>Measuring Sharpness in Grokking</h2>
      <p><i>Paper accepted at Bridging the Gap Between Practice and Theory in Deep Learning (ICLR 2024). See <a href="https://arxiv.org/abs/2402.08946v1" target="_blank" rel="noreferrer">here</a>.</i></p>
      <p>
        Neural networks sometimes exhibit grokking, a phenomenon where perfect or near-perfect performance is
        achieved on a validation set well after the same performance has been obtained on the corresponding
        training set. In this workshop paper, we introduce a robust technique for measuring grokking, based on
        fitting an appropriate functional form. We then use this to investigate the sharpness of transitions in
        training and validation accuracy under two settings. The first setting is the theoretical framework
        developed by <a href="https://arxiv.org/abs/2310.16441" target="_blank" rel="noreferrer">Levi et al. (2023)</a> where
        closed form expressions are readily accessible. The second setting is a two-layer MLP trained to predict
        the parity of bits, with grokking induced by the concealment strategy we developed in our paper{' '}
        <a href="/publications/grokking-beyond-neural-networks">Grokking Beyond Neural Networks</a>. We find
        that trends between relative grokking gap and grokking sharpness are similar in both settings when using
        absolute and relative measures of sharpness. Reflecting on this, we make progress toward explaining some
        trends and identify the need for further study to untangle the various mechanisms which influence the
        sharpness of grokking.
      </p>
      <h3>Links</h3>
      <ul>
        <li><a href="https://arxiv.org/abs/2402.08946v1" target="_blank" rel="noreferrer">arXiv paper</a></li>
        <li><a href="https://openreview.net/forum?id=X5ijJFkEpr" target="_blank" rel="noreferrer">OpenReview page</a></li>
      </ul>
    </PostLayout>
  )
}
