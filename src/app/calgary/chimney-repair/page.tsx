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

// Data FAQ khusus untuk halaman Chimney Repair
const chimneyRepairFaqs = [
  {
    uuid: "faq-chimney-1",
    question: "What is a chimney crown and why is it important?",
    answers: [
      "The chimney crown is the concrete slab covering the top of the chimney brick structure. Its main purpose is to act as a roof, keeping rainwater and snow from seeping down into the bricks below.",
      "If the crown cracks or deteriorates, water enters the brick pores, freezes, expands, and quickly destroys the masonry. Repairing or replacing a cracked crown is critical to avoid extensive damage."
    ]
  },
  {
    uuid: "faq-chimney-2",
    question: "How do I know if my chimney needs repair?",
    answers: [
      "Key warning signs include: white powdery staining (efflorescence) on the outer brick, falling mortar bits on the fireplace hearth, cracked or crumbling brickwork (spalling), water stains on adjacent walls/ceilings, or visible cracks on top of the concrete crown."
    ]
  }
];

// Tahapan proses spesifik untuk Chimney Repair
const chimneyProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Safety Inspection",
    text: "We inspect the flue, flashing, brickwork, and crown to find all structural and leak issues.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Brick Rebuild",
    text: "We replace spalling or crumbling bricks and apply strong matching mortar.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Crown Pouring",
    text: "We cast a reinforced concrete crown with a drip edge to direct rainwater away.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Seal & Protect",
    text: "We apply a breathable siloxane-based water repellent to shield the chimney from rain and snow.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Chimney Repair
import overviewImg1 from "../../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../../public/images/overview/overview4.jpg";

const chimneyOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Crown & Cap",
    titleHighlight: "Pouring",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Tuckpointing",
    titleHighlight: "Restoration",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Chimney Repair
const chimneyFeedbacks = [
  {
    id: "1",
    feedbackText: "They completely saved our chimney from collapsing. Quick, efficient, and they cleaned up perfectly afterward.",
    image: "/images/client/user1.png",
    name: "Robert K.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "Great communication and very fair pricing for a full chimney rebuild. Highly recommended!",
    image: "/images/client/user2.png",
    name: "Amanda L.",
    designation: "Homeowner",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Chimney Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Comprehensive Chimney Inspection, Repair & Rebuilding" 
        subtitle="CHIMNEY REPAIR"
        description1="Keep your home safe and warm with expert chimney maintenance, crown restoration, and structural tuckpointing from Calgary masons."
        paragraphs={[
          "Chimneys are highly vulnerable to the harsh freeze-thaw cycles of Calgary's winters. Damaged chimney crowns, cracked bricks, and deteriorating mortar joints can allow water to seep inside, leading to expensive interior leaks and hazardous structural decay.",
          "We offer full-service chimney restoration, including minor crown sealing, complete crown rebuilds, flue liners, flashing repairs, and structural tuckpointing to ensure your fireplace operates safely and remains water-tight."
        ]}
        benefits={[
          "Chimney Crown Rebuilding",
          "Brick Tuckpointing & Spalling Fix",
          "Flashing & Leak Protection",
          "Sewer & Flue Damper Checks",
          "Freeze-Thaw Resistant Mortar",
          "Safety Standards Certified"
        ]}
        extraParagraphs={[
          "Ignoring chimney cracks can lead to loose masonry tumbling down, posing major safety risks. A simple maintenance visit today can save you thousands in major repairs tomorrow.",
          "Our team is fully insured and experienced in working at heights, bringing professional equipment to handle any residential chimney project safely and efficiently."
        ]}
      />

      <Process 
        title="Our Chimney Restoration Steps"
        steps={chimneyProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={chimneyOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="What Clients Say" 
        titleHighlight="About Our Chimney Repair" 
        feedbacks={chimneyFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Calgary's Leading Chimney Repair Experts"
        description="We prioritize the safety and structural integrity of your home. With our highly skilled masons, we ensure that every chimney repair meets the highest safety standards."
        listItems={[
          "WETT Certified Inspections",
          "High-Quality Materials Built for Winter",
          "Experienced in Working at Heights",
          "Transparent Pricing and Guarantees"
        ]}
        buttonText="Get a Free Estimate"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={chimneyRepairFaqs} 
        title="Chimney Repair Frequently Asked Questions" 
        subtitle="CHIMNEY FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Schedule Your Chimney Inspection Today"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
