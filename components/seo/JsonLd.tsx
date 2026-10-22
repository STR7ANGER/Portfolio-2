import { seoProjects, siteConfig, siteUrl } from "@/lib/site-config"
import { experiences } from "@/components/portfolio-data"

const PERSON_ID = `${siteUrl}/#person`
const WEBSITE_ID = `${siteUrl}/#website`
const PAGE_ID = `${siteUrl}/#webpage`

/**
 * One @graph containing every entity on the page, cross-linked by @id so
 * search engines resolve them as a single knowledge unit rather than
 * unrelated fragments.
 */
function buildGraph() {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    givenName: "Aditya",
    familyName: "Maurya",
    alternateName: "STR7ANGER",
    url: siteUrl,
    image: `${siteUrl}/icon-512.png`,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    knowsAbout: [...siteConfig.knowsAbout],
    nationality: { "@type": "Country", name: "India" },
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bennett University",
      sameAs: "https://www.bennett.edu.in/",
    },
    worksFor: {
      "@type": "Organization",
      name: experiences[0].company,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: siteConfig.jobTitle,
      occupationalCategory: "15-1252.00", // O*NET: Software Developers
      skills: siteConfig.knowsAbout.join(", "),
    },
    sameAs: Object.values(siteConfig.socials),
  }

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    copyrightHolder: { "@id": PERSON_ID },
  }

  const profilePage = {
    "@type": ["WebPage", "ProfilePage"],
    "@id": PAGE_ID,
    url: siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
    inLanguage: "en",
    primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}/opengraph-image` },
  }

  const projectList = {
    "@type": "ItemList",
    "@id": `${siteUrl}/#projects`,
    name: "Projects by Aditya Maurya",
    numberOfItems: seoProjects.length,
    itemListElement: seoProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.name,
        description: project.seoDescription,
        url: project.url,
        image: `${siteUrl}${project.image}`,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        author: { "@id": PERSON_ID },
        codeRepository: project.repo,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    })),
  }

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, projectList],
  }
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is injected verbatim; `<` is escaped so the
      // payload can never terminate the surrounding <script> tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildGraph()).replace(/</g, "\\u003c"),
      }}
    />
  )
}
