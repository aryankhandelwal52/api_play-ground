function Skills({ skills }) {
  const colors = [
    "bg-blue-100 text-blue-700",
    "bg-green-100 text-green-700",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
    "bg-yellow-100 text-yellow-700",
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${colors[index % colors.length]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
