import { ASSETS } from '../assets/assetMap';

export interface CourseDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "iso" | "ziglar" | "leadership";
  image: string;
  overview: string;
  bullets: string[];
  takeaways: string[];
  duration?: string;
  format?: string;
  requirements?: string[];
  callout?: string;
}

export const COURSES: CourseDetail[] = [
  {
    id: "lead-auditor-training",
    slug: "lead-auditor",
    title: "Exemplar Global Certified Lead Auditor Training",
    subtitle: "ISO 9001:2015 · ISO 14001:2015 · IATF 16949:2016",
    category: "iso",
    image: ASSETS.isoConsulting,
    duration: "4 Days (Monday – Thursday, 7:30 AM – 7:00 PM)",
    format: "Instructor-Led Remote via WebEx or On-Site at your facility",
    callout: "Presented by LEAD Group in association with Dekra / AQS Management Systems, meeting all Exemplar Global (RABQSA) requirements.",
    overview: "This intensive course gets an auditor on the direct path to becoming internationally certified. Many world-class manufacturing companies send their entire audit team to this training to sharpen audit skills, ensure rigorous compliance, and elevate their complete management system.",
    bullets: [
      "Days 1 & 2: Complete deep dive into ISO 14001:2015 / ISO 9001:2015 standard requirements with corresponding competency examinations.",
      "Day 3: Management systems auditing (AU competency unit) and audit execution exam.",
      "Day 4: Leading management systems audit teams (TL competency unit) and lead auditor competency exam.",
      "Dual Certification Options: Attendees can complete Days 1–3 for Internal Auditor Certificate, or full Days 1–4 for Certified Lead Auditor status.",
      "Electronic training materials provided directly; participants provide official copies of the standard."
    ],
    takeaways: [
      "Master the ISO 9001, ISO 14001, and IATF 16949 standards clause by clause",
      "Lead cross-functional audit opening and closing conferences with executive presence",
      "Identify objective evidence, craft non-conformance reports, and evaluate corrective actions",
      "Internationally recognized credentialing through Exemplar Global (RABQSA)"
    ],
    requirements: [
      "Computer with high-speed internet (2.5 Mbps down, 3.0 Mbps up)",
      "Webcam for examination proctoring (built-in or smartphone)",
      "Speakerphone / VoIP headset for clear interaction",
      "Software access to Word, PDF, and Excel documents"
    ]
  },
  {
    id: "internal-auditor-training",
    slug: "internal-auditor",
    title: "ISO 3-Day Internal Auditor Workshop",
    subtitle: "Highly Interactive Process Auditing for Real-World Quality",
    category: "iso",
    image: ASSETS.tamiProcess,
    duration: "3 Days (On-site or Remote)",
    format: "Interactive Workshop with practical team exercises",
    overview: "This 3-day course provides your internal audit team with foundational knowledge of the Standard, practical auditing methodologies, and an in-depth understanding of process audits. Described by participants as a fun-filled, highly engaging training that consistently receives 'excellent' attendee ratings.",
    bullets: [
      "Plain-English translation of technical ISO clauses into everyday shop-floor realities",
      "Hands-on mock audit scenarios and live process verification exercises",
      "Root cause analysis and corrective action formulation that prevents repeat findings",
      "How to audit for continual improvement rather than just box-checking compliance"
    ],
    takeaways: [
      "Confidence in conducting internal process audits across all departments",
      "Ability to write audit findings that managers actually welcome and act upon",
      "Measurable reduction in external registrar audit findings"
    ]
  },
  {
    id: "goal-setting-achievement",
    slug: "goal-setting",
    title: "Goal Setting & Achievement",
    subtitle: "The 7-Step Formula for Definite Direction and Purpose",
    category: "ziglar",
    image: ASSETS.goalSetting,
    duration: "Full-Day or Half-Day Interactive Seminar",
    format: "On-site, Corporate Retreat, or Executive Workshop",
    overview: "Unless you have definite, precise, clearly set goals, you cannot realize the maximum potential that lies within you. People frequently complain about a lack of time, when in reality a lack of direction is the root issue. Time can be an ally or an enemy; what it becomes depends entirely upon your goals and your determination to use every available minute.",
    bullets: [
      "The 4 basic reasons why people fail to set goals",
      "The power of dreaming without artificial self-imposed limits",
      "How to qualify your dreams so you focus your energy on what matters most",
      "How to identify specific, measurable, trackable targets",
      "The proven 7-step formula for setting and achieving goals",
      "The psychology of commitment and sustained daily action"
    ],
    takeaways: [
      "A completed, concrete 12-month goal action blueprint",
      "Techniques to eliminate procrastination and daily distractions",
      "Clarity of purpose across professional, personal, and financial spheres"
    ]
  },
  {
    id: "building-the-best-you",
    slug: "building-the-best-you",
    title: "Building the Best You!",
    subtitle: "Taking Control of Your Destiny & Climbing the Stairway to Success",
    category: "ziglar",
    image: ASSETS.buildingBestYou,
    duration: "Seminar / Workshop / Keynote",
    format: "Live In-Person or Interactive Virtual",
    overview: "Is it really possible to be happy, healthy, and prosperous? Can you expect solid family relationships, peace of mind, and security? The answer is a resounding 'YES!' Your future is not determined by other people or circumstances. Regardless of circumstance, there is one undeniable freedom: the freedom to choose your attitude toward those circumstances.",
    bullets: [
      "The core qualities that all truly successful people possess (and how you can cultivate them)",
      "The power of building strong, healthy, winning relationships",
      "How to acquire all the things money will buy — and all the things money won't buy",
      "The discipline of positive attitude maintenance during workplace turbulence",
      "How to keep yourself motivated when striving toward challenging goals",
      "The profound psychological impact of the words you choose every day",
      "The power of taking that first decisive step"
    ],
    takeaways: [
      "A personalized action plan to steer your career and life deliberately",
      "Mental models to transform small daily habits into radical long-term changes",
      "Renewed enthusiasm and self-belief in your natural strengths"
    ]
  },
  {
    id: "building-winning-relationships",
    slug: "building-winning-relationships",
    title: "Building Winning Relationships",
    subtitle: "The 4-Step Framework for Trust, Harmony, and Influence",
    category: "ziglar",
    image: ASSETS.buildingRelationships,
    duration: "Half-Day or Full-Day Workshop",
    format: "Interactive Corporate Seminar",
    overview: "How well you get along with your supervisor, coworkers, customers, and family members dictates the accomplishments you achieve in life. A balanced life requires winning relationships with other people. Learning how to build healthy relationships opens doors and opportunities that previously seemed impossible.",
    bullets: [
      "The 4 practical steps to build deep, enduring relationships",
      "The ONE single change you can make to turn around any troubled relationship",
      "The power of responding thoughtfully versus reacting impulsively",
      "The destructive organizational consequences of blame and finger-pointing",
      "The transformative power of a servant-leadership mindset",
      "How to proactively identify and draw out the good in others"
    ],
    takeaways: [
      "Reduced interpersonal friction and drama within teams",
      "Strengthened professional network of trusted contacts and mentors",
      "Actionable techniques for handling difficult personalities gracefully"
    ]
  },
  {
    id: "two-chairs",
    slug: "two-chairs",
    title: "2 Chairs: Navigating Trouble with Courage",
    subtitle: "Courageous Resilience in Times of Crisis & Uncertainty",
    category: "leadership",
    image: ASSETS.twoChairs,
    duration: "2-Hour Keynote or Half-Day Workshop",
    format: "Seminar, Keynote, or Small-Group Retreat",
    overview: "In this world you will have trouble — count on it! It might be personal, financial, organizational, or unexpected loss. When you hit the limit of what you can do alone, 2 Chairs asks three vital questions: Does God know your situation? Is it too hard to handle? Is there a good plan forward? This course offers practical steps to walk courageously, faithfully, and cheerfully through trials.",
    bullets: [
      "The three vital clarifying questions that dissolve paralysis in times of crisis",
      "Recognizing the limits of individual self-reliance and reaching out for guidance",
      "Seven practical daily steps to walk courageously through trials",
      "Interactive self-examination to uncover inner resilience that has always been present"
    ],
    takeaways: [
      "Peace of mind and restored focus amidst high-pressure situations",
      "A shared language of hope and perseverance for leadership teams facing restructuring or challenge"
    ]
  },
  {
    id: "power-of-who",
    slug: "power-of-who",
    title: "The Power of WHO",
    subtitle: "Why Traditional Networking Fails — and Who Can Help You Win",
    category: "ziglar",
    image: ASSETS.powerOfWho,
    duration: "Half-Day Workshop or Keynote",
    format: "On-site Seminar or Conference Keynote",
    overview: "Traditional networking doesn't work! Passing out stacks of business cards rarely builds meaningful careers. Based on the philosophy of respected executive headhunter Bob Beaudine, author of The Power of Who, this workshop reveals that you have already been given key relationships specifically placed in your life to help you achieve your dreams. You are not alone!",
    bullets: [
      "Why traditional transactional networking is broken for modern professionals",
      "The 12-3-1 Relationship Blueprint: 12 key friends, 3 close confidants, and 1 best friend",
      "Internalizing the three most liberating words in professional growth: 'I'm Not Alone!'",
      "The three essential disciplines: Remembering, Reaching Out, and Reconnecting",
      "How to ask for assistance without feeling awkward or self-serving",
      "How nurturing strategic relationships allows you to bless and impact others in return"
    ],
    takeaways: [
      "A populated map of your personal 'Who' circle ready for immediate engagement",
      "Freedom from the exhaustion of blind, shallow networking events",
      "A concrete plan to connect with agents, mentors, sponsors, and champions"
    ]
  },
  {
    id: "watch-me-train",
    slug: "watch-me-train",
    title: "Watch Me Train",
    subtitle: "Inside the Classroom: Energy, Humor, Engagement, and Practical Mastery",
    category: "leadership",
    image: ASSETS.tamiTraining,
    duration: "Live Observation & Multimedia",
    format: "Live Workshops, Webinars, and On-site Immersion",
    overview: "Witness how Tami Damian transforms typically dry subject matter — like ISO standard clauses, statistical process controls, and corporate compliance — into high-energy, memorable learning experiences that leave participants excited and capable.",
    bullets: [
      "Classroom dynamics that keep attendees active, laughing, and thinking",
      "Real-world manufacturing and business examples drawn from 30+ years in the field",
      "Inclusive small-group breakout audits that demystify international standards",
      "Immediate translation of abstract management theories into floor-ready actions"
    ],
    takeaways: [
      "Experience why clients rate Tami as 'the best instructor I have ever had'",
      "Schedule a live observation or preview session for your executive committee"
    ]
  }
];
