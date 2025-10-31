import { LandingPageData } from "@/types/landingPages";
import {
  Zap,
  BarChart3,
  Users,
  DollarSign,
  MessageSquare,
  Calendar,
  Smartphone,
  Shield,
  Bell,
} from "lucide-react";

export const schoolsData: LandingPageData = {
  hero: {
    type: "laptop",
    title: "AI powered platform for Your School",
    subtitle:
      "Transform your school with an all-in-one platform. Built-in AI personalizes learning, automates administrative workflows, and provides predictive insights to drive student success.",
    ctaPrimaryText: "Request a Demo",
    ctaSecondaryText: "View Pricing",
    imageSrc: "/svgs/schools-hero-dashboard.svg",
    imageAlt: "Headmaster addressing pupils",
  },

  gettingStarted: {
    title: "Get Started in 6 Simple Steps",
    subtitle: "Set up your school and start managing operations in minutes",
    features: [
      {
        step: 1,
        title: "Register Your School",
        description:
          "Complete your school registration by providing basic information and submitting necessary documents for verification.",
      },
      {
        step: 2,
        title: "Verify Your Account",
        description:
          "Confirm your email address and complete identity verification to ensure the security of your school's data.",
      },
      {
        step: 3,
        title: "Set Up Classes",
        description:
          "Create your academic structure by adding classes, grades, and subjects to organize your school's curriculum.",
      },
      {
        step: 4,
        title: "Onboard Teachers",
        description:
          "Invite and register teaching staff, assign them to classes, and set up their profiles and permissions.",
      },
      {
        step: 5,
        title: "Enroll Students",
        description:
          "Add students to your system, assign them to classes, and import their academic records and personal information.",
      },
      {
        step: 6,
        title: "Start Managing",
        description:
          "Access your dashboard on web or mobile devices and begin managing your school operations efficiently.",
      },
    ],
  },

  tabbedFeatures: {
    sectionTitle: "Powerful Features for School Management",
    sectionSubtitle:
      "Explore our comprehensive suite of tools designed to streamline operations and enhance educational outcomes",
    tabs: [
      {
        id: "ai-powered",
        title: "AI Powered",
        badge: "AI Powered",
        contentTitle: "Interactive AI empowering Education",
        description:
          "Intelligent AI systems that enhance learning experiences and administrative efficiency. From personalized learning paths to real-time feedback, our AI tools adapt to the needs of students and educators alike, fostering a more engaging and effective educational environment.",
        mediaSrc: "/imgs/admin-ai.png",
        mediaType: "image",
        mediaAlt: "AI powered education interface showing interactive tools",
      },
      {
        id: "performance-analytics",
        title: "Performance Analytics",
        badge: "Performance Analytics",
        contentTitle: "Data-Driven Insights for Better Decisions",
        description:
          "Transform raw data into actionable insights with our advanced analytics engine. Monitor student performance trends, track institutional KPIs, and identify areas for improvement with real-time dashboards. Our predictive analytics help you spot at-risk students early and measure the effectiveness of interventions, enabling proactive decision-making.",
        mediaSrc: "/svgs/admin-performance.svg",
        mediaType: "image",
        mediaAlt: "Performance analytics dashboard with charts and graphs",
      },
      {
        id: "staff-management",
        title: "Staff Management",
        badge: "Staff Management",
        contentTitle: "Empower Your Team with Modern Tools",
        description:
          "Manage your entire staff lifecycle from recruitment to retirement. Track certifications, schedule professional development, monitor performance, and manage workload distribution. Our integrated HR module includes leave management, payroll integration, and performance review workflows, ensuring your team operates at peak efficiency.",
        mediaSrc: "/svgs/admin-teachers.svg",
        mediaType: "image",
        mediaAlt: "Staff management interface showing employee profiles",
      },
      {
        id: "financial-tracking",
        title: "Financial Tracking",
        badge: "Financial Tracking",
        contentTitle: "Complete Financial Visibility and Control",
        description:
          "Gain complete control over your school's finances with our comprehensive financial management system. Track income and expenses, manage budgets, process payroll, and generate detailed financial reports. Automated fee collection, payment reminders, and multi-payment gateway support ensure smooth cash flow while maintaining full compliance with accounting standards.",
        mediaSrc: "/svgs/admin-finance.svg",
        mediaType: "image",
        mediaAlt: "Financial tracking dashboard showing revenue and expenses",
      },
      {
        id: "connect-communicate",
        title: "Connect & Communicate",
        badge: "Connect & Communicate",
        contentTitle: "Seamless Communication Across Your Community",
        description:
          "Keep everyone connected with our integrated communication platform. Send instant notifications, share announcements, schedule parent-teacher meetings, and enable real-time messaging between all stakeholders. Multi-channel communication via SMS, email, and in-app notifications ensures important messages reach the right people at the right time.",
        mediaSrc: "/svgs/admin-messages.svg",
        mediaType: "image",
        mediaAlt: "Communication hub showing messaging interface",
      },
      {
        id: "comprehensive-scheduler",
        title: "Comprehensive Scheduler",
        badge: "Comprehensive Scheduler",
        contentTitle: "Scheduler with Conflict Resolution",
        description:
          "Simplify the entire scheduling process from class timetabling to resource allocation. Support multiple scheduling formats, conflict resolution, and customizable views. Administrators can manage schedules efficiently, while automated notifications ensure everyone stays informed. Create or update schedules with just a few clicks.",
        mediaSrc: "/svgs/admin-scheduler.svg",
        mediaType: "image",
        mediaAlt:
          "Scheduler interface showing class timetables and resource allocation",
      },
    ],
  },

  mobileApp: {
    title: "Manage Your School on the Go",
    subtitle:
      "Take control of your educational institution from anywhere with our mobile app. Access all features, receive instant notifications, and stay connected with your school community.",
    features: [
      {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for speed and performance",
      },
      {
        icon: Shield,
        title: "Secure & Safe",
        description: "Bank-level encryption and security",
      },
      {
        icon: Bell,
        title: "Real-time Updates",
        description: "Instant notifications for important events",
      },
      {
        icon: Smartphone,
        title: "Cross-Platform",
        description: "Available on iOS and Android devices",
      },
    ],
    stats: [
      { value: "1K+", label: "Active Users" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "100%", label: "Uptime" },
    ],
    phoneImageSrc: "/imgs/store-download.png",
    phoneImageAlt: "SmartEduHub Mobile App Interface",
  },

  cta: {
    title: "Ready to Transform Your School?",
    subtitle:
      "Join hundreds of institutions already using SmartEduHub to streamline operations and improve student outcomes.",
    primaryButtonText: "Schedule a Demo",
    secondaryButtonText: "Talk to Sales",
  },
};
