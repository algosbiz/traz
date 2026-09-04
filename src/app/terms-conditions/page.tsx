import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";
import Footer from "@/components/Layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms and Conditions for Using Our Site - DMG Masonry",
  description:
    "Review the rules that apply when you use the DMG Masonry website, request a quote or hire our team for masonry work anywhere in the greater Calgary region.",
  path: "/terms-conditions/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Terms & Conditions"
        homeText="Home"
        homeUrl="/"
        titleAsHeading
      />

      <TermsConditionsContent />
 
      <Footer />
    </>
  )
}
