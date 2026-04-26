import PostLayout from '../../components/PostLayout'

export default function AISecurityForumTelAviv() {
  return (
    <PostLayout>
      <h2>Building Trustworthy Supply Chains with AI</h2>
      <p><i>Talk at AI Security Forum, Tel Aviv, 2025</i></p>
      <div className="video-embed">
        <iframe
          src="https://www.youtube.com/embed/2eNeROsSSwM"
          title="AI Security Forum Tel Aviv"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p>
        In this talk I discuss how an attacker could compromise critical national infrastructure by exploiting
        vulnerabilities in its third-party supply chain — and what defenders can do about it.
      </p>

    </PostLayout>
  )
}
