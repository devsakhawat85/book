import { ASSETS } from '../assets/assetMap';

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  subServices?: string[];
  standards?: string[];
  deliverables?: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "iso-training-consulting",
    slug: "iso-training-consulting",
    number: "01",
    title: "ISO Training & Consulting",
    shortDesc: "Comprehensive implementation, pre-assessment gap analysis, internal auditor, and certified lead auditor training across global quality, environmental, and safety standards.",
    fullDesc: "Research and industry experience show that implementing a well-defined Quality Management System significantly improves operational performance, market share, sales growth, competitive advantage, employee engagement, and risk mitigation. Tami Damian has assisted hundreds of companies in achieving international certification and integrating multiple standards into a single, cohesive Management System — saving time, resources, and overhead while driving measurable continual improvement.",
    image: ASSETS.isoConsulting,
    highlights: [
      "Exemplar Global (RABQSA) Quality Management Systems Lead Auditor Training",
      "Interactive 3-Day Internal Auditor Training with practical process audit workshops",
      "Seamless Integration of Quality, Environmental, and Safety systems into one streamlined manual",
      "Pre-Assessment Audits, Gap Analysis, and ongoing internal audit outsourcing",
      "Automotive Core Tools: FMEA, PPAP, APQP, and Control Plans mastery"
    ],
    standards: [
      "ISO 9001 (Quality Management Systems)",
      "IATF 16949 (Automotive Quality & Core Tools)",
      "ISO 14001 (Environmental Management Systems)",
      "ISO 45001 (Occupational Health & Safety Systems)",
      "ISO 13485 (Medical Devices)",
      "TL 9000 (Telecommunications Quality)",
      "AS 9100 (Aerospace Quality Systems)"
    ],
    deliverables: [
      "Create more efficient, standardized operations",
      "Increase customer satisfaction and retention rates",
      "Reduce redundant external audit findings",
      "Improve workforce motivation, compliance awareness, and morale",
      "Open global trade opportunities and supply chain qualification",
      "Eliminate systemic waste and increase overall plant productivity"
    ]
  },
  {
    id: "ziglar-training",
    slug: "ziglar-training",
    number: "02",
    title: "Ziglar Legacy Training",
    shortDesc: "World-renowned training in goal setting, personal excellence, communication, and relationship building from one of the first 26 Ziglar Legacy Certified Trainers in the world.",
    fullDesc: "Zig Ziglar impacted more than 250 million lives worldwide through his philosophy of character, attitude, and skill. As one of the first 26 people globally certified to carry on the Ziglar Legacy, Tami Damian delivers authentic Ziglar programs designed to empower individuals and corporate teams with hope, structured disciplines, and practical tools to achieve balanced, long-term success.",
    image: ASSETS.ziglarBadge,
    highlights: [
      "Goal Setting & Achievement (The proven 7-step formula)",
      "Building the Best You (Positive attitude, self-mastery, stairway to success)",
      "Building Winning Relationships (4 pillars to transform personal and team dynamics)",
      "2 Chairs (Overcoming crisis, finding clarity, courageous resilience)",
      "Power of Who (Activating strategic relationships beyond shallow networking)"
    ],
    standards: [
      "Goal Setting System & Performance Planning",
      "Character, Attitude, and Competency Architecture",
      "Intergenerational and Cross-Functional Communication",
      "Born to Win Philosophy & Action Framework"
    ]
  },
  {
    id: "coaching",
    slug: "coaching",
    number: "03",
    title: "Executive & Personal Coaching",
    shortDesc: "Strategic one-on-one and leadership coaching that takes proven high achievers smoothly from success to significance.",
    fullDesc: "Even the greatest achievers in sports, business, and world leadership have coaches. What did Michael Jordan, Barbra Streisand, and Ronald Reagan have in common? They all utilized coaches to maximize their potential during the prime of their careers. As a Ziglar Certified Coach and ASTD Certified Coach with 25+ years of guiding professionals, Tami Damian provides confidential, customized coaching tailored to your exact responsibilities and legacy goals.",
    image: ASSETS.coachingHero,
    highlights: [
      "The Live to Win Sequential Coaching Framework",
      "Unlocking creative problem-solving and unblocking plateaued performance",
      "Strategic alignment between corporate targets and personal legacy",
      "Action-oriented accountability with weekly or bi-weekly cadence",
      "Sustainable balance across health, career, finances, family, and peace of mind"
    ]
  },
  {
    id: "life-lessons",
    slug: "life-lessons",
    number: "04",
    title: "Life Lessons Learned Keynotes",
    shortDesc: "Dynamic, story-driven keynote presentations featuring international travel photography and practical wisdom for conventions, retreats, and all-hands.",
    fullDesc: "'Life gives us the lessons,' Tami Damian says, 'it's up to us to learn them.' Through Moving Messages, Tami delivers humor-filled, deeply reflective presentations that challenge participants to discover profound leadership principles in daily occurrences — whether preparing for a grueling Grand Canyon hike or navigating sudden workplace change. Illustrated with high-impact photographs taken during Tami's worldwide travels.",
    image: ASSETS.lifeLessons1,
    highlights: [
      "Moving Messages keynote tailored to corporate retreats and conferences",
      "Accompanied by internationally captured nature and expedition photography",
      "Working With Difficult People and De-escalating Friction",
      "Attitude Affects Your Altitude: How to Advance in Your Career",
      "Resisting Change: Why People Resist and How Leaders Guide Them",
      "Earning and Restoring Trust in High-Stakes Teams",
      "Leadership Lessons from Santa's Workshop"
    ]
  },
  {
    id: "organizational-training",
    slug: "organizational-training",
    number: "05",
    title: "Workplace & Organizational Training",
    shortDesc: "Equipping enterprise teams with vital life skills — from Dave Ramsey's Financial Peace at Work to Active Parenting and conflict resolution.",
    fullDesc: "Healthy individuals create healthy workplaces. When employees are financially stressed, struggling with family dynamics, or unable to communicate across generations, productivity suffers. LEAD Group provides turnkey corporate wellness programs that solve real human challenges at work.",
    image: ASSETS.tamiTraining,
    highlights: [
      "Dave Ramsey's Financial Peace at Work (Certified Workplace Trainer)",
      "Active Parenting for Teens: Training of Trainers (Certified since 1990)",
      "Gender and Intergenerational Workplace Communication",
      "The Value of High-Impact Performance Reviews",
      "Substance Abuse Awareness & Employee Assistance (EAP) Integration"
    ]
  },
  {
    id: "wellness-lifestyle",
    slug: "wellness-lifestyle",
    number: "06",
    title: "Personal Growth & Wellness Coaching",
    shortDesc: "Holistic fitness, sustained energy, and whole-person vitality to empower leaders to lead with endurance.",
    fullDesc: "Life is for LIVING! Physical health and mental clarity are the foundation of executive endurance. Through online wellness coaching and nutrition systems, Tami Damian shares the exact health habits, workout regimens, and nutritional routines that revitalized her own active lifestyle after injuries — helping professionals build long-term stamina.",
    image: ASSETS.beachBodyTeam,
    highlights: [
      "Independent Online Health & Fitness Coaching",
      "Nutritional simplification and daily wellness routines",
      "Sustainable home fitness frameworks for busy executives",
      "Accountability communities that turn fitness into a fun, lifelong habit"
    ]
  }
];
