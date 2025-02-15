import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-between bg-[#ebfffc] p-2 rounded-full mb-5">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent text-[#555] text-lg px-4 py-2 outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-[#ebfffc] w-12 h-12 rounded-full flex justify-center items-center"
      >
        <img src="/src/assets/search.png" alt="Search" className="w-4" />
      </button>
    </div>
  );
};

export default SearchBar;
