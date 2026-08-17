/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  BookOpen,
  Radio,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Heart,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Search,
  CheckCircle2,
  ExternalLink,
  Play,
  Pause,
  Calendar,
  ArrowRight,
  Lock,
  Building,
  Laptop,
  Microscope,
  Trophy,
  Send,
  Volume2,
  VolumeX,
  UserCheck,
  Compass,
  Image as ImageIcon,
  Film,
  Camera,
  Maximize2,
  Eye,
  FileText,
  FileCheck,
  Check,
  ChevronUp,
  ChevronLeft,
  LayoutGrid,
  Sliders
} from 'lucide-react';

const SCHOOL_LOGO_URL = "https://www.iflierintlschl.org/wp-content/uploads/2018/05/logo-2-1-e1526719499231.png";
const SCHOOL_FOOTER_LOGO_URL = "https://www.iflierintlschl.org/wp-content/uploads/2018/05/logo-2-1-e1526719499231.png";

const SCHOOL_INFO = {
  name: "i-Flier International School",
  motto: "Inspired By Excellence & Success",
  beliefMotto: "Everybody can be Somebody",
  address: "Unit 1-3, I-Flier College road, Opposite DonBosco Youth Centre, Ogungbade, Egbeda, Ibadan, Oyo State, Nigeria.",
  phone1: "+234 805 510 8168",
  phone2: "+234 815 055 1033",
  email: "info@iflierintlscl.org",
  hours: "Monday - Friday: 8:00 AM - 2:00 PM",
  radioFrequency: "103.3 FM",
  founder: "Prince Charles Ilelabayo Babarimisa",
  principal: "Elder Olugboyega Adedeji"
};

const MISSION_STATEMENT = "To Nurture The Individual Talents And Abilities Of Our Students And Prepare Them for Success In The Global Community Through Our Proactive And Adaptable Professionals, Evolving And Progressive Curriculum And The Use Of World Class Teaching Technique And Infrastructure.";

const VISION_STATEMENT = "To Promote Academic Excellence Through Rigorous Standards-based Instruction And Assessment With High Moral Standard In an Inspiring Environment That Maximizes The Potentials Of Each Student To Become A Responsible Global Citizen.";

const BELIEFS = [
  "Unrecognised talent lies latent in all of us",
  "We believe in you not only as you are but also what you might become",
  "We want you to be able to achieve even more than you hoped to achieve",
  "Personal motivation is a critical factor in achieving success",
  "Everybody should be able to experience the excitement of learning and euphoria of success"
];

const CORE_VALUES = [
  { name: "Courage", desc: "Boldness to pursue goals and stand up for truth.", icon: Shield },
  { name: "Self-Discipline", desc: "Focus, perseverance, and high moral standards.", icon: CheckCircle2 },
  { name: "Respect", desc: "Honoring self, peers, staff, and the global community.", icon: Heart },
  { name: "Integrity", desc: "Unwavering honesty and strong character.", icon: Lock },
  { name: "Creativity", desc: "Fostering innovation, critical thinking, and discovery.", icon: Sparkles },
  { name: "Service", desc: "Giving back and leading through compassionate action.", icon: Users }
];

const ERP_PORTAL_LINKS = {
  azure: "https://ifliercittaerp.azurewebsites.net/",
  cittaNuvola: "https://www.iflierintlschl.cittanuvola.com/index.php/user/login",
  radioSite: "https://iflier1033fm.com/"
};

interface SchoolPolicy {
  id: number;
  title: string;
  category: string;
  summary: string;
  fullContent?: string;
}

const SCHOOL_POLICIES: SchoolPolicy[] = [
  { id: 1, title: "Admissions Policy", category: "Admissions & Access", summary: "Transparent, merit-oriented enrollment welcoming pupils without discrimination based on religion, creed, race, or disability." },
  { id: 2, title: "Anti-Bullying Policy", category: "Safety & Welfare", summary: "Strict zero-tolerance framework ensuring a physically and emotionally safe school environment for all learners." },
  { id: 3, title: "Arts Policy", category: "Curriculum & Culture", summary: "Nurturing creative expression, cultural heritage, and visual/performing arts in every child." },
  { id: 4, title: "Behaviour Policy", category: "Discipline & Values", summary: "Promoting self-discipline, mutual respect, good manners, and positive behavioral reinforcement." },
  { id: 5, title: "Child Protection Policy", category: "Safety & Welfare", summary: "Comprehensive safeguarding guidelines protecting every student's well-being, dignity, and security." },
  { id: 6, title: "Counselling Policy", category: "Student Support", summary: "Providing professional guidance and academic, career, and personal counseling support services." },
  { id: 7, title: "Complaint Policy", category: "Governance & Ethics", summary: "Structured grievance and feedback procedures for parents, guardians, and stakeholders." },
  {
    id: 8,
    title: "Curriculum Policy",
    category: "Academic Standard",
    summary: "Aligned with both National and International policies across Nursery, Primary, JSS, and SSS with continuous assessment.",
    fullContent: `At i-Flier International School, our curriculum is designed to align with both National and International policies across all levels of education. We adhere strictly to these standards to ensure comprehensive and effective learning.

• Nursery Session: Our nursery curriculum is tailored to promote cognitive, social, and psychomotor development, using appropriate teaching methods and resources for children at this stage of growth.
• Non-Discrimination: We do not segregate or discriminate against pupils/students based on religion, creed, race, or disability.
• Academic Calendar: We operate according to the approved academic year calendar issued by the Federal Ministry of Education of Nigeria.
• Continuous Assessment: We provide continuous assessment for our pupils/students to monitor and enhance their learning progress.
• Junior Secondary Session: Our Junior Secondary curriculum is both pre-vocational and academic, encompassing all basic subjects to help students acquire knowledge and develop skills, structured following the National Policy on Education.
• Senior Secondary School: The Senior Secondary School curriculum is comprehensive and structured according to the National Policy on Education, broadening students’ knowledge and preparing them for future endeavors.
• National Examinations: Our school has the capacity to register candidates for national examinations, including the Junior School Certificate Examination (JSCE), the West African Senior School Certificate Examination (WASSCE), and the National Examination Council’s Junior and Senior Certificate Examination (NECO/JSCE and SSCE), as well as other International Examinations.
• Citizenship and Cultural Education: We teach Citizenship, Environmental Studies, Economics, and aspects of Nigerian History, Culture, and Yoruba Language.
• Guidance and Counselling: We provide robust guidance and counseling support services to assist students in their academic and personal development.`
  },
  { id: 9, title: "First Aid Policy", category: "Health & Medical", summary: "Emergency medical response readiness, trained first aiders, and immediate on-campus care." },
  { id: 10, title: "Gifted and Talented Policy", category: "Academic Standard", summary: "Special enrichment programs and accelerated academic tracks to maximize high-potential learners." },
  {
    id: 11,
    title: "Handwriting Policy",
    category: "Academic Standard",
    summary: "Intentional instruction in cursive handwriting and legibility to enhance speed, spelling, and cognitive focus.",
    fullContent: `Intent: Handwriting is a crucial skill that, like reading and spelling, affects written communication across the curriculum. At i-Flier International School, we aim for our children to write with ease, speed, and legibility. Cursive handwriting, which involves joining letters and words in a series of flowing movements and patterns, helps students focus more on the content of their writing rather than the formation of letters.

Our Objectives in Teaching Handwriting:
1. To enable children to write in a consistent, well-presented, and legible format.
2. To ensure all children know the difference between lower and upper case letters.
3. To help students understand the importance of clear and neat presentation in communicating their meaning.
4. To develop a consistent size and shape of letters and regular spacing between letters and words.
5. To raise children’s self-motivation and self-esteem through the establishment of best handwriting practices.

Implementation Principles:
• Handwriting is taught regularly and systematically in classes, groups, or individually, as appropriate.
• Patterns are used initially, employing a variety of tools and multisensory methods to encourage free-flowing hand motions.
• Correct pencil hold and letter formation are taught from the beginning, and handwriting is frequently linked with spelling.
• When marking or writing comments, staff members use cursive handwriting as appropriate.
• Display writing throughout the school includes both cursive and computer-generated writing using the Comic Sans script.`
  },
  { id: 12, title: "Health and Safety Policy", category: "Safety & Welfare", summary: "Rigorous standards for physical campus safety, clean water, hygiene, and emergency preparedness." },
  { id: 13, title: "Homework Policy", category: "Academic Standard", summary: "Structured home tasks reinforcing classroom learning without overburdening students or families." },
  { id: 14, title: "Learning and Teaching Policy", category: "Academic Standard", summary: "Promoting interactive, student-centered pedagogical methodologies, practicals, and critical thinking." },
  { id: 15, title: "Physical Restraint Policy", category: "Safety & Welfare", summary: "Strict guidelines ensuring physical restraint is never punitive and learner dignity is protected." },
  { id: 16, title: "Recruitment Policy", category: "Human Resources", summary: "Rigorous vetting and qualification standards for hiring passionate, seasoned educational professionals." },
  { id: 17, title: "School Clinic Policy", category: "Health & Medical", summary: "On-campus health facility staffed with qualified healthcare personnel for preventative and prompt treatment." },
  { id: 18, title: "Sex and Relationships Policy", category: "Values & Guidance", summary: "Age-appropriate moral, biological, and relational education aligned with cultural values." },
  { id: 19, title: "Special Education Needs Policy", category: "Inclusion & Support", summary: "Inclusive support mechanisms ensuring differentiated instruction for diverse learner needs." },
  { id: 20, title: "Whistle Blowing Policy", category: "Governance & Ethics", summary: "Confidential and secure reporting channel for safety, integrity, and operational ethics." }
];

