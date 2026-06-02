import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import ServicesCard from "@/components/Services/ServicesCard";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — DMG Masonry | Expert Masonry Solutions",
  description:
    "Full masonry services in Calgary: repairs, restorations, fireplaces, outdoor kitchens, and retaining walls delivered with skilled craftsmanship and reliable timelines.",
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
