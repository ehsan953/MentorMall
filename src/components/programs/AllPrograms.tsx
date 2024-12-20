import React, { useState } from 'react';
import Button from '../common/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  const [isGrid, setIsGrid] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 10;

  // Calculate the index of the first and last program for the current page
  const indexOfLastProgram = currentPage * programsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - programsPerPage;

  // Get the current programs to display based on pagination
  const currentPrograms = programs.slice(indexOfFirstProgram, indexOfLastProgram);

  // Calculate the total number of pages
  const totalPages = Math.ceil(programs.length / programsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };


  return (
    <section className="p-8">
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Programs</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsGrid(true)}
            className={`p-2 border rounded ${
              isGrid ? 'bg-green-500 text-white' : 'bg-white text-gray-800'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setIsGrid(false)}
            className={`p-2 border rounded ${
              !isGrid ? 'bg-green-500 text-white' : 'bg-white text-gray-800'
            }`}
          >
            List View
          </button>
        </div>
      </div>

      <div className='flex justify-center'>
        {isGrid ? (
          <div className="basis-[90%] sm:basis-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-8">
            {currentPrograms.map((program) => (
              <div
                key={program.id}
                className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4 text-green-500">{program.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <a
                  href={program.link}
                  className="text-green-500 hover:underline font-medium"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        ) : (
          <ul className="basis-[90%] sm:basis-[100%] divide-y divide-gray-200">
            {currentPrograms.map((program) => (
              <li key={program.id} className="py-4 flex items-center gap-4">
                <div className="text-2xl text-green-500 basis-[10%]">{program.icon}</div>
                <div className="flex-1">
                  <h4 className="text-left text-lg font-semibold text-gray-800">
                    {program.name}
                  </h4>
                  <p className="text-left text-gray-600">{program.description}</p>
                </div>
                <Button customClass="mt-6 border border-green-500 text-green-500 px-6 py-3 rounded-lg">Learn More</Button>
                {/* <a
                  href={program.link}
                  className="text-green-500 hover:underline font-medium ml-4"
                >
                  Learn More
                </a> */}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-center mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 mx-2 text-gray-400 shadow-lg rounded-md"
          >
            <FaChevronLeft className='h-[14px]'/>
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 rounded-md mx-1 text-sm ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-white text-gray-700 font-bold shadow-lg'}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="shadow-lg px-3 py-2 mx-2 text-gray-400 rounded-md"
          >
            <FaChevronRight className='h-[14px]'/>
          </button>
        </div>
      </div>
    </section>
  );
}
