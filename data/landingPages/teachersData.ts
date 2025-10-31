import { LandingPageData } from "@/types/landingPages";
import {
  BookOpen,
  ClipboardCheck,
  Users,
  BarChart2,
  Calendar,
  MessageCircle,
  FileText,
  Clock,
  Award,
  Smartphone,
  Shield,
  Zap,
  Bell,
} from "lucide-react";

export const teachersData: LandingPageData = {
  hero: {
    type: "laptop",
    title: "Teaching Made Simple, Impact Amplified",
    subtitle:
      "Spend less time on administrative tasks and more time inspiring students. Our platform handles the paperwork so you can focus on what matters most.",
    ctaSecondaryText: "Explore Features",
    ctaSecondaryHref: "#features",
    imageSrc: "/svgs/teacher-dashboard.svg",
    imageAlt: "Teacher dashboard preview",
  },

  gettingStarted: {
    title: "Get Started in 3 Simple Steps",
    subtitle: "Your school sets you up - just log in and start teaching",
    features: [
      {
        step: 1,
        icon: Users,
        title: "Receive Your Credentials",
        description:
          "Your school administrator will send you login credentials via email. Check your inbox for welcome instructions and your unique teacher ID.",
      },
      {
        step: 2,
        icon: BookOpen,
        title: "Complete Your Profile",
        description:
          "Log in and personalize your profile with your photo, bio, and preferences. Explore your assigned classes and familiarize yourself with the dashboard.",
      },
      {
        step: 3,
        icon: Award,
        title: "Start Teaching",
        description:
          "Access your class dashboards, create assignments, track student progress, and communicate with parents - all from one powerful platform.",
      },
    ],
  },

  tabbedFeatures: {
    sectionTitle: "Tools Designed for Educators",
    sectionSubtitle:
      "Everything you need to manage your classroom efficiently and effectively",
    tabs: [
      {
        id: "smart-grading",
        title: "Smart Grading",
        badge: "Efficient Grading",
        contentTitle: "Grade Faster, Provide Better Feedback",
        description:
          "Save hours every week with intelligent grading tools. Create custom rubrics, auto-grade assignments, and provide rich feedback all in one place. Automatic grade calculations and analytics help you focus on teaching, not paperwork. Track grade distribution and identify trends to improve your teaching strategies.",
        mediaSrc: "/svgs/teacher-grading.svg",
        mediaType: "image",
        mediaAlt: "Teacher grading dashboard with rubrics and feedback tools",
      },
      {
        id: "student-insights",
        title: "Student Insights",
        badge: "Performance Tracking",
        contentTitle: "Understand Each Student's Journey",
        description:
          "Monitor individual student progress with detailed performance tracking. Identify learning gaps early, spot struggling learners, and celebrate achievements. Our analytics provide actionable insights into student engagement, completion rates, and mastery of concepts, enabling personalized teaching approaches.",
        mediaSrc: "/svgs/teacher-performance.svg",
        mediaType: "image",
        mediaAlt: "Student performance analytics and progress tracking",
      },
      {
        id: "lesson-planning",
        title: "Lesson Planning",
        badge: "Curriculum Management",
        contentTitle: "Organize and Share Your Teaching Materials",
        description:
          "Create comprehensive lesson plans, organize teaching materials, and align content with curriculum standards. Collaborate with colleagues by sharing resources and best practices. Our resource library keeps everything organized and accessible, making it easy to reuse and adapt content for different classes.",
        mediaSrc: "/svgs/teacher-schedule.svg",
        mediaType: "image",
        mediaAlt: "Lesson planning and curriculum management interface",
      },
      {
        id: "parent-communication",
        title: "Parent Communication",
        badge: "Stay Connected",
        contentTitle: "Keep Parents Informed and Engaged",
        description:
          "Build strong parent partnerships with seamless communication tools. Send progress reports, schedule conferences, share achievements, and address concerns quickly. Automated notifications keep parents informed about grades, attendance, and upcoming events, fostering a supportive learning environment at home.",
        mediaSrc: "/svgs/teacher-messages.svg",
        mediaType: "image",
        mediaAlt: "Parent communication and messaging interface",
      },
    ],
  },

  highlights: {
    features: [
      {
        title: "Efficient Grading & Assessment",
        description:
          "Save hours every week with intelligent grading tools. Create rubrics, grade assignments, and provide feedback all in one place. Automatic grade calculations and analytics help you focus on teaching, not paperwork.",
        imageSrc: "/imgs/placeholder-grading.jpg",
        imageAlt: "Teacher grading dashboard",
        benefits: [
          "Create custom rubrics and grading criteria",
          "Auto-calculate final grades with weighted categories",
          "Provide rich feedback with comments and annotations",
          "Track grade distribution and identify trends",
        ],
      },
      {
        title: "Comprehensive Student Insights",
        description:
          "Understand each student's journey with detailed performance tracking. Identify learning gaps early, monitor improvement over time, and tailor your teaching to individual needs.",
        imageSrc: "/imgs/placeholder-student-tracking.jpg",
        imageAlt: "Student performance tracking",
        benefits: [
          "Individual student performance dashboards",
          "Progress tracking across subjects and assessments",
          "Early warning system for at-risk students",
          "Personalized learning recommendations",
        ],
      },
      {
        title: "Streamlined Class Management",
        description:
          "Keep your classroom organized with powerful scheduling and planning tools. Manage multiple subjects, coordinate with colleagues, and ensure nothing falls through the cracks.",
        imageSrc: "/imgs/placeholder-schedule.jpg",
        imageAlt: "Teacher schedule management",
        benefits: [
          "Visual calendar for all your classes and events",
          "Lesson planning with curriculum mapping",
          "Resource library for teaching materials",
          "Collaboration tools for team teaching",
        ],
      },
    ],
  },

  mobileApp: {
    title: "Teach from Anywhere",
    subtitle:
      "Grade assignments, communicate with parents, and manage your classroom on the go. Everything you need is in your pocket.",
    features: [
      {
        icon: ClipboardCheck,
        title: "Mobile Grading",
        description: "Grade assignments during your commute",
      },
      {
        icon: Shield,
        title: "Secure Access",
        description: "Your data is protected with encryption",
      },
      {
        icon: Bell,
        title: "Instant Alerts",
        description: "Get notified of student submissions",
      },
      {
        icon: Smartphone,
        title: "Works Offline",
        description: "Access downloaded materials without internet",
      },
    ],
    stats: [
      { value: "5K+", label: "Active Teachers" },
      { value: "4.9★", label: "Teacher Rating" },
      { value: "3hrs", label: "Saved Weekly" },
    ],
    phoneImageSrc: "/imgs/store-download.png",
    phoneImageAlt: "SmartEduHub Teacher Mobile App",
  },

  cta: {
    title: "Join Thousands of Teachers Already Using SmartEduHub",
    subtitle:
      "Start your free 30-day trial today. No credit card required. Experience the difference that smart tools can make in your teaching.",
    primaryButtonText: "Get Started Free",
    secondaryButtonText: "Book a Walkthrough",
  },
};
