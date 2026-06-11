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
    question: "What are the common signs of foundation damage?",
    answers: [
      "Foundation issues can appear in several ways, including wall or floor cracks, uneven surfaces, sticking doors or windows, and signs of moisture near the structure. Identifying these issues early can help prevent more extensive structural problems over time.",
    ],
  },
  {
    uuid: "faq-foundation-2",
    question:
      "Do you provide foundation repair for both residential and commercial properties?",
    answers: [
      "Yes. We handle foundation repair projects for both residential and commercial structures, with repair approaches planned according to the condition, size, and structural requirements of each property.",
    ],
  },
  {
    uuid: "faq-foundation-3",
    question:
      "Can foundation problems become worse if repairs are delayed?",
    answers: [
      "Absolutely. Foundation damage can gradually progress over time, leading to larger cracks, structural movement, moisture intrusion, and increased repair complexity if left unaddressed.",
    ],
  },
  {
    uuid: "faq-foundation-4",
    question:
      "How do you determine the appropriate foundation repair solution?",
    answers: [
      "Our process begins with a detailed assessment of the foundation condition, including the type, location, and severity of the damage. Based on our findings, we recommend repair methods that best support long-term structural stability and performance.",
    ],
  },
  {
    uuid: "faq-foundation-5",
    question:
      "Will foundation repair affect daily activities on the property?",
    answers: [
      "The level of disruption depends on the scope and location of the repair work. Our team plans projects carefully to maintain safe and efficient workflows while helping minimize interruptions throughout the repair process.",
    ],
  },
];

// Tahapan proses spesifik untuk Foundation Repair
const foundationProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/foundation_repair/2.webp",
    title: "Inspect the Foundation",
    text: "We assess structural movement, cracks, and foundation conditions.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/foundation_repair/3.webp",
    title: "Plan the Repair",
    text: "We determine the right solution for the structure and damage level.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/foundation_repair/4.webp",
    title: "Complete the Repairs",
    text: "Foundation areas are reinforced using reliable repair methods and materials.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/foundation_repair/5.webp",
    title: "Ensure Long-Term Stability",
    text: "Final work is completed with focus on strength, durability, and performance.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Foundation Repair
const foundationOverviewItems = [
  {
    image: "/images/services/service/foundation_repair/6.webp",
    titleNormal: "Basement Crack",
    titleHighlight: "Injection",
    aosDelay: "100",
  },
  {
    image: "/images/services/service/foundation_repair/7.webp",
    titleNormal: "Exterior Concrete",
    titleHighlight: "Waterproofing",
    aosDelay: "200",
  },
];

// Testimonial klien spesifik untuk Foundation Repair
const foundationFeedbacks = [
  {
    id: "1",
    feedbackText:
      "They stopped the leak in our basement wall completely with their epoxy injection system. The basement has been bone dry ever since the heavy rains.",
    image: "/images/client/foundation_repair/42.png",
    name: "Theresa G.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText:
      "Honest assessment and very thorough exterior waterproofing work. I finally have peace of mind that my foundation is solid.",
    image: "/images/client/foundation_repair/43.png",
    name: "Emily W.",
    designation: "Homeowner",
  },
  {
    id: "3",
    feedbackText: "Crack repair and waterproofing were done quickly and professionally. Our basement stayed completely dry through spring runoff. Great peace of mind.",
    image: "/images/client/foundation_repair/44.png",
    name: "Michael S.",
    designation: "Calgary Homeowner",
  },
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Foundation Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/foundation_repair/1.webp"
        title="Professional Foundation Repair Services"
        subtitle="SERVICE"
        description1="Foundation problems can affect the safety and condition of a property if left unresolved. DMG Masonry provides foundation repair services to correct structural issues and reinforce weakened areas."
        paragraphs={[
          "Cracked foundation walls, uneven floors, sticking doors, and visible structural movement are often signs of underlying foundation issues. These problems can result from soil settlement, moisture exposure, or shifting structural loads over time. Our team carefully inspects the condition of the foundation to determine the cause and recommend repairs suited to the structure's specific needs.",
          "Repairing foundation damage early can help limit further deterioration and reduce the risk of additional structural complications. Proper repair work also helps improve the overall reliability of the building while protecting against moisture intrusion and ongoing movement that may impact surrounding areas of the property.",
        ]}
        benefits={[
          "Foundation Reinforcement",
          "Residential & Commercial Work",
          "Foundation Crack Repairs",
          "Structural Stability",
        ]}
        extraParagraphs={[
          "Before beginning any foundation repair work, our team takes time to understand how the structure has been affected and what factors may be contributing to the issue. Settlement patterns, moisture exposure, and overall structural behavior are carefully reviewed to determine the most appropriate repair approach for the property.",
          "Foundation repairs should do more than temporarily cover visible damage. Our goal is to correct underlying structural concerns while improving the overall stability of the building. From repairing foundation cracks to reinforcing weakened sections, every solution is carried out with long-term durability and dependable performance in mind.",
          "A properly repaired foundation plays an important role in protecting the condition and value of a property over time. With experienced workmanship and careful construction practices, DMG Masonry delivers foundation repair solutions designed to help structures remain secure, stable, and structurally reliable for years ahead.",
        ]}
      />

      <Process
        title="Our Masonry Repair Process"
        steps={foundationProcessSteps}
      />

      <Overview fullWidth items={foundationOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="What Clients Say"
        titleHighlight="About Our Foundation Repairs"
        feedbacks={foundationFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/foundation_repair/8.webp"
        subtitle="WHY CHOOSE US"
        title="Protecting Structural Stability from the Foundation Up"
        description="Foundation damage can affect the safety and performance of a building if not repaired properly. Our team provides foundation repair services focused on structural stability."
        listItems={[
          "Foundation Issue Assessment",
          "Condition-Based Repairs",
          "Durable Structural Support",
          "Residential & Commercial Solutions",
        ]}
        buttonText="See What We Do"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={foundationFaqs}
        title="Frequently Asked Questions"
        subtitle="FOUNDATION FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/foundation_repair/9.webp"
          title="Restore Strength to Your Foundation"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
