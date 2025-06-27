import React from 'react';
import { AdvocateTableRow } from './AdvocateTableRow';
import { Advocate } from './SearchBar';
type AdvocateTableProps = {
  advocates: Advocate[];
};

export const AdvocateTable = ({ advocates }: AdvocateTableProps) => (
  <section className="bg-white shadow-md rounded-lg px-7 py-8 my-4">
    <div className="-mx-7">
      <table className="min-w-full px-8">
        <thead>
          <tr className="border-b border-gray-200 ">
            <th className="px-4 py-2 text-left font-semibold">First Name</th>
            <th className="px-4 py-2 text-left font-semibold">Last Name</th>
            <th className="px-4 py-2 text-left font-semibold">City</th>
            <th className="px-4 py-2 text-left font-semibold">Degree</th>
            <th className="px-4 py-2 text-left font-semibold">Specialties</th>
            <th className="px-4 py-2 text-left font-semibold">Years of Experience</th>
            <th className="px-4 py-2 text-left font-semibold">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {advocates.map((advocate) => (
            <AdvocateTableRow key={advocate.id} advocate={advocate} />
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default AdvocateTable;
