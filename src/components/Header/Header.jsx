import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { BiSun, BiMoon } from "react-icons/bi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode ? <BiSun /> : <BiMoon />}
      </button>
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
