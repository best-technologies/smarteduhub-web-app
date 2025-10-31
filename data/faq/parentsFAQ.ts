import { FAQCategory } from "@/types/landingPages";

export const parentsFAQ: FAQCategory[] = [
  {
    category: "Getting Started",
    slug: "getting-started",
    questions: [
      {
        id: 1,
        question: "How do I access my parent portal?",
        answer:
          "Your child's school will send you an email with login credentials and instructions. Click the link in the email, log in with your credentials, and link your child's account to start monitoring their progress.",
      },
      {
        id: 2,
        question: "Can I have multiple children on one account?",
        answer:
          "Yes! After logging in, you can link multiple children to your parent account. You'll be able to switch between their profiles and monitor each child's progress separately.",
      },
      {
        id: 3,
        question: "Is there a mobile app for parents?",
        answer:
          "Yes! Download the SmartEduHub parent app from the App Store or Google Play. Stay connected to your child's education with instant notifications about grades, attendance, and school updates.",
      },
    ],
  },
  {
    category: "Monitoring Progress",
    slug: "monitoring-progress",
    questions: [
      {
        id: 4,
        question: "What information can I see about my child?",
        answer:
          "You can view your child's grades, assignment submissions, attendance records, teacher comments, upcoming tests, and overall academic performance. Access is real-time, so you're always up to date.",
      },
      {
        id: 5,
        question: "How often are grades updated?",
        answer:
          "Grades are updated in real-time as teachers enter them. You'll receive notifications when new grades are posted, so you can stay informed about your child's academic progress.",
      },
      {
        id: 6,
        question: "Can I see my child's attendance history?",
        answer:
          "Yes! View complete attendance records including dates, times, and reasons for absences. You'll also receive instant notifications if your child is marked absent or late.",
      },
    ],
  },
  {
    category: "Communication",
    slug: "communication",
    questions: [
      {
        id: 7,
        question: "How do I communicate with my child's teachers?",
        answer:
          "Use the messaging feature to send direct messages to teachers, schedule parent-teacher conferences, and receive updates about your child's performance. Teachers typically respond within 24-48 hours.",
      },
      {
        id: 8,
        question: "Will I be notified about school events and announcements?",
        answer:
          "Yes! You'll receive notifications about school events, important announcements, upcoming deadlines, and emergency alerts via email, SMS, and the mobile app.",
      },
      {
        id: 9,
        question: "Can I communicate with other parents?",
        answer:
          "For privacy and security reasons, direct parent-to-parent communication is not available through the platform. However, you can participate in school-moderated parent forums and community groups.",
      },
    ],
  },
  {
    category: "Account Management",
    slug: "account-management",
    questions: [
      {
        id: 10,
        question: "How do I update my contact information?",
        answer:
          "Go to Account Settings and update your email, phone number, and notification preferences. Make sure your contact information is current to receive important updates about your child.",
      },
      {
        id: 11,
        question: "Can I control what notifications I receive?",
        answer:
          "Yes! Customize your notification preferences to choose what alerts you want to receive and how (email, SMS, or app notification). You can set preferences for grades, attendance, announcements, and more.",
      },
      {
        id: 12,
        question: "What if I share custody and both parents need access?",
        answer:
          "Both parents can have separate accounts with access to the child's information. Contact your school administrator to set up additional parent accounts for shared custody situations.",
      },
    ],
  },
  {
    category: "Support",
    slug: "support",
    questions: [
      {
        id: 13,
        question: "Who do I contact if I have questions?",
        answer:
          "For platform-related issues, contact our parent support team via email or live chat. For questions about your child's academics or school policies, reach out to teachers or school administrators directly through the messaging system.",
      },
      {
        id: 14,
        question: "Is my child's data secure?",
        answer:
          "Absolutely! We use bank-level encryption and comply with all educational data protection regulations. Access is strictly controlled with role-based permissions, and all data is stored securely.",
      },
      {
        id: 15,
        question: "What if I forget my password?",
        answer:
          "Click 'Forgot Password' on the login page and enter your email. You'll receive a password reset link. If you still have trouble accessing your account, contact your school's administrative office.",
      },
    ],
  },
];
