import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import RequestAQuoteForm from "@/components/RequestAQuote/RequestAQuoteForm";
import Footer from "@/components/Layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Free Masonry Estimate in Calgary - DMG Masonry",
  description:
    "Tell us about your project and we will provide clear, upfront pricing for repairs, patios, fireplaces or any other masonry work across the Calgary area.",
  path: "/request-quote/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Request a Quote"
        homeText="Home"
        homeUrl="/"
        titleAsHeading
      />

      <RequestAQuoteForm />
 
      <Footer />
    </>
  )
}
