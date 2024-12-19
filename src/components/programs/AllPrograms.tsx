import React from "react";
import Button from '../../components/common/Button';
const programs = [
  {
    id: 1,
    name: "Business Strategy",
    description:
      "Develop effective business strategies and models for long-term success.",
    icon: "💼",
    link: "#business-strategy",
  },
  {
    id: 2,
    name: "Entrepreneurship",
    description:
      "Learn how to start, scale, and grow your business from idea to execution.",
    icon: "🚀",
    link: "#entrepreneurship",
  },
  {
    id: 3,
    name: "Marketing",
    description:
      "Master digital marketing, social media, and content creation to boost brand awareness.",
    icon: "📈",
    link: "#marketing",
  },
  {
    id: 4,
    name: "Financial Management",
    description:
      "Learn how to manage personal and business finances effectively.",
    icon: "💵",
    link: "#financial-management",
  },
  {
    id: 5,
    name: "Sales & Negotiation",
    description:
      "Master the art of sales and negotiation to drive growth and success.",
    icon: "💬",
    link: "#sales-negotiation",
  },
  {
    id: 6,
    name: "Project Management",
    description:
      "Gain skills in managing projects from initiation to completion using modern methodologies.",
    icon: "📅",
    link: "#project-management",
  },

  // Technology & Development
  {
    id: 7,
    name: "Web Development",
    description:
      "Learn the fundamentals of web development, including HTML, CSS, JavaScript, and modern web frameworks.",
    icon: "🌐",
    link: "#web-development",
  },
  {
    id: 8,
    name: "Frontend Development",
    description:
      "Master frontend technologies such as React, Angular, Vue.js, and other tools to build dynamic user interfaces.",
    icon: "🖥️",
    link: "#frontend-development",
  },
  {
    id: 9,
    name: "Backend Development",
    description:
      "Understand server-side development with languages like Node.js, Python, Ruby, and databases like MySQL, MongoDB.",
    icon: "🔧",
    link: "#backend-development",
  },
  {
    id: 10,
    name: "Mobile Development",
    description:
      "Learn to create mobile apps with React Native, Flutter, Swift, and Android development.",
    icon: "📱",
    link: "#mobile-development",
  },
  {
    id: 11,
    name: "Cloud Computing",
    description:
      "Gain knowledge in cloud platforms like AWS, Google Cloud, and Azure to scale applications effectively.",
    icon: "☁️",
    link: "#cloud-computing",
  },
  {
    id: 12,
    name: "Data Science & Analytics",
    description:
      "Learn how to analyze data, use statistical models, and visualize insights using tools like Python and R.",
    icon: "📊",
    link: "#data-science",
  },
  {
    id: 13,
    name: "Cybersecurity",
    description:
      "Understand the principles of securing systems, networks, and data from potential threats and breaches.",
    icon: "🛡️",
    link: "#cybersecurity",
  },
  {
    id: 14,
    name: "Artificial Intelligence & Machine Learning",
    description:
      "Explore AI/ML concepts, neural networks, and deep learning to build smart systems.",
    icon: "🤖",
    link: "#ai-ml",
  },
  {
    id: 15,
    name: "Software Engineering",
    description:
      "Learn best practices in software development, testing, and maintenance.",
    icon: "💻",
    link: "#software-engineering",
  },

  // Design & Creative Arts
  {
    id: 16,
    name: "Graphic Design",
    description:
      "Learn design principles and how to use tools like Adobe Illustrator, Photoshop, and Figma.",
    icon: "🎨",
    link: "#graphic-design",
  },
  {
    id: 17,
    name: "UI/UX Design",
    description:
      "Master the principles of creating user-friendly interfaces and exceptional user experiences.",
    icon: "🎨",
    link: "#ui-ux-design",
  },
  {
    id: 18,
    name: "Video Editing",
    description:
      "Learn to edit videos using tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.",
    icon: "🎬",
    link: "#video-editing",
  },
  {
    id: 19,
    name: "Photography",
    description:
      "Understand the art of photography, including composition, lighting, and editing techniques.",
    icon: "📸",
    link: "#photography",
  },
  {
    id: 20,
    name: "Animation",
    description:
      "Learn animation techniques using tools like Blender, After Effects, and Cinema 4D.",
    icon: "🎞️",
    link: "#animation",
  },
  {
    id: 21,
    name: "Creative Writing",
    description:
      "Hone your skills in writing compelling stories, articles, and scripts.",
    icon: "✍️",
    link: "#creative-writing",
  },

  // Personal Development
  {
    id: 22,
    name: "Leadership & Management",
    description:
      "Develop leadership skills to motivate teams and lead organizations to success.",
    icon: "🚀",
    link: "#leadership-management",
  },
  {
    id: 23,
    name: "Public Speaking",
    description:
      "Learn how to effectively present your ideas and speak confidently in public.",
    icon: "🎤",
    link: "#public-speaking",
  },
  {
    id: 24,
    name: "Time Management",
    description:
      "Master techniques for managing your time and boosting productivity.",
    icon: "⏳",
    link: "#time-management",
  },
  {
    id: 25,
    name: "Mindfulness & Meditation",
    description:
      "Learn mindfulness and meditation techniques to reduce stress and increase focus.",
    icon: "🧘‍♂️",
    link: "#mindfulness",
  },
  {
    id: 26,
    name: "Personal Finance",
    description:
      "Get practical advice on managing money, saving, and investing.",
    icon: "💰",
    link: "#personal-finance",
  },
  {
    id: 27,
    name: "Career Coaching",
    description:
      "Get personalized coaching on job search, career transitions, and professional growth.",
    icon: "💡",
    link: "#career-coaching",
  },

  // Health & Wellness
  {
    id: 28,
    name: "Nutrition & Dietetics",
    description:
      "Learn about healthy eating habits, meal planning, and proper nutrition.",
    icon: "🥗",
    link: "#nutrition-dietetics",
  },
  {
    id: 29,
    name: "Fitness & Exercise",
    description: "Get fitness tips and workout plans for a healthy lifestyle.",
    icon: "🏋️‍♂️",
    link: "#fitness-exercise",
  },
  {
    id: 30,
    name: "Mental Health",
    description:
      "Understand the importance of mental health and learn coping strategies for stress and anxiety.",
    icon: "🧠",
    link: "#mental-health",
  },

  // Languages & Education
  {
    id: 31,
    name: "Language Learning",
    description:
      "Learn new languages or improve existing language skills, including grammar, vocabulary, and pronunciation.",
    icon: "🗣️",
    link: "#language-learning",
  },
  {
    id: 32,
    name: "Test Preparation",
    description:
      "Get ready for exams like GRE, TOEFL, IELTS, SAT, and more with personalized tutoring.",
    icon: "📝",
    link: "#test-preparation",
  },

  // Other Skills
  {
    id: 33,
    name: "Legal Advice",
    description: "Get advice on legal matters, contracts, and compliance.",
    icon: "⚖️",
    link: "#legal-advice",
  },
  {
    id: 34,
    name: "Event Planning",
    description:
      "Learn to organize and execute events such as weddings, corporate events, and parties.",
    icon: "🎉",
    link: "#event-planning",
  },
  {
    id: 35,
    name: "Public Relations",
    description:
      "Learn how to manage public relations, brand image, and crisis communication.",
    icon: "📣",
    link: "#public-relations",
  },
];
export default function AllPrograms() {
  return (
    <section className="max-w-[1400px] mx-auto bg-white py-12 px-8 md:p-16">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Discover Expertise Through Mentorship
        </h2>
        <p className="md:w-[70%] mx-auto text-lg text-gray-600 mb-12">
          Explore our diverse range of mentoring programs designed to connect
          passionate mentors with eager learners. Whether you're a seasoned
          professional looking to share your expertise or a student seeking
          guidance in your chosen field, our programs provide the perfect
          platform for growth and collaboration. Join us to unlock potential,
          bridge knowledge gaps, and foster impactful learning experiences.
        </p>

        <div className="flex justify-center">
          <div className="basis-[90%] sm:basis-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-gray-100 p-6 rounded-lg shadow-lg"
              >
                <div className="h-32 w-32 mx-auto bg-slate-300 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-3xl">{program.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {program.name}
                </h3>
                <p className="text-gray-600 mt-4">{program.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  <Button customClass="text-center basis-[98%] md:basis-[48%] lg:basis-[40%] bg-slate-300 text-black py-3 rounded-lg">Learn</Button>
                  <Button customClass="text-center basis-[98%] md:basis-[48%] lg:basis-[55%] bg-slate-300 text-black py-3 rounded-lg">Mentorship</Button>
                </div>
                {/* <a
                  href={program.link}
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700"
                >
                  Take Course
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
