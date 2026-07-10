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

// Data FAQ khusus untuk halaman Fireplace Installation
const fireplaceFaqs = [
  {
    uuid: "faq-fireplace-1",
    question: "Can an outdoor fireplace work in a smaller backyard?",
    answers: [
      "Yes. Outdoor fireplaces can be designed for both compact and larger outdoor spaces. We plan each installation carefully to ensure the fireplace fits comfortably within the layout while maintaining proper safety clearances and everyday functionality.",
    ],
  },
  {
    uuid: "faq-fireplace-2",
    question: "What types of outdoor fireplaces do you install?",
    answers: [
      "We install custom outdoor fireplaces in a range of styles and fuel types, including wood-burning and gas systems. Each design is tailored to suit the surrounding outdoor space and overall property aesthetic.",
    ],
  },
  {
    uuid: "faq-fireplace-3",
    question: "Are permits required for outdoor fireplace installation?",
    answers: [
      "Depending on the fireplace design, fuel type, and local building requirements, permits may be necessary. Our team helps guide the process and ensures installations align with applicable codes and safety standards.",
    ],
  },
  {
    uuid: "faq-fireplace-4",
    question: "How is safety handled during fireplace construction?",
    answers: [
      "Safety is considered throughout every stage of the project. We use appropriate construction methods, heat-resistant materials, and proper spacing to support safe operation, structural stability, and long-term outdoor performance.",
    ],
  },
  {
    uuid: "faq-fireplace-5",
    question: "Can the fireplace design be customized?",
    answers: [
      "Absolutely. We offer custom fireplace designs with different masonry finishes, layouts, and material options so the final installation complements the style and character of the property.",
    ],
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
    text: "Final details are refined for a clean lasting result.",
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
        title="Outdoor Fireplace Installation Calgary"
        subtitle="SERVICE"
        description1="At DMG Masonry, we create custom fireplace installations that add warmth, comfort, and visual character to residential and commercial properties while providing dependable performance and lasting durability."
        paragraphs={[
          "Outdoor fireplaces create a natural gathering space where people can relax and enjoy their backyard comfortably through different seasons. Whether installed on a patio, deck, or garden area, each fireplace is designed to fit naturally within the outdoor setting while adding both functionality and character to the space.",
          "Inside the home, a fireplace can become a strong architectural feature that enhances the overall layout and ambiance of the room. We install gas, electric, and wood-burning fireplaces using materials and finishes selected to suit both traditional and contemporary interiors.",
        ]}
        benefits={[
          "Indoor & Outdoor Fireplaces",
          "Functional Fireplace Features",
          "Custom Design & Material Options",
          "Durable Fireplace Construction",
        ]}
        extraParagraphs={[
          "Every project is approached with careful planning to ensure the fireplace complements the surrounding space while meeting practical installation requirements. From layout considerations and ventilation to finishing details, we focus on creating a result that feels balanced, functional, and visually cohesive.",
          "Our team works with a wide selection of materials to achieve different fireplace styles and finishes. Natural stone, brick, and tile elements can all be incorporated to create a feature that reflects the character of the property while maintaining long-term durability and reliable performance.",
          "Quality fireplace construction requires experienced workmanship, durable materials, and proper installation methods throughout every stage of the project. At DMG Masonry, we focus on building fireplaces that not only provide warmth and comfort, but also maintain a clean appearance, reliable functionality, and long-term value for residential and commercial spaces.",
        ]}
      />

      <Process
        title="Our Outdoor Fireplace Installation Process"
        steps={fireplaceProcessSteps}
      />

      <Overview fullWidth items={fireplaceOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="What Our Clients Say"
        titleHighlight="About Their Fireplaces"
        feedbacks={fireplaceFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/fireplace_installation/8.webp"
        subtitle="WHY CHOOSE US"
        title="Designed for Comfort & Year-Round Enjoyment"
        description="We build custom outdoor fireplaces that add warmth, comfort, and visual character to outdoor living spaces while supporting long-term outdoor use while complementing the style of the property."
        listItems={[
          "Built for outdoor durability",
          "Warm and inviting atmosphere",
          "Ideal for gathering spaces",
          "Designed for lasting performance",
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
