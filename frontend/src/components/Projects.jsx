function Projects({ projects }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Projects</h3>
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h4 className="text-lg font-semibold text-indigo-700 mb-2">{project.title}</h4>
          <p className="text-gray-700 mb-3">{project.description}</p>
          <div className="flex gap-4 text-sm">
            <a href={project.links.github} target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            <a href={project.links.linkedin} target="_blank" className="text-indigo-600 hover:underline">LinkedIn</a>
            <a href={project.links.portfolio} target="_blank" className="text-indigo-600 hover:underline">Portfolio</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
