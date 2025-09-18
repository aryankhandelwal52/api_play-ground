function Profile({ profile }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mb-6">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-2">{profile.name}</h2>
      <p className="text-gray-600 mb-1"><span className="font-semibold">Email:</span> {profile.email}</p>
      <p className="text-gray-600 mb-4"><span className="font-semibold">Education:</span> {profile.education}</p>
      <div>
        <h4 className="font-semibold mb-2 text-gray-700">Links:</h4>
        <div className="flex gap-4">
          <a href={profile.links.github} target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" className="text-indigo-600 hover:underline">LinkedIn</a>
          <a href={profile.links.portfolio} target="_blank" className="text-indigo-600 hover:underline">Portfolio</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
