import { Helmet } from "react-helmet"

export default function AppHelmet() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does ClientPulse detect customer risk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "ClientPulse analyzes behavioral patterns and engagement metrics using AI models to detect potential churn risks.",
        },
      },
      {
        "@type": "Question",
        "name": "What industries can use ClientPulse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Primarily banking and financial services, but any business that tracks customer behavior can benefit.",
        },
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
