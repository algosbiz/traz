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
    question: "What permits are required for outdoor fireplace installation?",
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
  {
    uuid: "faq-fireplace-6",
    question: "How long does a new outdoor fireplace need to cure before use?",
    answers: [
      "Masonry and mortar used in fireplace construction typically need several days to cure properly before the fireplace is used, and full curing can take a few weeks depending on weather and materials. We'll walk you through the recommended curing timeline for your specific fireplace once construction is complete.",
    ],
  },
  {
    uuid: "faq-fireplace-7",
    question: "How long does it take to build an outdoor fireplace?",
    answers: [
      "Most outdoor fireplace projects take between one and a few weeks to complete from start to finish, depending on the design, materials, and site conditions. We'll provide a more specific timeline once we've reviewed your project details.",
    ],
  },
  {
    uuid: "faq-fireplace-8",
    question: "Should I choose brick or natural stone for my outdoor fireplace?",
    answers: [
      "Both are excellent choices for outdoor fireplaces, and the right option often comes down to style preference, budget, and how the fireplace will complement your property. Natural stone tends to offer a more organic, textured look, while brick provides a classic, clean finish, we can walk you through both options during the design stage.",
    ],
  },
  {
    uuid: "faq-fireplace-9",
    question:
      "What should I ask a contractor before starting my outdoor fireplace project?",
    answers: [
      "It's worth asking about experience with outdoor fireplace construction specifically, expected timelines, material options, warranty coverage, and how permits and inspections are handled. We're happy to walk through all of this with you during your initial consultation.",
    ],
  },
  {
    uuid: "faq-fireplace-10",
    question:
      "Can an outdoor fireplace be combined with an outdoor kitchen or BBQ area?",
    answers: [
      "Yes. Many of our fireplace projects are designed alongside outdoor kitchens, BBQ stations, and seating areas to create a complete outdoor living space. We can plan your fireplace as part of a larger outdoor design if you're considering additional features.",
    ],
  },
];

// Section MATERIALS baru (lihat sheet "FIREPLACE INSTALLATION" baris 10-19)
const fireplaceMaterials = [
  {
    icon: "flaticon-cube",
    title: "Natural Stone",
    text: "Natural stone offers a textured, organic look that pairs well with both traditional and modern outdoor spaces. It's a popular choice for Calgary homeowners looking for a fireplace that feels grounded in its surroundings while standing up to years of outdoor exposure.",
    aosDelay: "100",
  },
  {
    icon: "flaticon-facade",
    title: "Stone Veneer",
    text: "Stone veneer delivers the appearance of full stone masonry at a lighter weight and often more efficient installation, making it one of the most requested finishes for Calgary outdoor fireplaces. It offers strong durability while giving you flexibility in color, texture, and pattern.",
    aosDelay: "200",
  },
  {
    icon: "flaticon-mansory",
    title: "Brick",
    text: "Brick provides a classic, clean-lined finish that suits a wide range of architectural styles. It's a reliable, long-lasting material that holds up well to Calgary's seasonal temperature swings.",
    aosDelay: "300",
  },
  {
    icon: "flaticon-color",
    title: "Tile & Eco-Friendly Options",
    text: "Tile finishes can add a distinct decorative touch to an outdoor fireplace surround, and we're also able to source eco-friendly and sustainably produced masonry materials for homeowners who want their project to reflect that priority.",
    aosDelay: "400",
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
        title="Outdoor Fireplace Design & Installation in Calgary"
        subtitle="SERVICE"
        description1="At DMG Masonry, we create custom outdoor fireplace installations for Calgary properties, adding warmth, comfort, and visual character to residential and commercial spaces while providing dependable performance and lasting durability."
        paragraphs={[
          "Outdoor fireplaces create a natural gathering space where people can relax and enjoy their backyard comfortably through different seasons in Calgary. Whether installed on a patio, deck, or garden area, each outdoor fireplace is designed to fit naturally within the outdoor setting while adding both functionality and character to the space.",
          "Inside the home, a fireplace can become a strong architectural feature that enhances the overall layout and ambiance of the room. We install gas, electric, and wood-burning fireplaces using materials and finishes selected to suit both traditional and contemporary interiors.",
        ]}
        benefits={[
          "Indoor & Outdoor Fireplaces in Calgary",
          "Functional Outdoor Fireplace Features",
          "Custom Fireplace Design & Material Options",
          "Durable Outdoor Fireplace Construction",
        ]}
        extraParagraphs={[
          "Every project is approached with careful planning to ensure the fireplace complements the surrounding space while meeting practical installation requirements. From layout considerations and ventilation to finishing details, we focus on creating a result that feels balanced, functional, and visually cohesive.",
          "Our team works with a wide selection of materials to achieve different fireplace styles and finishes, including natural stone fireplace designs popular across Calgary homes. Natural stone, brick, and tile elements can all be incorporated to create a feature that reflects the character of the property while maintaining long-term durability and reliable performance.",
          "Quality fireplace construction requires experienced workmanship, durable materials, and proper installation methods throughout every stage of the project. At DMG Masonry, we focus on building outdoor fireplaces that not only provide warmth and comfort, but also maintain a clean appearance, reliable functionality, and long-term value for residential and commercial spaces across Calgary.",
        ]}
      />

      <MaterialsSection
        title="Fireplace Materials & Finishes in Calgary"
        description="The material you choose plays a major role in how your fireplace looks, performs, and holds up outdoors. Here's a closer look at the options we work with most often."
        items={fireplaceMaterials}
      />

      <Process
        title="Our Outdoor Fireplace Installation Process in Calgary"
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
        description="We build custom outdoor fireplaces in Calgary that add warmth, comfort, and visual character to outdoor living spaces while supporting long-term outdoor use and complementing the overall style of the property."
        listItems={[
          "Built for outdoor durability",
          "Warm and inviting atmosphere",
          "Ideal for gathering spaces",
          "Designed for lasting performance",
          "Professional fireplace design and installation in Calgary",
          "Built with natural stone, brick & durable masonry materials",
          "Trusted by Calgary homeowners for outdoor living projects",
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
          title="Let's Build Your Ideal Outdoor Fireplace in Calgary"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
