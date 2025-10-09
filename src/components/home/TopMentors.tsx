import React from 'react';
import Button from '../common/Button';
const mentors = [
  {
    id: 1,
    name: 'Ehsan',
    role: 'Development Lead',
    image: '/default-member.png',
    link: '#mentor1'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Specialist',
    image: '/default-member.png',
    link: '#mentor2'
  },
  {
    id: 3,
    name: 'David Lee',
    role: 'Life Coach & Motivational Speaker',
    image: '/default-member.png',
    link: '#mentor3'
  },
  {
    id: 4,
    name: 'Emily Roberts',
    role: 'Career Development Coach',
    image: '/default-member.png',
    link: '#mentor4'
  }
];

export default function TopMentors() {
  return (
    <section className="p-12 sm:p-16">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Top Mentors</h2>
        <p className="text-lg text-gray-600 mb-12">Our expert mentors are ready to guide you on your journey. Explore their profiles and start learning today.</p>
        <div className='flex justify-center'>
            <div className="basis-[90%] sm:basis-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-6">
            {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className='overflow-hidden'>
                    <img src={mentor.image} alt={mentor.name} className="w-full aspect-[5/7] object-cover hover:scale-110 transform transition-all duration-700"/>
                  </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{mentor.name}</h3>
                    <p className="text-gray-500 mt-2">{mentor.role}</p>
                    <Button customClass="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg">Learn More</Button>
                    {/* <a href={mentor.link} className="mt-4 inline-block text-blue-500 hover:text-blue-700">Learn More</a> */}
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
