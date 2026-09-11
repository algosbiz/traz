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

// Data FAQ khusus untuk halaman Custom Fire Pits
const firePitsFaqs = [
  {
    uuid: "faq-firepit-1",
    question: "Do you build both gas and wood-burning fire pits?",
    answers: [
      "Yes. We design and install both gas-fueled and wood-burning fire pits depending on the property layout, intended use, and outdoor design preferences. Each fire pit installation is carefully planned to support safe and reliable long-term performance.",
    ],
  },
  {
    uuid: "faq-firepit-2",
    question: "Can the fire pit design be customized?",
    answers: [
      "Absolutely. Our team customizes the shape, size, material finish, and overall layout of each custom fire pit to complement the surrounding outdoor space while matching your property's style and functional needs.",
    ],
  },
  {
    uuid: "faq-firepit-3",
    question: "Can a fire pit be integrated into an existing outdoor area?",
    answers: [
      "Yes. Fire pits can be incorporated into patios, seating areas, and other hardscape features to create a more cohesive and functional outdoor environment. We carefully plan the layout so the fire pit installation feels naturally connected to the space.",
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
  {
    uuid: "faq-firepit-6",
    question: "Is a permit required to build a fire pit in Calgary?",
    answers: [
      "Permit requirements for a fire pit installation in Calgary can depend on the design, fuel type, and local building requirements. We can help you understand what applies to your specific fire pit project before construction begins.",
    ],
  },
  {
    uuid: "faq-firepit-7",
    question: "How long does fire pit mortar need to cure before use?",
    answers: [
      "Mortar used in fire pit construction typically needs several days to cure properly before the fire pit is used, similar to the cure time required for most masonry jobs. We'll let you know the recommended waiting period for your specific installation.",
    ],
  },
  {
    uuid: "faq-firepit-8",
    question: "What is the typical deposit required to start a fire pit installation?",
    answers: [
      "Most fire pit installations, like other masonry projects, require an upfront deposit to secure materials and scheduling, with the remaining balance due as the project progresses or upon completion.",
    ],
  },
  {
    uuid: "faq-firepit-9",
    question: "Can a fire pit be built with natural stone or stone veneer?",
    answers: [
      "Yes. Fire pits can be finished with natural stone, stone veneer, brick, or other masonry materials depending on the look you're going for and your budget. We can walk you through the options during the design stage.",
    ],
  },
  {
    uuid: "faq-firepit-10",
    question: "What's the difference between a wood-burning and gas fire pit?",
    answers: [
      "Wood-burning fire pits offer a traditional look and feel, while gas and propane fire pits provide more convenient, consistent use without the need to manage firewood. The right choice often comes down to personal preference and how you plan to use the space.",
    ],
  },
];

// Alasan menambahkan fire pit - section tanya-jawab baru (AEO)
const firePitBenefits = [
  {
    title: "It extends the outdoor season",
    text: "In a climate like Calgary's, a fire pit is the difference between a yard that gets used four months a year and one that gets used well into the shoulder seasons and on cool summer evenings.",
    aosDelay: "100",
  },
  {
    title: "It gives the yard a focal point",
    text: "Seating arranged around nothing tends not to get used. A fire pit gives the outdoor space a centre, which is why it is often the piece that makes the rest of a patio work.",
    aosDelay: "200",
  },
  {
    title: "It is low maintenance",
    text: "A masonry fire pit built on a proper base needs very little beyond clearing ash and the occasional joint check. There is no mechanism to service on a wood-burning build.",
    aosDelay: "300",
  },
  {
    title: "It integrates with the rest of the yard",
    text: "Fire pits are usually built alongside patios, seating walls and outdoor kitchens using the same stone, so the finished space reads as one design rather than an add-on.",
    aosDelay: "400",
  },
];

const firePitMaterials = [
  {
    icon: "flaticon-cube",
    title: "Natural Stone",
    text: "Natural stone gives a fire pit a textured, organic look that pairs well with both traditional and modern outdoor spaces, while standing up to years of outdoor exposure.",
    aosDelay: "100",
  },
  {
    icon: "flaticon-facade",
    title: "Stone Veneer",
    text: "Stone veneer delivers the look of full stone masonry at a lighter weight, making it one of the most popular finishes for Calgary fire pit installations while still offering excellent durability.",
    aosDelay: "200",
  },
  {
    icon: "flaticon-mansory",
    title: "Brick",
    text: "Brick provides a clean, classic finish that suits a wide range of backyard styles and holds up well to Calgary's seasonal temperature swings.",
    aosDelay: "300",
  },
  {
    icon: "flaticon-houses",
    title: "Eco-Friendly & Custom Finishes",
    text: "We're also able to source eco-friendly and sustainably produced masonry materials for homeowners who want their fire pit project to reflect that priority, along with custom finish options to match your outdoor space.",
    aosDelay: "400",
  },
];

// Tahapan proses spesifik untuk Custom Fire Pits
const firePitsProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/custom_firepit/2.webp",
    title: "Review The Space",
    text: "We assess the layout and installation area before construction begins.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/custom_firepit/3.webp",
    title: "Plan The Design",
    text: "Materials, fuel type, and functionality are carefully planned for your custom fire pit.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/custom_firepit/4.webp",
    title: "Build The Fire Pit",
    text: "The structure is installed using durable masonry materials built to last.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/custom_firepit/5.webp",
    title: "Complete The Finishing",
    text: "Final details support safe use, clean lines, and lasting visual balance.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Custom Fire Pits
const firePitsOverviewItems = [
  {
    image: "/images/services/service/custom_firepit/6.webp",
    titleNormal: "Wood-Burning",
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
  title: "Custom Fire Pits for Home Yards in Calgary – DMG Masonry",
  description:
    "We design fire pits Calgary homeowners enjoy year round, using durable stone and brick to create a lasting, comfortable gathering spot for family and friends.",
  path: "/calgary/custom-fire-pits/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Custom Fire Pits" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/custom_firepit/1.webp"
        title="Fire Pits Calgary: Custom Fire Pit Installation & Design"
        subtitle="SERVICE"
        description1="DMG Masonry builds custom fire pits in Calgary, Alberta. A custom fire pit can transform any outdoor area into a more comfortable and inviting space for gathering and relaxation. Our fire pit installation combines practical function with timeless design, giving homeowners a fire pit built for lasting enjoyment and everyday visual appeal."
        paragraphsHeading="What makes a fire pit last outdoors?"
        paragraphs={[
          "Outdoor fire features must be built to handle regular use, changing weather conditions, and long-term exposure to heat and moisture. Using reliable construction methods and durable masonry materials, our fire pit installation Calgary homeowners rely on is designed to maintain both structural stability and a consistent visual appearance for years to come.",
        ]}
        benefits={[
          "Custom Fire Pit Designs",
          "Integrated Outdoor Features",
          "Durable Masonry Construction",
          "Safe Professional Installation",
          "Fire Pit Installation Calgary Homeowners Trust",
          "Wood-Burning & Gas Fire Pit Options",
          "Natural Stone & Stone Veneer Finishes",
        ]}
        extraParagraphsHeading="What is planned before a fire pit is built?"
        extraParagraphs={[
          "Careful planning is an important part of every fire pit installation. Layout, material selection, fuel type, and overall functionality are all carefully considered to ensure the final custom fire pit complements the outdoor space while supporting reliable performance, practical everyday use, and long-term durability.",
          "Our team designs and builds custom fire pits Calgary homeowners can enjoy for years, from modern outdoor features to more rustic masonry layouts, with quality craftsmanship maintained throughout each stage of construction. Every fire pit installation is completed with clean finishing, dependable functionality, and durable construction suited for outdoor living spaces.",
          "Well-built outdoor fire pits depend on experienced workmanship, durable materials, and proper installation practices. By combining practical construction methods with timeless outdoor design, we create fire pit spaces across Calgary that remain functional, visually appealing, and naturally integrated into the overall character of the property.",
        ]}
      />

      <MaterialsSection
        title="What Materials Are Fire Pits Made From?"
        description="The material you choose has a big impact on how your fire pit looks and holds up over time outdoors. Here's a look at the finishes we work with most often on Calgary fire pits."
        items={firePitMaterials}
      />

      <Process
        title="How Does Fire Pit Installation Work In Calgary?"
        steps={firePitsProcessSteps}
      />

      <Overview fullWidth items={firePitsOverviewItems} />

      <MaterialsSection
        subtitle="BENEFITS"
        title="Why Add A Fire Pit To Your Outdoor Space?"
        items={firePitBenefits}
      />

      <ClientsFeedbackSlider
        titleNormal="Hear From Our"
        titleHighlight="Happy Calgary Fire Pit Owners"
        feedbacks={firePitsFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/custom_firepit/8.webp"
        subtitle="WHY CHOOSE US"
        title="Why Choose DMG Masonry For Custom Fire Pits In Calgary?"
        description="An expertly crafted custom fire pit can create a more inviting outdoor setting while adding practical value and lasting character to your property. Our fire pit installation Calgary homeowners choose creates safe, dependable gathering areas built for everyday outdoor living."
        listItems={[
          "Safe and reliable construction",
          "Custom fire pits Calgary homeowners design with us",
          "Built for everyday outdoor use",
          "Long-term durability and comfort",
          "Wood-burning & gas fire pit options",
          "Natural stone and stone veneer finishes",
          "Fire pit installation Calgary homeowners recommend",
        ]}
        buttonText="Plan Your Project"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={firePitsFaqs}
        title="Fire Pits Calgary: Frequently Asked Questions"
        subtitle="FAQ"
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
