/**
 * Centralized personal and portfolio data for Rahul Nandan Reddy.
 * All text, credentials, metrics, and links are defined here.
 * Any placeholder requiring user updates is formatted as "[ADD: ...]".
 */

export const siteData = {
  personal: {
    name: "Rahul Nandan Reddy",
    eyebrow: "B.Tech CSE · GRIET · Class of 2029",
    roleLine: "Software Developer in the making | Aspiring Agentic AI Developer & Forward Deployed Engineer",
    tagline: "I solve algorithmic problems, design clean object-oriented systems and ship interactive software. Just starting my journey into AI agents, learning in public.",
    typewriterRoles: [
      "Builder",
      "Problem Solver",
      "Future Agentic AI Developer"
    ],
    statusBadge: "Open to internships",
    location: "Hyderabad, India",
    languagesSpoken: ["English", "Hindi", "Telugu"],
    email: "rahulnandanreddy@example.com", // [ADD: real email or update here]
    emailPlaceholder: "[ADD: your.email@domain.com]",
    resumeUrl: "/resume.pdf",
    socialLinks: {
      github: "https://github.com/RahulNandanReddy", // [ADD: your actual GitHub profile if different]
      linkedin: "https://www.linkedin.com/in/rahul-nandan-reddy", // [ADD: your actual LinkedIn handle]
      leetcode: "https://leetcode.com/u/Rahul_879/",
      hackerrank: "https://www.hackerrank.com/profile/nrnr879"
    }
  },

  heroStats: [
    {
      id: "leetcode",
      label: "LeetCode Solved",
      value: "[ADD: N]",
      numericValue: 45, // default baseline for count-up animation
      displaySuffix: "+",
      subtext: "Problems solved"
    },
    {
      id: "hackerrank",
      label: "HackerRank Badges",
      value: "[ADD: N]",
      numericValue: 3, // default baseline for count-up animation
      displaySuffix: "★",
      subtext: "Problem solving badges"
    },
    {
      id: "cgpa",
      label: "Academic CGPA",
      value: "8.0",
      numericValue: 8.0,
      displaySuffix: "",
      subtext: "First Year B.Tech CSE"
    },
    {
      id: "projects",
      label: "Shipped Projects",
      value: "2",
      numericValue: 2,
      displaySuffix: "",
      subtext: "Interactive web applications"
    }
  ],

  about: {
    quickFacts: {
      degree: "B.Tech Computer Science & Engineering",
      institution: "GRIET (Gokaraju Rangaraju Institute of Engg & Tech)",
      batch: "2025 - 2029",
      cgpa: "8.0",
      primaryLanguages: ["Python", "Java", "C", "JavaScript"],
      leadership: "Campus Representative, Robotics Club",
      spokenLanguages: ["English", "Hindi", "Telugu"],
      location: "Hyderabad, Telangana, India"
    },
    careerObjective: "To grow into an Agentic AI Developer and Forward Deployed Engineer by securing an internship where I can contribute to real software, work close to users and learn how production systems are built.",
    technicalInterests: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Game and Physics Programming",
      "AI Agents & Tool Calling",
      "Robotics"
    ],
    narrative: [
      "I'm a Computer Science student at GRIET who likes solving problems and then building something with the solution. I practice DSA on LeetCode and HackerRank, I'm comfortable with object-oriented design, and I've turned what I've learned into playable projects: a Chrome-style dino runner and a physics simulation powered by Matter.js.",
      "My long-term goal is to become an agentic AI developer and a forward deployed engineer: the person who takes a messy real-world problem, builds an AI-driven solution, and works close enough to the user to make it work. I've just started this journey, building fundamentals first and AI projects next, and I'm documenting it as I go."
    ]
  },

  skills: {
    categories: [
      {
        title: "Programming Languages",
        items: [
          { name: "Python", level: "Intermediate", dots: 2 },
          { name: "Java", level: "Intermediate", dots: 2 },
          { name: "C", level: "Intermediate", dots: 2 },
          { name: "JavaScript", level: "Intermediate", dots: 2 }
        ]
      },
      {
        title: "Frameworks and Libraries",
        items: [
          { name: "p5.js", level: "Intermediate", dots: 2 },
          { name: "p5.play", level: "Intermediate", dots: 2 },
          { name: "Matter.js", level: "Intermediate", dots: 2 },
          { name: "HTML & CSS (Basic)", level: "Intermediate", dots: 2 },
          { name: "React", level: "Learning: React", dots: 1, isLearning: true }
        ]
      },
      {
        title: "Databases",
        items: [
          { name: "SQL", level: "Learning: SQL", dots: 1, isPlanned: true, note: "Planned roadmap item" }
        ]
      },
      {
        title: "Tools & Technologies",
        items: [
          { name: "Git", level: "Intermediate", dots: 2 },
          { name: "GitHub", level: "Intermediate", dots: 2 },
          { name: "VS Code", level: "Intermediate", dots: 2 }
        ]
      }
    ],
    coreStrengths: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Problem Solving",
      "Complexity Analysis",
      "Debugging"
    ]
  },

  projects: [
    {
      id: "dino-runner",
      title: "Chrome T-Rex Dino Game",
      status: "Shipped",
      hook: "A browser endless runner built from scratch, inspired by Chrome's offline dinosaur game.",
      techStack: ["JavaScript", "p5.js", "p5.play", "HTML", "CSS"],
      challenge: "Recreate the authentic tactile feel of an endless runner with responsive jump physics, dynamic obstacle spawning, and escalating difficulty curves without relying on ready-made game templates.",
      build: "Engineered player jumping mechanics with gravity and velocity curves, procedural generation of cactus obstacles and cloud layers, bounding-box collision detection, real-time score tracking, game-over state transitions, and instant one-key restart loops.",
      result: "A fully playable browser game with a complete, unbreakable game loop (start, play, collision detection, game over, and restart).",
      extensionDetail: "[ADD: deployment or player count]",
      githubUrl: "https://github.com/RahulNandanReddy/chrome-dino-runner", // [ADD: URL]
      liveUrl: "[ADD: URL]",
      isInteractive: true,
      hasDemo: true
    },
    {
      id: "matter-physics",
      title: "Bouncing Ball Physics Simulation",
      status: "Shipped",
      hook: "An interactive physics sandbox showing how objects move, collide and rebound.",
      techStack: ["JavaScript", "Matter.js", "p5.js"],
      challenge: "Make dynamic motion look physically believable and mathematically consistent instead of approximating movement through hand-crafted frame animations.",
      build: "Integrated the 2D Matter.js rigid-body physics engine to model realistic gravitational acceleration, surface friction, momentum transfer, and coefficient of restitution against variable ground surfaces, rendered on an interactive p5.js canvas with continuous engine updates.",
      result: "A robust interactive simulation demonstrating fundamental physics-engine concepts, kinetic collision impulses, and real-time rigid-body constraints.",
      extensionDetail: "[ADD: extension or tuning detail]",
      githubUrl: "https://github.com/RahulNandanReddy/physics-sandbox-matterjs", // [ADD: URL]
      liveUrl: "[ADD: URL]",
      isInteractive: true,
      hasDemo: true
    },
    {
      id: "ai-tool-agent",
      title: "Tool-Using AI Agent",
      status: "Planned",
      hook: "Next up: An agent that calls real APIs to complete multi-step tasks.",
      description: "An agent that calls real APIs to complete multi-step tasks.",
      techStack: ["Python", "LLM APIs", "JSON Schema", "REST Tools"],
      challenge: "Designing structured reasoning loops that enable an LLM to accurately decompose high-level user prompts into structured function calls, execute them against live APIs, and self-correct on schema mismatch.",
      build: "Architecting a modular tool-calling harness in Python with structured system prompts, strict JSON validation for tool signatures, local state tracking, and fallback error recovery handlers.",
      result: "Planned first venture into autonomous agent architecture and forward deployed tooling.",
      githubUrl: null,
      liveUrl: null,
      isPlanned: true
    }
  ],

  problemSolving: {
    philosophy: "I practice DSA consistently because clean, efficient solutions are the foundation of reliable software. My approach: understand the constraints, build a brute-force baseline, then optimize.",
    platforms: [
      {
        platform: "LeetCode",
        handle: "Rahul_879",
        profileUrl: "https://leetcode.com/u/Rahul_879/",
        solved: "[ADD: N] solved",
        split: "[ADD: Easy/Medium/Hard split]",
        streak: "[ADD: streak]",
        focus: "Arrays, Strings, Hash Maps, Recursion & Two Pointers",
        status: "Active Daily Practice"
      },
      {
        platform: "HackerRank",
        handle: "nrnr879",
        profileUrl: "https://www.hackerrank.com/profile/nrnr879",
        badges: "[ADD: N]-star badges",
        certificates: "[ADD: certificates]",
        focus: "Problem Solving, C, Java, Python Fundamentals",
        status: "Certified Badges"
      }
    ]
  },

  experience: {
    // Note: Internships block is omitted until there is a real entry as requested.
    internships: [], 
    leadership: [
      {
        role: "Campus Representative",
        organization: "Robotics Club, GRIET",
        period: "2025 - Present",
        bullets: [
          "[ADD: 2 bullets of concrete actions - e.g. Organized introductory robotics hardware sessions for first-year peers]",
          "[ADD: e.g. Coordinated workshop logistics and demonstrated basic sensor-actuator interfacing]"
        ]
      }
    ],
    certifications: [
      {
        title: "JavaScript Completion Course",
        issuer: "WhiteHat Jr.",
        duration: "40-day intensive program",
        detail: "Comprehensive hands-on curriculum covering modern JavaScript, event-driven architecture, and game loops that led directly to building the Dino runner and Matter.js physics projects."
      }
    ],
    workshops: [
      {
        title: "[ADD or omit]",
        organizer: "[ADD: Organizer/College]",
        year: "2025",
        summary: "[ADD: Workshop details if applicable, or omit]"
      }
    ],
    achievements: [
      {
        title: "[ADD: e.g. LeetCode milestones, HackerRank badges, academic recognition]",
        description: "[ADD: Milestone details and accomplishments]"
      }
    ],
    roadmap: [
      { status: "Done", title: "JavaScript fundamentals", category: "Core" },
      { status: "Done", title: "Two browser interactive projects", category: "Projects" },
      { status: "Done", title: "DSA practice started on LeetCode & HackerRank", category: "Algorithms" },
      { status: "In progress", title: "[ADD: e.g. Python and DSA depth]", category: "Algorithms" },
      { status: "In progress", title: "Object-Oriented Design in Java", category: "Architecture" },
      { status: "Planned", title: "LLM APIs and tool calling", category: "AI Agents" },
      { status: "Planned", title: "First AI agent project with structured outputs", category: "AI Agents" },
      { status: "Planned", title: "RAG basics & vector search concepts", category: "AI Agents" },
      { status: "Planned", title: "SQL and REST APIs", category: "Backend" },
      { status: "Planned", title: "A real-user case study & forward deployed deployment", category: "Production" }
    ]
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
    affiliation: "Affiliated to JNTUH, Hyderabad",
    period: "2025 - 2029 (Expected)",
    cgpa: "8.0",
    milestones: [
      "[ADD: e.g. first-semester academic results, club role, technical projects]",
      "Active Member of GRIET Robotics Club & Campus Representative",
      "Completed foundational coursework in C Programming, Engineering Mathematics, and Computational Logic"
    ],
    earlierSchooling: "[ADD: optional - e.g. Intermediate / High School details]"
  },

  contact: {
    heading: "Have an internship, project or idea?",
    subheading: "I reply within 24 hours.",
    email: "rahulnandanreddy@example.com", // [ADD: replace with real contact email]
    formspreeEndpoint: "https://formspree.io/f/xyzkloqp", // [ADD: replace with your Formspree form ID]
    notice: "Available for Summer 2026 / Fall 2026 technical internships in Hyderabad or Remote."
  }
};
