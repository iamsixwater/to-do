import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((val, idx) => (
          <li key={idx}>
            <button onClick={() => onFilterChange(val)}>{val}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
