import PostLayout from '../../components/PostLayout'

export default function SecureCyberConnectPodcast() {
  return (
    <PostLayout>
      <h2>Secure Cyber Connect Podcast</h2>
      <p><i>Secure Cyber Connect Podcast, 2025</i></p>
      <div className="video-embed">
        <iframe
          src="https://www.youtube.com/embed/OrLZ6_ZMxJc"
          title="Secure Cyber Connect Podcast"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p>
        In this episode I give an overview of what HelmGuard does and how we think about third-party security
        risk — why it's one of the most underappreciated attack surfaces in enterprise security, and how we're
        building tools to help organisations get on top of it.
      </p>
    </PostLayout>
  )
}
