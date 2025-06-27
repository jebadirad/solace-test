import React, { useState } from 'react';

export type Advocate = {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: string;
  phoneNumber: string;
  id: string;
};

type SearchBarProps = {
  advocates: Advocate[];
  setFilteredAdvocates: (advocates: Advocate[]) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ advocates, setFilteredAdvocates }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchTerm(value);

    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(value) ||
        advocate.lastName.includes(value) ||
        advocate.city.includes(value) ||
        advocate.degree.includes(value) ||
        advocate.specialties.includes(value) ||
        advocate.yearsOfExperience.includes(value)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    setFilteredAdvocates(advocates);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Search</h3>
      <p className="mb-2 text-sm text-gray-500">
        Searching for: <span className="font-medium text-gray-800">{searchTerm}</span>
      </p>
      <div className="flex items-center gap-2">
        <input
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#265b4e] transition w-64 text-sm"
          value={searchTerm}
          onChange={handleQueryChange}
          placeholder="Type to search advocates..."
        />
        <button
          onClick={handleResetSearch}
          className="bg-[#265b4e] hover:bg-[#1e493f] text-white font-medium px-4 py-2 rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#265b4e]"
        >
          Reset Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
