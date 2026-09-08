import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import Footer from "@/components/Layout/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get in Touch With Our Calgary Masonry Team - DMG Masonry",
  description:
    "Reach out to discuss your next project. Our team is ready to answer questions, offer guidance and schedule an onsite consultation at a time that suits you.",
  path: "/contact-us/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="Contact Us"
        homeText="Home"
        homeUrl="/"
        titleAsHeading
      />

      <div className="ptb-100">
        <ContactFormStyleTwo priorityImage />
      </div>

      <div className="pb-100">
        <GoogleMap />
      </div>
 
      <Footer />
    </>
  )
}
