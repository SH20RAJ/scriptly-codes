export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ada Lovelace",
  description: "Ada Lovelace's web development portfolio.",
  nav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  projects: [
    {
      name: "SockMingle",
      shortDescription: "Lost-sock matching service",
      longDescription: `Help your lonely socks find their soulmate. Just upload a picture and our fine-tuned LLM will find the perfect match from other lonely socks around the world.`,
      liveLink: "https://example.com/sockmingle",
      technologies: [
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Supabase",
        "Node.js",
      ],
    },
    {
      name: "Fruitify",
      shortDescription: "Personalized fruit baskets",
      longDescription:
        "Get algorithmically curated fruit baskets based on your current mood. Feeling blue? How about some blueberries? Quick-sorting available in the Pro tier.",
      liveLink: "https://example.com/fruitify",
      sourceLink: "https://github.com",
      technologies: ["SvelteKit", "Node.js", "MySQL", "Docker", "Kubernetes"],
    },
    {
      name: "Bapple",
      shortDescription: "Software services and consumer electronics",
      longDescription:
        "Formerly known as Bantaloupe, this project has taken the world by storm. There's Big and then there's Bapple.",
      liveLink: "https://example.com/bapple",
      sourceLink: "https://github.com",
      technologies: ["Objective-C", "JavaScript", "Swift", "C++", "Spark"],
    },
    {
      name: "Betflix",
      shortDescription: "On-demand streaming platform",
      longDescription:
        "The backend architecture is quite complex, but the payoff is that you can watch your favorite TV shows and movies whenever you want.",
      liveLink: "https://example.com/betflix",
      technologies: ["Python", "AWS S3", "Kotlin", "React", "Kafka"],
    },
    {
      name: "Boogle",
      shortDescription: "Search engine",
      longDescription:
        "Never thought a project of my own would do so well in a million years! The basic idea is that you can look up anything you want on the internet.",
      liveLink: "https://example.com/boogle",
      sourceLink: "https://github.com",
      technologies: ["Angular", "Python", "Java", "TensorFlow"],
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/ada-lovelace-bb1012131",
    github: "https://github.com/adalovelace15",
    email: "mailto:ada@example.com",
  },
  files: {
    resume: "/files/Ada_Lovelace_Resume.pdf",
  },
  images: {
    home: {
      src: "https://images.unsplash.com/photo-1592927552561-711ebfce7d5d?w=600&dpr=2&q=80",
      alt: "A photo of a forest fern by Drew Beamer.",
    },
    about: [
      {
        src: "https://images.unsplash.com/photo-1560869500-08342ddca2e0?w=1070&dpr=2&q=80",
        caption: "This is some caption text for a lorikeet.",
        alt: "A photo of a lorikeet by Drew Beamer.",
      },
      {
        src: "https://images.unsplash.com/photo-1589735474641-33c449cde9ec?w=1070&dpr=2&q=80",
        caption: "Here is some more caption text for a grand staircase.",
        alt: "A photo of a grand staircase by Drew Beamer.",
      },
    ],
  },
}
