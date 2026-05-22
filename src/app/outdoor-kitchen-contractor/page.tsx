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

// Data FAQ khusus untuk halaman Outdoor Kitchen
const outdoorKitchenFaqs = [
  {
    uuid: "faq-kitchen-1",
    question: "Can you build outdoor kitchens for smaller outdoor spaces?",
    answers: [
      "Yes. We design outdoor kitchens to make the most of available space while maintaining functionality, movement flow, and practical cooking use. Even compact areas can be transformed into efficient outdoor cooking and gathering spaces.",
    ],
  },
  {
    uuid: "faq-kitchen-2",
    question: "Do you install built-in BBQ features and appliances?",
    answers: [
      "Absolutely. We build fully integrated outdoor kitchens that can include built-in grills, sinks, storage solutions, pizza ovens, and other cooking appliances based on the project design and requirements.",
    ],
  },
  {
    uuid: "faq-kitchen-3",
    question: "Are outdoor kitchens built to withstand weather conditions?",
    answers: [
      "Yes. We use durable materials and reliable construction methods designed to perform well in outdoor environments, including exposure to moisture, heat, and seasonal weather changes.",
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
    question: "How is the cost of an outdoor kitchen determined?",
    answers: [
      "Pricing depends on layout, material selection, size, and the features included in the design. We provide clear and detailed quotations so clients understand the scope and investment before the project begins.",
    ],
  },
];

// Tahapan proses spesifik untuk Outdoor Kitchen
const outdoorKitchenProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Assess The Space",
    text: "We review layout, needs, and available outdoor area before starting.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Plan The Setup",
    text: "Cooking needs, materials, and design are prepared for a functional layout.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Build The Kitchen",
    text: "We construct BBQ and cooking areas with durable materials and methods.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Finalize The Details",
    text: "Finishing work ensures usability, clean look, and long-term performance.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Outdoor Kitchen
import overviewImg1 from "../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../public/images/overview/overview4.jpg";

const outdoorKitchenOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Built-In",
    titleHighlight: "BBQ Grills",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Custom Stone",
    titleHighlight: "Counters",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Outdoor Kitchen
const outdoorKitchenFeedbacks = [
  {
    id: "1",
    feedbackText: "They built us a massive L-shaped outdoor kitchen with a built-in grill and mini-fridge. It's completely changed how we entertain guests in the summer!",
    image: "/images/client/user1.png",
    name: "Mark T.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "The stonework on the bar island is impeccable. The team was fantastic to work with from the initial 3D design all the way to the final cleanup.",
    image: "/images/client/user2.png",
    name: "Sophia W.",
    designation: "Homeowner",
  }
];

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
        title="Outdoor Kitchen BBQ Contractor"
        subtitle="OUTDOOR KITCHENS"
        description1="A professionally designed outdoor kitchen creates a space where cooking, dining, and gathering happen in one connected outdoor environment. Our outdoor kitchen contractor services create practical and timeless cooking spaces that complement your property."
        paragraphs={[
          "Outdoor cooking spaces experience continuous exposure to heat, moisture, changing temperatures, and everyday activity. Through reliable installation methods and carefully selected materials, we construct outdoor kitchens designed to remain dependable, visually consistent, and suitable for regular use throughout the seasons.",
          "Thoughtful outdoor layouts can also improve how a space feels and functions over time. From built-in grills and preparation counters to bar seating and entertainment areas, every feature is planned to create a welcoming outdoor setting that feels organized, comfortable, and naturally integrated with the surrounding space.",
        ]}
        benefits={[
          "Personalized Layouts",
          "BBQ & Entertainment Integration",
          "Reliable Outdoor Construction",
          "Everyday-use Spaces",
        ]}
        extraParagraphs={[
          "Planning is an important part of every outdoor kitchen project. Layout, cooking requirements, available space, and material selection are all reviewed carefully to ensure the final design supports both usability and long-term performance while fitting naturally with the overall outdoor environment and how the space will be used day to day.",
          "From simple barbecue stations to more complete outdoor cooking setups, each project we handle is approached with a focus on practical construction and clean execution. Every detail is considered to ensure the space works well in real use, not just in design, while also maintaining a balanced and functional layout that suits the property.",
          "Long-term performance comes down to the combination of proper construction methods, quality materials, and careful installation. With this approach, we create outdoor kitchens that remain functional, visually consistent, and reliable over time, even with regular outdoor use and changing conditions.",
        ]}
      />

      <Process
        title="Our Outdoor Kitchen Process"
        steps={outdoorKitchenProcessSteps}
      />

      <Overview fullWidth items={outdoorKitchenOverviewItems} />

      <ClientsFeedbackSlider
        titleNormal="What Backyard Chefs"
        titleHighlight="Say About Our Work"
        feedbacks={outdoorKitchenFeedbacks}
      />

      <AboutUsContent
        subtitle="WHY CHOOSE US"
        title="Outdoor Kitchens Designed for Living and Gathering"
        description="Outdoor kitchen spaces work best when planned around how people cook, gather, and spend time outside. Our approach focuses on creating functional layouts that support everyday use and social outdoor experiences."
        listItems={[
          "Practical cooking layouts",
          "Integrated outdoor features",
          "Comfortable gathering spaces",
          "Functional outdoor experience",
        ]}
        buttonText="Talk to Our Team"
        buttonLink="/contact-us"
      />

      <FaqsContent
        faqs={outdoorKitchenFaqs}
        title="Frequently Asked Questions"
        subtitle="KITCHEN FAQ"
      />

      <div className="ptb-100">
        <ContactFormStyleTwo
          title="Build Your Perfect Outdoor Kitchen"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
