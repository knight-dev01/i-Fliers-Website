/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  Compass
} from 'lucide-react';

const SCHOOL_LOGO_URL = "https://www.iflierintlschl.org/wp-content/uploads/2018/05/logo-6.jpg";

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

const ACADEMIC_DIVISIONS = [
  {
    id: "nursery",
    title: "Nursery School",
    age: "Ages 2 - 5 Years",
    tagline: "Building strong foundational cognitive & social skills",
    description: "Our Early Years program provides a warm, safe, and stimulating environment where toddlers explore, imagine, and learn basic literacy, numeracy, and social interaction through guided play and modern teaching techniques.",
    highlights: ["Interactive Learning Aids", "Child-Centered Curriculum", "Phonics & Early Numeracy", "Safe Outdoor Play Area"],
    badge: "Early Years"
  },
  {
    id: "primary",
    title: "Primary School",
    age: "Ages 6 - 11 Years",
    tagline: "Nurturing curiosity, core academics & moral foundation",
    description: "Our Primary curriculum merges rigorous standards-based instruction with hands-on learning. We develop well-rounded children with strong communication skills, mathematical reasoning, and high moral discipline.",
    highlights: ["STEM & Basic ICT", "Quantitative & Verbal Aptitude", "Moral & Civic Education", "Excursions & Co-curricular"],
    badge: "Elementary"
  },
  {
    id: "jss",
    title: "Junior Secondary School (JSS)",
    age: "JSS 1 - JSS 3",
    tagline: "Bridging foundational learning into analytical mastery",
    description: "Designed to prepare students for the BECE exams while honing critical thinking, problem-solving, and leadership skills. Students participate in science practicals, ICT projects, and creative arts.",
    highlights: ["Basic Science & Tech Labs", "Computer-Based Testing Prep", "Leadership Development", "Sports & Club Activities"],
    badge: "Lower Secondary"
  },
  {
    id: "sss",
    title: "Senior Secondary School (SSS)",
    age: "SSS 1 - SSS 3",
    tagline: "Preparing global leaders for WAEC, NECO & University Entry",
    description: "A comprehensive senior secondary education offering Science, Arts, and Commercial tracks. With seasoned educators and modern lab facilities, our students achieve stellar results in national and international board exams.",
    highlights: ["WAEC & NECO Mastery", "Advanced Science Labs", "Career Counseling", "University Prep Program"],
    badge: "Upper Secondary"
  },
  {
    id: "tutorial",
    title: "Tutorial Centre",
    age: "UTME / POST-UTME / SSCE",
    tagline: "Specialized exam prep and academic empowerment",
    description: "An intensive tutorial facility equipped with a Computer Based Test (CBT) center to drill students for UTME/JAMB, POST-UTME, and external WAEC/NECO resits with high success rates.",
    highlights: ["CBT Exam Practice", "Subject Specialist Tutors", "Mock Tests & Analysis", "High Pass Rate"],
    badge: "Exam Prep Hub"
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
    title: "How to Succeed at School: Key Strategies for Every Student",
    date: "March 16, 2026",
    category: "Academic Tips",
    snippet: "Discover effective study habits, time management routines, and how personal motivation drives long-term academic excellence.",
    author: "School Admin"
  },
  {
    id: 2,
    title: "Choosing the Right Career That Fits Your Passion and Talent",
    date: "March 15, 2026",
    category: "Career Guidance",
    snippet: "Unlocking latent talents and guiding senior secondary students towards fulfilling career paths in STEM, Arts, and Business.",
    author: "Guidance Counselor"
  },
  {
    id: 3,
    title: "How to Best Prepare for Your University Admission Exams (UTME/WAEC)",
    date: "March 15, 2026",
    category: "Exam Prep",
    snippet: "Proven strategies for tackling Computer Based Tests (CBT), mastering time management, and achieving top scores.",
    author: "Tutorial Centre Director"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedAcademic, setSelectedAcademic] = useState(ACADEMIC_DIVISIONS[0].id);
  const [radioPlaying, setRadioPlaying] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [portalRole, setPortalRole] = useState<'student' | 'parent' | 'staff'>('student');
  const [logoLoaded, setLogoLoaded] = useState(true);

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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900">
      
      {/* Top Bar with Emergency Contacts and Radio Station Notice */}
      <div className="bg-slate-900 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Radio className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              On-Air: i-Flier {SCHOOL_INFO.radioFrequency}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href={`tel:${SCHOOL_INFO.phone1}`} className="hover:text-white transition flex items-center gap-1">
              <Phone className="w-3 h-3 text-slate-400" /> {SCHOOL_INFO.phone1}
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition flex items-center gap-1">
              <Mail className="w-3 h-3 text-slate-400" /> {SCHOOL_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              id="btn-toggle-radio"
              onClick={() => setRadioPlaying(!radioPlaying)}
              className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 rounded-full px-2.5 py-0.5 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              {radioPlaying ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              {radioPlaying ? "Mute Radio" : "Listen Live 103.3 FM"}
            </button>
            
            <button 
              id="btn-open-erp"
              onClick={() => setPortalModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-0.5 rounded-full font-bold text-xs flex items-center gap-1 transition shadow-xs cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              ERP Portal
            </button>
          </div>
        </div>
      </div>

      {/* Radio Audio Player Simulation Strip */}
      {radioPlaying && (
        <div className="bg-amber-500 text-slate-950 py-2 px-4 shadow-inner flex items-center justify-between transition-all">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
              </span>
              <span><strong>i-Flier 103.3 FM:</strong> Broadcasting Educational Programs & Global Youth Hour</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs bg-slate-950/10 px-2 py-0.5 rounded">Live Stream</span>
              <button 
                onClick={() => setRadioPlaying(false)}
                className="hover:bg-slate-950/10 p-1 rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Branding Displayed Clearly at Top Header */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="relative h-14 sm:h-16 flex items-center justify-center p-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
                {logoLoaded ? (
                  <img 
                    src={SCHOOL_LOGO_URL} 
                    alt="i-Flier International School Official Logo" 
                    className="h-12 sm:h-14 w-auto object-contain"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoLoaded(false)}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 via-indigo-900 to-amber-500 flex items-center justify-center text-white shadow-md font-black text-2xl border border-blue-800">
                    iF
                  </div>
                )}
              </div>
              <div>
                <h1 className="font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
                  i-Flier <span className="text-blue-900">International</span>
                </h1>
                <p className="text-xs text-amber-600 font-bold tracking-wide uppercase">
                  {SCHOOL_INFO.motto}
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 font-semibold text-sm text-slate-700">
              <button onClick={() => navigateTo('home')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'home' ? 'text-blue-900 font-bold' : ''}`}>Home</button>
              <button onClick={() => navigateTo('about')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'about' ? 'text-blue-900 font-bold' : ''}`}>About Us</button>
              <button onClick={() => navigateTo('academics')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'academics' ? 'text-blue-900 font-bold' : ''}`}>Academics</button>
              <button onClick={() => navigateTo('facilities')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'facilities' ? 'text-blue-900 font-bold' : ''}`}>Facilities</button>
              <button onClick={() => navigateTo('radio')} className={`hover:text-blue-900 transition cursor-pointer flex items-center gap-1 text-amber-700 font-bold ${activeTab === 'radio' ? 'text-amber-800' : ''}`}>
                <Radio className="w-3.5 h-3.5" /> 103.3 FM
              </button>
              <button onClick={() => navigateTo('admissions')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'admissions' ? 'text-blue-900 font-bold' : ''}`}>Admissions</button>
              <button onClick={() => navigateTo('news')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'news' ? 'text-blue-900 font-bold' : ''}`}>News</button>
              <button onClick={() => navigateTo('contact')} className={`hover:text-blue-900 transition cursor-pointer ${activeTab === 'contact' ? 'text-blue-900 font-bold' : ''}`}>Contact</button>
            </nav>

            {/* Desktop Apply CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                id="btn-apply-desktop"
                onClick={() => navigateTo('admissions')} 
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer"
              >
                Apply Now <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
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
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <button onClick={() => navigateTo('home')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Home</button>
            <button onClick={() => navigateTo('about')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">About Us & Beliefs</button>
            <button onClick={() => navigateTo('academics')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Academic Divisions</button>
            <button onClick={() => navigateTo('facilities')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Campus Facilities</button>
            <button onClick={() => navigateTo('radio')} className="block w-full text-left py-2 font-medium text-amber-700 flex items-center gap-2 cursor-pointer">
              <Radio className="w-4 h-4" /> i-Flier 103.3 FM Radio
            </button>
            <button onClick={() => navigateTo('admissions')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Admissions & Eligibility</button>
            <button onClick={() => navigateTo('news')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">News & Articles</button>
            <button onClick={() => navigateTo('contact')} className="block w-full text-left py-2 font-medium text-slate-800 hover:text-blue-900 cursor-pointer">Contact & Map</button>
            
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); setPortalModalOpen(true); }} 
                className="w-full bg-slate-100 text-slate-900 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" /> Access ERP Portal
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

      {/* ERP Login Modal */}
      {portalModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100">
            
            <div className="bg-slate-900 text-white p-6 relative">
              <button 
                onClick={() => setPortalModalOpen(false)} 
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 font-bold mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">i-Flier ERP Portal</h3>
              <p className="text-xs text-slate-400 mt-1">Access real-time academic records, grades, and fee portals.</p>
            </div>

            <div className="p-6">
              {/* Role Select Buttons */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg mb-5 text-xs font-semibold">
                <button
                  onClick={() => setPortalRole('student')}
                  className={`py-2 rounded-md transition cursor-pointer ${portalRole === 'student' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600'}`}
                >
                  Student
                </button>
                <button
                  onClick={() => setPortalRole('parent')}
                  className={`py-2 rounded-md transition cursor-pointer ${portalRole === 'parent' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600'}`}
                >
                  Parent
                </button>
                <button
                  onClick={() => setPortalRole('staff')}
                  className={`py-2 rounded-md transition cursor-pointer ${portalRole === 'staff' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600'}`}
                >
                  Staff / Admin
                </button>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert(`Redirecting to i-Flier ERP system for ${portalRole}...`); setPortalModalOpen(false); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {portalRole === 'student' ? 'Matric / Student ID' : portalRole === 'parent' ? 'Parent Email / Phone' : 'Staff ID'}
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter ID number"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Password</label>
                  <input 
                    type="password" 
                    required 
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-900" /> Remember me
                  </label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Please contact the school administrative office or email info@iflierintlscl.org for password resets."); }} className="text-blue-900 font-semibold hover:underline">Forgot password?</a>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm mt-2 cursor-pointer"
                >
                  Login to Portal <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-100 text-center text-xs text-slate-500">
              Need technical support? Contact <a href={`mailto:${SCHOOL_INFO.email}`} className="text-blue-900 font-semibold">{SCHOOL_INFO.email}</a>
            </div>

          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white overflow-hidden py-16 sm:py-24">
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-amber-400 backdrop-blur-sm">
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
                  <Lock className="w-4 h-4 text-amber-400" /> ERP Portal
                </button>
              </div>

              {/* Belief Pill Banner */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="bg-slate-800/40 border border-slate-800 p-3 rounded-lg">
                  <div className="text-xs text-slate-400 font-medium">Core Belief</div>
                  <div className="text-sm font-semibold text-amber-300 mt-0.5">"Everybody can be Somebody"</div>
                </div>
                <div className="bg-slate-800/40 border border-slate-800 p-3 rounded-lg">
                  <div className="text-xs text-slate-400 font-medium">Campus Station</div>
                  <div className="text-sm font-semibold text-white mt-0.5">i-Flier 103.3 FM</div>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-slate-800/40 border border-slate-800 p-3 rounded-lg">
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Ibadan, Nigeria</div>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Glassmorphism Card */}
                <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl shadow-2xl backdrop-blur-md space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-600">
                        <img 
                          src={SCHOOL_LOGO_URL} 
                          alt="i-Flier Crest" 
                          className="h-10 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">i-Flier Educational System</h3>
                        <p className="text-xs text-slate-400">Nursery • Primary • JSS • SSS • Tutorials</p>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span>State-of-the-Art Science & CBT Computer Laboratories</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span>Dedicated Boarding Facilities for Boys & Girls</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span>Comprehensive Exam Preparation (WAEC, NECO, UTME)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span>Rich Extracurricular Sports & Media Clubs</span>
                    </div>
                  </div>

                  {/* Radio Quick Widget inside Hero */}
                  <div className="bg-slate-900/90 border border-slate-700/60 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-600/20 text-red-400 rounded-lg animate-pulse">
                        <Radio className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-300">Live Radio FM 103.3</div>
                        <div className="text-xs text-slate-500">Broadcasts & Educational Podcasts</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setRadioPlaying(!radioPlaying)}
                      className="p-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition cursor-pointer"
                      aria-label="Toggle live radio"
                    >
                      {radioPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-slate-950" />}
                    </button>
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
          {ACADEMIC_DIVISIONS.filter(d => d.id === selectedAcademic).map((div) => (
            <div key={div.id} className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                    {div.badge}
                  </span>
                  <span className="text-slate-500 text-xs font-semibold">{div.age}</span>
                </div>

                <h3 className="text-3xl font-extrabold text-slate-900">{div.title}</h3>
                <p className="text-blue-900 font-medium text-base">{div.tagline}</p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{div.description}</p>

                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-slate-900 text-sm">Key Features & Offerings:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {div.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => navigateTo('admissions')}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2 shadow-2xs cursor-pointer"
                  >
                    Enquire for {div.title} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 rounded-2xl space-y-6 relative overflow-hidden">
                <GraduationCap className="w-16 h-16 text-amber-400/20 absolute top-4 right-4" />
                <h4 className="text-xl font-bold text-amber-400">Why Parents Choose i-Flier</h4>
                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Seasoned and passionate teaching personnel committed to individual growth.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Physically and emotionally safe environment fostering total well-being.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Laptop className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Digital integration with ERP progress reporting for parents.</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-center">
                  <span className="text-xs text-slate-400">School Hours: Monday - Friday, 8:00 AM - 2:00 PM</span>
                </div>
              </div>

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

      {/* RADIO SECTION */}
      <section id="radio" className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold text-red-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                Campus Broadcast Network
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
                <button 
                  onClick={() => setRadioPlaying(!radioPlaying)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition flex items-center gap-2 text-sm shadow-lg cursor-pointer"
                >
                  {radioPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-slate-950" />}
                  {radioPlaying ? "Stop Radio Stream" : "Tune In Live to 103.3 FM"}
                </button>
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
              <p className="text-xs text-slate-500">Frequency: 103.3 MHz FM | Coverage: Oyo State & Environs</p>
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

      {/* NEWS SECTION */}
      <section id="news" className="py-20 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                School Updates
              </span>
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
            {NEWS_ARTICLES.filter(art => art.title.toLowerCase().includes(newsSearch.toLowerCase()) || art.snippet.toLowerCase().includes(newsSearch.toLowerCase())).map((article) => (
              <div key={article.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="bg-blue-50 text-blue-900 font-bold px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg leading-snug hover:text-blue-900 transition cursor-pointer">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {article.snippet}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-4">
                  <span>By {article.author}</span>
                  <button onClick={() => alert(`Opening article: ${article.title}`)} className="text-blue-900 font-bold hover:underline flex items-center gap-1 cursor-pointer">
                    Read Story <ChevronRight className="w-3.5 h-3.5" />
                  </button>
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
            
            {/* School Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-slate-700">
                  <img 
                    src={SCHOOL_LOGO_URL} 
                    alt="i-Flier Logo" 
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-bold text-lg text-white">i-Flier International School</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Nurturing latent potential and fostering academic and moral leadership in an inspiring environment.
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
                <li><button onClick={() => navigateTo('radio')} className="hover:text-amber-400 transition cursor-pointer">i-Flier 103.3 FM Radio</button></li>
                <li><button onClick={() => navigateTo('facilities')} className="hover:text-amber-400 transition cursor-pointer">Library & E-Classrooms</button></li>
              </ul>
            </div>

            {/* Quick Portals */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Portals & Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setPortalModalOpen(true)} className="text-amber-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"><Lock className="w-3 h-3" /> ERP School Portal</button></li>
                <li><button onClick={() => navigateTo('admissions')} className="hover:text-amber-400 transition cursor-pointer">Admissions Eligibility</button></li>
                <li><button onClick={() => navigateTo('news')} className="hover:text-amber-400 transition cursor-pointer">Latest School News</button></li>
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

    </div>
  );
}

