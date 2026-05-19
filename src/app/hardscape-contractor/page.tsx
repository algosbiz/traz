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
    question: "What is the difference between hardscaping and landscaping?",
    answers: [
      "Landscaping generally refers to the living, organic elements of a yard, such as grass, plants, and trees (often called softscaping).",
      "Hardscaping refers to the non-living structural elements like stone patios, retaining walls, walkways, and fire pits. Hardscaping provides the permanent foundation and structure for your outdoor space."
    ]
  },
  {
    uuid: "faq-hardscape-2",
    question: "Do you provide 3D designs before starting a hardscaping project?",
    answers: [
      "Yes! For larger hardscape projects, we can provide detailed 3D renderings and layout plans so you can visualize exactly how your new stone patios and retaining walls will look in your backyard before we ever break ground."
    ]
  }
];

// Tahapan proses spesifik untuk Hardscape Contractor
const hardscapeProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Consultation & Design",
    text: "We meet on-site to discuss your vision, take measurements, and propose materials and layout designs.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Excavation & Base",
    text: "We excavate the area and install heavy-duty gravel bases with proper drainage grading.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Stone Construction",
    text: "Our masons build the retaining walls, patios, and features using precise cutting and laying techniques.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Finishing Touches",
    text: "We apply polymeric sand, wash the stone, and conduct a final walkthrough to ensure complete satisfaction.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Hardscape Contractor
import overviewImg1 from "../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../public/images/overview/overview4.jpg";

const hardscapeOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Custom Stone",
    titleHighlight: "Patios",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
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

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Hardscape Contractor" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Professional Hardscaping Solutions" 
        subtitle="HARDSCAPING"
        description1="Transform your outdoor living spaces with custom stone patios, elegant walkways, and structural retaining walls designed by Calgary's top hardscape contractors."
        paragraphs={[
          "Hardscaping is the foundation of any beautiful landscape. It provides structure, functionality, and enduring beauty to your property. We specialize in designing and installing premium hardscape elements that seamlessly blend with your home's architecture and natural surroundings.",
          "Our team handles everything from interlocking stone driveways to multi-level backyard oasis complete with fire features and seating walls. We use only the highest quality natural stone, brick, and concrete pavers to ensure your investment lasts for decades despite Calgary's harsh winters."
        ]}
        benefits={[
          "Interlocking Stone Driveways",
          "Custom Patios & Walkways",
          "Structural Retaining Walls",
          "Outdoor Fire Pits & Kitchens",
          "Engineered Drainage Solutions",
          "Durable Freeze-Thaw Resistance"
        ]}
        extraParagraphs={[
          "A well-executed hardscape design not only expands your usable living space but also significantly increases the market value of your home.",
          "Let us help you build the backyard of your dreams. Contact our hardscaping design team today to schedule an on-site consultation."
        ]}
      />

      <Process 
        title="Our Hardscaping Process"
        steps={hardscapeProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={hardscapeOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="Hear From Our" 
        titleHighlight="Hardscaping Clients" 
        feedbacks={hardscapeFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Calgary's Trusted Hardscape Specialists"
        description="We believe that a beautiful hardscape starts with a rock-solid foundation. Our strict adherence to deep excavation and proper base compaction guarantees that your patios and walls will never sink or shift."
        listItems={[
          "Industry-Leading Base Preparation",
          "Expert Masons and Installers",
          "Comprehensive Warranty on Workmanship",
          "Clear Communication and Reliable Timelines"
        ]}
        buttonText="Get a Free Estimate"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={hardscapeFaqs} 
        title="Hardscaping Frequently Asked Questions" 
        subtitle="HARDSCAPE FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Schedule Your Hardscape Consultation"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
