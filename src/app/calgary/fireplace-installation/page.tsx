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

// Data FAQ khusus untuk halaman Fireplace Installation
const fireplaceFaqs = [
  {
    uuid: "faq-fireplace-1",
    question: "Can an outdoor fireplace work in a smaller backyard?",
    answers: [
      "Yes. Outdoor fireplaces can be designed for both compact and larger outdoor spaces. We plan the layout, size, and placement to fit comfortably within your available space while still creating a functional gathering area.",
    ],
  },
  {
    uuid: "faq-fireplace-2",
    question: "What types of outdoor fireplaces do you install?",
    answers: [
      "We install custom outdoor fireplaces in a range of styles and fuel types, including wood-burning, gas, and electric options, along with indoor luxury fireplace installations for homeowners who want a fireplace built into their living space.",
    ],
  },
  {
    uuid: "faq-fireplace-3",
    question: "What permits are required for outdoor fireplace installation?",
    answers: [
      "Depending on the fireplace design, fuel type, and local building requirements, permits may be required before construction begins. We can help you understand what applies to your specific project.",
    ],
  },
  {
    uuid: "faq-fireplace-4",
    question: "How is safety handled during fireplace construction?",
    answers: [
      "Safety is considered throughout every stage of the project. We use appropriate construction methods, materials, and clearances to help ensure the fireplace performs safely for years to come.",
    ],
  },
  {
    uuid: "faq-fireplace-5",
    question: "Can the fireplace design be customized?",
    answers: [
      "Absolutely. We offer custom fireplace designs with different masonry finishes, layouts, and sizes to match your property's style and how you plan to use the space.",
    ],
  },
  {
    uuid: "faq-fireplace-6",
    question: "Should I choose an indoor or outdoor fireplace?",
    answers: [
      "The right choice depends on how you plan to use the space. An indoor luxury fireplace works well as a year-round architectural feature inside the home, while a patio outdoor fireplace is better suited for extending your outdoor living season.",
    ],
  },
  {
    uuid: "faq-fireplace-7",
    question: "What is the typical deposit required to start a fireplace installation?",
    answers: [
      "Most fireplace installations require an upfront deposit to secure materials and scheduling, with the remaining balance due as the project progresses or upon completion.",
    ],
  },
  {
    uuid: "faq-fireplace-8",
    question: "How long does mortar need to cure before a new fireplace can be used?",
    answers: [
      "Mortar and masonry used in fireplace construction typically need several days to cure properly before the fireplace is used, so we'll let you know the recommended waiting period for your specific installation.",
    ],
  },
  {
    uuid: "faq-fireplace-9",
    question: "Can a fireplace be finished with natural stone or stone veneer?",
    answers: [
      "Yes. Fireplaces can be finished with natural stone, stone veneer, brick, or tile, depending on the look you want and how it fits with the rest of your property. We can walk you through the options during the design stage.",
    ],
  },
];

const fireplaceOptions = [
  {
    icon: "flaticon-houses",
    title: "Indoor Luxury Fireplaces",
    text: "An indoor fireplace can become a defining architectural feature of your living space, built with materials and finishes selected to suit both traditional and contemporary interiors.",
    aosDelay: "100",
  },
  {
    icon: "flaticon-fireplace",
    title: "Patio Outdoor Fireplace",
    text: "A patio outdoor fireplace extends your outdoor living season, creating a natural gathering space for your backyard, deck, or garden area.",
    aosDelay: "200",
  },
];

// Tahapan proses spesifik untuk Fireplace Installation
const fireplaceProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/fireplace_installation/2.webp",
    title: "Assess the Outdoor Space",
    text: "We review the layout, surrounding features, and overall fireplace goals.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/fireplace_installation/3.webp",
    title: "Plan the Installation",
    text: "We develop a setup that balances function, safety, and visual flow.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/fireplace_installation/4.webp",
    title: "Build the Fireplace",
    text: "Materials are installed with durability and performance in mind.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/fireplace_installation/5.webp",
    title: "Complete the Finish",
    text: "Final details are refined for a clean, lasting result.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Fireplace Installation
const fireplaceOverviewItems = [
  {
    image: "/images/services/service/fireplace_installation/6.webp",
    titleNormal: "Indoor Luxury",
    titleHighlight: "Fireplaces",
    aosDelay: "100",
  },
  {
    image: "/images/services/service/fireplace_installation/7.webp",
    titleNormal: "Patio Outdoor",
    titleHighlight: "Fireplaces",
    aosDelay: "200",
  },
];

