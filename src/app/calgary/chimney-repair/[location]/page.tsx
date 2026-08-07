import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AboutUsContent from "@/components/ArchitectureStudio/AboutUsContent";
import ClientsFeedbackSlider from "@/components/ArchitectureHome/ClientsFeedbackSlider";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import FaqsContent from "@/components/Faqs/FaqsContent";
import Footer from "@/components/Layout/Footer";
import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import Process from "@/components/ServiceDetails/Process";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import Overview from "@/components/InteriorHome/Overview";
import {
  chimneyRepairLocations,
  getChimneyRepairLocation,
} from "@/lib/chimneyRepairLocations";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

interface ChimneyLocationPageProps {
  params: { location: string };
}

const chimneyProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/chimney_repair/2.webp",
    title: "Inspect The Chimney",
    text: "We assess the masonry, crown, cap, joints, and visible damage.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/chimney_repair/3.webp",
    title: "Plan The Repair",
    text: "The repair scope is matched to the structure and source of damage.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/chimney_repair/4.webp",
    title: "Restore The Masonry",
    text: "Failed brick, stone, and mortar are repaired with durable materials.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/chimney_repair/5.webp",
    title: "Finish & Protect",
    text: "The completed work is detailed for strength and weather resistance.",
    aosDelay: "400",
  },
];

const chimneyOverviewItems = [
  {
    image: "/images/services/service/chimney_repair/6.webp",
    titleNormal: "Crown & Cap",
    titleHighlight: "Repair",
    aosDelay: "100",
  },
  {
    image: "/images/services/service/chimney_repair/7.webp",
    titleNormal: "Tuckpointing",
    titleHighlight: "Restoration",
    aosDelay: "200",
  },
];

const chimneyFeedbacks = [
  {
    id: "1",
    feedbackText:
      "After a heavy rain, we started seeing signs of moisture around the fireplace. DMG Masonry found the problem with the chimney and repaired it before it turned into something bigger. It's been holding up well ever since.",
    name: "Allison P.",
  },
  {
    id: "2",
    feedbackText:
      "The finished work blends in really well, and it doesn't stand out like a patch job.",
    name: "Trevor L.",
  },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return chimneyRepairLocations.map((location) => ({
    location: location.slug,
  }));
}

export function generateMetadata({
  params,
}: ChimneyLocationPageProps): Metadata {
  const location = getChimneyRepairLocation(params.location);

  if (!location) {
    return {};
  }

  return buildMetadata({
    title: location.metadataTitle,
    description: location.metadataDescription,
    path: `/calgary/chimney-repair/${location.slug}/`,
  });
}

export default function ChimneyLocationPage({
  params,
}: ChimneyLocationPageProps) {
  const location = getChimneyRepairLocation(params.location);

  if (!location) {
    notFound();
  }

  const faqs = [
    {
      uuid: `faq-${location.slug}-1`,
      question: `What are the signs that my ${location.name} chimney needs repair?`,
      answers: [
        "Cracked or missing mortar, loose brick or stone, white staining, pieces of masonry near the roof, water marks around the fireplace, and a visibly cracked crown are all reasons to arrange an inspection. Early assessment can often keep the repair more focused.",
      ],
    },
    {
      uuid: `faq-${location.slug}-2`,
      question: `How does local weather affect chimneys in ${location.name}?`,
      answers: [
        `${location.climateContext} Once water enters a crack or open joint, freezing can expand the affected area and speed up deterioration. Sound mortar, crown, and cap details help reduce that exposure.`,
      ],
    },
    {
      uuid: `faq-${location.slug}-3`,
      question: "Can you repair part of a chimney, or does it need rebuilding?",
      answers: [
        "Many chimneys can be repaired selectively when the surrounding masonry remains stable. Repointing joints, replacing individual units, or rebuilding only the upper courses may be sufficient. A broader rebuild is recommended when movement or deterioration has affected the chimney's overall stability.",
      ],
    },
    {
      uuid: `faq-${location.slug}-4`,
      question: "What chimney components can DMG Masonry repair?",
      answers: [
        "Our masonry repair scope can include brick and stone units, mortar joints, chimney crowns, caps, and unstable sections of the stack. An inspection determines which components are contributing to leaks, movement, or visible deterioration.",
      ],
    },
    {
      uuid: `faq-${location.slug}-5`,
      question: `How do I request a chimney repair quote in ${location.name}?`,
      answers: [
        `Contact DMG Masonry with your ${location.name} property details and a description of the concern. Photos are helpful for initial context, and an on-site assessment can then confirm the condition and appropriate repair scope.`,
      ],
    },
  ];

  const pageUrl = `/calgary/chimney-repair/${location.slug}/`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Chimney Repair in ${location.name}`,
    description: location.metadataDescription,
    url: `${siteConfig.url}${pageUrl}`,
    areaServed: {
      "@type": "Place",
      name: `${location.name}, Alberta`,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      telephone: siteConfig.telephone,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <NavbarStyleTwo />

      <PageTitle
        title={`Chimney Repair in ${location.name}`}
        homeText="Chimney Repair"
        homeUrl="/calgary/chimney-repair/"
      />

      <ServiceDetailsContent
        mainImage="/images/services/service/chimney_repair/1.webp"
        title={`Chimney Repair Services in ${location.name}`}
        subtitle="SERVICE"
        description1={location.description}
        paragraphs={location.paragraphs}
        benefits={location.benefits}
        extraParagraphs={location.extraParagraphs}
      />

      <Process
        title={`Our ${location.name} Chimney Repair Process`}
        steps={chimneyProcessSteps}
      />

      <Overview fullWidth items={chimneyOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="What Clients Say"
        titleHighlight="About Our Chimney Repair"
        feedbacks={chimneyFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/chimney_repair/8.webp"
        subtitle="WHY CHOOSE US"
        title={location.whyChooseTitle}
        description={location.whyChooseDescription}
        listItems={location.whyChooseItems}
        buttonText="Request an Assessment"
        buttonLink="/contact-us/"
      />

      <FaqsContent
        faqs={faqs}
        title={`Chimney Repair FAQs for ${location.name}`}
        subtitle="FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/chimney_repair/9.webp"
          title={`Request Chimney Repair in ${location.name}`}
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
