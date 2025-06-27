'use client';

import { useEffect, useState } from 'react';
import { Advocate, SearchBar } from './components/SearchBar';
import { AdvocateTable } from './components/AdvocateTable';

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    fetch('/api/advocates').then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  return (
    <main className="min-h-screen w-full bg-gray-50 flex flex-col items-center px-4">
      <section className="w-full max-w-7xl flex flex-col items-center py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Solace Advocates</h1>
      </section>
      <section className="w-full max-w-7xl flex flex-col items-center py-8">
        <div className="w-full p-4">
          <SearchBar advocates={advocates} setFilteredAdvocates={setFilteredAdvocates} />
        </div>
        <div className="w-full">
          <AdvocateTable advocates={filteredAdvocates} />
        </div>
      </section>
    </main>
  );
}
