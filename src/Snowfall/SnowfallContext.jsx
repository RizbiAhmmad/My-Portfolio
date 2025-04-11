import React, { createContext, useState } from "react";

export const SnowfallContext = createContext();

export const SnowfallProvider = ({ children }) => {
  const [isSnowfallActive, setIsSnowfallActive] = useState(true); // Snowfall on by default

  const toggleSnowfall = () => {
    setIsSnowfallActive((prev) => !prev);
  };

  return (
    <SnowfallContext.Provider value={{ isSnowfallActive, toggleSnowfall }}>
      {children}
    </SnowfallContext.Provider>
  );
};