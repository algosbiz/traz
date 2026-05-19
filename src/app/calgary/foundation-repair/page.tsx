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

// Data FAQ khusus untuk halaman Foundation Repair
const foundationFaqs = [
  {
    uuid: "faq-foundation-1",
    question: "How do I know if a foundation crack is structural or just cosmetic?",
    answers: [
      "Cosmetic cracks are usually hairline thin (less than 1/8 inch) and run vertically. They are normal shrinkage cracks from concrete curing.",
      "Structural cracks are wider than 1/4 inch, run horizontally or diagonally, cause stairs or doors to jam, or show visible water leakage. These require professional structural repair immediately."
    ]
  },
  {
    uuid: "faq-foundation-2",
    question: "What is polyurethane injection and how does it seal cracks?",
    answers: [
      "Polyurethane is a flexible, expanding foam injected into concrete cracks. When it meets moisture, it expands up to 20 times its volume, completely filling the crack from inside to outside, creating a permanent water-tight rubber gasket."
    ]
  }
];

// Tahapan proses spesifik untuk Foundation Repair
const foundationProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Excavate & Prep",
    text: "We excavate the exterior soil to expose the foundation crack and thoroughly clean the concrete surface.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Crack Injection",
    text: "We inject high-pressure polyurethane or structural epoxy deep into the crack, sealing it from front to back.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Waterproof Wrap",
    text: "We apply an elastomeric membrane and dimpled drainage sheet over the concrete to redirect soil water away.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Drain Pipe & Soil",
    text: "We lay gravel-packed weeping tile pipes, backfill with drainage gravel, and compact the soil back in place.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Foundation Repair
import overviewImg1 from "../../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../../public/images/overview/overview4.jpg";

const foundationOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Basement Crack",
    titleHighlight: "Injection",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Exterior Concrete",
    titleHighlight: "Waterproofing",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Foundation Repair
const foundationFeedbacks = [
  {
    id: "1",
    feedbackText: "They stopped the leak in our basement wall completely with their epoxy injection system. The basement has been bone dry ever since the heavy rains.",
    image: "/images/client/user1.png",
    name: "Thomas G.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "Honest assessment and very thorough exterior waterproofing work. I finally have peace of mind that my foundation is solid.",
    image: "/images/client/user2.png",
    name: "Emily W.",
    designation: "Homeowner",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Foundation Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Structural Foundation Crack Repair & Waterproofing" 
        subtitle="FOUNDATION REPAIR"
        description1="Protect your home's stability and prevent structural damage with expert basement crack injection and foundation waterproofing services in Calgary."
        paragraphs={[
          "A home is only as strong as its foundation. In Calgary, changing soil moisture and ground movement can cause concrete foundations to crack and settle. Small cracks can eventually allow water to leak into your basement, leading to mold, mildew, and major structural failure.",
          "We provide expert structural foundation repair, utilizing high-pressure polyurethane and epoxy crack injections, concrete underpinning, and comprehensive exterior drainage membrane waterproofing to secure your home."
        ]}
        benefits={[
          "Polyurethane Crack Injection",
          "Epoxy Structural Stitching",
          "Exterior Waterproofing Barriers",
          "Basement Weeping Tile Fixes",
          "Sump Pump Pit Installations",
          "Structural Underpinning Support"
        ]}
        extraParagraphs={[
          "By fixing foundation cracks from both the inside and outside, we seal water out for good and reinforce the structural stability of your concrete walls.",
          "Don't wait for your basement to flood. Contact our foundation repair experts today for an inspection and professional quote."
        ]}
      />

      <Process 
        title="Our Foundation Repair Steps"
        steps={foundationProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={foundationOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="What Clients Say" 
        titleHighlight="About Our Foundation Repairs" 
        feedbacks={foundationFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Trusted Foundation Waterproofing Experts"
        description="A compromised foundation is not something to take lightly. We use industry-leading epoxy and polyurethane resins to permanently stop leaks and stabilize concrete walls."
        listItems={[
          "Permanent Crack Injection Repairs",
          "Thorough Exterior Drainage Implementations",
          "Certified Structural Assessments",
          "Guaranteed Waterproof Solutions"
        ]}
        buttonText="Get a Free Inspection"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={foundationFaqs} 
        title="Foundation Repair Frequently Asked Questions" 
        subtitle="FOUNDATION FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Schedule Your Foundation Inspection"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
