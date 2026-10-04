import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const fullTitle = `${title} | ${site.siteMetadata.title}`
  const siteUrl = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={fullTitle}
      link={[{ rel: "canonical", href: siteUrl }]}
      meta={[
        { name: "description", content: metaDescription },
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl },
        { property: "og:site_name", content: site.siteMetadata.title },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: fullTitle },
        { name: "twitter:description", content: metaDescription },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ALKIME LLC",
          legalName: "ALKIME LLC",
          url: siteUrl,
          description: metaDescription,
        })}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = { lang: "en", meta: [], description: "" }
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
