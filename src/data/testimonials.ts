export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  location?: string;
  date?: string;
  category?: "iso" | "leadership" | "coaching" | "general";
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I have taken several of your ISO auditor classes and I always walk out feeling more knowledgeable than when I came in. The skills that you possess are more than a trainer, you are like a coach. I read somewhere that... 'Coaching is about taking people and analyzing their abilities and positioning them to where they can excel within the framework.' The training and the life lessons that we are learning in your training classes are worth every penny.",
    author: "Candace Cohen",
    location: "Washington, DC",
    category: "iso"
  },
  {
    quote: "Tami is very energetic and excited about her classes. She brought many of her life experiences to the class to bring the examples of the studying materials to life. I would highly recommend her and her company.",
    author: "Carl Kelly",
    role: "Quality Leader",
    company: "Nucor Steel",
    location: "Memphis, TN",
    category: "iso"
  },
  {
    quote: "I love sitting in Tami's training! We don't even realize we're learning — then all of a sudden — the day is over and we 'got it'. Her style of training is wonderful!",
    author: "Marty Jones",
    location: "Berkeley, SC",
    category: "leadership"
  },
  {
    quote: "Great class. Tami is easy to work with and is great at making the course work for you. The group exercises were great as they made you go deeper into the standard than you would if the instructor did all the talking. Tami makes sure that everyone feels included.",
    author: "Audit Team Participant",
    location: "Decatur, AL",
    date: "March 2017",
    category: "iso"
  },
  {
    quote: "Very informational and inspirational — the best instructor I have ever had. I truly enjoy the learning experience.",
    author: "Training Attendee",
    location: "Lindsay, NE",
    date: "August 2017",
    category: "leadership"
  },
  {
    quote: "She has the ability to make an unbelievably boring topic almost fun!",
    author: "J.F.",
    location: "South Carolina",
    category: "iso"
  },
  {
    quote: "The material is something that can be applied to everyday life whether it is at work or at home.",
    author: "E.L.",
    location: "Fresno, CA",
    category: "general"
  },
  {
    quote: "I would recommend this course (ISO 9001 Internal Auditor Training) and instructor to any other organization.",
    author: "C.S.",
    location: "Seattle, WA",
    category: "iso"
  },
  {
    quote: "The instructor was a very good listener, tries to understand our process and relate information to our company's way. Very knowledgeable.",
    author: "L.J.",
    location: "Arkansas",
    category: "iso"
  },
  {
    quote: "Has had a wide variety of experience to bring to the class. Used examples that related directly to our work environment.",
    author: "T.C.",
    location: "Indiana",
    category: "iso"
  },
  {
    quote: "Tami has amazing knowledge and personality!",
    author: "S.S.",
    location: "Alabama",
    category: "leadership"
  },
  {
    quote: "The instructor did a great job keeping the class moving and interesting. One of the best trainings/trainers EVER!",
    author: "M.B.",
    location: "South Carolina",
    category: "iso"
  },
  {
    quote: "This book will give you the inspiration and courage you need to be, do, and have all that life has to offer.",
    author: "Tom Ziglar",
    role: "CEO",
    company: "Ziglar, Inc.",
    category: "coaching"
  }
];

export const CLIENT_LOGOS_LIST = [
  "Nucor Steel",
  "Nucor Steel Fasteners",
  "Danfoss",
  "Honeywell",
  "Kawasaki",
  "Pfizer",
  "Duncan Aviation",
  "Hexagon Composites",
  "Vulcraft Group",
  "Molex",
  "Neapco Components",
  "Royal Engineered Composites",
  "Pivot International",
  "Elster Gas North America",
  "Camaco",
  "AWI Quality Certification Corporation",
  "Breeza Fans USA",
  "Groschopp, Inc.",
  "Corporate Express / Staples",
  "Communication Systems Solutions",
  "Laser Specialties",
  "Midland Molding",
  "Lawrence Industries",
  "Abengoa Bioenergy",
  "Nebraska Seeds LLC",
  "Developmental Services of Nebraska",
  "Advantage Product Pipeline",
  "Continuum EAP",
  "United Way",
  "YWCA",
  "Fresh Start Home",
  "Pinnacle Quality Services"
];