// Testimonial klien spesifik untuk Fireplace Installation
const fireplaceFeedbacks = [
  {
    id: "1",
    feedbackText:
      "DMG Masonry worked with the layout we already had, so the fireplace doesn't feel like an add-on. It fits naturally with the patio and the rest of the backyard.",
    name: "Chris W.",
  },
  {
    id: "2",
    feedbackText:
      "It looks clean, feels well built, and gives the space a much more finished look.",
    name: "Andrew M.",
  },
];

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Outdoor Fireplace Calgary | Fireplace Installation Experts",
  description:
    "Expert fireplace service in Calgary providing customized installations, safety upgrades, and preventive maintenance to boost performance and comfort.",
  path: "/calgary/fireplace-installation/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="Fireplace Installation"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        mainImage="/images/services/service/fireplace_installation/1.webp"
        title="Outdoor Fireplace Design & Installation in Calgary"
        subtitle="SERVICE"
        description1="At DMG Masonry, we create custom indoor and outdoor fireplace installations that add warmth, comfort, and visual character to residential and commercial properties throughout Calgary, while providing dependable performance and lasting durability."
        paragraphs={[
          "Outdoor fireplaces create a natural gathering space where people can relax and enjoy their backyard comfortably through different seasons, whether you're drawn to a patio outdoor fireplace or a more traditional indoor luxury fireplace built into your living space. Each fireplace is designed to fit naturally within its setting while adding both functionality and character.",
          "Inside the home, a fireplace can become a strong architectural feature that enhances the overall layout and ambiance of the room. We install gas, electric, and wood-burning fireplaces using materials and finishes selected to suit both traditional and contemporary interiors.",
        ]}
        benefits={[
          "Indoor & Outdoor Fireplaces",
          "Functional Fireplace Features",
          "Custom Design & Material Options",
          "Durable Fireplace Construction",
          "Fireplace Design Calgary Homeowners Trust",
          "Natural Stone & Stone Veneer Finishes",
          "Gas, Electric & Wood-Burning Options",
        ]}
        extraParagraphs={[
          "Every fireplace installation is approached with careful planning to ensure it complements the surrounding space while meeting practical requirements. From layout considerations and ventilation to finishing details, we focus on creating a result that feels balanced, functional, and visually cohesive.",
          "Our team works with a wide selection of materials to achieve different fireplace styles and finishes for Calgary homes. Natural stone, stone veneer, brick, and tile elements can all be incorporated to create a feature that reflects the character of the property while maintaining long-term durability.",
          "Quality fireplace construction requires experienced workmanship, durable materials, and proper installation methods throughout every stage of the project. At DMG Masonry, we focus on building fireplaces that not only provide warmth and comfort, but also maintain a clean appearance, reliable functionality, and long-term value.",
        ]}
      />

      <MaterialsSection
        subtitle="FIREPLACE OPTIONS"
        title="Indoor & Outdoor Fireplace Options in Calgary"
        description="Not every fireplace project looks the same, and the right option often comes down to where and how you want to use it. Here's a quick look at the two main paths we build."
        items={fireplaceOptions}
      />

      <Process
        title="Our Fireplace Design & Installation Process"
        steps={fireplaceProcessSteps}
      />

      <Overview fullWidth items={fireplaceOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="What Our Clients Say"
        titleHighlight="About Their Outdoor Fireplaces"
        feedbacks={fireplaceFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/fireplace_installation/8.webp"
        subtitle="WHY CHOOSE US"
        title="Designed for Comfort & Year-Round Outdoor Enjoyment"
        description="We build custom outdoor fireplaces in Calgary that add warmth, comfort, and visual character to outdoor living spaces, supporting long-term outdoor use while complementing the overall style of the property."
        listItems={[
          "Built for outdoor durability",
          "Warm and inviting atmosphere",
          "Ideal for gathering spaces",
          "Designed for lasting performance",
          "Indoor & outdoor fireplace options",
          "Natural stone and stone veneer finishes",
          "Fireplace design Calgary homeowners trust",
        ]}
        buttonText="Plan Your Project"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={fireplaceFaqs}
        title="Frequently Asked Questions"
        subtitle="FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/fireplace_installation/9.webp"
          title="Let's Build Your Ideal Outdoor Fireplace"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