const ACADEMIC_DIVISIONS = [
  {
    id: "nursery",
    title: "Nursery School (Pre-School)",
    age: "Early Childhood (Ages 2 - 5 Years)",
    tagline: "Learning is Fun! Emphasis on observation, interaction and direct guidance",
    description: "The Pre-School curriculum teaches children to think and use their talents effectively while recognizing their self-worth. It incorporates active learning with colours, shapes, numbers, and alphabets consciously geared towards enhancing academic foundation.",
    highlights: ["Learning by Observation & Play", "Phonics & Numeracy Foundation", "Creative Arts & Rhymes", "French & Communication Skills"],
    badge: "Early Years",
    curriculumDetails: "Thrust: 'Learning is Fun!' Pupils are consciously provided with experiences geared towards enhancing academic skills through multisensory activities.",
    subjects: [
      "Mathematics", "Communication Skills", "Health Habits", "Moral Instructions",
      "Rhymes", "Basic Science", "Social Studies", "Home Economics",
      "Creative Arts", "Music", "French Language"
    ]
  },
  {
    id: "primary",
    title: "Primary School",
    age: "Ages 6 - 11 Years (Primary 1 - 6)",
    tagline: "Nurturing curiosity, core academics, cursive handwriting & moral foundation",
    description: "Our Primary curriculum merges rigorous standards-based instruction with hands-on learning. We develop well-rounded children with strong communication skills, mathematical reasoning, and high moral discipline.",
    highlights: ["STEM & Basic ICT", "Quantitative & Verbal Aptitude", "Cursive Handwriting Mastery", "Excursions & Co-curricular"],
    badge: "Elementary",
    curriculumDetails: "Rigorous primary foundational program aligned with Federal Ministry of Education and international elementary benchmarks.",
    subjects: [
      "English Language", "Mathematics", "Basic Science & Technology", "Social Studies",
      "Civic Education", "Computer Studies / ICT", "Agricultural Science", "Creative Arts",
      "Music", "French Language", "Yoruba Language", "Physical & Health Education",
      "Christian Religious Knowledge", "Quantitative Aptitude", "Verbal Aptitude"
    ]
  },
  {
    id: "jss",
    title: "Junior Secondary School (JSS)",
    age: "JS 1 - JS 3 (Lower Secondary)",
    tagline: "Pre-vocational and academic mastery bridging into senior excellence",
    description: "As stated by the National Policy in Education, i-Flier runs a robust Junior Secondary School curriculum taught by seasoned, qualified teachers. Prepares students thoroughly for the BECE exams while honing critical thinking.",
    highlights: ["Basic Science & Tech Labs", "Computer-Based Testing Prep", "Leadership & Career Guidance", "Sports & Media Clubs"],
    badge: "Lower Secondary",
    curriculumDetails: "Prepares candidates for the Basic Education Certificate Examination (BECE) administered by NECO and Oyo State Ministry of Education.",
    subjects: [
      "1. English Language", "2. Mathematics", "3. Basic Science", "4. Basic Technology",
      "5. Social Studies", "6. French Language", "7. Business Studies", "8. Home Economics",
      "9. Yoruba Language", "10. Agricultural Science", "11. Computer Studies", "12. Christian Religious Knowledge",
      "13. Fine Arts", "14. Music", "15. Physical and Health Education", "16. Civic Education"
    ]
  },
  {
    id: "sss",
    title: "Senior Secondary School (SSS)",
    age: "SS 1 - SS 3 (Upper Secondary)",
    tagline: "Comprehensive 21-subject curriculum & Trade courses preparing future global leaders",
    description: "Broadening students’ knowledge across Sciences, Arts, Social Sciences, and Vocational Trade subjects. Seasoned educators and equipped laboratories ensure outstanding performances in WASSCE, NECO SSCE, and UTME.",
    highlights: ["WASSCE & NECO SSCE Prep", "Trade Subjects & Vocational Skills", "Advanced Physics, Chem & Bio Labs", "University Entry Counseling"],
    badge: "Upper Secondary",
    curriculumDetails: "Students offer 9-11 subjects in SS1, 9-10 in SS2, and 9 in SS3. All students take English, Mathematics, 1 Trade subject, and 1 Science subject, with electives tailored to their career aspirations.",
    tradeSubjects: ["Animal Husbandry", "Data Processing", "Store-Keeping"],
    subjects: [
      "English Language", "Mathematics", "Civic Education", "Yoruba",
      "Physics", "Chemistry", "Biology", "Agricultural Science",
      "Further Mathematics", "Technical Drawing", "Computer Studies",
      "Economics", "Government", "Financial Accounting", "Commerce", "Geography",
      "Literature in English", "Christian Religious Studies",
      "Animal Husbandry (Trade)", "Data Processing (Trade)", "Store-Keeping (Trade)"
    ],
    examBoards: [
      "West African Senior School Certificate Examination (WASSCE / WAEC)",
      "National Examination Council Senior School Certificate (NECO SSCE)",
      "Unified Tertiary Matriculation Examination (UTME / JAMB)",
      "Basic Education Certificate Examination (BECE - NECO & STATE)"
    ]
  },
  {
    id: "tutorial",
    title: "Tutorial & CBT Prep Centre",
    age: "UTME / POST-UTME / WAEC / NECO Remedial",
    tagline: "Specialized exam prep, Computer-Based Test drills, and academic empowerment",
    description: "An intensive tutorial facility equipped with a modern Computer Based Test (CBT) laboratory to drill students for UTME/JAMB, POST-UTME, and external WAEC/NECO resits with consistently high success rates.",
    highlights: ["High-speed CBT Software Practice", "Subject Specialist Educators", "Weekly Mock Tests & Detailed Analytics", "Proven High Pass Rate"],
    badge: "Exam Prep Hub",
    curriculumDetails: "Targeted subject crash courses, past question analysis, speed & accuracy drills, and career mentoring.",
    subjects: [
      "JAMB / UTME 4-Subject Combinations", "WAEC / NECO Remedial Subjects", "POST-UTME University Drills", "Digital Computer Test Literacy"
    ]
  }
];

