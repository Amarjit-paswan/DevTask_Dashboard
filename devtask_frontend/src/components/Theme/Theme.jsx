import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <select
        className="form-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option disabled>Select</option>
        <option value="Dark">Dark</option>
        <option value="Light">Light</option>
      </select>
    </>
  );
}

export default Theme;
