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
    question: "Can I convert my old drafty wood fireplace to natural gas?",
    answers: [
      "Absolutely! We specialize in converting old wood-burning brick fireboxes into clean, highly efficient gas fireplaces by installing premium gas inserts and venting them safely through your existing chimney flue."
    ]
  },
  {
    uuid: "faq-fireplace-2",
    question: "What is WETT certification and why do I need it?",
    answers: [
      "WETT (Wood Energy Technology Transfer) inspections assess whether solid-fuel burning systems (like wood fireplaces and stoves) are installed safely and meet building code requirements. This is typically required by insurance companies before insuring homes with wood fireplaces."
    ]
  }
];

// Tahapan proses spesifik untuk Fireplace Installation
const fireplaceProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Choose Utility",
    text: "We review gas lines, chimney flues, clearances, and local fire codes for wood or gas setups.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Framing & Core",
    text: "We construct a secure, non-combustible steel-stud framework and lay the internal firebrick refractory core.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Cladding Surrounds",
    text: "We apply the chosen exterior finish, whether it is cultured ledge stone, brick veneer, or sleek tiles.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Mantel & Trim",
    text: "We mount the mantel and install glass doors or gas components, executing a final test burn.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Fireplace Installation
import overviewImg1 from "../../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../../public/images/overview/overview4.jpg";

const fireplaceOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Indoor Luxury",
    titleHighlight: "Fireplaces",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Patio Outdoor",
    titleHighlight: "Fireplaces",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Fireplace Installation
const fireplaceFeedbacks = [
  {
    id: "1",
    feedbackText: "They ripped out our old 1980s brick fireplace and installed a stunning floor-to-ceiling natural stone wall with a gas insert. Truly unbelievable transformation.",
    image: "/images/client/user1.png",
    name: "Jessica P.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "The custom wood mantel over the cultured stone looks amazing. Professional service and very clean worksite.",
    image: "/images/client/user2.png",
    name: "Brian C.",
    designation: "Interior Designer",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Fireplace Installation" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Custom Fireplace Design & Installation" 
        subtitle="FIREPLACES"
        description1="Add warmth, ambiance, and extraordinary beauty to your living room or outdoor patio with custom masonry fireplace installations."
        paragraphs={[
          "A fireplace is the heart of a home. We build exceptional, durable masonry fireplaces from scratch, using real brick, natural fieldstone, or sleek modern porcelain slabs. Whether you want to install a clean-burning, high-efficiency gas insert or build a traditional wood-burning fireplace, our work is second to none.",
          "We build outdoor fireplaces that transform cold patios into multi-season retreats, complete with built-in firewood storage wood boxes and extended stone hearths to sit on."
        ]}
        benefits={[
          "Natural Stone & Brick Surrounds",
          "Gas & Wood-Burning Fireplaces",
          "Outdoor Patio Fireplace Builds",
          "Custom Timber & Stone Mantels",
          "Refractory Firebrick Linings",
          "WETT Certified Inspections"
        ]}
        extraParagraphs={[
          "We design fireplace mantels and hearths that reflect your personal style, ranging from reclaimed hand-hewn cedar beams to polished granite hearth stones.",
          "Keep your home cozy. Call our masonry fireplace specialists today to schedule your design consultation and safety review."
        ]}
      />

      <Process 
        title="Steps to Custom Fireplace Installation"
        steps={fireplaceProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={fireplaceOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="What Our Clients Say" 
        titleHighlight="About Their Fireplaces" 
        feedbacks={fireplaceFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Calgary's Custom Fireplace Artisans"
        description="A beautiful fireplace completely changes a room. We work with interior designers and homeowners to craft striking mantels, stone surrounds, and custom hearths."
        listItems={[
          "Limitless Stone and Tile Finish Options",
          "Code-Compliant Gas and Wood Installations",
          "Custom Milled Timber Mantels",
          "Expert Firebox Refractory Rebuilds"
        ]}
        buttonText="Get a Free Design Consultation"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={fireplaceFaqs} 
        title="Fireplace Design & Installation FAQs" 
        subtitle="FIREPLACE FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Schedule Your Fireplace Design Meeting"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
