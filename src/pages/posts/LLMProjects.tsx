import PostLayout from '../../components/PostLayout'

export default function LLMProjects() {
  return (
    <PostLayout>
      <h2>Large Language Model Projects</h2>
      <p>
        I have also been involved in several LLM projects. These were mainly led by my collaborator{' '}
        <a href="https://www.linkedin.com/in/charles-o-neill/" target="_blank" rel="noreferrer">Charles O'Neill</a>{' '}
        and by members of <a href="https://universetbd.org" target="_blank" rel="noreferrer">UniverseTBD</a>.
        Links to papers associated with these projects are provided below.
      </p>
      <h3>Links</h3>
      <ul>
        <li><a href="https://arxiv.org/abs/2309.06126" target="_blank" rel="noreferrer">AstroLLaMA: Towards Specialized Foundation Models in Astronomy</a></li>
        <li><a href="https://arxiv.org/abs/2308.07645" target="_blank" rel="noreferrer">Steering Language Generation: Harnessing Contrastive Expert Guidance and Negative Prompting for Coherent and Diverse Synthetic Data Generation</a></li>
        <li><a href="https://arxiv.org/abs/2308.13768" target="_blank" rel="noreferrer">Adversarial Fine-Tuning of Language Models: An Iterative Optimisation Approach for the Generation and Detection of Problematic Content</a></li>
      </ul>
    </PostLayout>
  )
}
