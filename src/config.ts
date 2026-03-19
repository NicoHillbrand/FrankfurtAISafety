/**
 * Site Configuration
 * ==================
 * Edit this file to customize the template for your group.
 */

export const siteConfig = {
  // === Group Identity ===
  name: "Frankfurt AI Safety",
  shortName: "Frankfurt AI Safety",
  city: "Frankfurt",

  cityImage: "/city.jpg", // City skyline photo — replace with your own

  tagline: "We are committed to reducing catastrophic risks from advanced AI systems by promoting responsible AI development.",

  description:
    "Frankfurt AI Safety is a local group dedicated to reducing the risks posed by advanced AI systems. We empower people in the Frankfurt region to engage with AI safety and develop the skills to address this pressing problem.",

  // === Links ===
  links: {
    whatsapp: "https://chat.whatsapp.com/GhJC4HfZwkiIAvA85U6w7V",
    telegram: "",
    email: "info@frankfurtaisafety.org",
    instagram: "",
    calendarUrl: "https://calendar.google.com/calendar/embed?src=d730ada09a8e1b31dd37d6fff91669151abb3e9fd0d247732162b95ed665d722%40group.calendar.google.com&ctz=Europe%2FBerlin",
  },

  // === Affiliation ===
  saige: {
    affiliated: true,
    url: "https://safeaigermany.org",
  },

  // === Resources ===
  resources: {
    "Learn": [
      {
        title: "AISafety.info",
        url: "https://aisafety.info/",
        description: "Best starting point, articles and videos explaining AI risks.",
      },
      {
        title: "AGI Safety Fundamentals",
        url: "https://aisafetyfundamentals.com/",
        description: "BlueDot's 8-week intro course on technical AI safety.",
      },
      {
        title: "AISafety.com",
        url: "https://www.aisafety.com/",
        description: "Directory of resources, jobs, funding, and communities.",
      },
      {
        title: "Alignment Forum",
        url: "https://www.alignmentforum.org/",
        description: "Research discussion hub for technical alignment work.",
      },
    ],
    "Communities": [
      {
        title: "SAIGE - Safe AI Germany",
        url: "https://safeaigermany.org",
        description: "National AI safety initiative in Germany.",
      },
      {
        title: "AI Alignment Slack",
        url: "https://www.aisafety.com/communities",
        description: "Largest online community, thousands of members.",
      },
      {
        title: "LessWrong",
        url: "https://www.lesswrong.com/",
        description: "Long-form AI safety discussion and research.",
      },
    ],
    "Careers": [
      {
        title: "80,000 Hours - AI Safety",
        url: "https://80000hours.org/problem-profiles/artificial-intelligence/",
        description: "Career guide and problem profile for AI safety.",
      },
      {
        title: "AI Safety Jobs",
        url: "https://www.aisafety.com/",
        description: "Open positions in research, policy, and operations.",
      },
      {
        title: "AI Safety Camp",
        url: "https://www.aisafety.camp/",
        description: "Research programs to get hands-on experience.",
      },
    ],
  },
} as const;
