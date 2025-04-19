import { Helmet } from "react-helmet"

export default function AppHelmet() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ClientPulse",
          applicationCategory: "BusinessApplication",
          url: "https://clientp.vercel.app",
          publisher: {
            "@type": "Organization",
            name: "ClientPulse AI",
          },
        })}
      </script>
    </Helmet>
  )
}
