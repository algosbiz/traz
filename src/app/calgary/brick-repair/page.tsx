import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import Footer from "@/components/Layout/Footer";
import Process from "@/components/ServiceDetails/Process";
import AboutUsContent from "@/components/ArchitectureStudio/AboutUsContent";
import FaqsContent from "@/components/Faqs/FaqsContent";
import { buildMetadata } from "@/lib/seo";

const brickRepairFaqs = [
  {
    uuid: "faq-brick-repair-1",
    question: "What are the common signs that brickwork needs repair?",
    answers: [
      "Common signs include cracked or chipped bricks, crumbling mortar joints, loose bricks, moisture penetration, discoloration, or sections of brickwork that appear to be shifting. Addressing these issues early helps prevent more extensive masonry damage.",
    ],
  },
  {
    uuid: "faq-brick-repair-2",
    question: "Do you repair both residential and commercial brickwork?",
    answers: [
      "Yes. We provide brick repair services for both residential and commercial properties, with repair solutions tailored to the condition, size, and construction of each project.",
    ],
  },
  {
    uuid: "faq-brick-repair-3",
    question: "Is brick repointing included as part of your repair services?",
    answers: [
      "When deteriorated mortar joints are contributing to the damage, repointing may be recommended as part of the repair process. Replacing weakened mortar helps restore stability and protects the brickwork from further moisture intrusion.",
    ],
  },
  {
    uuid: "faq-brick-repair-4",
    question: "How do you determine the best repair method?",
    answers: [
      "Every project begins with a thorough inspection of the brickwork to evaluate the type, location, and severity of the damage. Based on our assessment, we recommend repair solutions that best restore both the appearance and structural performance of the masonry.",
    ],
  },
  {
    uuid: "faq-brick-repair-5",
    question: "Can repairing damaged brickwork help prevent future problems?",
    answers: [
      "Yes. Timely brick repairs help reduce the risk of moisture infiltration, further cracking, loose masonry, and additional structural deterioration. Proper maintenance can also extend the lifespan of your brickwork and preserve the overall condition of your property.",
    ],
  },
];

const brickRepairProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/brick_repair/2.webp",
    title: "Inspect the Brickwork",
    text: "We inspect bricks, mortar, and overall masonry condition.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/brick_repair/3.webp",
    title: "Assess the Damage",
    text: "We identify the most suitable repair solution.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/brick_repair/4.webp",
    title: "Repair the Brickwork",
    text: "We repair damaged bricks and restore deteriorated mortar.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/brick_repair/5.webp",
    title: "Final Quality Check",
    text: "We ensure every repair is durable and professionally finished.",
    aosDelay: "400",
  },
];

export const metadata = buildMetadata({
  title: "Brick Repair Calgary — Professional Masonry Repairs",
  description:
    "Professional brick repair in Calgary for cracked bricks, deteriorated mortar, loose masonry, and weather damage. Request a quote from DMG Masonry.",
  path: "/calgary/brick-repair/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Brick Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/brick_repair/1.webp"
        title="Professional Brick Repair Services"
        subtitle="SERVICE"
        description1="Damaged brickwork can gradually affect both the appearance and structural condition of a property. DMG Masonry provides professional brick repair services to restore damaged masonry while helping preserve the strength, stability, and character of your brick structures."
        paragraphs={[
          "Cracked bricks, deteriorating mortar joints, loose masonry, and weather-related damage are common issues that develop as buildings age. Exposure to moisture, temperature changes, and natural settling can all contribute to brick deterioration over time. Our experienced masons carefully assess the condition of the brickwork to identify the underlying cause before recommending repair solutions suited to your property's specific needs.",
          "Addressing brick damage early helps prevent further deterioration and reduces the likelihood of more extensive repairs in the future. Professional brick repair also improves structural reliability, restores visual appeal, and helps protect masonry surfaces from continued weather exposure, extending the lifespan of your brickwork.",
        ]}
        benefits={[
          "Brick Wall Repairs",
          "Residential & Commercial Work",
          "Brick Repointing",
          "Long-Lasting Masonry Solutions",
        ]}
        extraParagraphs={[
          "Before any repair work begins, our team carefully evaluates the overall condition of the brickwork, including damaged bricks, mortar joints, and surrounding masonry. Understanding the extent of the damage allows us to recommend repair methods that best suit the age, construction, and condition of the structure.",
          "Quality brick repair involves more than replacing damaged sections. Our focus is on restoring structural integrity while preserving the appearance and durability of the existing masonry. Whether repairing cracked bricks, replacing damaged units, or repointing deteriorated mortar, every project is completed with precision and attention to long-term performance.",
          "Well-maintained brickwork contributes to the safety, durability, and value of any property. With skilled craftsmanship and dependable repair techniques, DMG Masonry delivers brick repair solutions designed to strengthen masonry structures and help them withstand years of continued use and environmental exposure.",
        ]}
      />

      <Process
        title="Our Brick Repair Process"
        steps={brickRepairProcessSteps}
      />

      <AboutUsContent
        image="/images/services/service/brick_repair/8.webp"
        subtitle="WHY CHOOSE US"
        title="Restoring Brickwork with Strength and Precision"
        description="Damaged brickwork can gradually weaken both the appearance and stability of a structure if left untreated. Our brick repair services are designed to restore masonry while helping protect your property for years to come."
        listItems={[
          "Brick Damage Assessment",
          "Professional Brick Repairs",
          "Precision Repointing Services",
          "Residential & Commercial Projects",
        ]}
        buttonText="See What We Do"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={brickRepairFaqs}
        title="Frequently Asked Questions"
        subtitle="FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/brick_repair/9.webp"
          title="Restore the Strength and Beauty of Your Brickwork"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
