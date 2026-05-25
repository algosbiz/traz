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

// Data FAQ khusus untuk halaman Stone Veneer
const stoneVeneerFaqs = [
  {
    uuid: "faq-veneer-1",
    question: "What is the difference between stone veneer and full stone masonry?",
    answers: [
      "Stone veneer is a thinner and lighter masonry surface designed to achieve the appearance of natural stone without the weight of full stone construction. It offers a more efficient installation process while still providing timeless visual appeal and long-term durability."
    ]
  },
  {
    uuid: "faq-veneer-2",
    question: "Where can stone veneer be installed?",
    answers: [
      "Stone veneer can be installed across a variety of interior and exterior surfaces, including fireplaces, feature walls, exterior facades, entryways, and accent areas. Its versatility makes it suitable for both residential and commercial applications."
    ]
  },
  {
    uuid: "faq-veneer-3",
    question: "Is stone veneer suitable for Calgary’s climate?",
    answers: [
      "Yes. When installed properly, stone veneer performs reliably in Calgary’s changing weather conditions. We use appropriate installation methods and durable materials to help the surface withstand moisture exposure and seasonal temperature fluctuations over time."
    ]
  },
  {
    uuid: "faq-veneer-4",
    question: "Do you provide custom stone veneer design guidance?",
    answers: [
      "Yes. Our team helps clients select stone textures, colors, and layouts that complement the style and structure of the property. The goal is to create a balanced finish that maintains both timeless appearance and long-term value."
    ]
  },
  {
    uuid: "faq-veneer-5",
    question: "Do you provide custom stone veneer design guidance?",
    answers: [
      "In many cases, damaged or aging stone veneer can be repaired rather than fully replaced. We assess the condition of the surface carefully and recommend repair solutions that help restore both appearance and structural reliability."
    ]
  }
];

// Tahapan proses spesifik untuk Stone Veneer
const stoneVeneerProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Evaluate The Project",
    text: "We review the space, surface conditions, and installation needs.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Prepare Materials & Layout",
    text: "Stone selections, layout patterns, and installation details are prepared.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Apply The Stone Veneer",
    text: "Each section is installed carefully for secure placement and appearance.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Complete The Final Finish",
    text: "The surface is refined to ensure clean detailing and long-term durability.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Stone Veneer
import overviewImg1 from "../../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../../public/images/overview/overview4.jpg";

const stoneVeneerOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Natural Thin",
    titleHighlight: "Veneer",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Manufactured",
    titleHighlight: "Cultured Stone",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Stone Veneer
const stoneVeneerFeedbacks = [
  {
    id: "1",
    feedbackText: "The stone veneer transformed the entire look of our home exterior. The team was professional, clean, and detail-oriented.",
    image: "/images/client/user1.png",
    name: "Michael R.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "Our indoor fireplace accent wall looks stunning thanks to the cultured stone installation. Extremely happy with the results!",
    image: "/images/client/user2.png",
    name: "Jessica T.",
    designation: "Interior Designer",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Stone Veneer" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        title="Stone Veneer Installation Calgary"
        subtitle="SERVICE"
        description1="Stone veneer installation is a masonry solution using a thin layer of natural or engineered stone for interior and exterior surfaces. At DMG Masonry, we provide stone veneer installation in Calgary focused on appearance, durability, and long-term performance."
        paragraphs={[
          "Stone veneer is widely used because it offers a flexible way to achieve a natural stone look without the weight and cost of full stone construction. It can be applied to feature walls, exterior facades, fireplaces, and other architectural surfaces while still maintaining structural efficiency.",
          "In addition to its visual appeal, stone veneer is a practical choice for long-term property value. When installed correctly, it performs well in different weather conditions, requires minimal maintenance, and helps enhance both residential and commercial spaces with a timeless stone finish."
        ]}
        benefits={[
          "Full Installation",
          "Design Consultation",
          "Repairs & Maintenance",
          "Interior & Exterior Applications",
        ]}
        extraParagraphs={[
          "Proper installation is essential to ensure stone veneer remains secure, stable, and performs well over time. Our team carefully handles surface preparation, material application, and finishing to achieve strong adhesion, clean detailing, and long-lasting results across both interior and exterior surfaces.",
          "At DMG Masonry, we also guide clients through material and design selection to ensure the stone style complements the property’s character, architecture, and intended use. By considering both function and appearance, we help create a balanced result that feels cohesive, durable, and visually appealing for the space.",
          "We also provide repair and maintenance services for stone veneer that has become loose, cracked, worn, or aged over time. Our goal is to restore both appearance and structural integrity so the surface continues to perform reliably while maintaining a clean, consistent, and well-finished appearance over the long term. Through careful repair work and proper material matching, we help preserve the overall look and durability of the masonry surface."
        ]}
      />

      <Process
        title="Our Stone Veneer Installation Process"
        steps={stoneVeneerProcessSteps}
      />

      <Overview
        fullWidth
        items={stoneVeneerOverviewItems}
      />

      <ClientsFeedbackSlider
        titleNormal="What Our Clients"
        titleHighlight="Say About Our Stone Veneer"
        feedbacks={stoneVeneerFeedbacks}
      />

      <AboutUsContent
        subtitle="WHY CHOOSE US"
        title="Why Property Owners Choose Stone Veneer"
        description="Stone veneer offers the timeless look of natural stone with a lighter structure and efficient installation. We create surfaces that enhance visual appeal, durability, and property value."
        listItems={[
          "Custom stone styles and finishes",
          "Clean and precise installation",
          "Durable long-term performance",
          "Timeless architectural appearance"
        ]}
        buttonText="Find Out More"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={stoneVeneerFaqs}
        title="Frequently Asked Questions"
        subtitle="FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          title="Enhance Your Property With Stone Veneer"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
