import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import LatestRecognition from "@/components/ArchitectureStudio/LatestRecognition";
import QuoteText from "@/components/AboutUs/QuoteText";
import ClientsFeedbackSlider from "@/components/Common/ClientsFeedbackSlider";
import TextSlide from "@/components/Common/TextSlide";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import Partner from "@/components/Common/Partner";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ABOUT DMG Masonry Calgary: Quality Craftsmanship Matters - DMG Masonry",
  description:
    "Explore the craftsmanship of DMG Masonry Calgary, where outdoor beauty meets durability with our expert masonry services.",
  path: "/about-us/",
});

// Testimonial klien spesifik untuk About Us
const aboutFeedbacks = [
  {
    id: "1",
    feedbackText:
      "I reached out to a few contractors before deciding, and I'm glad I chose DMG Masonry. They were easy to deal with, explained everything clearly, and the work turned out just the way we wanted.",
    name: "Mark H.",
  },
  {
    id: "2",
    feedbackText:
      "You can tell they care about doing things properly. We're really happy with how everything came together.",
    name: "Laura P.",
  },
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="About Us"
        homeText="Home"
        homeUrl="/"
      />

      <AboutUsContent />

      {/* <LatestRecognition /> */}

      <QuoteText />

      <div className="ptb-100">
        <ClientsFeedbackSlider feedbacks={aboutFeedbacks} />
      </div>

      {/* <TextSlide /> */}

      <TeamMemberStyle2 />

      {/* <div className="pt-100">
        <Partner />
      </div> */}

      <div className="pb-100 pt-100">
        <ContactFormStyleTwo image="/images/about/new/3.webp" />
      </div>

      <Footer />
    </>
  )
}
