import PostLayout from '../../components/PostLayout'

export default function HelmGuardPalantir() {
  return (
    <PostLayout>
      <h2>HelmGuard: Terraforming Enterprise Security Data</h2>
      <p><i>Talk at Palantir Developer Conference, 2025</i></p>
      <div className="video-embed">
        <iframe
          src="https://www.youtube.com/embed/tbvEftV0YN0"
          title="HelmGuard at Palantir DevCon"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p>
        We no longer use Palantir, but this talk is a useful window into what we were focused on in the early
        days at HelmGuard and why. At the time, we were building on top of Palantir's AIP Agent Studio and
        this talk shows that work in action.
      </p>
      <p>
        The core problem I address is that security-relevant data — policies, standards, architecture diagrams,
        compliance documentation — is scattered across wikis, spreadsheets, and siloed systems. HelmGuard
        "terraforms" this data by ingesting and unifying it into a structured knowledge base that powers AI
        security agents. As a concrete example I walk through a third-party risk management workflow where our
        platform automates the processing of security questionnaires end-to-end, reducing processing times by
        up to 90% while keeping humans in the loop only where necessary.
      </p>

    </PostLayout>
  )
}
