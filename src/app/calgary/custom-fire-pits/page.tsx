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

// Data FAQ khusus untuk halaman Custom Fire Pits
const firePitsFaqs = [
  {
    uuid: "faq-firepit-1",
    question: "Do you build both gas and wood-burning fire pits?",
    answers: [
      "Yes. We design and install both gas-fueled and wood-burning fire pits depending on the property layout, intended use, and outdoor design preferences. Each installation is planned carefully to support safe and reliable long-term performance.",
    ],
  },
  {
    uuid: "faq-firepit-2",
    question: "Can the fire pit design be customized?",
    answers: [
      "Absolutely. Our team customizes the shape, size, material finish, and overall layout of each fire pit to complement the surrounding outdoor space while matching the property’s style and functional needs.",
    ],
  },
  {
    uuid: "faq-firepit-3",
    question: "Can a fire pit be integrated into an existing outdoor area?",
    answers: [
      "Yes. Fire pits can be incorporated into patios, seating areas, and other hardscape features to create a more cohesive and functional outdoor environment. We carefully plan the layout to ensure the installation feels naturally connected to the space.",
    ],
  },
  {
    uuid: "faq-firepit-4",
    question: "Are custom fire pits designed with safety in mind?",
    answers: [
      "Yes. Every fire pit installation is completed using reliable construction methods and planned according to appropriate safety practices and local requirements. Proper spacing, material selection, and installation techniques all contribute to long-term safe use.",
    ],
  },
  {
    uuid: "faq-firepit-5",
    question: "How long does a custom fire pit typically last?",
    answers: [
      "With proper construction and durable materials, a professionally built fire pit can remain functional and visually appealing for many years. Regular maintenance and quality workmanship also help support long-term outdoor durability and performance.",
    ],
  },
];

// Tahapan proses spesifik untuk Custom Fire Pits
const firePitsProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/custom_firepit/2.webp",
    title: "Review The Space",
    text: "We assess the layout and installation area before construction.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/custom_firepit/3.webp",
    title: "Plan The Design",
    text: "Materials, fuel type, and functionality are carefully planned.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/custom_firepit/4.webp",
    title: "Build The Fire Pit",
    text: "The structure is installed using durable masonry materials.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/custom_firepit/5.webp",
    title: "Complete The Finishing",
    text: "Final details support safe use and visual balance.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Custom Fire Pits
const firePitsOverviewItems = [
  {
    image: "/images/services/service/custom_firepit/6.webp",
    titleNormal: "Wood Burning",
    titleHighlight: "Fire Pits",
    aosDelay: "100"
  },
  {
    image: "/images/services/service/custom_firepit/7.webp",
    titleNormal: "Gas & Propane",
    titleHighlight: "Fire Tables",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Custom Fire Pits
const firePitsFeedbacks = [
  {
    id: "1",
    feedbackText:
      "The fire pit has become our favorite part of the backyard. Big thanks to DMG Masonry.",
    name: "Amanda S.",
  },
  {
    id: "2",
    feedbackText:
      "I was mostly focused on how it would look, but it ended up being a really practical addition too. It's nice having a place where everyone naturally gathers.",
    name: "Lisa W.",
  },
  {
    id: "3",
    feedbackText:
      "It looks natural in the space, and the quality of the stonework really stands out.",
    name: "Kyle T.",
  },
];

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fire Pits Calgary | Built to Fit Your Outdoor Space",
  description:
    "Custom-made fire pits in Calgary to elevate your outdoor space. We ensure durable and stylish fire pits that deliver great value for you.",
  path: "/calgary/custom-fire-pits/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Custom Fire Pits" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/custom_firepit/1.webp"
        title="Custom-Made Fire Pit Services"
        subtitle="SERVICE"
        description1="A custom fire pit can transform an outdoor area into a more comfortable and inviting space for gathering and relaxation. Our fire pit services create durable outdoor features that combine practical function with timeless design for lasting enjoyment and visual appeal."
        paragraphs={[
          "Outdoor fire features must be built to handle regular use, changing weather conditions, and long-term exposure to heat and moisture. Using reliable construction methods and durable masonry materials, we create fire pits designed to maintain both structural stability and consistent visual appearance over time.",
          "Outdoor fire features must be built to handle regular use, changing weather conditions, and long-term exposure to heat and moisture. Using reliable construction methods and durable masonry materials, we create fire pits designed to maintain both structural stability and consistent visual appearance over time.",
        ]}
        benefits={[
          "Custom Fire Pit Designs",
          "Integrated Outdoor Features",
          "Durable Masonry Construction",
          "Safe Professional Installation",
        ]}
        extraParagraphs={[
          "Careful planning is an important part of every fire pit project. Layout, material selection, fuel type, and overall functionality are all carefully considered to ensure the final installation complements the outdoor space while supporting reliable performance, practical everyday use and long-term functionality.",
          "Our team designs and builds fire pits in a range of styles, from modern outdoor features to more rustic masonry layouts, with quality craftsmanship maintained throughout each stage of construction. Every installation is completed with clean finishing, dependable functionality, and durable construction suited for outdoor living spaces.",
          "Well-built outdoor fire features depend on experienced workmanship, durable materials, and proper installation practices. By combining practical construction methods with timeless outdoor design, we create fire pit spaces that remain functional, visually appealing, and naturally integrated into the overall character of the property.",
        ]}
      />

      <Process
        title="Our Fire Pit Installation Process"
        steps={firePitsProcessSteps}
      />

      <Overview fullWidth items={firePitsOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="Hear From Our"
        titleHighlight="Happy Fire Pit Owners"
        feedbacks={firePitsFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/custom_firepit/8.webp"
        subtitle="WHY CHOOSE US"
        title="Outdoor Fire Features Built for Lasting Comfort"
        description="An expertly crafted fire pit can create a more inviting outdoor setting while adding practical value and lasting character to the property. Our custom fire pit solutions create safe and dependable gathering areas for outdoor living."
        listItems={[
          "Safe and reliable construction",
          "Custom outdoor fire pit designs",
          "Built for everyday outdoor use",
          "Long-term durability and comfort",
        ]}
        buttonText="Plan Your Project"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={firePitsFaqs}
        title="Custom Fire Pit Construction FAQs"
        subtitle="FIRE PIT FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/custom_firepit/9.webp"
          title="Create Your Ideal Fire Pit"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
