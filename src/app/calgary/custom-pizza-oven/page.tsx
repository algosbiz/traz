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

// Data FAQ khusus untuk halaman Pizza Oven
const pizzaOvenFaqs = [
  {
    uuid: "faq-oven-1",
    question: "How long does it take for a wood-fired oven to heat up?",
    answers: [
      "Depending on the size of the oven and thickness of the dome, it typically takes 45 to 90 minutes of wood burning to reach the ideal baking temperature of 750°F to 900°F.",
      "Once the thermal mass of the firebrick core is fully charged, the heat is stored, allowing you to bake pizza in 90 seconds, followed by bread, and slow-cook meals for up to 24 hours as it slowly cools."
    ]
  },
  {
    uuid: "faq-oven-2",
    question: "Can these ovens be used during Calgary winters?",
    answers: [
      "Absolutely! Because we construct our ovens with exceptional thick-grade ceramic blanket insulation and high-quality masonry, the internal heat is perfectly protected from the freezing outdoor air, enabling year-round wood-fired cooking."
    ]
  }
];

// Tahapan proses spesifik untuk Pizza Oven
const pizzaOvenProcessSteps = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Base & Support",
    text: "We construct a heavy-duty concrete foundation and reinforced masonry base to support the oven's massive weight.",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Firebrick Hearth",
    text: "We lay high-density firebricks without mortar on a sand-and-insulation bed for a perfectly smooth baking floor.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Insulated Dome",
    text: "We build the brick dome, wrap it in high-temperature ceramic fiber insulation, and add a secure exhaust flue.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Outer Facade",
    text: "We finish the exterior cladding with premium natural stone veneer and elegant timber/granite landing prep spaces.",
    aosDelay: "400",
  },
];

// Overview spesifik untuk Pizza Oven
import overviewImg1 from "../../../../public/images/overview/overview3.jpg";
import overviewImg2 from "../../../../public/images/overview/overview4.jpg";

const pizzaOvenOverviewItems = [
  {
    image: overviewImg1,
    titleNormal: "Neapolitan Dome",
    titleHighlight: "Pizza Ovens",
    aosDelay: "100"
  },
  {
    image: overviewImg2,
    titleNormal: "Barrel Vaulted",
    titleHighlight: "Wood Ovens",
    aosDelay: "200"
  }
];

// Testimonial klien spesifik untuk Pizza Oven
const pizzaOvenFeedbacks = [
  {
    id: "1",
    feedbackText: "Our custom pizza oven is incredible. It heats up fast, retains heat perfectly, and looks gorgeous in our patio. Authentic Italian pizza at home!",
    image: "/images/client/user1.png",
    name: "Tony S.",
    designation: "Calgary Homeowner",
  },
  {
    id: "2",
    feedbackText: "The craftsmanship of the stone dome is true artisan work. Best investment we made for our outdoor kitchen.",
    image: "/images/client/user2.png",
    name: "Lisa K.",
    designation: "Chef & Homeowner",
  }
];

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle title="Custom Pizza Oven" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent 
        title="Handcrafted Brick & Stone Wood-Fired Pizza Ovens" 
        subtitle="PIZZA OVENS"
        description1="Experience authentic wood-fired culinary perfection in your own backyard with a custom-engineered masonry pizza oven built by Calgary's top masons."
        paragraphs={[
          "A custom wood-fired pizza oven is the ultimate luxury addition for any backyard chef. We build traditional dome and barrel-vault ovens using thick imported firebricks and heavy thermal insulation. This ensures the oven retains high baking temperatures (over 800°F) for hours.",
          "Beyond perfect Neapolitan pizzas, these versatile masonry ovens are exceptional for baking artisan breads, slow-roasting meats, and smoking vegetables. We design and encase the oven in stunning natural stone or brick veneer to match your outdoor kitchen."
        ]}
        benefits={[
          "Traditional Dome & Barrel Vaults",
          "High-Density Firebrick Core",
          "Superior Ceramic Fiber Insulation",
          "Natural Stone or Brick Enclosures",
          "Granite Prep Counters",
          "Excellent Heat Retention"
        ]}
        extraParagraphs={[
          "Proper insulation is the secret to a great pizza oven. We wrap the inner dome in multi-layered ceramic insulation blankets so the exterior remains cool and safe to touch even during maximum heat cycles.",
          "Bring the warmth of wood-fired cooking to your outdoor patio. Connect with our design experts today to craft your custom masonry pizza oven."
        ]}
      />

      <Process 
        title="Our Pizza Oven Building Process"
        steps={pizzaOvenProcessSteps}
      />
      
      <Overview 
        fullWidth 
        items={pizzaOvenOverviewItems} 
      />
      
      <ClientsFeedbackSlider 
        titleNormal="What Outdoor Chefs" 
        titleHighlight="Say About Our Ovens" 
        feedbacks={pizzaOvenFeedbacks} 
      />
      
      <AboutUsContent 
        subtitle="WHY CHOOSE US"
        title="Calgary's Custom Masonry Oven Artisans"
        description="Building a proper wood-fired oven requires specialized thermodynamics knowledge and expert masonry skills. We bring the authentic Italian oven-building tradition right to your backyard."
        listItems={[
          "Expert Firebrick Handling & Thermodynamics",
          "Premium Thermal Insulations",
          "Gorgeous Custom Stone Finishes",
          "Seamless Outdoor Kitchen Integration"
        ]}
        buttonText="Get a Free Estimate"
        buttonLink="/contact-us"
      />
      
      <FaqsContent 
        faqs={pizzaOvenFaqs} 
        title="Wood-Fired Pizza Oven FAQs" 
        subtitle="PIZZA OVEN FAQ" 
      />
      
      <div className="ptb-100">
        <ContactFormStyleTwo 
          title="Ready to Build Your Outdoor Pizza Oven?"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
