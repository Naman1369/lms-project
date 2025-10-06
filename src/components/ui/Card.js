// components/CourseCard.js
export default function CourseCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
}