const FACILITIES = [
  { name: "Boarding Facilities", desc: "Safe, secure, and comfortable home-away-from-home dormitories with dedicated house parents for boys and girls.", icon: Building, tag: "Residential" },
  { name: "CBT & E-Classrooms", desc: "State-of-the-art computer laboratories for digital literacy, e-learning, and JAMB/UTME CBT practice.", icon: Laptop, tag: "Technology" },
  { name: "Science Laboratories", desc: "Fully equipped Physics, Chemistry, and Biology labs for practical hands-on experiments.", icon: Microscope, tag: "Academics" },
  { name: "i-Flier 103.3 FM Radio", desc: "In-house campus radio station broadcasting educational content, news, and student audio projects.", icon: Radio, tag: "Media" },
  { name: "School Library & Book Centre", desc: "Extensive collection of text, reference books, digital research assets, and quiet reading spaces.", icon: BookOpen, tag: "Resources" },
  { name: "Sports Complex", desc: "Fields and courts for football, athletics, basketball, and physical fitness development.", icon: Trophy, tag: "Recreation" }
];

const NEWS_ARTICLES = [
  {
    id: 1,
    title: "How to Succeed at School",
    date: "March 16, 2026",
    category: "Academic Tips",
    snippet: "Success is the ability to lead the life one desires. Discover effective study habits, time management routines, and how personal motivation drives long-term academic excellence at i-Flier.",
    author: "Admin",
    imageUrl: "https://www.iflierintlschl.org/wp-content/uploads/2022/03/cropped-DSC_4309-scaled-1-600x401.jpg",
    url: "https://www.iflierintlschl.org/how-to-succeed-at-school/"
  },
  {
    id: 2,
    title: "Choosing the Right Career That Fits Your Passion and Talent",
    date: "March 15, 2026",
    category: "Career Guidance",
    snippet: "Unlocking latent talents and guiding senior secondary students towards fulfilling career paths in Sciences, Commercial fields, and the Arts.",
    author: "Admin",
    imageUrl: "https://www.iflierintlschl.org/wp-content/uploads/2019/10/GRADA-SENIOR.jpg",
    url: "https://www.iflierintlschl.org/choosing-the-right-career-that-fits-your-passion-and-talent/"
  },
  {
    id: 3,
    title: "How Do You Best Prepare for Your University Admission Exams?",
    date: "March 15, 2026",
    category: "Exam Prep",
    snippet: "Comprehensive guide to mastering the UTME/JAMB Computer Based Test (CBT), WAEC revision schedules, and high-performance test strategies.",
    author: "Admin",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    url: "https://www.iflierintlschl.org/how-do-you-best-prepare-for-your-university-admission-exams/"
  }
];

