import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import Footer from "@/components/Layout/Footer";
import Process from "@/components/ServiceDetails/Process";
import Overview from "@/components/InteriorHome/Overview";
import ServiceDescriptionSection from "@/components/ServiceDetails/ServiceDescriptionSection";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Service Details" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent />

      <Process />
      <Overview />
      <ServiceDescriptionSection />
      <div className="ptb-100">
        <ContactFormStyleTwo />
      </div>

      <Footer />
    </>
  );
}
