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

// Data FAQ khusus untuk halaman Masonry Repair
const masonryRepairFaqs = [
  {
    uuid: "faq-repair-1",
    question: "How long does masonry repair usually take?",
    answers: [
      "The duration of a masonry repair project depends heavily on the extent of the damage and the size of the area being worked on. Minor crack repairs or spot pointing might take only a few hours to a single day.",
      "For larger restorations, such as rebuilding a retaining wall or extensive chimney repair, the process can take several days to a week. We always provide a clear timeline before starting any work."
    ]
  },
  {
    uuid: "faq-repair-2",
    question: "Do you offer warranties on your masonry repair work?",
    answers: [
      "Yes, we stand behind the quality of our craftsmanship. All of our masonry repair services come with a warranty to give you peace of mind.",
      "The specific terms of the warranty depend on the type of repair and materials used, which we will discuss with you during the consultation."
    ]
  },
  {
    uuid: "faq-repair-3",
    question: "Can you match the new mortar to my existing brickwork?",
    answers: [
      "Absolutely. One of the most important aspects of masonry repair is ensuring the new work blends seamlessly with the old.",
      "We carefully analyze the color, texture, and composition of your existing mortar and bricks to create a custom match. While weathering can cause slight variations, our goal is to make the repair as unnoticeable as possible."
    ]
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Masonry Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent title="Professional Masonry Repair & Restoration Services" />

      <Process />
      <Overview fullWidth />
      <ClientsFeedbackSlider />
      <AboutUsContent />
      
      {/* Memanggil FaqsContent dengan prop khusus halaman ini */}
      <FaqsContent 
        faqs={masonryRepairFaqs} 
        title="Frequently Asked Questions - Masonry Repair" 
        subtitle="REPAIR FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo />
      </div>

      <Footer />
    </>
  );
}
