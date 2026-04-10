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
export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Service Details" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent />

      <Process />
      <Overview fullWidth />
      <ClientsFeedbackSlider />
      <AboutUsContent />
      <FaqsContent />
      <div className="ptb-100">
        <ContactFormStyleTwo />
      </div>

      <Footer />
    </>
  );
}
