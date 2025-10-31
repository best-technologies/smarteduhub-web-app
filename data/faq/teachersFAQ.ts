import { FAQCategory } from "@/types/landingPages";

export const teachersFAQ: FAQCategory[] = [
  {
    category: "Getting Started",
    slug: "getting-started",
    questions: [
      {
        id: 1,
        question: "How do I access my teacher account?",
        answer:
          "Your school administrator will provide you with login credentials via email. Use these credentials to access the platform. You'll be prompted to set up your profile and change your password on first login.",
      },
      {
        id: 2,
        question: "What should I do after receiving my credentials?",
        answer:
          "After logging in, complete your profile by adding your photo, bio, and contact information. Familiarize yourself with your assigned classes and explore the dashboard. We recommend watching our quick-start video tutorial.",
      },
      {
        id: 3,
        question: "Can I access the platform from my mobile device?",
        answer:
          "Yes! Download the SmartEduHub app from the App Store or Google Play. Use the same credentials to log in and access all teaching features on the go.",
      },
    ],
  },
  {
    category: "Class Management",
    slug: "classroom-management",
    questions: [
      {
        id: 4,
        question: "How do I create and assign homework?",
        answer:
          "Navigate to your class dashboard, click 'Create Assignment', fill in the details, attach resources, set a due date, and click 'Assign'. Students will be notified instantly and can submit their work digitally.",
      },
      {
        id: 5,
        question: "Can I track student attendance?",
        answer:
          "Yes! Use the attendance module to mark students present, absent, or late with just a few clicks. The system automatically generates attendance reports and notifies parents of absences.",
      },
      {
        id: 6,
        question: "How do I organize my lesson plans?",
        answer:
          "Use the lesson planner to create, organize, and schedule your lessons. You can attach resources, link to curriculum standards, and share plans with colleagues for collaborative teaching.",
      },
    ],
  },
  {
    category: "Grading & Assessment",
    slug: "grading-assessment",
    questions: [
      {
        id: 7,
        question: "How does the grading system work?",
        answer:
          "Create custom rubrics or use templates, grade assignments digitally with comments and annotations, and let the system automatically calculate final grades. You can also set up weighted categories for different assignment types.",
      },
      {
        id: 8,
        question: "Can I create quizzes and tests online?",
        answer:
          "Absolutely! Use our quiz builder to create multiple-choice, short answer, essay, and mixed-format assessments. Enable auto-grading for objective questions and add time limits or randomization for security.",
      },
      {
        id: 9,
        question: "How do I provide feedback to students?",
        answer:
          "Add comments directly on submissions, use voice or video feedback, create rubric-based evaluations, and set up one-on-one messaging for detailed discussions about student work.",
      },
    ],
  },
  {
    category: "Communication",
    slug: "communication",
    questions: [
      {
        id: 10,
        question: "How do I communicate with parents?",
        answer:
          "Use the messaging system to send direct messages, create group announcements, schedule parent-teacher meetings, and share progress reports. Parents receive notifications via email and the mobile app.",
      },
      {
        id: 11,
        question: "Can I send announcements to my entire class?",
        answer:
          "Yes! Use the announcement feature to broadcast messages to all students in a class or specific groups. You can schedule announcements, attach files, and track who has read them.",
      },
      {
        id: 12,
        question: "Is there a way to collaborate with other teachers?",
        answer:
          "Yes! Use the staff collaboration space to share resources, lesson plans, and best practices. You can also co-teach classes and share grading responsibilities with colleague permissions.",
      },
    ],
  },
  {
    category: "Support & Training",
    slug: "support-training",
    questions: [
      {
        id: 13,
        question: "Where can I find training resources?",
        answer:
          "Access our comprehensive help center with video tutorials, step-by-step guides, and best practices. We also offer weekly live training webinars and a teacher community forum.",
      },
      {
        id: 14,
        question: "What if I encounter a technical issue?",
        answer:
          "Contact our support team via live chat, email, or the help desk ticketing system. Most issues are resolved within 24 hours. For urgent matters, use the priority support option.",
      },
      {
        id: 15,
        question: "Can I suggest new features?",
        answer:
          "Absolutely! We value teacher feedback. Use the feature request form in your dashboard or participate in our user feedback sessions to help shape the platform's future.",
      },
    ],
  },
];
