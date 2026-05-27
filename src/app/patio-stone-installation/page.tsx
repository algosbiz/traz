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

// Data FAQ khusus untuk halaman Patio Stone Installation
const patioStoneFaqs = [
  {
    uuid: "faq-patio-1",
    question: "Can patio stones be installed on uneven or sloped ground?",
    answers: [
      "Yes. We assess the site conditions and properly prepare the base to ensure a stable and level patio surface, even on uneven or sloped terrain. Proper groundwork is essential for long-term durability and performance.",
    ],
  },
  {
    uuid: "faq-patio-2",
    question: "What materials are commonly used for patio stone installation?",
    answers: [
      "We work with a range of durable materials including natural stone, concrete pavers, and masonry products. Material selection is based on both design preferences and suitability for Calgary's weather conditions.",
    ],
  },
  {
    uuid: "faq-patio-3",
    question: "Can an existing patio be repaired instead of replaced?",
    answers: [
      "Yes. In many cases, patios can be repaired or re-leveled without requiring full replacement. We restore uneven, cracked, or shifted patio stones to improve both appearance and structural stability.",
    ],
  },
  {
    uuid: "faq-patio-4",
    question: "How long does a patio stone installation typically last?",
    answers: [
      "With proper installation methods and maintenance, a professionally built patio can last for many years. Durability depends on base preparation, material quality, and overall workmanship during installation.",
    ],
  },
  {
    uuid: "faq-patio-5",
    question: "Can patio stone layouts and patterns be customized?",
    answers: [
      "Yes. At DMG Masonry, we design custom patio layouts based on property layout, usage needs, and visual preferences. This includes stone patterns, shapes, and overall design flow to match the outdoor space.",
    ],
  },
];

// Tahapan proses spesifik untuk Patio Stone Installation
const patioStoneProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Assess The Site",
    text: "We evaluate ground conditions, drainage, and layout prior to installation.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Prepare The Base",
    text: "Proper grading and base work are completed to support a stable surface.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Install The Stones",
    text: "Each stone is placed with care to ensure alignment, level, and strength.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Complete The Surface",
    text: "Final adjustments are made to achieve a clean, durable, and even finish.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Patio Stone Installation
import overviewImg1 from "../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../public/images/overview/overview4.jpg";

const patioStoneOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Natural Flagstone",
    titleHighlight: "Patios",
    aosDelay: "100",
  },
  {
    image: overviewImg2,
    titleNormal: "Interlocking",
    titleHighlight: "Pavers",
    aosDelay: "200",
  },
];

// Testimonial klien spesifik untuk Patio Stone Installation
const patioStoneFeedbacks = [
  {
    id: "1",
    feedbackText:
      "Our new interlocking paver patio is the absolute perfect addition to our backyard. The installation was incredibly fast and the grading is flawless.",
    image: "/images/client/user1.png",
    name: "Amanda R.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText:
      "They transformed our muddy backyard into a stunning stone courtyard. Highly recommend their hardscaping services.",
    image: "/images/client/user2.png",
    name: "Chris L.",
    designation: "Homeowner",
  },
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="Patio Stone Installation"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        title="Patio Stone Installation Services"
        subtitle="SERVICE"
        description1="A properly installed patio stone surface can improve both the function and appearance of an outdoor space. Our patio stone installation services at DMG Masonry focus on building stable, well-structured surfaces for everyday use and long-term durability in Calgary's climate."
        paragraphs={[
          "Outdoor patio areas are exposed to constant movement, seasonal weather changes, and moisture over time. At DMG Masonry, we install patio stones using dependable construction methods and carefully selected materials to ensure the surface remains stable, properly aligned, and visually consistent through years of use.",
          "Beyond functionality, a patio also plays an important role in shaping how the overall outdoor environment comes together. With the right layout and planning, we help create spaces that feel practical for everyday use while still remaining comfortable and inviting for hosting, relaxation, and outdoor gatherings, while maintaining a cohesive connection with the rest of the property.",
        ]}
        benefits={[
          "Custom Patio Layout Planning",
          "Durable Outdoor Construction",
          "Professional Stone Installation",
          "Repair & Re-Leveling Services",
        ]}
        extraParagraphs={[
          "Every patio project starts with a detailed assessment of the space, including soil condition, drainage patterns, and intended use of the area. Our team at DMG Masonry carefully evaluates these factors before installation begins to determine the most suitable construction approach and to help ensure long-term performance and structural reliability.",
          "During installation, each stone is carefully positioned and adjusted to achieve consistent leveling, proper alignment, and strong structural stability. We focus on precise workmanship throughout the process, ensuring the surface not only looks clean and even but also performs well under regular foot traffic and varying weather conditions.",
          "At DMG Masonry, our patio stone installation work is built around durable construction methods, quality materials, and consistent execution at every stage of the project. The result is a patio surface designed to remain functional, stable, and visually consistent over many years of outdoor use.",
        ]}
      />

      <Process
        title="Our Patio Installation Process"
        steps={patioStoneProcessSteps}
      />

      <Overview fullWidth items={patioStoneOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="What Calgary Thinks"
        titleHighlight="About Our Patios"
        feedbacks={patioStoneFeedbacks}
      />

      <AboutUsContent
        subtitle="WHY CHOOSE US"
        title="Patio Stone Installation Built for Long-Term Use"
        description="A properly installed patio stone surface helps create a functional, balanced outdoor space. At DMG Masonry, we build patio installations with strong structure and a clean, timeless finish for everyday use."
        listItems={[
          "Stable and level stone placement",
          "Properly prepared base layers",
          "Durable outdoor surface construction",
          "Designed for everyday outdoor use",
        ]}
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={patioStoneFaqs}
        title="Frequently Asked Questions"
        subtitle="PATIO FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          title="Design Your Perfect Patio"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
