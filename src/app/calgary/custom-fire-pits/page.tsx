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
    question: "Do I need a permit to build a custom fire pit in Calgary?",
    answers: [
      "Wood-burning fire pits must comply with Calgary's Fire Bylaw, which dictates safe clearances (typically at least 2 meters from buildings, property lines, and combustible materials) and height limits.",
      "For natural gas fire pits, a gas permit and professional hookup are required. We handle all planning and safety guidelines to ensure your installation is fully compliant."
    ]
  },
  {
    uuid: "faq-firepit-2",
    question: "Why should I choose a custom fire pit over a store-bought metal bowl?",
    answers: [
      "Custom masonry fire pits are highly durable structures built to survive the elements for decades, unlike cheap metal bowls that rust and crack within a couple of seasons.",
      "Additionally, a custom-built unit is tailored to blend seamlessly with your patio architecture and significantly increases your home's equity."
    ]
  }
];

// Tahapan proses spesifik untuk Custom Fire Pits
const firePitsProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Site & Clearance",
    text: "We map out the ideal location, keeping safe distances from overhanging trees and property boundaries.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Concrete Base",
    text: "We dig and pour a solid, gravel-packed concrete pad to prevent shifting from frost.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Inner Core",
    text: "We construct the structural core using high-temperature firebrick and heavy-duty gas line plumbing (if gas-fired).",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Stone Cladding",
    text: "We finish the exterior with your choice of natural flagstone, veneer, or capstones.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Custom Fire Pits
import overviewImg1 from "../../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../../public/images/overview/overview4.jpg";

const firePitsOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Wood Burning",
    titleHighlight: "Fire Pits",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Gas & Propane",
    titleHighlight: "Fire Tables",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Custom Fire Pits
const firePitsFeedbacks = [
  {
    id: "1",
    feedbackText: "Our new natural stone fire pit is the highlight of our backyard. We spend every weekend out there now. Amazing work!",
    image: "/images/client/user1.png",
    name: "John & Mary D.",
    designation: "Calgary Homeowners",
  },
  {
    id: "2",
    feedbackText: "The gas fire pit they built matches our patio perfectly. Highly professional crew.",
    image: "/images/client/user2.png",
    name: "Steven M.",
    designation: "Homeowner",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Custom Fire Pits" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Custom-Made Fire Pit Construction Services" 
        subtitle="CUSTOM FIRE PITS"
        description1="Bring warmth and luxury to your backyard with custom stone or brick outdoor fire pits constructed by Calgary's premier hardscaping builders."
        paragraphs={[
          "A custom-built fire pit is more than just a place to warm up; it's a stunning architectural focal point that invites conversations and creates unforgettable evenings. We construct durable fire pits using premium natural stone, architectural concrete block, or brick, built to withstand Calgary's cold climate.",
          "We design fire pits tailored to your space, offering wood-burning and gas-powered solutions. Whether you prefer a rustic campfire aesthetic or a sleek, contemporary linear gas table, our expert craftsmanship guarantees safety and absolute durability."
        ]}
        benefits={[
          "Natural Stone & Brick Options",
          "Gas & Wood-Burning Fire Pits",
          "Custom Built-in Seating Walls",
          "High-Temp Firebrick Linings",
          "Seamless Patio Integration",
          "Safe, Professional Ventilation"
        ]}
        extraParagraphs={[
          "Every fire pit we build is lined with professional refractory firebrick and high-temperature mortar, ensuring the outer stone never cracks from intense heat exposure.",
          "Let's upgrade your outdoor living space. Contact us today to discuss fire pit layouts, material choices, and local safety clearances for a custom build."
        ]}
      />

      <Process 
        title="Steps to Building Your Custom Fire Pit"
        steps={firePitsProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={firePitsOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="Hear From Our" 
        titleHighlight="Happy Fire Pit Owners" 
        feedbacks={firePitsFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Expert Fire Pit Builders in Calgary"
        description="We combine landscape architecture with expert masonry to build fire pits that are both breathtakingly beautiful and engineered for absolute safety."
        listItems={[
          "Bylaw Compliant Designs",
          "Safe Gas & Wood Implementations",
          "Durable Materials for Extreme Temperatures",
          "Custom Tailored to Your Backyard Space"
        ]}
        buttonText="Get a Free Estimate"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={firePitsFaqs} 
        title="Custom Fire Pit Construction FAQs" 
        subtitle="FIRE PIT FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Let's Design Your Dream Fire Pit"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
