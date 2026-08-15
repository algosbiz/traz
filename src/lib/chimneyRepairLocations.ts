export interface ChimneyRepairLocationImages {
  main: string;
  process: [string, string, string, string];
  whyChoose: string;
  contact: string;
}

export interface ChimneyRepairLocation {
  slug: string;
  name: string;
  metadataTitle: string;
  metadataDescription: string;
  description: string;
  paragraphs: string[];
  benefits: string[];
  extraParagraphs: string[];
  whyChooseTitle: string;
  whyChooseDescription: string;
  whyChooseItems: string[];
  climateContext: string;
  images: ChimneyRepairLocationImages;
}

export const chimneyRepairLocations: ChimneyRepairLocation[] = [
  {
    slug: "bragg-creek",
    name: "Bragg Creek",
    metadataTitle: "Chimney Repair Bragg Creek | DMG Masonry",
    metadataDescription:
      "Professional chimney repair in Bragg Creek for cracked mortar, damaged brick, leaks, cap/crown repairs, and weathered masonry. Request an inspection.",
    description:
      "DMG Masonry provides chimney repair in Bragg Creek for homes affected by cracked mortar, loose brickwork, water entry, and a deteriorated cap/crown. Our repairs are planned to restore stability while preserving the character of the existing masonry.",
    paragraphs: [
      "Bragg Creek chimneys face regular exposure to foothills moisture, snow, wind, and repeated freeze-thaw cycles. Small openings in mortar joints or at the chimney cap/crown can allow water into the assembly, where seasonal temperature changes may accelerate cracking, spalling, and movement.",
      "We inspect the visible masonry, mortar joints, cap/crown, flashing transitions, and surrounding areas before recommending work. This helps us address the source of the damage and select a repair approach suited to the chimney rather than covering only the most obvious symptoms.",
    ],
    benefits: [
      "Brick & Mortar Restoration",
      "Cap/Crown Repairs",
      "Leak Source Assessment",
      "Freeze-Thaw Protection",
      "Spalling Brick Replacement",
    ],
    extraParagraphs: [
      "Depending on the chimney's condition, repairs may include tuckpointing worn joints, replacing damaged units, rebuilding unstable sections, repairing the cap/crown, or improving vulnerable water-shedding details. Materials are selected for compatibility, durability, and a clean visual match with the existing work.",
      "Timely repairs can help prevent moisture from reaching adjacent walls, ceilings, and fireplace components. They can also reduce the chance that a localized masonry problem develops into a more extensive rebuild after another winter season.",
      "From established cabins to full-time residences, we approach each Bragg Creek chimney as an individual masonry system. The finished repair is intended to look cohesive, manage local weather exposure, and provide dependable long-term performance.",
    ],
    whyChooseTitle: "Chimney Repairs Built for Bragg Creek Conditions",
    whyChooseDescription:
      "Foothills weather can expose weak mortar and masonry quickly. We combine a careful inspection with practical repair methods to strengthen vulnerable areas and improve resistance to future moisture damage.",
    whyChooseItems: [
      "Detailed masonry condition assessment",
      "Repairs for the cap/crown, brick, and mortar",
      "Materials selected for the existing chimney",
      "Clean workmanship and durable finishing",
    ],
    climateContext:
      "Bragg Creek's foothills setting brings moisture, snow, wind, and frequent freeze-thaw conditions that can expose weaknesses in chimney masonry.",
    images: {
      main: "/images/services/braggcreek/braggcreek-1.webp",
      process: [
        "/images/services/braggcreek/braggcreek-2.webp",
        "/images/services/braggcreek/braggcreek-3.webp",
        "/images/services/braggcreek/braggcreek-4.webp",
        "/images/services/braggcreek/braggcreek-5.webp",
      ],
      whyChoose: "/images/services/braggcreek/braggcreek-6.webp",
      contact: "/images/services/braggcreek/braggcreek-7.webp",
    },
  },
  {
    slug: "longview",
    name: "Longview",
    metadataTitle: "Chimney Repair Longview AB | DMG Masonry",
    metadataDescription:
      "Reliable chimney repair in Longview, Alberta, including spalling brick replacement, tuckpointing, cap/crown work, leak assessment, and masonry restoration.",
    description:
      "Our chimney repair services in Longview help homeowners correct weathered mortar, cracked brick, unstable masonry, and water-related deterioration. DMG Masonry focuses on repairs that support safe function, lasting strength, and a finish that suits the property.",
    paragraphs: [
      "In Longview's open foothills environment, chimneys can be exposed to strong winds, blowing snow, rain, and rapid seasonal temperature changes. Because the chimney rises above the roofline, even a small defect in the cap/crown or a mortar joint can receive repeated weather exposure and worsen over time.",
      "A proper assessment looks beyond a single crack. We review the chimney from its accessible base to the top, checking joint depth, brick condition, cap/crown drainage, and signs that water has moved into nearby building materials.",
    ],
    benefits: [
      "Tuckpointing & Joint Repair",
      "Spalling Brick Replacement",
      "Chimney Cap/Crown Restoration",
      "Wind & Moisture Protection",
    ],
    extraParagraphs: [
      "Repair recommendations are based on the extent and cause of deterioration. Sound sections may only require targeted repointing, while loose or fractured masonry may need selective rebuilding to restore proper bonding and structural support.",
      "We pay close attention to how water is directed away from the chimney. Restoring mortar profiles, repairing the cap/crown, and correcting deteriorated masonry surfaces can help limit absorption and reduce future freeze-thaw stress.",
      "Our goal is to give Longview property owners a clear repair plan and workmanship that holds up without looking like an obvious patch. Each completed area is finished for visual consistency and reliable service through changing Alberta seasons.",
    ],
    whyChooseTitle: "Reliable Masonry Work for Longview Chimneys",
    whyChooseDescription:
      "Exposed chimney masonry needs more than a surface patch. Our work addresses damaged materials and water-entry points so the repaired structure can perform reliably in Longview's foothills climate.",
    whyChooseItems: [
      "Repairs based on the actual source of damage",
      "Careful colour and material matching",
      "Weather-conscious masonry detailing",
      "Straightforward inspection and recommendations",
    ],
    climateContext:
      "Longview's open foothills location can expose chimneys to wind, blowing precipitation, and sharp temperature changes throughout the year.",
    images: {
      main: "/images/services/longview/longview-1.webp",
      process: [
        "/images/services/longview/longview-2.webp",
        "/images/services/longview/longview-3.webp",
        "/images/services/longview/longview-4.webp",
        "/images/services/longview/longview-5.webp",
      ],
      whyChoose: "/images/services/longview/longview-6.webp",
      contact: "/images/services/longview/longview-7.webp",
    },
  },
  {
    slug: "kananaskis",
    name: "Kananaskis",
    metadataTitle: "Chimney Repair Kananaskis | DMG Masonry",
    metadataDescription:
      "Chimney repair in Kananaskis for mountain homes, cabins, and properties. We repair cracked masonry, mortar joints, the cap/crown, and water damage.",
    description:
      "DMG Masonry provides chimney repair in Kananaskis for cabins, residences, and mountain properties where masonry must withstand demanding seasonal exposure. We restore damaged brick, stone, mortar, and the cap/crown with an emphasis on stability and moisture protection.",
    paragraphs: [
      "Mountain weather places sustained stress on exposed chimney assemblies. Snow accumulation, wind, moisture, and quick temperature changes can reveal weaknesses at mortar joints, the cap/crown, and transitions between masonry and the roof.",
      "Before work begins, we assess accessible chimney components and identify whether deterioration is localized or part of a broader structural issue. We also consider site access and project conditions so the recommended scope is practical for the property and the repair can be completed efficiently.",
    ],
    benefits: [
      "Mountain-Climate Masonry Repair",
      "Stone & Brick Restoration",
      "Cap/Crown & Joint Repairs",
      "Moisture-Damage Prevention",
      "Spalling Brick Replacement",
    ],
    extraParagraphs: [
      "Common repair scopes include renewing eroded mortar, replacing fractured masonry, rebuilding loose upper courses, and restoring a cap/crown that no longer sheds water correctly. Where possible, replacement materials are chosen to complement the texture and tone of the existing chimney.",
      "Water management is especially important for remote and seasonally occupied properties, where a small leak may go unnoticed between visits. Correcting vulnerable areas early helps protect the chimney and nearby interior finishes from progressive moisture damage.",
      "Our Kananaskis chimney repairs balance durable construction with the natural appearance expected of mountain properties. The result is a cleaner, stronger assembly designed to handle continued exposure while retaining the building's original character.",
    ],
    whyChooseTitle: "Chimney Restoration for Mountain Properties",
    whyChooseDescription:
      "Kananaskis properties need chimney repairs planned around mountain exposure and the existing building materials. We deliver focused masonry work that improves strength, water shedding, and long-term resilience.",
    whyChooseItems: [
      "Experience with brick and stone assemblies",
      "Repair planning for challenging exposure",
      "Compatible materials and cohesive finishes",
      "Focused protection at vulnerable chimney areas",
    ],
    climateContext:
      "Kananaskis mountain properties experience snow, moisture, wind, and fast temperature shifts that can be particularly demanding on exposed chimneys.",
    images: {
      main: "/images/services/kananaskis/kananaskis-1.webp",
      process: [
        "/images/services/kananaskis/kananaskis-2.webp",
        "/images/services/kananaskis/kananaskis-3.webp",
        "/images/services/kananaskis/kananaskis-4.webp",
        "/images/services/kananaskis/kananaskis-5.webp",
      ],
      // 6 and 7 are swapped here compared to the other locations: the
      // portrait shot is -6 and the near-square one is -7.
      whyChoose: "/images/services/kananaskis/kananaskis-7.webp",
      contact: "/images/services/kananaskis/kananaskis-6.webp",
    },
  },
  {
    slug: "sundre",
    name: "Sundre",
    metadataTitle: "Chimney Repair Sundre AB | DMG Masonry",
    metadataDescription:
      "Professional chimney repair in Sundre, Alberta. DMG Masonry repairs brick, mortar, the chimney cap/crown, leaks, and weather-damaged masonry.",
    description:
      "DMG Masonry offers chimney repair in Sundre for residential and rural properties with cracked joints, damaged brick or stone, a leaking cap/crown, and aging masonry. Our work is designed to restore dependable performance without compromising the chimney's appearance.",
    paragraphs: [
      "Sundre's proximity to the foothills means chimney masonry can see snow, rain, wind, and repeated freezing and thawing. Mortar often shows wear first, but damage can also develop at the cap/crown or within brick and stone that has absorbed moisture.",
      "We begin with a condition-based inspection to locate deteriorated materials and likely water-entry points. By separating cosmetic wear from structural movement, we can recommend targeted work where appropriate and more extensive restoration only where it is needed.",
    ],
    benefits: [
      "Mortar Joint Repointing",
      "Brick & Stone Repair",
      "Cap/Crown Restoration",
      "Residential & Rural Service",
      "Spalling Brick Replacement",
    ],
    extraParagraphs: [
      "Repairs can range from renewing isolated mortar joints to replacing damaged masonry or rebuilding an unstable chimney top. We remove failed materials carefully, prepare sound bonding surfaces, and finish new work to integrate with the existing assembly.",
      "A sound cap/crown is an important part of the chimney's defence against water. When it cracks or deteriorates, moisture may travel into the masonry below and contribute to staining, efflorescence, loose joints, or interior leaks.",
      "For Sundre homeowners, early masonry maintenance is often the most economical approach. A well-timed repair can preserve more of the original chimney, improve weather resistance, and postpone the need for major reconstruction.",
    ],
    whyChooseTitle: "Practical Chimney Repair in the Sundre Area",
    whyChooseDescription:
      "We tailor each repair to the chimney's materials, condition, and level of exposure. That means clear recommendations, careful preparation, and a durable finish for Sundre homes and rural properties.",
    whyChooseItems: [
      "Targeted repairs that preserve sound masonry",
      "Service for brick and stone chimneys",
      "Attention to the cap/crown and moisture entry",
      "Durable, visually consistent finishing",
    ],
    climateContext:
      "Sundre's foothills weather brings seasonal moisture, snow, and freeze-thaw cycling that can gradually weaken mortar and masonry.",
    images: {
      main: "/images/services/sundre/sundre-1.webp",
      process: [
        "/images/services/sundre/sundre-2.webp",
        "/images/services/sundre/sundre-3.webp",
        "/images/services/sundre/sundre-4.webp",
        "/images/services/sundre/sundre-5.webp",
      ],
      whyChoose: "/images/services/sundre/sundre-6.webp",
      contact: "/images/services/sundre/sundre-7.webp",
    },
  },
  {
    slug: "three-hills",
    name: "Three Hills",
    metadataTitle: "Chimney Repair Three Hills | DMG Masonry",
    metadataDescription:
      "Expert chimney repair in Three Hills, Alberta, for cracked brick, failing mortar, a damaged cap/crown, leaks, and unstable masonry. Book an assessment.",
    description:
      "Our chimney repair service in Three Hills addresses failing mortar, cracked or spalling brick, cap/crown damage, leaks, and loose masonry. DMG Masonry provides a detailed assessment followed by repairs suited to the age and construction of the chimney.",
    paragraphs: [
      "Prairie chimneys are highly exposed above the roofline. Wind-driven rain and snow can enter small cracks, while hot summers and cold winters create expansion and contraction that gradually wear down masonry joints and previously repaired areas.",
      "We check for open joints, movement, fractured units, staining, cap/crown defects, and other clues that help explain how the damage developed. Understanding that pattern allows us to rebuild support and weather protection instead of relying on short-term surface sealing.",
    ],
    benefits: [
      "Crack & Joint Restoration",
      "Spalling Brick Replacement",
      "Cap/Crown & Water-Shedding Repairs",
      "Structural Masonry Assessment",
    ],
    extraParagraphs: [
      "When mortar has lost depth or adhesion, tuckpointing restores the joint with properly prepared and placed material. Damaged brick can be removed individually where the surrounding masonry remains stable, helping preserve as much of the original chimney as possible.",
      "Upper chimney courses and the cap/crown often receive the greatest exposure. Repairing these areas can improve stability and limit water absorption before it leads to deeper deterioration or visible damage around the fireplace and ceiling.",
      "DMG Masonry gives Three Hills property owners a repair scope based on observed conditions. We focus on neat execution, compatible materials, and details that help the finished chimney stand up to open prairie weather.",
    ],
    whyChooseTitle: "Chimney Masonry Prepared for Prairie Exposure",
    whyChooseDescription:
      "Our Three Hills chimney repairs address the combined effects of wind, precipitation, and seasonal temperature swings with sound preparation and proven masonry techniques.",
    whyChooseItems: [
      "Thorough review of exposed chimney areas",
      "Selective repair or rebuilding as required",
      "Strong, properly finished mortar joints",
      "Work designed for long-term weather exposure",
    ],
    climateContext:
      "Three Hills properties can experience open prairie wind, blowing precipitation, and large seasonal temperature swings that stress exposed masonry.",
    images: {
      main: "/images/services/threehills/threehills-1.webp",
      process: [
        "/images/services/threehills/threehills-2.webp",
        "/images/services/threehills/threehills-3.webp",
        "/images/services/threehills/threehills-4.webp",
        "/images/services/threehills/threehills-5.webp",
      ],
      whyChoose: "/images/services/threehills/threehills-6.webp",
      contact: "/images/services/threehills/threehills-7.webp",
    },
  },
  {
    slug: "drumheller",
    name: "Drumheller",
    metadataTitle: "Chimney Repair Drumheller | DMG Masonry",
    metadataDescription:
      "Chimney repair in Drumheller for cracked mortar, loose or damaged brick, cap/crown deterioration, and leaks. Restore your chimney with DMG Masonry.",
    description:
      "DMG Masonry provides chimney repair in Drumheller for masonry affected by age, movement, moisture, and temperature extremes. We repair mortar joints, brickwork, the cap/crown, and unstable sections to restore a stronger, cleaner chimney assembly.",
    paragraphs: [
      "Drumheller's dry landscape does not eliminate chimney wear. Strong sun, wind, sudden weather changes, winter freezing, and occasional wind-driven moisture can all affect exposed mortar and masonry, particularly where small cracks already exist.",
      "Our assessment considers both visible damage and the chimney details that control water. We examine mortar condition, brick faces, cap/crown slope and cracking, and accessible transitions to determine where deterioration begins and how far it extends.",
    ],
    benefits: [
      "Weathered Mortar Repair",
      "Spalling Brick & Masonry Replacement",
      "Cap/Crown Crack Restoration",
      "Leak & Damage Assessment",
    ],
    extraParagraphs: [
      "Surface cracks and eroded joints should be evaluated before loose materials create a safety concern. Tuckpointing, selective unit replacement, and localized rebuilding can restore sound sections while retaining stable portions of the original structure.",
      "Cap/crown repairs are completed with attention to drainage and edge protection, helping move water away from the masonry below. Proper detailing here supports every repair further down the chimney and helps slow the return of moisture-related damage.",
      "For Drumheller homes, our aim is a repair that fits the existing architecture and performs through the area's varied conditions. We provide a clear scope, use durable masonry methods, and finish the work with close attention to alignment and appearance.",
    ],
    whyChooseTitle: "Lasting Chimney Repair for Drumheller Homes",
    whyChooseDescription:
      "From weathered joints to unstable upper courses, we repair the areas affecting chimney strength and water resistance while maintaining a finish that belongs on the home.",
    whyChooseItems: [
      "Diagnosis before repair recommendations",
      "Careful preservation of sound masonry",
      "Durable cap/crown and joint detailing",
      "Clean integration with existing materials",
    ],
    climateContext:
      "Drumheller chimneys are exposed to sun, wind, winter freezing, and rapid weather changes that can widen existing cracks and weaken aged joints.",
    images: {
      main: "/images/services/drumheller/drumheller-1.webp",
      process: [
        "/images/services/drumheller/drumheller-2.webp",
        "/images/services/drumheller/drumheller-3.webp",
        "/images/services/drumheller/drumheller-4.webp",
        "/images/services/drumheller/drumheller-5.webp",
      ],
      whyChoose: "/images/services/drumheller/drumheller-6.webp",
      contact: "/images/services/drumheller/drumheller-7.webp",
    },
  },
  {
    slug: "claresholm",
    name: "Claresholm",
    metadataTitle: "Chimney Repair Claresholm | DMG Masonry",
    metadataDescription:
      "Dependable chimney repair in Claresholm, Alberta. We restore cracked mortar, damaged brick, the cap/crown, leaks, and weathered masonry.",
    description:
      "Our Claresholm chimney repair service restores deteriorated mortar, damaged brick or stone, a cracked cap/crown, and loose masonry. DMG Masonry plans each repair around the existing structure and the weather exposure common to southern Alberta.",
    paragraphs: [
      "Wind and quick temperature changes can be hard on chimneys in the Claresholm area. Open joints and hairline cap/crown cracks may admit wind-driven precipitation, and repeated freezing and thawing can gradually turn minor deterioration into loose or fractured masonry.",
      "We inspect accessible chimney surfaces and components to identify the extent of the problem. The findings guide whether the chimney needs focused joint repairs, replacement of individual units, cap/crown work, or partial rebuilding of an unstable section.",
    ],
    benefits: [
      "Mortar & Masonry Restoration",
      "Cap/Crown Repair",
      "Spalling Brick Replacement",
      "Chimney Stability Assessment",
    ],
    extraParagraphs: [
      "Good preparation is essential to a durable repair. Failed mortar and masonry are removed back to sound material, bonding areas are cleaned, and replacement work is installed with attention to joint profile, alignment, and compatibility.",
      "Restoring the top of the chimney is often just as important as repairing the walls below it. A sound cap/crown helps limit direct water entry and reduce the exposure that can shorten the life of new mortar and brickwork.",
      "We help Claresholm homeowners protect their chimneys with repairs that are practical, tidy, and built for continued seasonal exposure. The goal is lasting performance and a cohesive appearance, not a temporary patch that will need repeated attention.",
    ],
    whyChooseTitle: "Chimney Repair Suited to Southern Alberta Weather",
    whyChooseDescription:
      "Our repair process accounts for Claresholm's wind and changing temperatures, focusing on stable masonry, sound water-shedding details, and a finish compatible with the original chimney.",
    whyChooseItems: [
      "Condition-based repair planning",
      "Compatible brick, stone, and mortar work",
      "Attention to wind-driven moisture entry",
      "Professional finishing and site care",
    ],
    climateContext:
      "Claresholm's southern Alberta setting can bring strong wind and fast temperature shifts that test chimney joints, the cap/crown, and exposed masonry.",
    images: {
      main: "/images/services/claresholm/claresholm-1.webp",
      process: [
        "/images/services/claresholm/claresholm-2.webp",
        "/images/services/claresholm/claresholm-3.webp",
        "/images/services/claresholm/claresholm-4.webp",
        "/images/services/claresholm/claresholm-5.webp",
      ],
      whyChoose: "/images/services/claresholm/claresholm-6.webp",
      contact: "/images/services/claresholm/claresholm-7.webp",
    },
  },
];

export function getChimneyRepairLocation(slug: string) {
  return chimneyRepairLocations.find((location) => location.slug === slug);
}
