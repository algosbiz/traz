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
import MaterialsSection from "@/components/ServiceDetails/MaterialsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Foundation Repair Solutions in Calgary - DMG Masonry",
  description:
    "Cracks and shifting can signal deeper structural issues. Our team provides foundation repair across Calgary to protect your home's value for years to come.",
  path: "/calgary/foundation-repair/",
});

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
      "Yes. We handle foundation repair projects in Calgary for both residential and commercial structures, with repair approaches planned according to the condition, size, and structural requirements of each property.",
    ],
  },
  {
    uuid: "faq-foundation-3",
    question:
      "Can foundation problems become worse if repairs are delayed?",
    answers: [
      "Yes. Foundation damage can gradually progress over time, leading to larger cracks, structural movement, moisture intrusion, and increased repair complexity if left unaddressed. Alberta's freeze-thaw cycles can accelerate that process.",
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

// Metode perbaikan foundation - section tanya-jawab baru (AEO)
const foundationRepairMethods = [
  {
    title: "Crack injection",
    text: "Non-structural cracks are commonly sealed by injecting epoxy or polyurethane into the full depth of the crack from the inside. It seals the water path and can be done without excavation.",
    aosDelay: "100",
  },
  {
    title: "Exterior excavation and waterproofing",
    text: "Where water is getting in over a larger area, the affected section is excavated to the footing, the wall cleaned and repaired, and a waterproof membrane and drainage applied before backfilling. It is the more involved option and the more durable one where water is the problem.",
    aosDelay: "200",
  },
  {
    title: "Parging and surface repair",
    text: "Deteriorated exterior surfaces on the exposed part of a foundation are cleaned back and re-parged. This is cosmetic and protective rather than structural, but it stops further surface loss.",
    aosDelay: "300",
  },
  {
    title: "Structural reinforcement",
    text: "Where a wall has moved, reinforcement addresses the movement itself rather than the crack. The right method depends on the wall type, the direction of movement and how far it has gone, which is why it follows an assessment rather than preceding it.",
    aosDelay: "400",
  },
  {
    title: "How do you decide which method to use?",
    text: "By what is causing it. A crack from curing shrinkage, a crack from settlement and a wall bowing under soil pressure look similar from the inside and need entirely different work. The assessment is what determines the repair.",
    aosDelay: "500",
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
    text: "We determine the right foundation repair solution for the structure and damage level.",
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
      "I appreciated that they answered all of our questions before starting the work. It made us feel a lot more comfortable moving forward with the repairs.",
    name: "Karen L.",
  },
  {
    id: "2",
    feedbackText:
      "The whole process was well organized from the inspection through the repairs. Once everything was finished, the work area was left clean and the repairs blended in nicely.",
    name: "Jennifer W.",
  },
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Foundation Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/foundation_repair/1.webp"
        title="Foundation Repair Calgary: Structural & Masonry Foundation Repairs"
        subtitle="SERVICE"
        description1="DMG Masonry is a masonry and foundation repair contractor in Calgary, Alberta. Foundation problems can affect the safety and condition of a property if left unresolved. We provide foundation repair services to correct structural issues and reinforce weakened areas."
        paragraphsHeading="What are the signs of foundation damage?"
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
        extraParagraphsHeading="What does foundation repair involve?"
        extraParagraphs={[
          "Before beginning any foundation repair work, our team takes time to understand how the structure has been affected and what factors may be contributing to the issue. Settlement patterns, moisture exposure, and overall structural behavior are carefully reviewed to determine the most appropriate repair approach for the property.",
          "Foundation repairs should do more than temporarily cover visible damage. Our goal is to correct underlying structural concerns while improving the overall stability of the building. From repairing foundation cracks to reinforcing weakened brick and block sections, every solution is carried out with long-term durability and dependable performance in mind.",
          "A properly repaired foundation plays an important role in protecting the condition and value of a property over time. With experienced workmanship and careful construction practices, DMG Masonry delivers foundation repair across Calgary and Alberta designed to help structures remain secure, stable, and structurally reliable for years ahead.",
        ]}
      />

      <Process
        title="How Does Our Foundation Repair Process Work?"
        steps={foundationProcessSteps}
      />

      <Overview fullWidth items={foundationOverviewItems} />

      <MaterialsSection
        subtitle="REPAIR METHODS"
        title="How Is Foundation Repair Actually Done?"
        items={foundationRepairMethods}
      />

      <ClientsFeedbackSlider
        titleNormal="What Clients Say"
        titleHighlight="About Our Foundation Repairs"
        feedbacks={foundationFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/foundation_repair/8.webp"
        subtitle="WHY CHOOSE US"
        title="Why Choose DMG Masonry For Foundation Repair In Calgary?"
        description="Foundation damage can affect the safety and performance of a building if not repaired properly. As masonry contractors in Calgary, we provide foundation repair services focused on structural stability."
        listItems={[
          "Foundation Issue Assessment",
          "Condition-Based Repairs",
          "Durable Structural Support",
          "Residential & Commercial Solutions",
          "Serving Calgary and surrounding Alberta communities",
        ]}
        buttonText="See What We Do"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={foundationFaqs}
        title="Foundation Repair Calgary: Frequently Asked Questions"
        subtitle="FAQ"
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
