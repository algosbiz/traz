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
import MaterialsSection from "@/components/ServiceDetails/MaterialsSection";

// Data FAQ khusus untuk halaman Outdoor Kitchen
const outdoorKitchenFaqs = [
  {
    uuid: "faq-kitchen-1",
    question: "Can you build outdoor kitchens for smaller outdoor spaces?",
    answers: [
      "Yes. We design outdoor kitchens to make the most of available space while maintaining functionality, movement flow, and practical cooking use. Even compact Calgary backyards can be transformed into efficient outdoor cooking and gathering spaces.",
    ],
  },
  {
    uuid: "faq-kitchen-2",
    question: "Do you install built-in BBQ features and appliances?",
    answers: [
      "Absolutely. We build fully integrated outdoor BBQ kitchens in Calgary that can include built-in grills, sinks, storage solutions, pizza ovens, and other cooking appliances based on the project design and requirements.",
    ],
  },
  {
    uuid: "faq-kitchen-3",
    question: "Are outdoor kitchens built to withstand weather conditions?",
    answers: [
      "Yes. We use durable materials and reliable construction methods designed to perform well in outdoor environments, including exposure to moisture, heat, and Calgary's seasonal weather changes.",
    ],
  },
  {
    uuid: "faq-kitchen-4",
    question: "Can outdoor kitchens include seating and lighting areas?",
    answers: [
      "Yes. Many of our projects include integrated seating, bar areas, prep stations, and lighting features to create a more functional and comfortable outdoor entertainment space.",
    ],
  },
  {
    uuid: "faq-kitchen-5",
    question: "How much does an outdoor kitchen cost in Calgary?",
    answers: [
      "Pricing depends on layout, material selection, size, and the features included in the design. We provide clear and detailed quotations so clients understand the scope and investment before the project begins.",
    ],
  },
];

// Komponen outdoor kitchen - section tanya-jawab baru (AEO)
const outdoorKitchenComponents = [
  {
    title: "Built-in BBQ grill",
    text: "The grill is the anchor and everything else is planned around it. A built-in unit sits flush in a masonry surround rather than standing on wheels, which is what turns a barbecue into a kitchen.",
    aosDelay: "100",
  },
  {
    title: "Prep counters and landing space",
    text: "The most common regret on a small outdoor kitchen is not enough counter. Landing space either side of the grill is what makes it usable for actual cooking rather than just grilling.",
    aosDelay: "200",
  },
  {
    title: "Storage and access doors",
    text: "Weatherproof cabinets and drawers keep tools, charcoal and covers outside instead of being carried back and forth from the house. Stainless access doors are the usual choice for Calgary weather.",
    aosDelay: "300",
  },
  {
    title: "Sink and water",
    text: "A sink is optional and adds plumbing, including winterisation so the line can be drained before frost. Worth planning if the kitchen is far from the back door.",
    aosDelay: "400",
  },
  {
    title: "Refrigeration",
    text: "Outdoor-rated fridges exist and work, but they need power and most are pulled for winter. We plan the electrical either way so the option stays open.",
    aosDelay: "500",
  },
  {
    title: "Pizza oven or side burner",
    text: "A masonry pizza oven or a side burner extends what the kitchen can do. These are built in from the start rather than added later, so it is worth deciding early.",
    aosDelay: "600",
  },
  {
    title: "Bar seating and lighting",
    text: "Bar seating turns the kitchen into somewhere people gather rather than somewhere one person works. Lighting is what determines whether it gets used after dark.",
    aosDelay: "700",
  },
];

// Tahapan proses spesifik untuk Outdoor Kitchen
const outdoorKitchenProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/outdoor_kitchen/2.webp",
    title: "Assess The Space",
    text: "We review layout, needs, and available outdoor area before starting.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/outdoor_kitchen/3.webp",
    title: "Plan The Setup",
    text: "Cooking needs, materials, and design are prepared for a functional layout.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/outdoor_kitchen/4.webp",
    title: "Build The Kitchen",
    text: "We construct outdoor BBQ and cooking areas with durable materials and methods.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/outdoor_kitchen/5.webp",
    title: "Finalize The Details",
    text: "Finishing work ensures usability, clean look, and long-term performance.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Outdoor Kitchen
