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

// Data FAQ khusus untuk halaman Patio Stone
const patioStoneFaqs = [
  {
    uuid: "faq-patio-1",
    question: "What is the best material for a patio in Calgary?",
    answers: [
      "For Calgary's extreme freeze-thaw cycles, we highly recommend thick natural flagstone, high-density concrete pavers, or durable porcelain tiles. These materials resist cracking from winter frost much better than poured concrete."
    ]
  },
  {
    uuid: "faq-patio-2",
    question: "Do patio stones require a lot of maintenance?",
    answers: [
      "High-quality patio stones require very little maintenance. Occasional power washing and applying a polymeric sand seal between the joints every few years is usually all it takes to keep the patio looking pristine and free of weeds."
    ]
  }
];

// Tahapan proses spesifik untuk Patio Stone
const patioStoneProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Excavation",
    text: "We excavate the soil and establish proper grading to ensure rainwater naturally flows away from your home.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Compacted Base",
    text: "We lay down landscape fabric and pack several inches of road crush gravel to prevent future settling.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Precision Laying",
    text: "We meticulously lay each stone, checking the level and ensuring uniform gaps across the entire patio.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Polymeric Sanding",
    text: "We sweep specialized polymeric sand into the joints and wet it to lock the stones together and stop weeds.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Patio Stone
import overviewImg1 from "../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../public/images/overview/overview4.jpg";

const patioStoneOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Natural Flagstone",
    titleHighlight: "Patios",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Interlocking",
    titleHighlight: "Pavers",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Patio Stone
const patioStoneFeedbacks = [
  {
    id: "1",
    feedbackText: "Our new interlocking paver patio is the absolute perfect addition to our backyard. The installation was incredibly fast and the grading is flawless.",
    image: "/images/client/user1.png",
    name: "Amanda R.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "They transformed our muddy backyard into a stunning stone courtyard. Highly recommend their hardscaping services.",
    image: "/images/client/user2.png",
    name: "Chris L.",
    designation: "Homeowner",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Patio Stone Installation" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Beautiful Patio Stone & Paver Installations" 
        subtitle="PATIO STONE"
        description1="Create the perfect outdoor living space with highly durable, elegant patio stone and interlocking paver installations built to survive Calgary winters."
        paragraphs={[
          "A well-designed stone patio is the foundation of any great outdoor living area. We specialize in designing and installing high-quality hardscapes using natural flagstone, stamped concrete borders, and modern interlocking pavers.",
          "Our approach prioritizes longevity. In cold climates, poorly installed patios will heave and sink during the spring thaw. We prevent this by over-excavating and installing deep, highly-compacted gravel bases that guarantee a perfectly level surface for decades."
        ]}
        benefits={[
          "Interlocking Concrete Pavers",
          "Natural Flagstone Patios",
          "Deep Compacted Gravel Bases",
          "Polymeric Weed-Free Joint Sand",
          "Custom Borders & Patterns",
          "Proper Drainage Grading"
        ]}
        extraParagraphs={[
          "From sleek modern porcelain tiles to rustic tumbled cobblestones, we offer a massive selection of textures and colors to perfectly match your home's exterior.",
          "Ready to completely transform your backyard? Contact our hardscaping experts today to schedule a free patio design consultation."
        ]}
      />

      <Process 
        title="Our Patio Construction Process"
        steps={patioStoneProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={patioStoneOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="What Calgary Thinks" 
        titleHighlight="About Our Patios" 
        feedbacks={patioStoneFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Calgary's Premier Hardscaping Experts"
        description="We don't cut corners on the things you can't see. The secret to a perfect patio is a flawless foundation, and our base preparation is unmatched in the industry."
        listItems={[
          "Industry-Leading Base Compaction Methods",
          "Hundreds of Stone Styles and Colors",
          "Expert Leveling and Drainage Strategies",
          "Dedicated Cleanup and Debris Removal"
        ]}
        buttonText="Get a Free Estimate"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={patioStoneFaqs} 
        title="Patio Stone Installation FAQs" 
        subtitle="PATIO FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Schedule Your Patio Design Consultation"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
