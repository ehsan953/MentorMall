import React, { useState } from 'react';
interface PostTaskProps {
  onClose: () => void;
}
const PostTask: React.FC<PostTaskProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    budget: '',
    deadline: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('✅ Task submitted successfully!');
  };

  return (
    <section className="p-8 pt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Post Your Task</h2>
      <p className="text-gray-600 text-center mb-8">
        Share your project details so our mentors can help you get it done efficiently.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-bold mb-2 text-left">Task Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Build a marketing strategy for my startup"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2 text-left">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          >
            <option value="">Select a category</option>
            <option value="Business">Business</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2 text-left">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your task or project details..."
            rows={5}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-left">Budget ($)</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., 200"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 text-left">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Post Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default PostTask;
