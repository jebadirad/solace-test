import React from 'react';

export const AdvocateTableCell = ({ children }: { children: React.ReactNode }) => (
  <td
    className="
  px-6 
  py-3 
  text-left 
  align-middle 
  whitespace-nowrap 
  text-sm 
  text-gray-800"
  >
    {children}
  </td>
);
