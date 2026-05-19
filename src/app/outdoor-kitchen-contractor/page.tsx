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

// Data FAQ khusus untuk halaman Outdoor Kitchen
const outdoorKitchenFaqs = [
  {
    uuid: "faq-kitchen-1",
    question: "Do I need plumbing and electrical for an outdoor kitchen?",
    answers: [
      "While not strictly mandatory, adding a sink (plumbing) and electrical outlets (for blenders, refrigerators, or lighting) dramatically increases the functionality of your outdoor kitchen. We coordinate all utility lines during the base construction phase."
    ]
  },
  {
    uuid: "faq-kitchen-2",
    question: "What are the best countertop materials for outdoor kitchens in Calgary?",
    answers: [
      "We highly recommend sealed granite, quartzite, or polished concrete. These materials are incredibly durable, heat-resistant, and capable of withstanding Calgary's freezing winter temperatures without cracking."
    ]
  }
];

// Tahapan proses spesifik untuk Outdoor Kitchen
const outdoorKitchenProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Layout & Utilities",
    text: "We map the layout and run all necessary gas lines, electrical conduits, and water pipes safely underground.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Structural Frame",
    text: "We build a robust, non-combustible steel-stud or masonry block frame to support heavy appliances.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Stone & Veneer",
    text: "We clad the exterior structure with your choice of premium natural stone, brick, or cultured veneer.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Appliance Fitting",
    text: "We install the granite countertops, drop in the grills, connect utilities, and test all functions.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Outdoor Kitchen
import overviewImg1 from "../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../public/images/overview/overview4.jpg";

const outdoorKitchenOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Built-In",
    titleHighlight: "BBQ Grills",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Custom Stone",
    titleHighlight: "Counters",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Outdoor Kitchen
const outdoorKitchenFeedbacks = [
  {
    id: "1",
    feedbackText: "They built us a massive L-shaped outdoor kitchen with a built-in grill and mini-fridge. It's completely changed how we entertain guests in the summer!",
    image: "/images/client/user1.png",
    name: "Mark T.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "The stonework on the bar island is impeccable. The team was fantastic to work with from the initial 3D design all the way to the final cleanup.",
    image: "/images/client/user2.png",
    name: "Sophia W.",
    designation: "Homeowner",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Outdoor Kitchen Contractor" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Custom Outdoor Kitchen Design & Construction" 
        subtitle="OUTDOOR KITCHENS"
        description1="Transform your backyard into the ultimate entertainment hub with a fully custom, luxury outdoor kitchen built by Calgary's premier hardscaping professionals."
        paragraphs={[
          "An outdoor kitchen expands your living space and completely elevates your summer grilling experience. We design and build high-end outdoor cooking areas that seamlessly integrate built-in BBQ grills, smokers, outdoor refrigerators, and custom sinks.",
          "Because outdoor kitchens are exposed to harsh weather, we construct our kitchen islands using heavy-duty, non-combustible materials like steel framing and concrete blocks. We finish them with stunning granite countertops and premium stone veneers that are guaranteed to endure Calgary's freeze-thaw cycles."
        ]}
        benefits={[
          "Custom Built-in BBQ Islands",
          "Granite & Concrete Countertops",
          "Outdoor Refrigerators & Sinks",
          "Natural Stone & Brick Cladding",
          "Integrated Patio Seating Areas",
          "Safe Gas & Electrical Lines"
        ]}
        extraParagraphs={[
          "Whether you want a simple grill station or a massive U-shaped kitchen complete with a wood-fired pizza oven and bar seating, we bring your vision to life.",
          "Start planning your dream backyard today. Contact us for a free, no-obligation outdoor kitchen design consultation."
        ]}
      />

      <Process 
        title="Our Kitchen Construction Process"
        steps={outdoorKitchenProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={outdoorKitchenOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="What Backyard Chefs" 
        titleHighlight="Say About Our Work" 
        feedbacks={outdoorKitchenFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Calgary's Leading Outdoor Kitchen Builders"
        description="Building an outdoor kitchen requires a unique blend of structural masonry, utility plumbing, and landscape design. We handle the entire project from start to finish so you don't have to juggle multiple contractors."
        listItems={[
          "Turnkey Construction (Design to Finish)",
          "Expert Gas and Electrical Coordination",
          "Premium Weather-Resistant Materials",
          "Custom Designs to Fit Any Patio Size"
        ]}
        buttonText="Get a Free Consultation"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={outdoorKitchenFaqs} 
        title="Outdoor Kitchen Construction FAQs" 
        subtitle="KITCHEN FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Ready to Build Your Outdoor Kitchen?"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
