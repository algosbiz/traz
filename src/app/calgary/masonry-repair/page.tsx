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
import MaterialsSection from "@/components/ServiceDetails/MaterialsSection";

// Data FAQ khusus untuk halaman Masonry Repair
const masonryRepairFaqs = [
  {
    uuid: "faq-repair-1",
    question: "What types of masonry problems do you repair?",
    answers: [
      "We handle a wide range of masonry issues including cracked or failing mortar joints, damaged or shifting bricks, localized stone deterioration, and structural cracks. Each brick masonry repair is carried out to restore both stability and long-term performance of the structure."
    ]
  },
  {
    uuid: "faq-repair-2",
    question: "When should masonry be repaired instead of just monitored?",
    answers: [
      "Masonry should be repaired as soon as signs of movement, widening cracks, or deteriorating mortar become visible. Delaying repairs can allow moisture to enter the structure, which may lead to more serious damage over time, especially in a climate like Calgary's with frequent freeze-thaw changes."
    ]
  },
  {
    uuid: "faq-repair-3",
    question: "Do you offer partial repairs or full masonry restoration?",
    answers: [
      "Yes. We provide both targeted masonry repairs and full masonry restoration services across Calgary and Alberta. The approach depends on the condition of the structure, allowing us to address specific problem areas while ensuring the overall integrity and durability of the masonry."
    ]
  },
  {
    uuid: "faq-repair-4",
    question: "Will repaired areas match the existing brickwork?",
    answers: [
      "Yes. We carefully match materials, textures, and joint finishes so repaired sections blend naturally with the existing brick or stonework. The goal is to maintain a consistent and cohesive appearance across the structure."
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
    text: "We assess cracks and structural issues to identify the condition of the brick or stone.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/masonry_repair/3.webp",
    title: "Plan The Repair",
    text: "We determine the most effective masonry repair approach for lasting results.",
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

// Jenis kerusakan masonry - section tanya-jawab baru (AEO)
const masonryDamageTypes = [
  {
    title: "What is spalling brick?",
    text: "Spalling is when the face of a brick flakes, chips or pops off, leaving a rough, crumbling surface. It happens when water soaks into the brick, freezes and expands. Calgary sees a high number of freeze-thaw cycles each winter, which is why spalling shows up here more than in milder climates. Spalled brick cannot be patched - the affected units are cut out and replaced.",
    aosDelay: "100",
  },
  {
    title: "What does cracked or crumbling mortar mean?",
    text: "Mortar is designed to be softer than the brick around it so that it wears first and the brick survives. When joints turn powdery, hollow or start falling out, water can get behind the wall. The fix is repointing: raking out the failed mortar to a consistent depth and packing in fresh mortar matched to the original.",
    aosDelay: "200",
  },
  {
    title: "Why is my brick wall bulging or leaning?",
    text: "Bulging usually means the masonry has lost its connection to the structure behind it, or moisture has built up inside the wall. This is the most serious of the common signs. A bulging wall should be inspected rather than watched, because the failure is already structural.",
    aosDelay: "300",
  },
  {
    title: "What is efflorescence on brick?",
    text: "Efflorescence is the white, powdery deposit that appears on brick and mortar. It is mineral salt left behind as water travels through the masonry and evaporates at the surface. The staining itself is cosmetic and washes off, but it is a signal that water is getting into the wall somewhere.",
    aosDelay: "400",
  },
  {
    title: "What do stair-step cracks mean?",
    text: "Stair-step cracks follow the mortar joints diagonally in a stepped pattern. They usually point to movement or settlement below the wall rather than a fault in the brick itself, which is why the repair often starts at the foundation rather than the face of the masonry.",
    aosDelay: "500",
  },
];

// Testimonial klien spesifik untuk Masonry Repair
const masonryFeedbacks = [
  {
    id: "1",
    feedbackText:
      "The damaged area had been bothering us for a while because it was becoming more noticeable each year. After the repairs, you wouldn't know there had ever been an issue.",
    name: "Eric T.",
  },
  {
    id: "2",
    feedbackText:
      "I wasn't sure if the cracks needed to be repaired right away, so I had them come take a look. They explained what was worth fixing now and what could wait. That kind of honesty was really appreciated.",
    name: "Ryan K.",
  },
  {
    id: "3",
    feedbackText:
      "Our brickwork was starting to show its age, especially around a few spots near the front of the house. The repairs kept the original look of the house without drawing attention to the repaired areas.",
    name: "Emily W.",
  },
];

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Find Masonry Repair Near You Quickly - DMG Masonry",
  description:
    "If you are looking for a mason to fix cracked brick, chipped stone or crumbling mortar, our Calgary team offers lasting masonry restoration you can count on.",
  path: "/calgary/masonry-repair/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Masonry Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/masonry_repair/1.webp"
        title="Masonry Repair in Calgary: Professional Brick & Stone Restoration"
        subtitle="SERVICE"
        description1="DMG Masonry is a masonry repair contractor in Calgary, Alberta. We provide masonry repair and masonry restoration services designed to restore strength, stability, and timeless appearance for residential and commercial properties, helping structures perform reliably for years to come."
        paragraphsHeading="What causes masonry to need repair?"
        paragraphs={[
          "Over time, masonry can experience cracks, surface wear, moisture damage, and structural deterioration caused by weather exposure and Calgary's freeze-thaw cycles. Our team handles brick and stone masonry repair carefully using reliable techniques and quality materials to restore both function and appearance while maintaining the original character of the structure.",
          "Masonry restoration also helps extend the lifespan and long-term value of a property. With proper repair work and ongoing upkeep, masonry surfaces can remain durable, visually consistent, and resistant to further deterioration over time. Restoration work also supports better structural performance while preserving the timeless look of brick and stone construction."
        ]}
        benefits={[
          "Structural Stability",
          "Timeless Appearance",
          "Long-Term Protection",
          "Reliable Brick Restoration",
        ]}
        extraParagraphsHeading="What does a masonry repair project involve?"
        extraParagraphs={[
          "Every masonry repair project requires a clear understanding of the structure, existing damage, and long-term performance goals. Our team carefully reviews the condition of the masonry to recommend repair and restoration solutions that support lasting durability and reliable structural integrity.",
          "As masonry contractors in Calgary, we approach restoration work with a focus on preserving both strength and appearance. Whether handling brick masonry repair, worn mortar joints, or damaged stone surfaces, we aim to restore masonry in a way that feels consistent with the original structure while improving long-term performance.",
          "Long-lasting masonry restoration requires the right combination of durable materials, experienced craftsmanship, and careful execution throughout every stage of the repair process. With precision workmanship and close attention to detail, we help masonry structures across Calgary and Alberta maintain their strength, stability, functionality, and timeless appearance for years to come."
        ]}
      />

      <Process
        title="How Does Our Masonry Repair Process Work?"
        steps={masonryProcessSteps}
      />

      <Overview
        fullWidth
        items={masonryOverviewItems}
      />

      <MaterialsSection
        subtitle="DAMAGE TYPES"
        title="What Type Of Masonry Damage Do You Have?"
        items={masonryDamageTypes}
      />

      <ClientsFeedbackSlider
        titleNormal="What Calgary Residents"
        titleHighlight="Say About Us"
        feedbacks={masonryFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/masonry_repair/8.webp"
        subtitle="WHY CHOOSE US"
        title="What Are The Signs Your Masonry Needs Repair?"
        description="Small masonry issues can develop into larger structural problems if left untreated. As masonry repair contractors in Calgary, we identify early signs of deterioration before they affect the structure's strength, stability, and appearance."
        listItems={[
          "Cracked or deteriorating mortar joints",
          "Bulging or shifting brickwork",
          "Visible structural cracking",
          "Moisture-related masonry damage",
          "Spalling brick after Alberta freeze-thaw cycles"
        ]}
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={masonryRepairFaqs}
        title="Masonry Repair Calgary: Frequently Asked Questions"
        subtitle="FAQ"
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
