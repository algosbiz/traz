import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import Footer from "@/components/Layout/Footer";
import Process from "@/components/ServiceDetails/Process";
import Overview from "@/components/InteriorHome/Overview";
import AboutUsContent from "@/components/ArchitectureStudio/AboutUsContent";
import FaqsContent from "@/components/Faqs/FaqsContent";
import ClientsFeedbackSlider from "@/components/ArchitectureHome/ClientsFeedbackSlider";

// Data FAQ khusus untuk halaman Masonry Repair
const masonryRepairFaqs = [
  {
    uuid: "faq-repair-1",
    question: "What types of masonry problems do you repair",
    answers: [
      "TWe handle a wide range of masonry issues including cracked or failing mortar joints, damaged or shifting bricks, localized stone deterioration, and structural cracks. Each repair is carried out to restore both stability and long-term performance of the structure."
    ]
  },
  {
    uuid: "faq-repair-2",
    question: "When should masonry be repaired instead of just monitored?",
    answers: [
      "Masonry should be repaired as soon as signs of movement, widening cracks, or deteriorating mortar become visible. Delaying repairs can allow moisture to enter the structure, which may lead to more serious damage over time, especially in climates with frequent weather changes."
    ]
  },
  {
    uuid: "faq-repair-3",
    question: "Do you offer partial repairs or full restoration work?",
    answers: [
      "Yes, we provide both targeted masonry repairs and full restoration services. The approach depends on the condition of the structure, allowing us to address specific problem areas while ensuring the overall integrity and durability of the masonry."
    ]
  },
  {
    uuid: "faq-repair-4",
    question: "Will repaired areas match the existing masonry?",
    answers: [
      "We carefully match materials, textures, and joint finishes to ensure repaired sections blend naturally with the existing brick or stonework. The goal is to maintain a consistent and cohesive appearance across the structure."
    ]
  },
  {
    uuid: "faq-repair-5",
    question: "How does the masonry repair process begin?",
    answers: [
      "Every project begins with a detailed on-site assessment. We evaluate the condition of the masonry, identify both visible damage and underlying causes, and then recommend the most effective repair approach to ensure long-term stability and performance."
    ]
  }
];

// Tahapan proses spesifik untuk Masonry Repair
const masonryProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/masonry_repair/2.webp",
    title: "Inspect The Damage",
    text: "We assess cracks and structural issues to identify the condition.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/masonry_repair/3.webp",
    title: "Plan The Repair",
    text: "We determine the most effective repair approach for lasting results.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/masonry_repair/4.webp",
    title: "Restore The Masonry",
    text: "Brick, stone, and mortar are repaired with durable materials.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/masonry_repair/5.webp",
    title: "Ensure Lasting Performance",
    text: "Repairs are completed with attention to durability and appearance.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Masonry Repair
const masonryOverviewItems = [
  {
    image: "/images/services/service/masonry_repair/6.webp",
    titleNormal: "Brick & Mortar",
    titleHighlight: "Restoration",
    aosDelay: "100"
  },
  {
    image: "/images/services/service/masonry_repair/7.webp",
    titleNormal: "Stone Masonry",
    titleHighlight: "Refurbishing",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Masonry Repair
const masonryFeedbacks = [
  {
    id: "1",
    feedbackText: "They completely restored our 1950s brick chimney. The color matching was so perfect you can't even tell where the new mortar begins. Outstanding craftsmanship!",
    image: "/images/client/user1.png",
    name: "David H.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "Professional from start to finish. They fixed our retaining wall quickly and left the yard spotless. I highly recommend DMG Masonry for any stone work.",
    image: "/images/client/user2.png",
    name: "Sarah Jenkins",
    designation: "Property Manager",
  }
];

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Masonry Repair Calgary — Restore Brick & Stone",
  description:
    "Masonry repair Calgary: expert brick, stone, and chimney restoration, structural patching, and weatherproofing to extend lifespan; contact DMG Masonry today",
  path: "/calgary/masonry-repair/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Masonry Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/masonry_repair/1.webp"
        title="Professional Masonry Repair & Restoration Services"
        subtitle="SERVICE"
        description1="At DMG Masonry, we provide masonry repair and restoration services designed to restore strength, stability, and timeless appearance for residential and commercial properties, helping structures perform reliably for years to come."
        paragraphs={[
          "Over time, masonry can experience cracks, surface wear, moisture damage, and structural deterioration caused by weather exposure and everyday use. Our team handles masonry repairs carefully using reliable techniques and quality materials to restore both function and appearance while maintaining the original character of the structure.",
          "Masonry restoration also helps extend the lifespan and long-term value of a property. With proper repair work and ongoing upkeep, masonry surfaces can remain durable, visually consistent, and resistant to further deterioration over time. Restoration work also supports better structural performance while preserving the timeless look of brick and stone construction."
        ]}
        benefits={[
          "Structural Stability",
          "Timeless Appearance",
          "Long-Term Protection",
          "Reliable Restoration",
        ]}
        extraParagraphs={[
          "Every masonry repair project requires a clear understanding of the structure, existing damage, and long-term performance goals. Our team carefully reviews the condition of the masonry to recommend repair and restoration solutions that support lasting durability and reliable structural integrity.",
          "DMG Masonry approaches restoration work with a focus on preserving both strength and appearance. Whether repairing cracked brickwork, worn mortar joints, or damaged stone surfaces, we aim to restore masonry in a way that feels consistent with the original structure while improving long-term performance.",
          "Long-lasting masonry restoration requires the right combination of durable materials, experienced craftsmanship, and careful execution throughout every stage of the repair process. With precision workmanship and close attention to detail, we help masonry structures maintain their strength, stability, functionality, and timeless appearance while supporting reliable long-term performance for years to come."
        ]}
      />

      <Process
        title="Our Masonry Repair Process"
        steps={masonryProcessSteps}
      />

      <Overview
        fullWidth
        items={masonryOverviewItems}
      />

      <ClientsFeedbackSlider
        titleNormal="What Calgary Residents"
        titleHighlight="Say About Us"
        feedbacks={masonryFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/masonry_repair/8.webp"
        subtitle="WHY CHOOSE US"
        title="Signs Your Masonry May Need Restoration"
        description="Small masonry issues can develop into larger structural problems if left untreated. We identify early signs of deterioration before they affect the structure’s strength, stability, and appearance."
        listItems={[
          "Cracked or deteriorating mortar joints",
          "Bulging or shifting brickwork",
          "Visible structural cracking",
          "Moisture-related masonry damage"
        ]}
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={masonryRepairFaqs}
        title="Frequently Asked Questions - Masonry Repair"
        subtitle="REPAIR FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/masonry_repair/9.webp"
          title="Restore Your Masonry"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
