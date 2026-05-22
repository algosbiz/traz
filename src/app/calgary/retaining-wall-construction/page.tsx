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

// Data FAQ khusus untuk halaman Retaining Wall
const retainingWallFaqs = [
  {
    uuid: "faq-retaining-1",
    question: "Why is proper drainage important for retaining walls?",
    answers: [
      "Drainage plays a critical role in retaining wall performance. Without proper water management, pressure can build behind the wall over time, which may affect structural stability. Our retaining wall installations are planned with drainage considerations to support long-term durability and reliable performance.",
    ],
  },
  {
    uuid: "faq-retaining-2",
    question: "What materials are commonly used for retaining walls?",
    answers: [
      "We work with a variety of retaining wall materials including natural stone, concrete blocks, modular wall systems, and other masonry products. Material selection depends on site conditions, structural needs, visual style, and overall project goals.",
    ],
  },
  {
    uuid: "faq-retaining-3",
    question: "Can retaining walls be installed on sloped properties?",
    answers: [
      "Yes. Retaining walls are often used to help manage elevation changes and improve the usability of sloped outdoor spaces. Before construction begins, we assess the site conditions carefully to determine the most appropriate wall structure and installation approach.",
    ],
  },
  {
    uuid: "faq-retaining-4",
    question: "Do retaining wall projects require permits or inspections?",
    answers: [
      "Some retaining wall projects may require permits depending on wall size, location, and local regulations. When required, our team helps coordinate the necessary approvals and ensures the work aligns with applicable building standards.",
    ],
  },
  {
    uuid: "faq-retaining-5",
    question: "How long does a retaining wall typically last?",
    answers: [
      "When constructed with proper drainage, quality materials, and reliable installation methods, retaining walls can remain structurally stable and visually consistent for many years. Long-term performance also depends on site conditions and ongoing maintenance over time.",
    ],
  },
];

// Tahapan proses spesifik untuk Retaining Wall
const retainingWallProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Evaluate The Site",
    text: "We assess grading, drainage, and soil conditions before installation begins.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Plan The Wall Structure",
    text: "Layout, materials, and wall support requirements are carefully prepared.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Build The Retaining Wall",
    text: "The wall is constructed using durable materials and proper installation methods.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Complete The Finishing",
    text: "Final adjustments help ensure structural support and a clean overall appearance.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Retaining Wall
import overviewImg1 from "../../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../../public/images/overview/overview4.jpg";

const retainingWallOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Segmental Block",
    titleHighlight: "Retaining Walls",
    aosDelay: "100",
  },
  {
    image: overviewImg2,
    titleNormal: "Natural Boulder",
    titleHighlight: "Terraced Slopes",
    aosDelay: "200",
  },
];

// Testimonial klien spesifik untuk Retaining Wall
const retainingWallFeedbacks = [
  {
    id: "1",
    feedbackText:
      "The team built a massive 3-tier retaining wall in our backyard. It looks stunning and has completely solved our erosion problem. True professionals.",
    image: "/images/client/user1.png",
    name: "James W.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText:
      "I was extremely impressed with their focus on proper drainage and engineering. The wall is rock solid.",
    image: "/images/client/user2.png",
    name: "Karen S.",
    designation: "Property Developer",
  },
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="Retaining Wall Construction"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        title="Retaining Wall Installation Calgary"
        subtitle="RETAINING WALLS"
        description1="Retaining walls help manage sloped landscapes while improving the structure and appearance of an outdoor space. At DMG Masonry, we build retaining walls designed for dependable support, proper drainage, and a clean finish that fits naturally with the property."
        paragraphs={[
          "A properly built retaining wall helps reduce soil movement, erosion, and water-related issues that can affect the stability of the landscape over time. Our team carefully plans each installation to ensure the wall performs reliably while maintaining a balanced and visually cohesive appearance within the outdoor environment.",
          "Beyond structural support, retaining walls can also help define outdoor spaces and improve long-term property functionality. Whether used for elevation changes, garden areas, or landscape organization, a professionally installed retaining wall adds both durability and visual structure to the property.",
        ]}
        benefits={[
          "Structural Support",
          "Durable Wall Construction",
          "Proper Drainage Solutions",
          "Clean Landscape Integration",
        ]}
        extraParagraphs={[
          "Proper planning is an essential part of any retaining wall installation. Before construction begins, we evaluate soil conditions, grading, drainage flow, and site layout to determine the most suitable wall structure for the property while helping support long-term stability and performance.",
          "At DMG Masonry, we build retaining walls using a variety of materials and finish options to match different landscape styles and structural needs. Whether using natural stone, concrete block, or modular retaining wall systems, our installations are designed to provide dependable support while maintaining a clean and cohesive outdoor appearance.",
          "Strong retaining wall construction depends on proper site preparation, reliable materials, and consistent workmanship throughout the installation process. By focusing on structural support, drainage efficiency, and durable construction methods, we create retaining walls built to handle changing outdoor conditions while maintaining their overall appearance and functionality.",
        ]}
      />

      <Process
        title="Our Retaining Wall Installation Process"
        steps={retainingWallProcessSteps}
      />

      <Overview fullWidth items={retainingWallOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="Hear From Our"
        titleHighlight="Retaining Wall Clients"
        feedbacks={retainingWallFeedbacks}
      />

      <AboutUsContent
        subtitle="WHY CHOOSE US"
        title="Built to Support Sloped Outdoor Spaces"
        description="Retaining walls help support uneven ground and improve outdoor usability. We build retaining wall systems with dependable performance and a clean appearance for residential and commercial properties."
        listItems={[
          "Helps stabilize uneven terrain",
          "Creates cleaner and more usable outdoor areas",
          "Constructed with durable retaining wall materials",
          "Designed to complement the surrounding landscape",
        ]}
        buttonText="Start Your Project"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={retainingWallFaqs}
        title="Frequently Asked Questions"
        subtitle="RETAINING WALL FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          title="Start Your Retaining Wall Project"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
