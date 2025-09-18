import { useState, useEffect } from "react";
import api from "../api";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    api.get(`/skills?q=${query}`)
      .then(res => setSuggestions(res.data))
      .catch(err => console.error(err));
  }, [query]);

  const handleSearch = () => {
    if (!query.trim()) return;
    api.get(`/search?q=${query}`)
      .then(res => setResults(res.data))
      .catch(err => console.error(err));
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    handleSearch();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">Search Projects/Work</h3>
      <div className="relative">
        <input 
          type="text" 
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type a skill (e.g. React, AI)"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg max-h-48 overflow-y-auto z-10">
            {suggestions.map((s, index) => (
              <li 
                key={index} 
                onClick={() => handleSuggestionClick(s)}
                className="px-3 py-2 cursor-pointer hover:bg-indigo-50"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button 
        onClick={handleSearch} 
        className="mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:from-indigo-600 hover:to-purple-700 transition-all"
      >
        Search
      </button>

      {results && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-700 mb-2">Projects:</h4>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {results.projects.map((proj, index) => (
              <li key={index}>{proj.title}</li>
            ))}
          </ul>

          <h4 className="font-semibold text-gray-700 mb-2">Work:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {results.works.map((work, index) => (
              <li key={index}>{work.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
