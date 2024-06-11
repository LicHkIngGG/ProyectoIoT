import React, { useState } from 'react';

const initialLights = [
  { name: 'Light 1', intensity: 60 },
  { name: 'Light 2', intensity: 80 },
  { name: 'Light 3', intensity: 45 },
  { name: 'Light 4', intensity: 100 },
  { name: 'Light 5', intensity: 60 },
];

const LightControl = () => {
  const [lights, setLights] = useState(initialLights);

  const handleIntensityChange = (index, intensity) => {
    const newLights = [...lights];
    newLights[index].intensity = intensity;
    setLights(newLights);
  };

  return (
    <div className="light-control">
      <h3>Light</h3>
      {lights.map((light, index) => (
        <div key={index} className="light">
          <span>{light.name}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={light.intensity}
            onChange={(e) => handleIntensityChange(index, parseInt(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
};

export default LightControl;
