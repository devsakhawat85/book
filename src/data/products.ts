import { ASSETS } from '../assets/assetMap';

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceNum: number;
  dealTag?: string;
  image: string;
  description: string;
  quote?: {
    text: string;
    author: string;
  };
  features: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "dont-quit",
    title: "DON'T QUIT",
    subtitle: "Stories of Persistence, Courage and Faith",
    price: "$12.00",
    priceNum: 12.0,
    dealTag: "BOGO Special: 2 for $20",
    image: ASSETS.bookDontQuitAlone,
    description: "Transformative real-life stories from a 3x Grammy-winner, movie producer, MLB player, entrepreneurs, professionals, speakers, authors, veterans, and Tami Damian. A deep look into the resilience required to overcome adversity and keep moving forward.",
    quote: {
      text: "Stories of persistence and unwavering faith that inspire you to never give up on your life call.",
      author: "LEAD Group"
    },
    features: [
      "Features co-author chapter by Tami Damian",
      "Special BOGO: Buy One, Give One ($20 for two copies)",
      "Free Shipping included on all orders",
      "Ideal gift for leadership teams and colleagues"
    ]
  },
  {
    id: "voices-21st-century",
    title: "Voices Of The 21st Century",
    subtitle: "Resilient Women Who Rise and Make a Difference",
    price: "$12.00",
    priceNum: 12.0,
    dealTag: "#1 International Bestseller",
    image: ASSETS.bookDontQuitVoices,
    description: "A premier collection of writings by accomplished business women, published by the Women's Speakers Association. An Amazon #1 Bestseller in four distinct categories, including International Amazon #1 Bestseller.",
    quote: {
      text: "A masterwork in authentic female leadership and unstoppable resilience.",
      author: "Women's Speakers Association"
    },
    features: [
      "Amazon #1 International Bestseller across 4 categories",
      "Features Tami Damian's personal leadership reflections",
      "Eligible for 2 for $20 mix-and-match special with DON'T QUIT",
      "Free Shipping on all book orders"
    ]
  },
  {
    id: "performance-planner",
    title: "The Ziglar Performance Planner",
    subtitle: "Directed Action & Daily Goal Achievement System",
    price: "$49.95",
    priceNum: 49.95,
    dealTag: "Official Ziglar Tool",
    image: ASSETS.bookPerformancePlanner,
    description: "The key to your success is directed ACTION, which always follows the self-imposed discipline this Performance Planner is engineered to create. You can make your future more exciting by utilizing your Performance Planner every day to maintain that discipline and stay on track to reach your goals. You can start using this planner at any time of the year.",
    features: [
      "Built upon Zig Ziglar's proven Goal Setting System",
      "Undated format — start immediately any month of the year",
      "Structured daily, weekly, and quarterly milestones",
      "Free Shipping included"
    ]
  },
  {
    id: "difference-maker",
    title: "Dare to Be A Difference Maker",
    subtitle: "Stories of Passion, Purpose & Contribution",
    price: "$10.00",
    priceNum: 10.0,
    dealTag: "Inspiring Anthology",
    image: ASSETS.bookDifferenceMaker,
    description: "Difference makers who dare to live with passion, follow their purpose, and commit to helping others. Uplifting stories of hope and inspiration from real people who overcame great circumstances to make a positive, lasting difference in the world.",
    quote: {
      text: "Stories of hope and inspiration from real people who overcame great circumstances to make a positive difference.",
      author: "LEAD Group"
    },
    features: [
      "Inspiring case studies of community and business changemakers",
      "Paperback edition with personal insights from Tami Damian",
      "Special pricing: $10.00 with Free Shipping"
    ]
  },
  {
    id: "ziglar-legacy-book",
    title: "Ziglar Legacy",
    subtitle: "Inspiring Stories by the Founding Class of Ziglar Legacy Certified Trainers",
    price: "$12.00",
    priceNum: 12.0,
    dealTag: "Founding Class Volume",
    image: ASSETS.bookZiglarLegacy,
    description: "Inspiring stories and practical application guidelines authored by the Founding Class of Ziglar Legacy Certified Trainers — the first 26 trainers worldwide authorized by the Ziglar Corporation to share this transformative philosophy.",
    quote: {
      text: "This book will give you the inspiration and courage you need to be, do, and have all that life has to offer.",
      author: "Tom Ziglar, CEO of Ziglar, Inc."
    },
    features: [
      "Authored by the original world cohort of certified Ziglar trainers",
      "Endorsed by Tom Ziglar",
      "Features Tami Damian's foundational training insights",
      "Free Shipping included"
    ]
  }
];
