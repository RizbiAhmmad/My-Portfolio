import React, { useEffect, useState } from "react";
import "./Snowfall.css";

const Snowfall = ({ isActive }) => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    if (!isActive) {
      setSnowflakes([]);
      return;
    }

    const newSnowflakes = Array.from({ length: 100 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 5,
      size: Math.random() * 5 + 2,
    }));
    setSnowflakes(newSnowflakes);

    // return () => setSnowflakes([]);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="snowfall-container">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake"
          style={{
            left: `${snowflake.left}%`,
            animationDuration: `${snowflake.animationDuration}s`,
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;