const outdoorKitchenOverviewItems = [
  {
    image: "/images/services/service/outdoor_kitchen/6.webp",
    titleNormal: "Built-In",
    titleHighlight: "BBQ Grills",
    aosDelay: "100"
  },
  {
    image: "/images/services/service/outdoor_kitchen/7.webp",
    titleNormal: "Custom Stone",
    titleHighlight: "Counters",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Outdoor Kitchen
const outdoorKitchenFeedbacks = [
  {
    id: "1",
    feedbackText:
      "We didn't have a huge backyard, so I wasn't sure an outdoor kitchen would work. The layout ended up making great use of the space without feeling crowded.",
    name: "Jason W.",
  },
  {
    id: "2",
    feedbackText:
      "Summer dinners have become a lot more fun since the project was finished. Instead of running back and forth between the house and the patio, everything we need is right outside.",
    name: "Olivia C.",
  },
];

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Calgary’s Favorite Custom Outdoor Kitchens – DMG Masonry",
  description:
    "From a simple outdoor barbecue setup to a full outdoor kitchen with pizza oven, we help you plan the layout, materials and overall project cost upfront.",
  path: "/outdoor-kitchen-contractor/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle
        title="Outdoor Kitchen Contractor"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        mainImage="/images/services/service/outdoor_kitchen/1.webp"
        title="Outdoor Kitchen Calgary: BBQ & Outdoor Kitchen Contractor"
        subtitle="SERVICE"
        description1="DMG Masonry is an outdoor kitchen contractor in Calgary, Alberta. A professionally designed outdoor kitchen creates a space where cooking, dining, and gathering happen in one connected outdoor environment. We build practical and timeless outdoor BBQ and cooking spaces that complement your property."
        paragraphsHeading="What is an outdoor kitchen?"
        paragraphs={[
          "An outdoor kitchen is a permanent, built-in cooking and dining area, usually combining a BBQ grill, prep counters, storage and seating in one masonry structure. Outdoor cooking spaces experience continuous exposure to heat, moisture, changing temperatures, and everyday activity. Through reliable installation methods and carefully selected materials, we construct outdoor kitchens in Calgary designed to remain dependable, visually consistent, and suitable for regular use throughout the seasons.",
          "Thoughtful outdoor layouts can also improve how a space feels and functions over time. From built-in grills and preparation counters to bar seating and entertainment areas, every feature is planned to create a welcoming outdoor setting that feels organized, comfortable, and naturally integrated with the surrounding space.",
        ]}
        benefits={[
          "Personalized Layouts",
          "Outdoor BBQ & Entertainment Integration",
          "Reliable Outdoor Construction",
          "Everyday-use Spaces",
        ]}
        extraParagraphsHeading="What is planned before an outdoor kitchen is built?"
        extraParagraphs={[
          "Planning is an important part of every outdoor kitchen project. Layout, cooking requirements, available space, and material selection are all reviewed carefully to ensure the final design supports both usability and long-term performance while fitting naturally with the overall outdoor environment and how the space will be used day to day.",
          "From simple outdoor barbecue stations to more complete outdoor cooking setups, each project we handle is approached with a focus on practical construction and clean execution. Every detail is considered to ensure the space works well in real use, not just in design, while also maintaining a balanced and functional layout that suits the property.",
          "Long-term performance comes down to the combination of proper construction methods, quality materials, and careful installation. With this approach, we build outdoor kitchens across north and south Calgary that remain functional, visually consistent, and reliable over time, even with regular outdoor use and changing conditions.",
        ]}
      />

      <Process
        title="How Does Our Outdoor Kitchen Build Process Work?"
        steps={outdoorKitchenProcessSteps}
      />

      <Overview fullWidth items={outdoorKitchenOverviewItems} />

      <MaterialsSection
        subtitle="FEATURES"
        title="What Goes Into An Outdoor Kitchen?"
        items={outdoorKitchenComponents}
      />

      <ClientsFeedbackSlider
        titleNormal="What Backyard Chefs"
        titleHighlight="Say About Our Work"
        feedbacks={outdoorKitchenFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/outdoor_kitchen/8.webp"
        subtitle="WHY CHOOSE US"
        title="Why Choose DMG Masonry For An Outdoor Kitchen In Calgary?"
        description="Outdoor kitchen spaces work best when planned around how people cook, gather, and spend time outside. As outdoor kitchen builders in Calgary, our approach focuses on creating functional layouts that support everyday use and social outdoor experiences."
        listItems={[
          "Practical cooking layouts",
          "Integrated outdoor BBQ features",
          "Comfortable gathering spaces",
          "Functional outdoor experience",
          "Serving north and south Calgary",
        ]}
        buttonText="Talk to Our Team"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={outdoorKitchenFaqs}
        title="Outdoor Kitchen Calgary: Frequently Asked Questions"
        subtitle="FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/outdoor_kitchen/9.webp"
          title="Build Your Perfect Outdoor Kitchen"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
