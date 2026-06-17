export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    id: "cichlid-care",
    title: "Cichlid care",
    description: "Water, diet, tank setup, and acclimation for Lake Malawi African cichlids.",
    items: [
      {
        question: "What water parameters do Malawian cichlids need?",
        answer:
          "Lake Malawi cichlids thrive in hard, alkaline freshwater. Aim for a pH of roughly 7.8–8.6, water hardness with plenty of mineral content (often supplemented with appropriate buffers or crushed coral depending on your source water), and a stable temperature around 76–80°F (24–27°C). Consistency matters more than chasing perfect numbers.",
      },
      {
        question: "What size tank do I need?",
        answer:
          "Bigger is better for African cichlids. Many hobbyists start at 55 gallons for a small group; 75 gallons and larger are easier to stock and manage aggression. Provide plenty of rockwork to create territories and break lines of sight. Overcrowding can sometimes reduce aggression in Malawi setups, but filtration and maintenance must keep up with the bioload.",
      },
      {
        question: "What should I feed my fish?",
        answer:
          "Offer a varied diet appropriate to the species. Quality cichlid pellets or flakes formulated for African cichlids are a good staple. Peacocks (Aulonocara) generally do well with diets that support color without excessive protein meant for predators. Haps may accept a slightly more varied menu depending on species. Supplement occasionally with frozen foods suitable for cichlids. Avoid overfeeding, several small feedings beats one large one.",
      },
      {
        question: "Can I keep peacocks and haps together?",
        answer:
          "Many hobbyists successfully keep compatible Malawi peacocks and haps in the same large tank. Match temperament and adult size, avoid mixing overly aggressive species with peaceful lines, and research each fish before adding it. When in doubt, contact us with your tank size and current stock for guidance.",
      },
      {
        question: "How do I acclimate fish when I bring them home?",
        answer:
          "Float the bag to equalize temperature, then gradually mix small amounts of your tank water into the bag over 20–40 minutes before netting the fish into the aquarium. Avoid pouring bag water into your tank if possible. Dim lights and give the fish space on arrival. A quarantine tank is strongly recommended when possible.",
      },
      {
        question: "Why is my new fish hiding or not eating?",
        answer:
          "Hiding and skipped meals are common for a few days after moving. Ensure tank mates are not harassing the newcomer, offer familiar foods, and keep water quality high. If appetite does not return within about a week, reach out with details about your setup and we can help troubleshoot.",
      },
    ],
  },
  {
    id: "ordering",
    title: "Ordering & availability",
    description: "How inquiries, pricing, and stock work at The Malawian Fish Room.",
    items: [
      {
        question: "How do I order fish?",
        answer:
          "We operate inquiry-based retail sales. There is no online checkout currently. Browse the catalog then contact us by phone, email, or the contact form with the fish you are interested in. We will confirm availability, pricing, and next steps. Upon opening the hours of operation will be 11am - 9pm (est).",
      },
      {
        question: "How do I know what is in stock?",
        answer:
          "Our online catalog lists fish with availability status (Available / Not Available). Stock changes regularly, please confirm with us before visiting or arranging pickup. Use the “Available Now” filter on the catalog or ask us directly for the most current list.",
      },
      {
        question: "Can I reserve or hold fish?",
        answer:
          "Yes, definitely. Please contact us to discuss holds or reservations for specific lines.",
      },
      {
        question: "What if I want to speak to someone?",
        answer:
          "Email malawianfishroom@outlook.com, post on our socials, contact us by phone, or use our contact page. Include species names, your experience level, and tank details when possible so we can respond with useful advice.",
      },
    ],
  },
  {
    id: "pickup",
    title: "Pickup & local arrangements",
    description: "Serving hobbyists across Canada.",
    items: [
      {
        question: "Where are you located?",
        answer:
          "The Malawian Fish Room is located at 769 Little Simcoe Street, London, Ontario, Canada. We will be opening a storefront soon!",
      },
      {
        question: "Do you ship fish?",
        answer:
          "Yes, we are experienced with shipping fish across Canada. Please contact us to ask about shipping options.",
      },
      {
        question: "What should I bring for pickup?",
        answer:
          "We will pack the fish safely however it is advised to bring appropriate bags or containers and plan for safe transport within your situation. Insulated packaging helps in cold and hot weather.",
      },
      {
        question: "What are the hours of operation?",
        answer:
          "The Malawian Fish Room is open every day (excluding holidays) from 11am - 9pm (est). Call us at 1 (519) 719-4211 for any questions or to arrange pickup.",
      },
    ],
  },
  {
    id: "about-business",
    title: "About The Malawian Fish Room",
    description: "Who we are and what we specialize in.",
    items: [
      {
        question: "What fish do you specialize in?",
        answer:
          "We focus on premium African cichlids from Lake Malawi. Primarily Aulonocara (peacocks) and haplochromines (haps). Our fish are raised in Ontario with the same care and consistency built through years of wholesale breeding.",
      },
      {
        question: "Are you wholesale or retail?",
        answer:
          "We have a strong wholesale breeding background and now offer direct retail service to hobbyists across Canada. You get the same trusted stock and expertise, with personal guidance on selection and care.",
      },
      {
        question: "Do you offer a health guarantee?",
        answer:
          "Please contact us for current policies regarding arrivals, acclimation support, and any guarantee terms.",
      },
      {
        question: "Why Lake Malawi cichlids?",
        answer:
          "Lake Malawi is one of the most diverse freshwater lakes on Earth, home to brilliantly colored cichlids with distinct personalities. They make stunning centerpiece fish for dedicated aquariums. Our About page shares more on the lake and our breeding philosophy.",
      },
    ],
  },
];
