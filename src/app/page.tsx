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
import BeholdFeed from "@/components/Common/BeholdFeed";
import Footer from "@/components/Layout/Footer";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import ServiceDetailsContentTwo from "@/components/ServiceDetails/ServiceDetailsContentTwo";
import FaqsContent from "@/components/Faqs/FaqsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "DMG Masonry Contractor Service Calgary for Custom Designs",
  description:
    "Transform your space with our masonry contractor service in Calgary. We specialize in durable repairs and unique designs.",
  path: "/",
});

export default function Home() {
  const masonryRepairFaqs = [
    {
      uuid: "faq-repair-1",
      question: "What masonry services do you provide in Calgary?",
      answers: [
        "We provide complete masonry services in Calgary, including brick, stone, and concrete block construction for residential and commercial properties. Our work also includes masonry repairs, restorations, and custom installations designed to maintain long-term durability, timeless appearance, and lasting structural performance."
      ]
    },
    {
      uuid: "faq-repair-2",
      question: "How do we know if masonry is the right choice for our project?",
      answers: [
        "Our team reviews your project goals, budget, property layout, and site conditions before recommending the most suitable masonry solution. We focus on helping clients choose materials and construction methods that provide timeless style, reliable durability, and long-term value for the property."
      ]
    },
    {
      uuid: "faq-repair-3",
      question: "Can masonry withstand Calgary’s weather conditions?",
      answers: [
        "Yes, we work on both new masonry construction and repair projects. From cracked brickwork and deteriorated mortar to complete masonry installations, our goal is to restore or build masonry structures that remain functional, durable, and visually timeless for years to come."
      ]
    },
    {
      uuid: "faq-repair-4",
      question: "Do you handle both new construction and masonry repairs?",
      answers: [
        "Yes, we work on both new masonry construction and repair projects. From cracked brickwork and deteriorated mortar to complete masonry installations, our goal is to restore or build masonry structures that remain functional, durable, and visually timeless for years to come."
      ]
    },
    {
      uuid: "faq-repair-5",
      question: "How do we get started with a masonry project?",
      answers: [
        "Simply contact our team to discuss your project and masonry goals. We will review your needs, assess the site conditions, and provide professional guidance with a clear estimate so the project can move forward with careful planning and long-term performance in mind."
      ]
    }
  ];
  return (
    <>
      {/* Preload the LCP hero background so the browser fetches it early
          (CSS background-images are not seen by the preload scanner). */}
      <link
        rel="preload"
        as="image"
        href="/images/main-banner/home/1.webp"
        type="image/webp"
      />

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
      {/* Instagram wall via Behold — tempel Feed ID kamu pada prop `feedId`
          (atau set DEFAULT_FEED_ID di dalam komponennya). */}
      {/* <BeholdFeed feedId="" /> */}

      <ContactForm />

      <Footer />
    </>
  );
}
