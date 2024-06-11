import React, { useState } from 'react';

const Card = () => {
  const [temperature, setTemperature] = useState(24);

  const handleTemperatureChange = (e) => {
    setTemperature(parseInt(e.target.value));
  };

  return (
    <div className="card">
      <h3>Air Conditioner</h3>
      <div className="temperature">
        <span>{temperature}°C</span>
        <input
          type="range"
          min="0"
          max="35"
          value={temperature}
          onChange={handleTemperatureChange}
        />
      </div>
    </div>
  );
};

export default Card;
