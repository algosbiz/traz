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
    question: "How do I know if my chimney needs repair?",
    answers: [
      "Common signs of chimney damage include cracked mortar joints, loose brickwork, water leaks, visible deterioration, and reduced fireplace performance. During our inspection, we assess the overall condition of the chimney to determine the most appropriate repair approach based on structural condition and long-term performance needs.",
    ],
  },
  {
    uuid: "faq-chimney-2",
    question: "Can chimney damage become a safety concern?",
    answers: [
      "Yes. Damaged chimneys can lead to structural instability, moisture intrusion, ventilation issues, and other safety concerns if left untreated. Addressing repairs early helps reduce the risk of more serious damage while supporting safer long-term chimney performance.",
    ],
  },
  {
    uuid: "faq-chimney-3",
    question: "Can chimney leaks affect other areas of the property?",
    answers: [
      "Absolutely. Moisture entering through a damaged chimney can impact surrounding masonry, ceilings, walls, and nearby structural components over time. Early leak repairs help prevent additional deterioration and reduce the risk of larger repair issues later on.",
    ],
  },
  {
    uuid: "faq-chimney-4",
    question: "Do chimney repairs need to follow local building standards?",
    answers: [
      "Yes. Proper chimney repair work should comply with applicable building and safety requirements. Our team completes repairs using reliable masonry methods and professional repair practices designed to support safe and lasting structural performance.",
    ],
  },
  {
    uuid: "faq-chimney-5",
    question: "How often should a chimney be inspected?",
    answers: [
      "Regular chimney inspections help identify early signs of wear before they develop into larger structural problems. We generally recommend inspections at least once a year, particularly for chimneys exposed to frequent fireplace use and changing seasonal conditions.",
    ],
  },
];

// Tahapan proses spesifik untuk Chimney Repair
const chimneyProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/chimney_repair/2.webp",
    title: "Inspect The Chimney",
    text: "We assess cracks, damage, and overall chimney condition.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/chimney_repair/3.webp",
    title: "Plan The Repair",
    text: "Repair solutions are prepared based on the structure and damage.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/chimney_repair/4.webp",
    title: "Strengthen The Structure",
    text: "Damaged brick and mortar are restored with durable materials.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/chimney_repair/5.webp",
    title: "Seal & Protect",
    text: "Repairs help improve safety, function, and long-term performance.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Chimney Repair
const chimneyOverviewItems = [
  {
    image: "/images/services/service/chimney_repair/6.webp",
    titleNormal: "Crown & Cap",
    titleHighlight: "Pouring",
    aosDelay: "100"
  },
  {
    image: "/images/services/service/chimney_repair/7.webp",
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
        mainImage="/images/services/service/chimney_repair/1.webp"
        title="Chimney Repair Services in Calgary"
        subtitle="SERVICE"
        description1="Chimneys are constantly exposed to moisture, temperature changes, and weather conditions that can weaken masonry over time. Our chimney repair services help restore safe performance, reliable function, and long-term durability for any property."
        paragraphs={[
          "Cracked mortar joints, loose brickwork, water penetration, and surface deterioration are common signs of chimney damage. Through detailed inspections and careful repair methods, damaged areas are restored using durable materials that help maintain both structural stability and the original appearance of the chimney.",
          "Repairing chimney issues early can also help prevent larger structural problems from developing over time. Proper maintenance and restoration work support better protection against moisture intrusion while helping the chimney continue performing reliably throughout changing seasonal conditions.",
        ]}
        benefits={[
          "Structural Stability",
          "Moisture Protection",
          "Long-Term Durability",
          "Timely Restoration",
        ]}
        extraParagraphs={[
          "Every chimney structure presents different repair conditions depending on age, exposure, and overall masonry condition. Before repairs begin, we carefully evaluate the existing structure, visible damage, and surrounding masonry areas to determine the most effective repair strategy for long-term performance, structural stability, and safety.",
          "Our repair work may involve restoring damaged mortar joints, replacing deteriorated masonry materials, or repairing chimney components affected by weather exposure and wear. Each stage of the process is completed with attention to durability, clean workmanship, and consistent structural support.",
          "Reliable chimney restoration comes from combining experienced masonry techniques with proper planning and durable repair materials. By using careful repair methods and focusing on the overall condition of the structure, we help chimney systems maintain their strength, functionality, and original appearance while supporting long-term structural performance.",
        ]}
      />

      <Process
        title="Our Chimney Repair Process "
        steps={chimneyProcessSteps}
      />

      <Overview fullWidth items={chimneyOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="What Clients Say"
        titleHighlight="About Our Chimney Repair"
        feedbacks={chimneyFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/chimney_repair/8.webp"
        subtitle="WHY CHOOSE US"
        title="Protecting the Long-Term Performance of Your Chimney"
        description="Chimney damage can affect the safety and condition of a masonry structure over time. Our repair approach helps restore structural reliability and protect the chimney from further deterioration."
        listItems={[
          "Reinforced structural stability",
          "Protection against moisture damage",
          "Protection against moisture damage",
          "Long-term chimney performance",
        ]}
        buttonText="See What We Do"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={chimneyRepairFaqs}
        title="Chimney Repair Frequently Asked Questions"
        subtitle="CHIMNEY FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/chimney_repair/9.webp"
          title="Chimney Repair Solutions"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