const CAMPUS_GALLERY = [
  {
    id: 1,
    type: "video",
    title: "i-Flier International School Campus Video Tour",
    category: "Campus Video",
    url: "https://player.vimeo.com/video/362010255",
    directLink: "https://vimeo.com/362010255",
    thumbnail: "https://www.iflierintlschl.org/wp-content/uploads/2022/03/cropped-DSC_4309-scaled-1-600x401.jpg",
    description: "Explore the serene learning atmosphere, science laboratories, modern classrooms, and campus grounds of i-Flier International School, Ibadan."
  },
  {
    id: 2,
    type: "video",
    title: "i-Flier Special Presentations & Student Activities",
    category: "Video Broadcast",
    url: "https://player.vimeo.com/video/1116116353",
    directLink: "https://vimeo.com/1116116353",
    thumbnail: "https://www.iflierintlschl.org/wp-content/uploads/2019/10/GRADA-SENIOR.jpg",
    description: "Student presentations, classroom interactions, speech events, and academic highlights from the i-Flier community."
  },
  {
    id: 3,
    type: "image",
    title: "Senior Secondary School Graduating Class",
    category: "Graduation",
    url: "https://www.iflierintlschl.org/wp-content/uploads/2019/10/GRADA-SENIOR.jpg",
    description: "Our accomplished Senior Secondary students celebrated during valedictory and prize-giving celebrations."
  },
  {
    id: 4,
    type: "image",
    title: "School Leadership & Principal Administration",
    category: "Leadership",
    url: "https://www.iflierintlschl.org/wp-content/uploads/2019/10/PRINCIP.jpg",
    description: "Elder Olugboyega Adedeji and the seasoned educational leadership team ensuring quality and discipline."
  },
  {
    id: 5,
    type: "image",
    title: "i-Flier Campus Life & Student Assembly",
    category: "Campus Life",
    url: "https://www.iflierintlschl.org/wp-content/uploads/2022/03/cropped-DSC_4309-scaled-1-600x401.jpg",
    description: "Students in official school uniform at morning devotions and assembly on the Egbeda campus."
  },
  {
    id: 6,
    type: "image",
    title: "Modern Computer-Based Test (CBT) & E-Classroom Laboratory",
    category: "Technology",
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description: "State-of-the-art computer testing center equipped for digital literacy and UTME/JAMB drills."
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedAcademic, setSelectedAcademic] = useState(ACADEMIC_DIVISIONS[0].id);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);

  // Policies Modal & Filter State
  const [selectedPolicy, setSelectedPolicy] = useState<any | null>(null);
  const [policySearch, setPolicySearch] = useState('');

  // Gallery & Media State
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'image' | 'video'>('all');
  const [activeMediaItem, setActiveMediaItem] = useState<any | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [galleryViewMode, setGalleryViewMode] = useState<'slider' | 'grid'>('slider');

  // Admissions Form State
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    level: 'Primary School',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Search Filter state for news
  const [newsSearch, setNewsSearch] = useState('');
  const [articles, setArticles] = useState<any[]>(NEWS_ARTICLES);
  const [isWpConnected, setIsWpConnected] = useState(false);

  // Sticky 'Back to Top' Floating Action Button State & Progress
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Gallery items filtered by active category tab
  const filteredGallery = CAMPUS_GALLERY.filter(
    item => galleryFilter === 'all' || item.type === galleryFilter
  );

  const nextSlide = () => {
    if (filteredGallery.length === 0) return;
    setCurrentSlideIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const prevSlide = () => {
    if (filteredGallery.length === 0) return;
    setCurrentSlideIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  // Reset slide index if filtered list length changes
  useEffect(() => {
    if (currentSlideIndex >= filteredGallery.length) {
      setCurrentSlideIndex(0);
    }
  }, [galleryFilter, filteredGallery.length, currentSlideIndex]);

  // Automatic slideshow progression timer
  useEffect(() => {
    if (!isAutoSliding || filteredGallery.length <= 1 || galleryViewMode !== 'slider') return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % filteredGallery.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoSliding, filteredGallery.length, galleryViewMode]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowBackToTop(window.scrollY > heroBottom - 80);
      } else {
        setShowBackToTop(window.scrollY > 450);
      }

      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Attempt to fetch live articles and featured images from WordPress GraphQL endpoint
    async function fetchWpPosts() {
      try {
        const query = `
          query GetPosts {
            posts(first: 6) {
              nodes {
                id
                databaseId
                title
                date
                link
                uri
                excerpt
                author {
                  node {
                    name
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        `;
        const res = await fetch('https://www.iflierintlschl.org/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query })
        });
        const json = await res.json();
        if (json?.data?.posts?.nodes?.length > 0) {
          const fetched = json.data.posts.nodes.map((post: any) => ({
            id: post.databaseId || post.id,
            title: post.title,
            date: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            category: post.categories?.nodes?.[0]?.name || 'School News',
            snippet: post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').trim() : 'Click to read full story on the official website.',
            author: post.author?.node?.name || 'i-Flier Admin',
            imageUrl: post.featuredImage?.node?.sourceUrl || null,
            url: post.link || (post.uri ? `https://www.iflierintlschl.org${post.uri}` : 'https://www.iflierintlschl.org/')
          }));
          setArticles(fetched);
          setIsWpConnected(true);
        }
      } catch (err) {
        // Fall back gracefully to static NEWS_ARTICLES
      }
    }

    fetchWpPosts();
  }, []);

  // Scroll to section helper
  const navigateTo = (sectionId: string) => {
    setActiveTab(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900 overflow-x-clip">
      
      {/* Top Bar with Contacts and Direct Links */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-3 sm:px-4 border-b border-slate-800 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
            <a href={`tel:${SCHOOL_INFO.phone1}`} className="hover:text-white transition flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400 shrink-0" /> {SCHOOL_INFO.phone1}
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition flex items-center gap-1">
              <Mail className="w-3 h-3 text-amber-400 shrink-0" /> {SCHOOL_INFO.email}
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400 hidden sm:inline flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-400 shrink-0" /> {SCHOOL_INFO.hours}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="https://iflier1033fm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition flex items-center gap-1.5 font-medium px-2 py-0.5 rounded text-xs"
            >
              <Radio className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>i-Flier 103.3 FM Radio</span>
              <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
            </a>
            
            <button 
              id="btn-open-school-portal"
              onClick={() => setPortalModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1.5 transition shadow-xs cursor-pointer"
            >
              <Lock className="w-3 h-3 shrink-0" />
              School Portal
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            
            {/* Logo and Branding Displayed Clearly at Top Header */}
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0 min-w-0" onClick={() => navigateTo('home')}>
              <div className="relative h-10 sm:h-12 flex items-center justify-center p-1 bg-white rounded-xl border border-slate-200/80 shadow-2xs shrink-0">
                {logoLoaded ? (
                  <img 
                    src={SCHOOL_LOGO_URL} 
                    alt="i-Flier International School Logo" 
                    className="h-8 sm:h-10 w-auto max-h-10 object-contain"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoLoaded(false)}
                  />
                ) : (
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-900 via-indigo-900 to-amber-500 flex items-center justify-center text-white shadow-md font-black text-lg border border-blue-800">
                    iF
                  </div>
                )}
              </div>
              <div className="shrink-0">
                <h1 className="font-black text-sm sm:text-base md:text-lg text-slate-900 tracking-tight leading-tight">
                  i-Flier <span className="text-blue-900">International</span>
                </h1>
                <p className="text-[9px] sm:text-[11px] text-amber-600 font-bold tracking-wide uppercase">
                  {SCHOOL_INFO.motto}
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-5 font-semibold text-xs 2xl:text-sm text-slate-700 whitespace-nowrap">
              <button onClick={() => navigateTo('home')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'home' ? 'text-blue-900 font-bold' : ''}`}>Home</button>
              <button onClick={() => navigateTo('about')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'about' ? 'text-blue-900 font-bold' : ''}`}>About Us</button>
              <button onClick={() => navigateTo('academics')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'academics' ? 'text-blue-900 font-bold' : ''}`}>Academics</button>
              <button onClick={() => navigateTo('policies')} className={`hover:text-blue-900 transition cursor-pointer flex items-center gap-1 ${activeTab === 'policies' ? 'text-blue-900 font-bold' : ''}`}>
                <FileText className="w-3.5 h-3.5" /> Policies
              </button>
              <button onClick={() => navigateTo('facilities')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'facilities' ? 'text-blue-900 font-bold' : ''}`}>Facilities</button>
              <button onClick={() => navigateTo('gallery')} className={`hover:text-blue-900 transition cursor-pointer flex items-center gap-1 ${activeTab === 'gallery' ? 'text-blue-900 font-bold' : ''}`}>
                <Camera className="w-3.5 h-3.5" /> Gallery
              </button>
              <button onClick={() => navigateTo('news')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'news' ? 'text-blue-900 font-bold' : ''}`}>News</button>
              <button onClick={() => navigateTo('contact')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'contact' ? 'text-blue-900 font-bold' : ''}`}>Contact</button>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 shrink-0">
              <a 
                href="https://iflier1033fm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-xs font-bold px-2.5 sm:px-3 py-2 rounded-lg transition flex items-center gap-1.5 whitespace-nowrap"
              >
                <Radio className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="hidden md:inline">103.3 FM</span>
                <span className="md:hidden">FM</span>
                <ExternalLink className="w-3 h-3 text-amber-600 shrink-0" />
              </a>

              <button 
                id="btn-apply-desktop"
                onClick={() => navigateTo('admissions')} 
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-1 cursor-pointer whitespace-nowrap"
              >
                Apply <span className="hidden md:inline">Now</span> <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                id="btn-toggle-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <button onClick={() => navigateTo('home')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Home</button>
            <button onClick={() => navigateTo('about')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">About Us & Beliefs</button>
            <button onClick={() => navigateTo('academics')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Academic Divisions</button>
            <button onClick={() => navigateTo('policies')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 flex items-center gap-2 cursor-pointer">
              <FileText className="w-4 h-4 text-blue-900" /> 20 School Policies
            </button>
            <button onClick={() => navigateTo('facilities')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Campus Facilities</button>
            <button onClick={() => navigateTo('gallery')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 flex items-center gap-2 cursor-pointer">
              <Camera className="w-4 h-4 text-blue-900" /> Media & Video Gallery
            </button>
            <a 
              href="https://iflier1033fm.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-left py-2 font-medium text-amber-700 flex items-center justify-between"
            >
              <span className="flex items-center gap-2"><Radio className="w-4 h-4" /> i-Flier 103.3 FM Radio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button onClick={() => navigateTo('admissions')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Admissions & Eligibility</button>
            <button onClick={() => navigateTo('news')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">News & Articles</button>
            <button onClick={() => navigateTo('contact')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Contact & Map</button>
            
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); setPortalModalOpen(true); }} 
                className="w-full bg-slate-100 text-slate-900 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-amber-600" /> School Portal
              </button>
              <button 
                onClick={() => navigateTo('admissions')} 
                className="w-full bg-blue-900 text-white py-2.5 rounded-lg font-semibold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        )}
      </header>

      {/* School Portal Modal */}
      {portalModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col my-auto overflow-hidden border border-slate-200">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 relative shrink-0">
              <button 
                onClick={() => setPortalModalOpen(false)} 
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition cursor-pointer"
                aria-label="Close portal modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-950 font-black mb-3 sm:mb-4 shadow-md">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                i-Flier ERP & Cloud Portal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Access real-time academic records, grades, fee bills, and attendance.
              </p>
            </div>

            {/* Modal Content - Direct Cloud Access */}
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto max-h-[calc(90vh-140px)]">
              
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Direct Cloud Access:
              </div>

              {/* Azure Portal Card */}
              <div className="bg-slate-50 hover:bg-slate-100/90 border border-slate-200/90 rounded-xl sm:rounded-2xl p-3.5 sm:p-4.5 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 w-full">
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate">Citta ERP Azure</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Primary Microsoft Azure-hosted School ERP database for student dossiers, results, and administrative records.
                  </p>
                </div>
                <a 
                  href={ERP_PORTAL_LINKS.azure} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm w-full sm:w-auto shrink-0"
                >
                  <span>Open Portal</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Citta Nuvola Portal Card */}
              <div className="bg-slate-50 hover:bg-slate-100/90 border border-slate-200/90 rounded-xl sm:rounded-2xl p-3.5 sm:p-4.5 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 w-full">
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate">Citta Nuvola Portal</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cloud portal for students, parents, and teachers to access report cards, assignments, and fee schedules.
                  </p>
                </div>
                <a 
                  href={ERP_PORTAL_LINKS.cittaNuvola} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm w-full sm:w-auto shrink-0"
                >
                  <span>Open Portal</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Information / Support Notice */}
              <div className="bg-blue-50/70 border border-blue-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-xs text-slate-700 leading-relaxed space-y-1">
                <div className="font-bold text-blue-950 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                  <span>Portal Access & Authentication:</span>
                </div>
                <p className="text-slate-600 pl-5">
                  Direct login credentials are provided by the school administration upon enrollment. For credential recovery or technical questions, please contact the ICT records desk.
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
              <span className="truncate pr-2">Need help? <a href={`mailto:${SCHOOL_INFO.email}`} className="text-blue-900 font-semibold hover:underline">{SCHOOL_INFO.email}</a></span>
              <button 
                onClick={() => setPortalModalOpen(false)}
                className="text-slate-700 hover:text-slate-900 font-bold px-3 py-1.5 rounded-lg hover:bg-slate-200 transition cursor-pointer shrink-0"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white overflow-hidden py-16 sm:py-24">
        
        {/* Subtle Campus Photography Background Overlay */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-luminosity pointer-events-none scale-105"
          style={{ backgroundImage: `url('https://www.iflierintlschl.org/wp-content/uploads/2022/03/cropped-DSC_4309-scaled-1-600x401.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950/90 pointer-events-none"></div>

        {/* Decorative Glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-amber-400 backdrop-blur-sm shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Pacesetter in Academic & Moral Excellence</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Empowering Every Student to Become <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Somebody Great.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                At <strong className="text-white font-semibold">i-Flier International School</strong>, Ibadan, we nurture latent talents from Nursery through Senior Secondary & Tutorial levels with world-class facilities and high moral standards.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  id="btn-hero-admissions"
                  onClick={() => navigateTo('admissions')}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/20 transition flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  Admissions Open <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  id="btn-hero-erp"
                  onClick={() => setPortalModalOpen(true)}
                  className="w-full sm:w-auto bg-slate-800/90 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-amber-400" /> School Portal
                </button>
              </div>

              {/* Belief Pill Banner */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="bg-slate-800/50 border border-slate-800 p-3 rounded-lg">
                  <div className="text-xs text-slate-400 font-medium">Core Belief</div>
                  <div className="text-sm font-semibold text-amber-300 mt-0.5">"Everybody can be Somebody"</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-800 p-3 rounded-lg">
                  <div className="text-xs text-slate-400 font-medium">Campus Frequency</div>
                  <div className="text-sm font-semibold text-white mt-0.5">103.3 FM Radio</div>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-slate-800/50 border border-slate-800 p-3 rounded-lg">
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Ibadan, Nigeria</div>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Campus Imagery Showcase */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
                
                {/* Main Hero Photo Card: Graduating Scholars */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-800">
                  <img 
                    src="https://www.iflierintlschl.org/wp-content/uploads/2019/10/GRADA-SENIOR.jpg"
                    alt="i-Flier Senior Secondary School Graduating Class"
                    className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Floating Badges on Photo */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-blue-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 flex items-center gap-1.5 shadow-sm">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                      Class of Distinction
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-md">
                      WAEC & NECO Centre
                    </span>
                  </div>

                  {/* Caption on Bottom of Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <h3 className="font-extrabold text-white text-base sm:text-lg">
                      Senior Secondary Scholars
                    </h3>
                    <p className="text-xs text-slate-300">
                      Celebrating excellence, discipline, and outstanding academic achievements.
                    </p>
                  </div>
                </div>

                {/* Secondary Inset Card with Campus Life Photo & Trust Highlights */}
                <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl backdrop-blur-md shadow-xl grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  
                  <div className="sm:col-span-4 rounded-xl overflow-hidden border border-slate-700 h-24 sm:h-full bg-slate-800">
                    <img 
                      src="https://www.iflierintlschl.org/wp-content/uploads/2022/03/cropped-DSC_4309-scaled-1-600x401.jpg"
                      alt="Students on i-Flier Campus"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="sm:col-span-8 space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-amber-400 flex items-center gap-1">
                        <Award className="w-4 h-4" /> Accredited Institution
                      </div>
                      <button 
                        onClick={() => navigateTo('academics')}
                        className="text-xs text-slate-300 hover:text-white font-semibold flex items-center gap-1 cursor-pointer hover:underline"
                      >
                        Curriculum <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-300 leading-snug">
                      Nursery • Primary • JSS • SSS • CBT Centre & Boarding Facilities.
                    </p>

                    <div className="flex items-center gap-2 pt-1 flex-wrap">
                      <span className="text-[11px] bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">
                        ✓ CBT Computer Labs
                      </span>
                      <span className="text-[11px] bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">
                        ✓ Boarding Houses
                      </span>
                      <span className="text-[11px] bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">
                        ✓ Science Labs
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Welcome to i-Flier International School
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Recognized globally as a pacesetter in academic excellence and moral leadership. We believe education is a fundamental right, driven by quality, discipline, and purpose.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Mission */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-xs hover:shadow-md transition space-y-4">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center font-bold text-xl">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                "{MISSION_STATEMENT}"
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-xs hover:shadow-md transition space-y-4">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center font-bold text-xl">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                "{VISION_STATEMENT}"
              </p>
            </div>

          </div>

          {/* Core Values Grid */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900">Our Core Values</h3>
              <p className="text-sm text-slate-500">Pillars that guide our daily student life and staff culture</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {CORE_VALUES.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl text-center space-y-2 hover:border-blue-900 transition hover:-translate-y-1 shadow-2xs">
                    <div className="w-10 h-10 bg-blue-50 text-blue-900 rounded-lg mx-auto flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{val.name}</h4>
                    <p className="text-xs text-slate-500 leading-snug">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Beliefs Section */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">Our Core Motto & Philosophy</span>
              <h3 className="text-3xl font-extrabold text-white">"Everybody Can Be Somebody"</h3>
              
              <p className="text-slate-300 text-sm sm:text-base">
                We believe unrecognized talent lies latent in every child. Our goal is to transform potential into world-class performance.
              </p>

              <div className="space-y-3 pt-2">
                {BELIEFS.map((belief, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></div>
                    <span>{belief}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-[-50px] bottom-[-50px] w-80 h-80 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* ACADEMICS SECTION */}
      <section id="academics" className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Academic Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Academic Divisions
            </h2>
            <p className="text-slate-600 text-base">
              A progressive curriculum tailored from early childhood to post-secondary entrance examinations.
            </p>
          </div>

          {/* Academic Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {ACADEMIC_DIVISIONS.map((division) => (
              <button
                key={division.id}
                onClick={() => setSelectedAcademic(division.id)}
                className={`px-5 py-3 rounded-xl font-bold text-sm transition shadow-2xs cursor-pointer ${
                  selectedAcademic === division.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200'
                }`}
              >
                {division.title}
              </button>
            ))}
          </div>

          {/* Selected Academic Division Detail Card */}
          {ACADEMIC_DIVISIONS.filter(d => d.id === selectedAcademic).map((div: any) => (
            <div key={div.id} className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                      {div.badge}
                    </span>
                    <span className="text-slate-500 text-xs font-semibold">{div.age}</span>
                    {div.subjects && (
                      <span className="bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {div.subjects.length} Core Subjects
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-extrabold text-slate-900">{div.title}</h3>
                  <p className="text-blue-900 font-semibold text-base">{div.tagline}</p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{div.description}</p>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-slate-900 text-sm">Key Features & Pedagogical Focus:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {div.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trade Subjects for Senior Secondary */}
                  {div.tradeSubjects && (
                    <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                        <Award className="w-4 h-4 text-amber-700" /> Vocational Trade Courses (Compulsory 1 per student)
                      </div>
                      <p className="text-xs text-slate-700">Practical entrepreneurship training aligned with the National Policy on Education:</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {div.tradeSubjects.map((trade: string, tIdx: number) => (
                          <span key={tIdx} className="bg-white border border-amber-300 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                            ★ {trade}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Registered Examination Boards */}
                  {div.examBoards && (
                    <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-800" /> Registered Examination Accreditation
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {div.examBoards.map((board: string, bIdx: number) => (
                          <div key={bIdx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                            <Check className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                            <span>{board}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button 
                      onClick={() => navigateTo('admissions')}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2 shadow-2xs cursor-pointer"
                    >
                      Enquire for {div.title} <ChevronRight className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => {
                        const curriculumPol = SCHOOL_POLICIES.find(p => p.id === 8);
                        if (curriculumPol) setSelectedPolicy(curriculumPol);
                      }}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-3 rounded-xl transition text-sm flex items-center gap-2 border border-slate-200 cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-blue-900" /> View Curriculum Policy
                    </button>
                  </div>
                </div>

                {/* Right Side Info Box */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 rounded-2xl space-y-6 relative overflow-hidden">
                  <GraduationCap className="w-16 h-16 text-amber-400/20 absolute top-4 right-4" />
                  <h4 className="text-xl font-bold text-amber-400">Why Parents Choose i-Flier</h4>
                  <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <UserCheck className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>Seasoned and passionate teaching personnel committed to individual talent discovery.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>Zero tolerance for bullying with strict physical and emotional student safeguarding.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Laptop className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>Digital integration with real-time Citta ERP academic & fee portal.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>Cursive handwriting emphasis and continuous standards-based student evaluation.</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-center">
                    <span className="text-xs text-slate-400">Official Hours: Monday - Friday, 8:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Subject Breakdown Cloud */}
              {div.subjects && div.subjects.length > 0 && (
                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-900" /> Complete Subject List ({div.subjects.length} Subjects):
                    </h4>
                    <span className="text-xs text-slate-500">Taught by qualified subject specialists</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {div.subjects.map((sub: string, sIdx: number) => (
                      <span key={sIdx} className="bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-900 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium transition">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}

        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Campus Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              World-Class Facilities
            </h2>
            <p className="text-slate-600 text-base">
              Providing a conducive learning and development environment with modern infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((facility, idx) => {
              const IconComp = facility.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-blue-900 transition hover:shadow-lg space-y-4 group">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-md">
                      {facility.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{facility.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{facility.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 20 SCHOOL POLICIES & FRAMEWORKS SECTION */}
      <section id="policies" className="py-20 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-100/80 px-3.5 py-1 rounded-full border border-blue-200">
                Institutional Governance & Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Official School Policies (20 Frameworks)
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                i-Flier International School is governed by clear, rigorous policies ensuring child protection, non-discrimination, curriculum excellence, assessment standards, and transparent community partnership.
              </p>
            </div>

            {/* Search Input for Policies */}
            <div className="w-full md:w-80">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input 
                  type="text" 
                  value={policySearch}
                  onChange={(e) => setPolicySearch(e.target.value)}
                  placeholder="Search policies (e.g. curriculum, handwriting, bullying)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            </div>
          </div>

          {/* Policy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOOL_POLICIES
              .filter(p => {
                if (!policySearch.trim()) return true;
                const q = policySearch.toLowerCase();
                return p.title.toLowerCase().includes(q) || 
                       p.category.toLowerCase().includes(q) || 
                       p.summary.toLowerCase().includes(q) ||
                       (p.fullContent && p.fullContent.toLowerCase().includes(q));
              })
              .map((policy) => (
                <div 
                  key={policy.id} 
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-900 transition flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-lg bg-blue-900 text-white font-black text-xs flex items-center justify-center">
                        #{policy.id}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {policy.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition line-clamp-2">
                      {policy.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {policy.summary}
                    </p>
                  </div>

                  <button 
                    onClick={() => setSelectedPolicy(policy)}
                    className="w-full mt-2 bg-slate-50 group-hover:bg-blue-900 text-slate-800 group-hover:text-white border border-slate-200 group-hover:border-blue-900 font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> Read Full Policy Text
                  </button>
                </div>
              ))}
          </div>

          {/* Quick Notice */}
          <div className="bg-blue-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base text-amber-400 flex items-center gap-2 justify-center sm:justify-start">
                <FileCheck className="w-5 h-5 text-amber-400" /> Compliance & Governance Inquiries
              </h4>
              <p className="text-xs text-slate-300">
                All policies are approved by the School Advisory Board and reviewed annually for statutory alignment.
              </p>
            </div>
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition shrink-0 cursor-pointer"
            >
              Contact Board Secretariat
            </button>
          </div>

        </div>
      </section>

      {/* RADIO SECTION */}
      <section id="radio" className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-400">
                <Radio className="w-3.5 h-3.5" />
                Campus & Community Broadcast Network
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                i-Flier <span className="text-amber-400">103.3 FM</span> Radio
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Launched to keep education continuous and engaging, i-Flier 103.3 FM broadcasts educational tutorials, student debates, school news, and community enrichment programs live across Ibadan and surrounding regions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Educational On-Air Classes</h4>
                  <p className="text-xs text-slate-400">Radio lessons covering Mathematics, English, Sciences, and General Knowledge.</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Student Broadcasting Club</h4>
                  <p className="text-xs text-slate-400">Empowering students with public speaking, journalism, and audio media skills.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a 
                  href="https://iflier1033fm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition flex items-center gap-2 text-sm shadow-lg hover:shadow-amber-500/20"
                >
                  <Radio className="w-5 h-5" /> Visit Official 103.3 FM Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-6">
              <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-2xl mx-auto flex items-center justify-center">
                <Radio className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">On-Air Broadcasting Schedule</h3>
              <div className="space-y-3 text-xs text-left">
                <div className="bg-slate-800/60 p-3 rounded-lg flex justify-between items-center">
                  <span>Morning Edu-Hour (Primary Math)</span>
                  <span className="font-bold text-amber-400">08:30 AM</span>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-lg flex justify-between items-center">
                  <span>UTME / WAEC Quiz Drill</span>
                  <span className="font-bold text-amber-400">11:00 AM</span>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-lg flex justify-between items-center">
                  <span>i-Flier Youth & Cultural Forum</span>
                  <span className="font-bold text-amber-400">01:30 PM</span>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-slate-400">Frequency: 103.3 MHz FM | Coverage: Oyo State & Environs</p>
                <a href="https://iflier1033fm.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 mt-2">
                  www.iflier1033fm.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ADMISSIONS SECTION */}
      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Join Our Family
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Admissions & Enrollment Process
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We welcome students from both Nigeria and abroad. Admission into i-Flier International School is structured to ensure every child is placed in an environment that maximizes their potential.
              </p>

              {/* Step Process */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Submit Information Inquiry</h4>
                    <p className="text-xs text-slate-600">Fill out the online request form or visit our campus in Egbeda, Ibadan.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Assessment & Placement Interactive Session</h4>
                    <p className="text-xs text-slate-600">A child-friendly evaluation to determine academic readiness and learning level.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Formal Admission Offer & Orientation</h4>
                    <p className="text-xs text-slate-600">Receive offer details, school uniform, boarding allocations, and portal credentials.</p>
                  </div>
                </div>
              </div>

              {/* Download Brochure Box */}
              <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Need School Prospectus?</h4>
                  <p className="text-xs text-slate-600">Download details on fees, curriculum, and boarding guidelines.</p>
                </div>
                <button onClick={() => alert('Downloading i-Flier School Information Package...')} className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg font-bold text-xs shrink-0 transition cursor-pointer">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Right Side Inquiry Form */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Admission Request</h3>
              <p className="text-xs text-slate-500 mb-6">Our admissions team will respond within 24 business hours.</p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg">Inquiry Received Successfully!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you, <strong>{formData.parentName}</strong>. Our admissions officer will contact you at <strong>{formData.phone}</strong> regarding entry into <strong>{formData.level}</strong>.
                  </p>
                  <button 
                    onClick={() => { setFormSubmitted(false); setFormData({ parentName: '', email: '', phone: '', studentName: '', level: 'Primary School', message: '' }); }} 
                    className="bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg mt-2 cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent / Guardian Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Mr. Olumide Johnson"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Child's Name</label>
                      <input 
                        type="text" 
                        placeholder="Child's Name"
                        value={formData.studentName}
                        onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Academic Level *</label>
                      <select 
                        value={formData.level}
                        onChange={(e) => setFormData({...formData, level: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                      >
                        <option value="Nursery School">Nursery School</option>
                        <option value="Primary School">Primary School</option>
                        <option value="Junior Secondary School">Junior Secondary School (JSS)</option>
                        <option value="Senior Secondary School">Senior Secondary School (SSS)</option>
                        <option value="Tutorial Centre">Tutorial Centre (UTME/WAEC)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Additional Notes / Questions</label>
                    <textarea 
                      rows={3} 
                      placeholder="Ask about boarding facilities, fee structures, transport, etc."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    Submit Admission Inquiry <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* CAMPUS MEDIA & VIDEO GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Visual Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Campus Media & Video Gallery
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Explore life at i-Flier International School through our sliding photo archives, practical science sessions, and broadcast highlights.
              </p>
            </div>

            {/* Filter and View Mode Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => setGalleryFilter('all')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    galleryFilter === 'all'
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({CAMPUS_GALLERY.length})
                </button>
                <button
                  onClick={() => setGalleryFilter('image')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    galleryFilter === 'image'
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" /> Photos
                </button>
                <button
                  onClick={() => setGalleryFilter('video')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    galleryFilter === 'video'
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" /> Videos
                </button>
              </div>

              {/* View Mode Toggle: Slider vs Grid */}
              <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => setGalleryViewMode('slider')}
                  title="Interactive Slide View"
                  className={`p-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    galleryViewMode === 'slider'
                      ? 'bg-white text-blue-900 shadow-sm border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Slider</span>
                </button>
                <button
                  onClick={() => setGalleryViewMode('grid')}
                  title="Full Grid View"
                  className={`p-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    galleryViewMode === 'grid'
                      ? 'bg-white text-blue-900 shadow-sm border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-blue-900" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>
            </div>
          </div>

          {/* SLIDER VIEW MODE */}
          {galleryViewMode === 'slider' && filteredGallery.length > 0 && (
            <div className="space-y-6">
              
              {/* Main Slide Stage */}
              <div className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex flex-col justify-end group">
                
                {/* Slide Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    key={filteredGallery[currentSlideIndex]?.id}
                    src={
                      filteredGallery[currentSlideIndex]?.type === 'video'
                        ? (filteredGallery[currentSlideIndex]?.thumbnail || filteredGallery[currentSlideIndex]?.url)
                        : filteredGallery[currentSlideIndex]?.url
                    }
                    alt={filteredGallery[currentSlideIndex]?.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlays for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent"></div>
                </div>

                {/* Top Slide Meta Bar */}
                <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                      {filteredGallery[currentSlideIndex]?.type === 'video' ? (
                        <>
                          <Film className="w-3.5 h-3.5 text-amber-400" />
                          <span className="text-amber-400">Video Broadcast</span>
                        </>
                      ) : (
                        <>
                          <Camera className="w-3.5 h-3.5 text-blue-400" />
                          <span>Campus Photo</span>
                        </>
                      )}
                    </span>

                    <span className="bg-amber-500/90 text-slate-950 text-xs font-black px-3 py-1.5 rounded-full shadow-xs">
                      {filteredGallery[currentSlideIndex]?.category}
                    </span>
                  </div>

                  {/* Slide Counter & Autoplay Control */}
                  <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-xs font-mono text-white">
                    <button
                      onClick={() => setIsAutoSliding(!isAutoSliding)}
                      className="hover:text-amber-400 transition cursor-pointer p-0.5"
                      title={isAutoSliding ? "Pause slideshow autoplay" : "Resume slideshow autoplay"}
                      aria-label="Toggle autoplay"
                    >
                      {isAutoSliding ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>
                    <span className="text-slate-500">|</span>
                    <span className="font-bold text-amber-400">
                      {String(currentSlideIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-400">
                      {String(filteredGallery.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Left / Right Slide Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Bottom Slide Content Overlay */}
                <div className="relative z-10 p-6 sm:p-10 max-w-3xl space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-md">
                    {filteredGallery[currentSlideIndex]?.title}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl drop-shadow-sm">
                    {filteredGallery[currentSlideIndex]?.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveMediaItem(filteredGallery[currentSlideIndex])}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition flex items-center gap-2 text-xs sm:text-sm shadow-lg cursor-pointer hover:scale-105 active:scale-95"
                    >
                      {filteredGallery[currentSlideIndex]?.type === 'video' ? (
                        <>
                          <Play className="w-4 h-4 fill-slate-950" /> Watch Broadcast
                        </>
                      ) : (
                        <>
                          <Maximize2 className="w-4 h-4" /> Expand in Lightbox
                        </>
                      )}
                    </button>
                    
                    <span className="text-slate-400 text-xs hidden sm:inline">
                      • Click expand for high-resolution inspection
                    </span>
                  </div>
                </div>

                {/* Slide Progress Indicator Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
                  <div 
                    className="h-full bg-amber-400 transition-all duration-500"
                    style={{ width: `${((currentSlideIndex + 1) / filteredGallery.length) * 100}%` }}
                  ></div>
                </div>

              </div>

              {/* Interactive Thumbnail Carousel Strip */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Click thumbnail to slide directly:</span>
                  <span>{filteredGallery.length} Items in Current View</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                  {filteredGallery.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSlideIndex(index)}
                      className={`relative rounded-xl overflow-hidden h-20 sm:h-24 w-full transition duration-300 text-left border cursor-pointer group ${
                        currentSlideIndex === index
                          ? 'ring-3 ring-amber-500 ring-offset-2 border-amber-500 scale-102 shadow-md'
                          : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-blue-900'
                      }`}
                    >
                      <img
                        src={item.type === 'video' ? (item.thumbnail || item.url) : item.url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-1.5 left-2 right-2 text-[10px] font-bold text-white truncate">
                        {item.title}
                      </div>

                      {item.type === 'video' && (
                        <div className="absolute top-1.5 right-1.5 p-1 bg-amber-500 text-slate-950 rounded-full">
                          <Play className="w-2.5 h-2.5 fill-current" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* GRID VIEW MODE */}
          {(galleryViewMode === 'grid' || filteredGallery.length === 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGallery.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveMediaItem(item)}
                  className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={item.type === 'video' ? (item.thumbnail || item.url) : item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Type Overlay Badge */}
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                      {item.type === 'video' ? (
                        <>
                          <Film className="w-3 h-3 text-amber-400" />
                          <span className="text-amber-400">Video Broadcast</span>
                        </>
                      ) : (
                        <>
                          <Camera className="w-3.5 h-3.5 text-blue-400" />
                          <span>Campus Photo</span>
                        </>
                      )}
                    </div>

                    {/* Play Button Overlay for Videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 group-hover:bg-slate-950/10 transition">
                        <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Eye hover for Images */}
                    {item.type === 'image' && (
                      <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <span className="bg-white text-blue-900 font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                          <Eye className="w-4 h-4" /> Expand Photo
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="px-6 pb-5 pt-0 text-xs font-bold text-blue-900 flex items-center gap-1">
                    {item.type === 'video' ? 'Watch Broadcast →' : 'View Full Image →'}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="py-20 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  School Updates
                </span>
                {isWpConnected && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live from WordPress
                  </span>
                )}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                i-Flier News & Insights
              </h2>
            </div>

            {/* Search Filter input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input 
                type="text" 
                placeholder="Search articles..."
                value={newsSearch}
                onChange={(e) => setNewsSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.filter(art => art.title.toLowerCase().includes(newsSearch.toLowerCase()) || art.snippet.toLowerCase().includes(newsSearch.toLowerCase())).map((article) => (
              <div key={article.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col justify-between group">
                {article.imageUrl && (
                  <a 
                    href={article.url || "https://www.iflierintlschl.org/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-48 w-full overflow-hidden bg-slate-100 relative block"
                  >
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded">
                      {article.category}
                    </div>
                  </a>
                )}
                
                <div className="p-6 space-y-3">
                  {!article.imageUrl && (
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="bg-blue-50 text-blue-900 font-bold px-2.5 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </span>
                    </div>
                  )}

                  {article.imageUrl && (
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </span>
                      <span>By {article.author}</span>
                    </div>
                  )}

                  <h3 className="font-bold text-slate-900 text-lg leading-snug hover:text-blue-900 transition">
                    <a 
                      href={article.url || "https://www.iflierintlschl.org/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {article.title}
                    </a>
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {article.snippet}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-4">
                  <span>By {article.author}</span>
                  <a 
                    href={article.url || "https://www.iflierintlschl.org/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 font-bold hover:underline flex items-center gap-1"
                  >
                    Read Story <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Visit or Contact Us
            </h2>
            <p className="text-slate-600 text-base">
              We welcome prospective parents and guardians to visit our campus in Ibadan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-3xl space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-amber-400">Campus Address & Hours</h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white">Location:</strong>
                      <p className="text-slate-300 text-xs leading-relaxed">{SCHOOL_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white">Phone Numbers:</strong>
                      <p className="text-slate-300 text-xs">{SCHOOL_INFO.phone1} / {SCHOOL_INFO.phone2}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white">Email Address:</strong>
                      <p className="text-slate-300 text-xs">{SCHOOL_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white">Working Hours:</strong>
                      <p className="text-slate-300 text-xs">{SCHOOL_INFO.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 space-y-2">
                <div className="text-xs text-slate-400">Leadership:</div>
                <div className="text-xs text-slate-200"><strong>Founder / CEO:</strong> {SCHOOL_INFO.founder}</div>
                <div className="text-xs text-slate-200"><strong>Principal:</strong> {SCHOOL_INFO.principal}</div>
              </div>

            </div>

            {/* Map Preview Card Placeholder */}
            <div className="lg:col-span-7 bg-slate-100 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900 uppercase">Campus Location Map</span>
                  <span className="text-xs text-slate-500">Ibadan, Oyo State</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900">How to Find i-Flier International School</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Located along I-Flier College Road, directly opposite DonBosco Youth Centre at Ogungbade, Egbeda local government area, Ibadan. Accessible from major Ibadan routes.
                </p>

                {/* Simulated Map Visual Box */}
                <div className="bg-slate-200 border border-slate-300 rounded-2xl h-56 flex flex-col items-center justify-center p-6 text-center relative">
                  <MapPin className="w-10 h-10 text-red-600 mb-2 animate-bounce" />
                  <p className="font-bold text-slate-800 text-sm">i-Flier International School Campus</p>
                  <p className="text-xs text-slate-500 mt-1">Opposite DonBosco Youth Centre, Ogungbade, Egbeda</p>
                  
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_INFO.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition flex items-center gap-1.5"
                  >
                    Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500 text-center">
                Visiting hours for prospective parents: 9:00 AM – 1:00 PM (Monday – Friday)
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* School Brand Column with Official Footer Logo */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-slate-700 shrink-0">
                  <img 
                    src={SCHOOL_FOOTER_LOGO_URL} 
                    alt="i-Flier International School Logo" 
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg text-white block leading-tight">i-Flier International School</span>
                  <span className="text-xs text-slate-400">Ibadan, Oyo State, Nigeria</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Nurturing latent potential and fostering academic and moral leadership in an inspiring environment from Nursery through Secondary.
              </p>
              <div className="text-xs text-amber-400 font-semibold">
                "{SCHOOL_INFO.motto}"
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Academic Divisions</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigateTo('academics')} className="hover:text-amber-400 transition cursor-pointer">Nursery School</button></li>
                <li><button onClick={() => navigateTo('academics')} className="hover:text-amber-400 transition cursor-pointer">Primary School</button></li>
                <li><button onClick={() => navigateTo('academics')} className="hover:text-amber-400 transition cursor-pointer">Junior Secondary (JSS)</button></li>
                <li><button onClick={() => navigateTo('academics')} className="hover:text-amber-400 transition cursor-pointer">Senior Secondary (SSS)</button></li>
                <li><button onClick={() => navigateTo('academics')} className="hover:text-amber-400 transition cursor-pointer">Tutorial Centre (UTME/WAEC)</button></li>
              </ul>
            </div>

            {/* Resources & Facilities */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Campus Facilities</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigateTo('facilities')} className="hover:text-amber-400 transition cursor-pointer">Boarding Houses</button></li>
                <li><button onClick={() => navigateTo('facilities')} className="hover:text-amber-400 transition cursor-pointer">Computer & CBT Labs</button></li>
                <li><button onClick={() => navigateTo('facilities')} className="hover:text-amber-400 transition cursor-pointer">Science Laboratories</button></li>
                <li><a href="https://iflier1033fm.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition flex items-center gap-1">i-Flier 103.3 FM Radio <ExternalLink className="w-3 h-3" /></a></li>
                <li><button onClick={() => navigateTo('facilities')} className="hover:text-amber-400 transition cursor-pointer">Library & E-Classrooms</button></li>
              </ul>
            </div>

            {/* Quick Portals */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Portals & Policies</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setPortalModalOpen(true)} className="text-amber-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"><Lock className="w-3 h-3" /> i-Flier School Portal</button></li>
                <li><a href={ERP_PORTAL_LINKS.azure} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Azure ERP Cloud</a></li>
                <li><button onClick={() => navigateTo('policies')} className="hover:text-amber-400 transition cursor-pointer">20 School Policies</button></li>
                <li><button onClick={() => navigateTo('admissions')} className="hover:text-amber-400 transition cursor-pointer">Admissions Eligibility</button></li>
                <li><button onClick={() => navigateTo('gallery')} className="hover:text-amber-400 transition cursor-pointer">Media & Video Gallery</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition cursor-pointer">Contact & Map</button></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              © {new Date().getFullYear()} i-Flier International School, Ibadan. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Egbeda, Ibadan, Nigeria</span>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition cursor-pointer">
                Back to top ↑
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* POLICY FULL-DETAIL MODAL */}
      {selectedPolicy && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative border border-slate-200">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 relative shrink-0">
              <button 
                onClick={() => setSelectedPolicy(null)}
                className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition cursor-pointer"
                aria-label="Close policy modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-md">
                  Policy #{selectedPolicy.id}
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                  {selectedPolicy.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {selectedPolicy.title}
              </h3>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">Executive Summary:</div>
                <p className="text-sm font-medium text-blue-950 leading-relaxed">
                  {selectedPolicy.summary}
                </p>
              </div>

              {selectedPolicy.fullContent ? (
                <div className="space-y-4 text-sm leading-relaxed text-slate-700 whitespace-pre-line border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900 text-base">Full Statutory Provisions:</div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
                    {selectedPolicy.fullContent}
                  </div>
                </div>
              ) : (
                <div className="space-y-3 border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900 text-sm">Policy Implementation Standards:</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    This official policy is maintained under the custody of the Principal and the School Governing Board. All academic instructors, administrative officers, parents, and enrolled students are subject to the stipulations detailed in the school handbook.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded-xl font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Statutory compliance verified for the current academic session.</span>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500">
                i-Flier International School Governance Framework
              </span>
              <button 
                onClick={() => setSelectedPolicy(null)}
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-xl transition text-xs cursor-pointer"
              >
                Close Policy Document
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MEDIA LIGHTBOX / VIDEO PLAYER MODAL */}
      {activeMediaItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative text-white">
            
            {/* Modal Close Button */}
            <button 
              onClick={() => setActiveMediaItem(null)}
              className="absolute top-4 right-4 z-20 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full transition cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Display Area */}
            {activeMediaItem.type === 'video' ? (
              <div className="relative aspect-video w-full bg-black">
                <iframe 
                  src={`${activeMediaItem.url}?autoplay=1`} 
                  title={activeMediaItem.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="max-h-[70vh] w-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src={activeMediaItem.url} 
                  alt={activeMediaItem.title} 
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
            )}

            {/* Caption & Metadata */}
            <div className="p-6 space-y-2 bg-slate-900 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">
                  {activeMediaItem.category}
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  i-Flier {activeMediaItem.type === 'video' ? 'Video Broadcast' : 'Campus Photo Archive'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{activeMediaItem.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{activeMediaItem.description}</p>
            </div>

          </div>
        </div>
      )}

      {/* STICKY 'BACK TO TOP' FLOATING ACTION BUTTON */}
      {showBackToTop && (
        <button
          id="btn-back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title={`Scroll back to top (${Math.round(scrollProgress)}% scrolled)`}
          className="fixed bottom-6 right-6 z-40 bg-slate-900/95 hover:bg-slate-900 text-white p-2 sm:px-3.5 sm:py-2.5 rounded-full shadow-2xl hover:shadow-amber-500/30 border border-slate-700/80 hover:border-amber-400 transition-all duration-300 flex items-center gap-2.5 group backdrop-blur-md cursor-pointer animate-in fade-in slide-in-from-bottom-5 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="16"
                className="text-slate-800"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
              />
              <circle
                cx="20"
                cy="20"
                r="16"
                className="text-amber-400 transition-all duration-150"
                strokeWidth="3"
                stroke="currentColor"
                strokeDasharray="100.5"
                strokeDashoffset={100.5 - (scrollProgress / 100) * 100.5}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <ChevronUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left pr-1">
            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase leading-none">Back to</span>
            <span className="text-xs font-black text-white tracking-wide mt-0.5">Top ({Math.round(scrollProgress)}%)</span>
          </div>
        </button>
      )}

    </div>
  );
}

