// ChangeTheme.jsx

import React, { useState, useEffect } from "react";

const ChangeTheme = () => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    // Change theme based on time of day
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
      setTheme("morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTheme("afternoon");
    } else {
      setTheme("night");
    }
  }, []);

  return theme;
};

export default changeTheme;
