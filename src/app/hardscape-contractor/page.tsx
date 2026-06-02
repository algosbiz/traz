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

// Data FAQ khusus untuk halaman Hardscape Contractor
const hardscapeFaqs = [
  {
    uuid: "faq-hardscape-1",
    question: "What hardscape services do you provide?",
    answers: [
      "We provide full hardscape construction services, including patios, walkways, retaining walls, driveways, and outdoor stone features. We also handle repairs and upgrades to improve both functionality and long-term performance of existing outdoor spaces.",
    ],
  },
  {
    uuid: "faq-hardscape-2",
    question: "Can hardscape designs be customized to my property?",
    answers: [
      "Yes. Every project is planned based on your property layout, intended use, and design preferences. Our goal is to create outdoor spaces that feel practical, visually balanced, and suited to long-term everyday use.",
    ],
  },
  {
    uuid: "faq-hardscape-3",
    question: "What materials are used for hardscape construction?",
    answers: [
      "We work with durable materials such as natural stone, concrete pavers, and other masonry products depending on the project requirements. Material selection is based on performance, appearance, and long-term outdoor durability.",
    ],
  },
  {
    uuid: "faq-hardscape-4",
    question: "Do you repair existing hardscape structures?",
    answers: [
      "Yes. We assess existing patios, pathways, and retaining walls to identify issues and provide suitable repair or upgrade solutions. The focus is on restoring stability, functionality, and overall appearance.",
    ],
  },
  {
    uuid: "faq-hardscape-5",
    question: "How long does a hardscape project usually take?",
    answers: [
      "Project timelines vary depending on size, design complexity, and site conditions. We provide clear scheduling from the beginning so the construction process remains organized and expectations are transparent throughout the project.",
    ],
  },
];

// Tahapan proses spesifik untuk Hardscape Contractor
const hardscapeProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/hardscape_constructor/2.webp",
    title: "Evaluate The Project Area",
    text: "We review site conditions and outdoor layout before construction begins.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/hardscape_constructor/3.webp",
    title: "Prepare The Base",
    text: "Grading and foundation preparation help support long-term stability.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/hardscape_constructor/4.webp",
    title: "Install The Features",
    text: "Outdoor surfaces and structures are built with durable materials.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/hardscape_constructor/5.webp",
    title: "Refine The Final Result",
    text: "Finishing details improve functionality, appearance, and durability",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Hardscape Contractor
const hardscapeOverviewItems = [
  {
    image: "/images/services/service/hardscape_constructor/6.webp",
    titleNormal: "Custom Stone",
    titleHighlight: "Patios",
    aosDelay: "100"
  },
  {
    image: "/images/services/service/hardscape_constructor/7.webp",
    titleNormal: "Structural",
    titleHighlight: "Retaining Walls",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Hardscape Contractor
const hardscapeFeedbacks = [
  {
    id: "1",
    feedbackText: "They completely overhauled our backyard. We went from a boring grass slope to a beautiful two-tiered patio with a fire pit. Exceptional hardscaping work!",
    image: "/images/client/user1.png",
    name: "Michael B.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "The team's attention to detail on our interlocking driveway and front walkway was amazing. It totally upgraded our home's curb appeal.",
    image: "/images/client/user2.png",
    name: "Sarah V.",
    designation: "Homeowner",
  }
];

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hardscape Services | Expert Hardscape Construction",
  description:
    "Professional hardscape services for outdoor living spaces. We specialize in custom hardscape construction to enhance function and style",
  path: "/hardscape-contractor/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Hardscape Contractor" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/hardscape_constructor/1.webp"
        title="Hardscape Contractor Services"
        subtitle="SERVICE"
        description1="A well-designed outdoor space should feel functional, durable, and naturally connected to the property. Our hardscape contractor services build patios, retaining walls, pathways, and outdoor surfaces designed for long-term performance with a timeless appearance."
        paragraphs={[
          "Outdoor hardscape features are constantly exposed to weather changes, moisture, ground movement, and everyday use. Using durable materials and reliable construction methods, we create hardscape surfaces designed to maintain their structure, stability, and visual quality over time while supporting long-term outdoor durability and performance.",
          "Thoughtful hardscape construction also improves the usability and overall value of a property. Carefully planned layouts, clean finishing, and practical design choices help outdoor spaces remain visually balanced, low-maintenance, and functional for years to come while creating a more cohesive and comfortable outdoor environment.",
        ]}
        benefits={[
          "Custom Outdoor Design",
          "Durable Surface Construction",
          "Long-Term Outdoor Performance",
          "Functional Hardscape Solutions",
        ]}
        extraParagraphs={[
          "Every hardscape project requires careful planning before construction begins. Site layout, drainage conditions, material selection, and intended use all play an important role in creating outdoor spaces that perform reliably over time while maintaining proper functionality, stability, and visual balance throughout the property.",
          "From patios and driveways to retaining walls and walkways, our team approaches each project with attention to detail and practical construction methods. The goal is to create outdoor features that complement the property while supporting everyday functionality, long-term durability, and a clean, cohesive outdoor appearance.",
          "Strong hardscape construction depends on experienced workmanship, durable materials, and careful execution throughout every stage of the project. Through reliable installation practices and timeless outdoor design, we help create hardscape spaces that remain stable, functional, visually lasting, and well-suited for long-term outdoor use over the long term.",
        ]}
      />

      <Process
        title="Our Hardscape Project Process"
        steps={hardscapeProcessSteps}
      />

      <Overview fullWidth items={hardscapeOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="Hear From Our"
        titleHighlight="Hardscaping Clients"
        feedbacks={hardscapeFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/hardscape_constructor/8.webp"
        subtitle="WHY CHOOSE US"
        title="Outdoor Spaces Built for Long-Term Use"
        description="Well-planned hardscape construction creates outdoor spaces that are functional, durable, and visually balanced. We careful planning and installation support long-term usability."
        listItems={[
          "Thoughtful outdoor planning",
          "Stable and durable construction",
          "Functional everyday use",
          "Timeless outdoor appearance",
        ]}
        buttonText="Discuss Your Project"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={hardscapeFaqs}
        title="Frequently Asked Questions"
        subtitle="FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/hardscape_constructor/9.webp"
          title="Upgrade Your Outdoors"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
