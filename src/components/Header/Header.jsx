import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((val, idx) => (
          <li key={idx}>
            <button
              className={`${styles.filter} ${
                val === filter && styles.selected
              }`}
              onClick={() => onFilterChange(val)}
            >
              {val}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
