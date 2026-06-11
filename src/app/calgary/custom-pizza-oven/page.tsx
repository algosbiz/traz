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

// Data FAQ khusus untuk halaman Custom Pizza Oven
const pizzaOvenFaqs = [
  {
    uuid: "faq-oven-1",
    question: "Can custom pizza ovens be built for smaller outdoor spaces?",
    answers: [
      "Yes. We design pizza ovens in a range of sizes to suit different property layouts, including compact backyard spaces. The layout is planned carefully to maintain both functionality and comfortable outdoor flow.",
    ],
  },
  {
    uuid: "faq-oven-2",
    question: "Do you install pizza ovens for commercial applications?",
    answers: [
      "Absolutely. Our team handles both residential and commercial pizza oven installations, including larger-scale ovens designed for restaurants, hospitality spaces, and outdoor entertainment areas.",
    ],
  },
  {
    uuid: "faq-oven-3",
    question:
      "Can a pizza oven be combined with an outdoor kitchen or BBQ area?",
    answers: [
      "Yes. Many of our projects include integrated outdoor cooking features such as BBQ stations, countertops, prep areas, and outdoor kitchens to create a more complete cooking and gathering space.",
    ],
  },
  {
    uuid: "faq-oven-4",
    question: "How do you ensure consistent cooking performance?",
    answers: [
      "Consistent performance comes from proper construction, heat-resistant materials, and effective heat retention design. We build each oven to support stable cooking temperatures and reliable long-term use.",
    ],
  },
  {
    uuid: "faq-oven-5",
    question: "Can the pizza oven design be customized?",
    answers: [
      "Yes. At DMG Masonry, every pizza oven is tailored to the project, including the size, shape, finish, and overall style to ensure it fits naturally within the outdoor environment and cooking needs.",
    ],
  },
];

// Tahapan proses spesifik untuk Custom Pizza Oven
const pizzaOvenProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/services/service/custome_pizza/2.webp",
    title: "Assess the Space",
    text: "We review your layout and cooking needs.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/services/service/custome_pizza/3.webp",
    title: "Plan the Installation",
    text: "We create a tailored setup based on your space and requirements.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/services/service/custome_pizza/4.webp",
    title: "Install the Oven",
    text: "We build with focus on structure, heat performance, and durability.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/services/service/custome_pizza/5.webp",
    title: "Final Finish",
    text: "We ensure a clean and long-lasting result ready for outdoor use.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Custom Pizza Oven
const pizzaOvenOverviewItems = [
  {
    image: "/images/services/service/custome_pizza/6.webp",
    titleNormal: "Wood-Fired",
    titleHighlight: "Pizza Ovens",
    aosDelay: "100",
  },
  {
    image: "/images/services/service/custome_pizza/7.webp",
    titleNormal: "Custom Masonry",
    titleHighlight: "Oven Builds",
    aosDelay: "200",
  },
];

// Testimonial klien spesifik untuk Custom Pizza Oven
const pizzaOvenFeedbacks = [
  {
    id: "1",
    feedbackText:
      "Our custom pizza oven is incredible. It heats up fast, retains heat perfectly, and looks gorgeous in our patio. Authentic Italian pizza at home!",
    image: "/images/client/custom_pizza_oven/30.png",
    name: "Tony S.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText:
      "The craftsmanship of the stone dome is true artisan work. Best investment we made for our outdoor kitchen.",
    image: "/images/client/custom_pizza_oven/31.png",
    name: "Luca K.",
    designation: "Chef & Homeowner",
  },
  {
    id: "3",
    feedbackText: "Friends can't stop talking about our backyard pizza oven. It bakes a perfect crust in 90 seconds and the stonework is a real showpiece.",
    image: "/images/client/custom_pizza_oven/32.png",
    name: "Marta B.",
    designation: "Calgary Homeowner",
  },
];

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pizza Oven Calgary | Outdoor & Commercial Oven Solutions",
  description:
    "Premium outdoor pizza ovens designed for authentic wood-fired flavor, easy maintenance, expert construction for residential or commercial projects.",
  path: "/calgary/custom-pizza-oven/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Custom Pizza Oven" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/custome_pizza/1.webp"
        title="Custom Pizza Oven Installation"
        subtitle="SERVICE"
        description1="Outdoor pizza ovens bring a different rhythm to outdoor living, where cooking, heat, and gathering come together in one space. We design and build custom pizza ovens that are made to perform reliably while fitting naturally into any outdoor environments."
        paragraphs={[
          "Built for high-temperature cooking and year-round exposure, each pizza oven requires careful material selection and precise construction. We use durable masonry systems designed to retain heat efficiently, handle repeated use, and maintain structural stability through changing weather conditions, ensuring consistent performance.",
          "A well-designed pizza oven often becomes more than a cooking feature. It naturally becomes a social focal point in the outdoor space, influencing how people gather, cook, and spend time together in a more engaging setting, while adding both function and atmosphere to the overall outdoor experience.",
        ]}
        benefits={[
          "Custom Design & Build",
          "Built-In Outdoor Cooking Systems",
          "Residential & Commercial Builds",
          "Durable Heat-Resistant Masonry",
        ]}
        extraParagraphs={[
          "Every build begins with a clear understanding of how the space will be lived in and experienced, from cooking habits and frequency of use to the available layout and flow of the outdoor area. This approach allows us to design a pizza oven that feels naturally integrated into its surroundings, rather than appearing as a standalone structure that simply occupies space.",
          "Construction is carried out with careful consideration of heat distribution, structural integrity, and how each material responds under sustained high temperatures. Every layer and connection is planned with precision to support consistent performance, while also achieving a clean, cohesive finish that holds up well in demanding outdoor conditions over time.",
          "At DMG Masonry, the defining focus of our work is precision in execution combined with a strong understanding of material behavior. This commitment ensures each pizza oven is not only visually well-resolved, but also stable, efficient, and reliable for long-term use in outdoor environments where durability truly matters.",
        ]}
      />

      <Process
        title="Our Pizza Oven Installation Process"
        steps={pizzaOvenProcessSteps}
      />

      <Overview fullWidth items={pizzaOvenOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="What Outdoor Chefs"
        titleHighlight="Say About Our Ovens"
        feedbacks={pizzaOvenFeedbacks}
      />

      <AboutUsContent
        image="/images/services/service/custome_pizza/8.webp"
        subtitle="WHY CHOOSE US"
        title="Custom Pizza Ovens Built for Outdoor Living"
        description="A wood-fired pizza oven adds warmth, character, and functionality to any outdoor space. We create custom-built ovens designed for reliable cooking performance while complementing the overall style of your backyard area."
        listItems={[
          "Custom-built pizza oven designs",
          "Reliable heat for consistent cooking",
          "Traditional wood-fired cooking experience",
          "Designed for outdoor gatherings",
        ]}
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={pizzaOvenFaqs}
        title="Frequently Asked Questions"
        subtitle="PIZZA OVEN FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          image="/images/services/service/custome_pizza/9.webp"
          title="Build Your Ideal Pizza Oven"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
