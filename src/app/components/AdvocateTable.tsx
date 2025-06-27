import React from 'react';
import { AdvocateTableRow, Advocate } from './AdvocateTableRow';

type AdvocateTableProps = {
  advocates: Advocate[];
};

export const AdvocateTable = ({ advocates }: AdvocateTableProps) => (
  <section>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate) => (
          <AdvocateTableRow key={advocate.id} advocate={advocate} />
        ))}
      </tbody>
    </table>
  </section>
);

export default AdvocateTable;
