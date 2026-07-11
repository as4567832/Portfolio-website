export const blogs = [
  {
    id: 1,
    title: "The Future of Generative AI in Web Development",
    category: "AI",
    date: "July 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fit=crop&w=800&q=80",
    excerpt: "Exploring how LLMs and generative models are transforming the way we build user interfaces.",
    content: [
      "Generative AI is rapidly changing how developers approach building user interfaces, from AI-assisted code generation to fully dynamic, model-driven UIs.",
      "In this post I explore practical ways to integrate LLM-powered features into React applications without sacrificing performance or user experience.",
      "The key is treating AI as an augmentation layer: assistive suggestions, smart defaults, and natural language interfaces, rather than a replacement for well-designed components."
    ]
  },
  {
    id: 2,
    title: "Building Smart Homes with ESP32 and React",
    category: "IoT",
    date: "June 25, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?fit=crop&w=800&q=80",
    excerpt: "A comprehensive guide on connecting microcontrollers to modern web applications.",
    content: [
      "The ESP32 is a fantastic low-cost microcontroller with built-in Wi-Fi, making it perfect for home automation projects.",
      "This guide walks through setting up MQTT communication between an ESP32 and a React dashboard, covering both the firmware and frontend sides.",
      "By the end you'll have a real-time dashboard capable of controlling relays, reading sensor data, and pushing notifications."
    ]
  },
  {
    id: 3,
    title: "Mastering Framer Motion for Premium UIs",
    category: "Web Development",
    date: "May 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?fit=crop&w=800&q=80",
    excerpt: "Tips and tricks for creating butter-smooth animations in React applications.",
    content: [
      "Framer Motion makes it easy to add production-grade animations to React apps, but a few patterns make a huge difference in perceived quality.",
      "Using layout animations, shared element transitions, and viewport-triggered reveals can turn an average site into a memorable one.",
      "This article covers reusable variants, staggered children, and performance considerations for animating large lists."
    ]
  },
  {
    id: 4,
    title: "Power Electronics 101: Understanding Inverters",
    category: "Electrical",
    date: "April 2, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80",
    excerpt: "A beginner-friendly breakdown of how inverters convert DC to AC power efficiently.",
    content: [
      "Inverters are at the heart of solar systems, UPS units, and motor drives, converting direct current into usable alternating current.",
      "This post breaks down the basic switching topology, PWM control, and filtering techniques used in modern inverter design.",
      "We also touch on efficiency considerations and how modern semiconductor devices are pushing power density higher."
    ]
  },
  {
    id: 5,
    title: "Getting Started with Embedded Systems Programming",
    category: "Electronics",
    date: "March 8, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=800&q=80",
    excerpt: "A practical roadmap for engineers looking to break into embedded systems development.",
    content: [
      "Embedded systems programming sits at the intersection of hardware and software, requiring a different mindset than typical application development.",
      "This post covers a learning roadmap: starting with microcontroller basics, moving to RTOS concepts, and finally tackling low-level driver development.",
      "Recommended starter boards, tools, and resources are included for those just getting started."
    ]
  },
  {
    id: 6,
    title: "Navigating a Multi-Disciplinary Engineering Career",
    category: "Career",
    date: "February 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80",
    excerpt: "Thoughts on building a career that spans software, electronics, and AI without losing focus.",
    content: [
      "Working across multiple engineering disciplines can feel scattered, but the intersections are often where the most interesting problems live.",
      "This post shares lessons learned balancing depth and breadth, and how to communicate a multi-disciplinary skill set to employers.",
      "The throughline is curiosity: staying comfortable being a beginner again each time you pick up a new domain."
    ]
  }
];

export const blogFilters = ["All", ...new Set(blogs.map((b) => b.category))];
