import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import ServicesCard from "@/components/Services/ServicesCard";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Explore Our Special Masonry Services - DMG Masonry",
  description:
    "From repairs to custom outdoor builds, our masonry contractor team handles every project across Calgary with skilled, reliable craftsmanship every time.",
  path: "/services/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="Services"
        homeText="Home"
        homeUrl="/"
        titleAsHeading
      />

      <ServicesCard />

      <Partner />
   
      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
      
      <Footer />
    </>
  )
}
