export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  closingParagraphs?: string[];
  faqs?: { question: string; answer: string }[];
}

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  introduction: string[];
  sections: BlogSection[];
  keyPoints?: string[];
  takeaway?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "maintaining-a-100-year-old-chimney-in-calgary",
    image: "/images/blogs/century-old-chimney/hero.png",
    category: "Chimney Maintenance",
    title:
      "Maintaining a 100-Year-Old Chimney in Calgary: Common Problems, Inspections, Repairs, and What to Expect",
    description:
      "Many of Calgary's oldest homes are now more than 100 years old, and their chimneys often require specialized maintenance to remain safe and structurally sound.",
    introduction: [
      "Many of Calgary's oldest homes are now more than 100 years old, particularly in established neighborhoods such as Mission, Sunnyside, Bridgeland, Crescent Heights, and Mount Royal. While these historic properties offer unique character and craftsmanship, their chimneys often require specialized maintenance to remain safe and structurally sound.",
      "A chimney that has stood for more than a century has been exposed to decades of weather, temperature fluctuations, moisture, and normal wear. Regular inspections and timely repairs can help preserve the original masonry, reduce safety risks, and extend the life of the chimney without compromising the home's historic character.",
    ],
    sections: [
      {
        heading: "What Makes a 100-Year-Old Chimney Different?",
        paragraphs: [
          "A 100-year-old chimney differs from a modern chimney because it was built using older construction methods and materials that have experienced decades of environmental exposure. Many century homes in Calgary feature solid brick masonry, lime-based mortar, and original flue systems that require different maintenance approaches than newer chimneys.",
          "Although these chimneys were built to last, age naturally causes mortar joints to weaken, bricks to deteriorate, and protective components to wear over time. Regular maintenance helps preserve both the chimney's structural integrity and its historical value.",
        ],
      },
      {
        heading: "Why Do Older Chimneys Require More Maintenance?",
        paragraphs: [
          "As masonry ages, it becomes more vulnerable to weather-related damage, moisture penetration, and structural movement. Calgary's freeze-thaw cycles are particularly demanding because water can enter small cracks, freeze during winter, expand, and gradually damage bricks and mortar.",
          "Without routine maintenance, relatively minor issues may develop into larger structural repairs. Regular inspections allow homeowners to identify problems early before they become more extensive or costly.",
        ],
      },
      {
        heading: "What Problems Are Common in Century-Old Chimneys?",
        paragraphs: [
          "Older chimneys can develop a variety of issues after decades of use and exposure to the elements. Some problems occur gradually, while others may appear following severe weather or seasonal temperature changes.",
          "Common issues include:",
        ],
        list: [
          "Deteriorating mortar joints",
          "Cracked or spalling bricks",
          "Water penetration",
          "Damaged chimney crowns",
          "Rusted or deteriorated flashing",
          "Flue liner deterioration",
          "Leaning or unstable chimney structures",
          "Vegetation or moss growth",
          "Animal nesting or blockages",
        ],
        closingParagraphs: [
          "Many of these conditions can be repaired successfully when identified early through routine inspections.",
        ],
      },
      {
        heading: "How Does Calgary's Climate Affect Older Chimneys?",
        paragraphs: [
          "Calgary's climate presents unique challenges for aging masonry. Frequent freeze-thaw cycles, heavy snowfall, rainfall, and strong winds can all contribute to gradual chimney deterioration. When moisture enters masonry and repeatedly freezes, it places pressure on bricks and mortar.",
          "Over many seasons, this process can lead to cracking, surface deterioration, and weakened structural joints. Proper waterproofing, chimney cap maintenance, and regular inspections help reduce moisture-related damage.",
        ],
      },
      {
        heading: "How Often Should a 100-Year-Old Chimney Be Inspected?",
        paragraphs: [
          "Most professionals recommend having an older chimney inspected at least once a year, particularly if it is used regularly for fireplaces or wood-burning appliances.",
          "Annual inspections help identify early signs of deterioration, moisture intrusion, structural movement, and flue-related issues before they become major repairs. Even chimneys that are no longer used should be inspected periodically to ensure they remain structurally stable.",
        ],
      },
      {
        heading: "What Are the Warning Signs That a Chimney Needs Repair?",
        paragraphs: [
          "Many chimney problems begin with subtle warning signs that homeowners may notice around the exterior or inside the home.",
          "Common indicators include:",
        ],
        list: [
          "Loose or missing mortar",
          "Cracked bricks",
          "White staining (efflorescence)",
          "Water leaks near the fireplace",
          "Pieces of brick or mortar falling",
          "Rust on flashing or chimney components",
          "Smoke entering the home",
          "A leaning chimney",
          "Visible gaps between bricks",
        ],
        closingParagraphs: [
          "Prompt evaluation can often prevent additional structural damage.",
        ],
      },
      {
        heading: "Can a 100-Year-Old Chimney Be Restored?",
        paragraphs: [
          "Yes. Many century-old chimneys can be restored rather than replaced, provided the underlying structure remains stable.",
          "Restoration may include:",
        ],
        list: [
          "Tuckpointing deteriorated mortar",
          "Replacing damaged bricks",
          "Repairing or rebuilding the chimney crown",
          "Installing or replacing chimney liners",
          "Flashing repairs",
          "Waterproofing masonry",
          "Partial chimney rebuilding when necessary",
        ],
        closingParagraphs: [
          "The appropriate repair depends on the chimney's overall condition and the extent of deterioration.",
        ],
      },
      {
        heading: "How Can You Maintain a Historic Brick Chimney?",
        paragraphs: [
          "Proper maintenance helps preserve both the appearance and structural integrity of historic chimneys.",
          "Recommended maintenance includes:",
        ],
        list: [
          "Schedule annual chimney inspections",
          "Repair damaged mortar promptly",
          "Replace cracked bricks when necessary",
          "Maintain chimney caps and crowns",
          "Keep flashing watertight",
          "Remove vegetation growing on masonry",
          "Address water leaks immediately",
          "Use qualified masonry professionals for historic repairs",
        ],
        closingParagraphs: [
          "Preventive maintenance is generally more cost-effective than extensive restoration after significant deterioration has occurred.",
        ],
      },
      {
        heading: "Should You Repair or Replace an Old Chimney?",
        paragraphs: [
          "The decision depends on the chimney's structural condition. Many older chimneys only require localized repairs, while others with extensive structural damage may require partial or complete rebuilding.",
          "A professional inspection can determine whether restoration is appropriate or if replacement provides the safest long-term solution.",
        ],
      },
      {
        heading: "Who Benefits Most From Regular Chimney Maintenance?",
        paragraphs: ["Routine maintenance is especially valuable for:"],
        list: [
          "Owners of century homes",
          "Historic property owners",
          "Homebuyers purchasing older homes",
          "Wood-burning fireplace users",
          "Heritage property managers",
          "Anyone living in Calgary's older neighborhoods",
        ],
        closingParagraphs: [
          "Maintaining an older chimney helps preserve both safety and property value.",
        ],
      },
      {
        heading: "Choosing the Right Professional for a 100-Year-Old Chimney",
        paragraphs: [
          "Century-old chimneys require specialized care, so it's important to choose a masonry contractor with experience in historic brick restoration, chimney repairs, and Calgary's climate. Look for a company that performs thorough inspections, uses appropriate repair techniques, and prioritizes preserving the original masonry whenever possible.",
          "For homeowners in Calgary, DMG Masonry offers chimney repair, masonry restoration, and brick repair services for older and historic homes. Their experience with aging masonry makes them a reliable choice for maintaining and restoring century-old chimneys.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        paragraphs: [],
        faqs: [
          {
            question: "How do you maintain a 100-year-old chimney?",
            answer:
              "Maintain a 100-year-old chimney by scheduling annual inspections, repairing damaged mortar, replacing deteriorated bricks, maintaining the chimney crown and flashing, and addressing water damage as soon as it appears.",
          },
          {
            question: "Are 100-year-old brick chimneys safe?",
            answer:
              "Yes, many century-old brick chimneys remain safe when they are properly maintained and inspected regularly. Their condition depends more on ongoing maintenance than age alone.",
          },
          {
            question: "How often should an old chimney be inspected?",
            answer:
              "Most older chimneys should be professionally inspected once a year, especially if they are used regularly or exposed to Calgary's harsh weather conditions.",
          },
          {
            question: "Can an old chimney be repaired instead of replaced?",
            answer:
              "In many cases, yes. Repairs such as tuckpointing, brick replacement, flashing repairs, and crown restoration can extend the life of an older chimney without requiring full replacement.",
          },
          {
            question: "What causes mortar to deteriorate on old chimneys?",
            answer:
              "Moisture, freeze-thaw cycles, weather exposure, and natural aging gradually weaken mortar joints over time, making regular maintenance essential.",
          },
          {
            question: "Why is chimney maintenance important in Calgary?",
            answer:
              "Calgary experiences frequent freeze-thaw cycles that accelerate masonry deterioration. Regular maintenance helps protect older chimneys from moisture damage and structural problems.",
          },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Many of Calgary's century-old homes continue to rely on original masonry chimneys that have served homeowners for generations. Although these structures are remarkably durable, they require regular inspections and maintenance to remain safe and functional.",
          "By understanding the common problems affecting older chimneys and addressing repairs early, homeowners can preserve the character of their historic property while extending the life of one of its most distinctive architectural features. Whether your home is located in Mission, Sunnyside, Bridgeland, Crescent Heights, Mount Royal, or another historic Calgary neighborhood, proactive chimney maintenance is an important part of protecting your investment for years to come.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
