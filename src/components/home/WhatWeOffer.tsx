import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
const programs = [
  {
    id: 1,
    name: 'Business Strategy',
    description: 'Develop effective business strategies and models for long-term success.',
    icon: '💼',
    link: '#business-strategy'
  },
  {
    id: 2,
    name: 'Entrepreneurship',
    description: 'Learn how to start, scale, and grow your business from idea to execution.',
    icon: '🚀',
    link: '#entrepreneurship'
  },
  {
    id: 3,
    name: 'Marketing',
    description: 'Master digital marketing, social media, and content creation to boost brand awareness.',
    icon: '📈',
    link: '#marketing'
  },
  {
    id: 4,
    name: 'Financial Management',
    description: 'Learn how to manage personal and business finances effectively.',
    icon: '💵',
    link: '#financial-management'
  },
  {
    id: 5,
    name: 'Sales & Negotiation',
    description: 'Master the art of sales and negotiation to drive growth and success.',
    icon: '💬',
    link: '#sales-negotiation'
  },
  {
    id: 6,
    name: 'Project Management',
    description: 'Gain skills in managing projects from initiation to completion using modern methodologies.',
    icon: '📅',
    link: '#project-management'
  },
  // Additional programs omitted for brevity...
];

export default function WhatWeOffer() {
  return (
    <section className="max-w-[1400px] mx-auto bg-white p-12 sm:p-16">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Discover Expertise Through Mentorship</h2>
            <p className="md:w-[70%] mx-auto text-lg text-gray-600 mb-12">Explore our diverse range of mentoring programs designed to connect passionate mentors with eager learners. Whether you're a seasoned professional looking to share your expertise or a student seeking guidance in your chosen field, our programs provide the perfect platform for growth and collaboration. Join us to unlock potential, bridge knowledge gaps, and foster impactful learning experiences.</p>

            <div className="flex justify-center">
            <div className="basis-[90%] sm:basis-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {programs.slice(0, 6).map((program) => (
                <div key={program.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <div className="h-32 w-32 mx-auto bg-slate-300 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white text-3xl">{program.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{program.name}</h3>
                    <p className="text-gray-600 mt-4">{program.description}</p>
                    <a href={program.link} className="mt-4 inline-block text-blue-500 hover:text-blue-700">Learn More</a>
                </div>
                ))}
            </div>
            </div>

            <Link to="/programs" className="block px-4 py-2">
                <Button customClass="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">View All Programs</Button>
            </Link>
        </div>
    </section>
  );
}
