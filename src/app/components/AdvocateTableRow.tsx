import React from 'react';
import { AdvocateTableCell } from './AdvocateTableCell';

export type Advocate = {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: string;
  phoneNumber: string;
};

export const AdvocateTableRow = ({
  advocate: { city, degree, firstName, id, lastName, phoneNumber, specialties, yearsOfExperience },
}: {
  advocate: Advocate;
}) => (
  <tr>
    <AdvocateTableCell>{firstName}</AdvocateTableCell>
    <AdvocateTableCell>{lastName}</AdvocateTableCell>
    <AdvocateTableCell>{city}</AdvocateTableCell>
    <AdvocateTableCell>{degree}</AdvocateTableCell>
    <AdvocateTableCell>
      <ul>
        {specialties.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </AdvocateTableCell>
    <AdvocateTableCell>{yearsOfExperience}</AdvocateTableCell>
    <AdvocateTableCell>{phoneNumber}</AdvocateTableCell>
  </tr>
);
