import { FAQCategory } from "@/types/landingPages";

export const studentsFAQ: FAQCategory[] = [
  {
    category: "Getting Started",
    slug: "getting-started",
    questions: [
      {
        id: 1,
        question: "How do I log in to SmartEduHub?",
        answer:
          "Your school will provide you with a username and password. Go to the SmartEduHub login page, enter your credentials, and you're in! You'll be asked to set a new password on your first login.",
      },
      {
        id: 2,
        question: "What should I do after logging in for the first time?",
        answer:
          "Complete your profile by adding a photo and updating your contact information. Explore your dashboard to see your classes, upcoming assignments, and schedule. We recommend taking the platform tour.",
      },
      {
        id: 3,
        question: "Can I use SmartEduHub on my phone?",
        answer:
          "Yes! Download the SmartEduHub student app from the App Store or Google Play Store. Log in with your school credentials and access all your learning materials on the go.",
      },
    ],
  },
  {
    category: "Assignments & Learning",
    slug: "assignments-learning",
    questions: [
      {
        id: 4,
        question: "How do I submit assignments?",
        answer:
          "Go to the Assignments section, select the assignment you want to submit, upload your files or type your response, and click 'Submit'. You'll receive a confirmation and can view your submission anytime.",
      },
      {
        id: 5,
        question: "Can I submit an assignment after the deadline?",
        answer:
          "This depends on your teacher's settings. Some assignments allow late submissions with penalties, while others may be locked after the deadline. Contact your teacher if you need an extension.",
      },
      {
        id: 6,
        question: "How do I access my learning materials?",
        answer:
          "All course materials, video lessons, study guides, and resources are available in your class dashboard. You can download materials for offline access or bookmark important resources.",
      },
    ],
  },
  {
    category: "Grades & Progress",
    slug: "grades-progress",
    questions: [
      {
        id: 7,
        question: "How do I check my grades?",
        answer:
          "Click on 'Grades' in your dashboard to see all your scores, feedback from teachers, and your overall performance across subjects. You can also view grade trends and identify areas for improvement.",
      },
      {
        id: 8,
        question: "When will I see my test results?",
        answer:
          "Results for auto-graded quizzes appear immediately after submission. For manually graded assignments and tests, you'll receive a notification when your teacher posts the grades, usually within a few days.",
      },
      {
        id: 9,
        question: "Can I track my progress over time?",
        answer:
          "Yes! Your dashboard includes progress charts and performance analytics that show your improvement across subjects, attendance record, and achievement milestones.",
      },
    ],
  },
  {
    category: "AI Learning Assistant",
    slug: "ai-assistant",
    questions: [
      {
        id: 10,
        question: "How does the AI tutor work?",
        answer:
          "Click the AI assistant icon to ask questions about your coursework. The AI can explain concepts, provide practice problems, offer study tips, and help with homework 24/7. It's like having a personal tutor!",
      },
      {
        id: 11,
        question: "Can the AI do my homework for me?",
        answer:
          "The AI is designed to help you learn, not do the work for you. It guides you through problems, explains concepts, and provides examples, but you'll need to apply the knowledge to complete your assignments.",
      },
      {
        id: 12,
        question: "Is the AI assistance monitored?",
        answer:
          "Yes, AI interactions are logged to ensure academic integrity and provide better learning recommendations. Teachers can see that you used the AI for help, which is encouraged for learning purposes.",
      },
    ],
  },
  {
    category: "Support",
    slug: "support",
    questions: [
      {
        id: 13,
        question: "What if I forget my password?",
        answer:
          "Click 'Forgot Password' on the login page and enter your email or username. You'll receive instructions to reset your password. If you still can't access your account, contact your school administrator.",
      },
      {
        id: 14,
        question: "Who do I contact if I have a problem?",
        answer:
          "For technical issues, use the help button in your dashboard or email support@smarteduhub.com. For questions about assignments or grades, message your teacher directly through the platform.",
      },
      {
        id: 15,
        question: "Can I use SmartEduHub offline?",
        answer:
          "Some features like downloaded course materials and previously loaded content can be accessed offline in the mobile app. However, submitting assignments and taking tests requires an internet connection.",
      },
    ],
  },
];
