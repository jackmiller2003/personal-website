import Layout from '../components/Layout'
import Headshot from '../components/Headshot'

export default function Home() {
  return (
    <Layout>
      <div id="home-top">
        <div id="home-profile">
          <Headshot />
        </div>
        <div id="home-latest">
          <p className="home-quote">
            "Trust but verify. But verify a lot. Like a lot."
          </p>
        </div>
      </div>
      <hr />
      <p>
        Hi, I'm a startup founder working on building a more secure world at my company{' '}
        <a href="https://helmguard.ai" target="_blank" rel="noreferrer">HelmGuard</a>. We mainly
        work with healthcare and financial institutions, building their capacity to assess
        cybersecurity risks from third parties and verify relevant mitigations are in place.
        Before starting HelmGuard, I was a summer fellow at the ERA fellowship in Cambridge
        where I worked on AI governance.
      </p>
      <p>
        I have an undergraduate degree in mathematics and computer science from The Australian
        National University. During my degree, I worked with a variety research groups within ANU
        and at other institutions such as ETH Zurich. With these groups, I published papers in
        climate governance, deep learning theory and quantum chemistry.
      </p>
      <p>
        In my spare time I enjoy listening to music, indulging my amateur interest in philosophy
        and taking in the hedonic pleasures of London (e.g. walking from Primrose Hill through
        to Hyde Park).
      </p>
    </Layout>
  )
}
