import Navbar from "@/components/Layout/Navbar";
import HeroBanner from "@/components/ArchitectureHome/HeroBanner";
import AboutUsContent from "@/components/ArchitectureHome/AboutUsContent";
import WhatWeDo from "@/components/ArchitectureHome/WhatWeDo";
import Overview from "@/components/ArchitectureHome/Overview";
import CoreFeatures from "@/components/ArchitectureHome/CoreFeatures";
import LatestRecognition from "@/components/ArchitectureHome/LatestRecognition";
import RecentProjects from "@/components/ArchitectureHome/RecentProjects";
import TextSlide from "@/components/Common/TextSlide";
import Process from "@/components/ArchitectureHome/Process";
import ClientsFeedbackSlider from "@/components/ArchitectureHome/ClientsFeedbackSlider";
import BlogPost from "@/components/ArchitectureHome/BlogPost";
import ContactForm from "@/components/ContactUs/ContactForm";
import Footer from "@/components/Layout/Footer";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import ServiceDetailsContentTwo from "@/components/ServiceDetails/ServiceDetailsContentTwo";
import FaqsContent from "@/components/Faqs/FaqsContent";
export default function Home() {
  const masonryRepairFaqs = [
    {
      uuid: "faq-repair-1",
      question: "What masonry services do you provide in Calgary?",
      answers: [
        "We provide complete masonry services in Calgary, including brick, stone, and concrete block construction, as well as repairs, restorations, and new installations for residential and commercial properties."
      ]
    },
    {
      uuid: "faq-repair-2",
      question: "How do we know if masonry is the right choice for our project?",
      answers: [
        "We review your project goals, budget, and site conditions, then recommend masonry solutions that offer the best balance of durability, appearance, and long-term performance."
      ]
    },
    {
      uuid: "faq-repair-3",
      question: "Can masonry withstand Calgary’s weather conditions?",
      answers: [
        "Yes. We use materials and installation methods designed to perform well in Calgary’s climate, including freeze-thaw cycles, moisture exposure, and seasonal temperature changes."
      ]
    },
    {
      uuid: "faq-repair-4",
      question: "Do you handle both new construction and masonry repairs?",
      answers: [
        "Yes, we work on both new masonry construction and repair projects, including cracked brickwork, deteriorated mortar, and structural masonry issues."
      ]
    },
    {
      uuid: "faq-repair-5",
      question: "How do we get started with a masonry project?",
      answers: [
        "Simply contact our team to discuss your project. We’ll assess your needs, provide professional guidance, and prepare a clear estimate before any work begins."
      ]
    }
  ];
  return (
    <>
      <Navbar />

      <HeroBanner />

      <AboutUsContent />

      <WhatWeDo />

      <Overview />

      <CoreFeatures />

      {/* <LatestRecognition /> */}
      <ServiceDetailsContentTwo />

      {/* <RecentProjects /> */}

      <TextSlide />

      <Process />

      <ClientsFeedbackSlider />

      {/* <BlogPost /> */}
      <FaqsContent
        faqs={masonryRepairFaqs}
        title="Frequently Asked Questions"
        subtitle="FAQ"
      />
      <ContactForm />

      <Footer />
    </>
  );
}
