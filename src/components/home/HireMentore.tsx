import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const HireMentorSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto bg-gray-50 p-12 sm:p-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Hire a Mentor or Professional</h2>
        <p className="md:w-[70%] mx-auto text-lg text-gray-600 mb-12">
          Got a project or task that needs expertise? Post your task and let our skilled mentors or professionals handle it. 
          Whether it’s business strategy, content creation, or technical support, we’ve got the right people for you. 
          Let us help you achieve success with tailored solutions!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Post a Task</h3>
            <p className="text-gray-600 mb-6">Describe your project, set a budget, and find the perfect mentor or professional to complete it.</p>
            <Link to="/post-task">
              <Button customClass="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg">Get Started</Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Become a Mentor</h3>
            <p className="text-gray-600 mb-6">Join our platform as a mentor and start earning by helping clients achieve their goals.</p>
            <Link to="/become-mentor">
              <Button customClass="bg-green-500 text-white px-6 py-3 rounded-lg hover:text-green-500 border hover:bg-white hover:border-green-500">Join as a Mentor</Button>
            </Link>
          </div>
        </div>

        <div className="border border-green-500 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h3>
          <ul className="list-disc list-inside text-gray-700 text-left mx-auto sm:w-[70%]">
            <li className="mb-2">Clients post tasks with clear descriptions, budgets, and deadlines.</li>
            <li className="mb-2">Mentors and professionals apply for tasks or get assigned by an admin.</li>
            <li className="mb-2">Clients pay securely, and the payment is held until task completion.</li>
            <li className="mb-2">Mentors submit work for approval, and clients review it.</li>
            <li>Funds are released upon successful completion of the task.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HireMentorSection;
