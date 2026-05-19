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
    question: "What is the difference between natural and manufactured stone veneer?",
    answers: [
      "Natural stone veneer is sliced from real quarried stone, providing unique colors, organic textures, and absolute longevity. It is slightly heavier and more expensive than manufactured stone.",
      "Manufactured (cultured) stone is cast from concrete molds and colored to look like real stone. It is lighter, easier to install, highly uniform, and offers a wider range of budget-friendly choices."
    ]
  },
  {
    uuid: "faq-veneer-2",
    question: "Can stone veneer be installed over existing drywall or brick?",
    answers: [
      "Yes, but the substrate must be properly prepared. For drywall, we install a moisture barrier, metal lath, and a scratch coat of mortar to support the weight of the stone.",
      "For brick or concrete block, stone veneer can often be applied directly after cleaning, provided the surface is structurally sound and unpainted."
    ]
  }
];

// Tahapan proses spesifik untuk Stone Veneer
const stoneVeneerProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Design & Select",
    text: "We assist you in selecting the ideal stone type, color palette, and layout pattern.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Surface Prep",
    text: "We apply a strong weather-resistant barrier, metal lath, and scratch coat of mortar.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Stone Laying",
    text: "Each individual stone is buttered and placed precisely for tight, organic-looking joints.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Grouting & Seal",
    text: "We fill joints with mortar (if needed) and apply protective sealant to shield the stone.",
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
        title="Premium Stone Veneer Installation Services" 
        subtitle="STONE VENEER"
        description1="Elevate your property's aesthetic with high-quality natural and manufactured stone veneer installations from Calgary's masonry experts."
        paragraphs={[
          "Stone veneer offers a majestic, premium look for both interior fireplaces and exterior facades. We provide professional installation of both natural thin stone veneer and manufactured (cultured) stone. Our skilled masons ensure seamless joints and solid, durable adhesion.",
          "Cultured stone provides a lightweight, cost-effective, and highly versatile alternative to full-bed stone, whereas natural stone veneer offers unmatched organic variations and lifetime durability. Whichever you choose, our meticulous installation will transform your home's character."
        ]}
        benefits={[
          "Cultured & Natural Stone Veneer",
          "Interior & Exterior Installation",
          "Fireplace Accents & Accent Walls",
          "Enhanced Curb Appeal",
          "Lightweight & Versatile Options",
          "Excellent Weather Resistance"
        ]}
        extraParagraphs={[
          "We help you navigate the rich selection of styles, colors, and textures to find the perfect stone veneer that complements your home's existing design.",
          "A professionally installed stone facade not only improves aesthetic appeal but also adds significant real estate value. Reach out today for a custom stone veneer design consultation."
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
        title="Calgary's Trusted Stone Veneer Specialists"
        description="With years of experience in custom masonry, we deliver unparalleled craftsmanship for your stone veneer projects. We pay meticulous attention to detail to guarantee a flawless finish."
        listItems={[
          "Extensive Selection of Premium Stones",
          "Expert Masons & Precise Craftsmanship",
          "Fully Licensed and Insured",
          "Complete Project Management"
        ]}
        buttonText="Get a Free Estimate"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={stoneVeneerFaqs} 
        title="Stone Veneer Installation FAQs" 
        subtitle="VENEER FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Schedule Your Stone Veneer Consultation"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
