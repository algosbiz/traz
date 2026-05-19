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

// Data FAQ khusus untuk halaman Retaining Walls
const retainingWallFaqs = [
  {
    uuid: "faq-retaining-1",
    question: "When does a retaining wall need engineering approval in Calgary?",
    answers: [
      "Under Calgary bylaws, any retaining wall exceeding 1.2 meters (approx. 4 feet) in height requires structural engineering designs, soil testing, and a building permit.",
      "We handle all necessary drawings, coordinate with engineers, and secure all permits to make sure your structural walls are fully certified and safe."
    ]
  },
  {
    uuid: "faq-retaining-2",
    question: "How do you prevent retaining walls from shifting or collapsing over time?",
    answers: [
      "We prevent shifting by: constructing a deep, highly compacted gravel base, embedding the first course below grade, installing structural geogrid soil anchors, and providing 100% gravel backfill with dedicated perforated drainage pipes to eliminate hydrostatic water pressure."
    ]
  }
];

// Tahapan proses spesifik untuk Retaining Walls
const retainingWallProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Excavation & Base",
    text: "We dig a trench and pack down a thick road-gravel foundation for a perfectly level, solid footing.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Base Block",
    text: "We carefully set the crucial first course of blocks below ground level, checking level in all directions.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Drainage Backfill",
    text: "We lay perforated drain tile and backfill the space behind the blocks with clean crushed gravel for optimal drainage.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Staking & Cap",
    text: "We stack upper blocks with slight setbacks and glue heavy capstones on top with high-strength construction adhesive.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Retaining Walls
import overviewImg1 from "../../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../../public/images/overview/overview4.jpg";

const retainingWallOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Segmental Block",
    titleHighlight: "Retaining Walls",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Natural Boulder",
    titleHighlight: "Terraced Slopes",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Retaining Walls
const retainingWallFeedbacks = [
  {
    id: "1",
    feedbackText: "The team built a massive 3-tier retaining wall in our backyard. It looks stunning and has completely solved our erosion problem. True professionals.",
    image: "/images/client/user1.png",
    name: "James W.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "I was extremely impressed with their focus on proper drainage and engineering. The wall is rock solid.",
    image: "/images/client/user2.png",
    name: "Karen S.",
    designation: "Property Developer",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Retaining Wall Construction" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Engineered Retaining Wall Construction" 
        subtitle="RETAINING WALLS"
        description1="Protect your property from erosion and reclaim sloped land with robust, beautiful concrete block and natural stone retaining walls."
        paragraphs={[
          "A retaining wall must do two things exceptionally well: support hundreds of tons of soil pressure and water weight, and elevate the look of your landscape. If not properly engineered, water buildup and winter frost will cause walls to bulge and collapse.",
          "We design and build robust retaining walls using interlocking concrete block systems, heavy natural boulders, or structural timber. Our projects are backed by proper gravel backfill, soil geogrid reinforcement, and dedicated weeping tile drainage systems."
        ]}
        benefits={[
          "Interlocking Segmental Blocks",
          "Natural Boulder & Stone Walls",
          "Slope Stabilization & Terracing",
          "Integrated Drainage Systems",
          "Soil Reinforcement Geogrids",
          "Engineered Structural Strength"
        ]}
        extraParagraphs={[
          "Water pressure is the number one cause of retaining wall failure. We install heavy-duty drainage pipes behind every wall, allowing water to exit safely and avoiding frost heaving.",
          "Whether you need a small garden wall to terrace a flower bed or a massive engineered wall to secure a steep slope, we provide certified, safe construction. Call today to schedule a site survey."
        ]}
      />

      <Process 
        title="Steps We Follow For Retaining Walls"
        steps={retainingWallProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={retainingWallOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="Hear From Our" 
        titleHighlight="Retaining Wall Clients" 
        feedbacks={retainingWallFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Calgary's Structural Wall Specialists"
        description="We don't just stack blocks; we engineer reliable structures. Our retaining walls are built strictly to code with high-strength geogrid soil stabilization techniques."
        listItems={[
          "Advanced Geogrid Stabilization",
          "Comprehensive Drainage Solutions",
          "Permit and Engineering Management",
          "Durable Products Built for Calgary Frost"
        ]}
        buttonText="Get a Free Site Assessment"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={retainingWallFaqs} 
        title="Retaining Wall Construction FAQs" 
        subtitle="RETAINING FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Schedule Your Wall Site Survey"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
