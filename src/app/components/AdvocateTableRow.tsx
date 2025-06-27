import React from 'react';
import { AdvocateTableCell } from './AdvocateTableCell';
import { Advocate } from './SearchBar';

export const AdvocateTableRow = ({
  advocate: { city, degree, firstName, id, lastName, phoneNumber, specialties, yearsOfExperience },
}: {
  advocate: Advocate;
}) => (
  <tr
    className="text-sm
   even:bg-gray-50 
   odd:bg-white
   hover:bg-[#3f937d7a]
     transition-colors 
     border-b  
     border-gray-200 
     last:border-b-0"
  >
    <AdvocateTableCell>{firstName}</AdvocateTableCell>
    <AdvocateTableCell>{lastName}</AdvocateTableCell>
    <AdvocateTableCell>{city}</AdvocateTableCell>
    <AdvocateTableCell>{degree}</AdvocateTableCell>
    <AdvocateTableCell>
      <ul className="list-disc list-inside space-y-1">
        {specialties.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </AdvocateTableCell>
    <AdvocateTableCell>{yearsOfExperience}</AdvocateTableCell>
    <AdvocateTableCell>
      {phoneNumber.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
    </AdvocateTableCell>
  </tr>
);
