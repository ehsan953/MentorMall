import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PostTask from "../components/tasks/PostTask";
import Modal from "../components/common/modal/Modal";
const MyTasks: React.FC = () => {
  // 🔹 Dummy tasks (manual data)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design a Landing Page", category: "Design", budget: 150, deadline: "2025-11-01", status: "Pending" },
    { id: 2, title: "Develop a React App", category: "Development", budget: 500, deadline: "2025-11-05", status: "In Progress" },
    { id: 3, title: "Create SEO Strategy", category: "Marketing", budget: 200, deadline: "2025-11-10", status: "Completed" },
    { id: 4, title: "Build a Portfolio Website", category: "Development", budget: 350, deadline: "2025-11-12", status: "Pending" },
    { id: 5, title: "Logo Design for Startup", category: "Design", budget: 100, deadline: "2025-11-15", status: "Completed" },
    { id: 6, title: "Business Plan Outline", category: "Business", budget: 250, deadline: "2025-11-17", status: "Pending" },
    { id: 7, title: "Digital Marketing Campaign", category: "Marketing", budget: 400, deadline: "2025-11-18", status: "In Progress" },
    { id: 8, title: "Landing Page Optimization", category: "Development", budget: 180, deadline: "2025-11-20", status: "Pending" },
    { id: 9, title: "Online Course Design", category: "Education", budget: 300, deadline: "2025-11-21", status: "Completed" },
    { id: 10, title: "Social Media Content Plan", category: "Marketing", budget: 150, deadline: "2025-11-22", status: "Pending" },
  ]);

  // 🔹 Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const [isPostTaskModalOpen, setIsPostTaskModalOpen] = useState(false);
    const handleModalClose = () => {
      setIsPostTaskModalOpen(false);
    };
  // 🔹 Mock actions
  const handleEdit = (id: number) => alert(`✏️ Edit Task #${id}`);
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      alert(`🗑️ Task #${id} deleted`);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="p-8 bg-white shadow-lg rounded-xl relative">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">My Tasks</h2>
          <button
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={() => setIsPostTaskModalOpen(true)}
          >
            <FiPlus /> Add New Task
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Budget ($)</th>
                <th className="px-4 py-3 text-left">Deadline</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTasks.map((task) => (
                <tr key={task.id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{task.title}</td>
                  <td className="px-4 py-3">{task.category}</td>
                  <td className="px-4 py-3">${task.budget}</td>
                  <td className="px-4 py-3">{task.deadline}</td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      task.status === "Completed"
                        ? "text-green-600"
                        : task.status === "In Progress"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {task.status}
                  </td>
                  <td className="px-4 py-3 text-center flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(task.id)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit Task"
                    >
                      <FiEdit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Task"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md text-gray-600 disabled:opacity-50 hover:bg-gray-100"
          >
            <FaChevronLeft className="h-[14px]" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === i + 1
                  ? "bg-green-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md text-gray-600 disabled:opacity-50 hover:bg-gray-100"
          >
            <FaChevronRight className="h-[14px]" />
          </button>
        </div>

        {/* Add Task Modal */}
        {isPostTaskModalOpen && (
            <Modal
              isModalOpen={isPostTaskModalOpen}
              onModalClose={handleModalClose}
            >
              <PostTask onClose={handleModalClose} />
            </Modal>
          )}
      </div>
    </div>
  );
};

export default MyTasks;
