import React, { useState, useEffect } from 'react';
import { db } from '../api/firebase';
import { publishMessage } from '../api/mqttClient';

const initialDevices = [
  { name: 'LED 1', status: false, usage: '0W' },
  { name: 'LED 2', status: false, usage: '0W' },
  { name: 'LED 3', status: false, usage: '0W' },
  { name: 'LED 4', status: false, usage: '0W' },
];

const DeviceList = () => {
  const [devices, setDevices] = useState(initialDevices);

  useEffect(() => {
    const handleDataChange = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const updatedDevices = devices.map((device, index) => ({
          ...device,
          status: data[`led${index + 1}`],
        }));
        setDevices(updatedDevices);
      }
    };

    db.ref('leds').on('value', handleDataChange);

    return () => {
      db.ref('leds').off('value', handleDataChange);
    };
  }, [devices]);

  const toggleDeviceStatus = (index) => {
    const updatedDevices = [...devices];
    updatedDevices[index].status = !updatedDevices[index].status;
    setDevices(updatedDevices);

    const ledStatus = updatedDevices.reduce((acc, device, idx) => {
      acc[`led${idx + 1}`] = device.status;
      return acc;
    }, {});
    publishMessage('led/status', ledStatus);

    db.ref(`leds/led${index + 1}`).set(updatedDevices[index].status);
  };

  return (
    <div className="device-list">
      <h3>My Devices</h3>
      {devices.map((device, index) => (
        <div key={index} className="device">
          <span>{device.name}</span>
          <span>{device.usage}</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={device.status}
              onChange={() => toggleDeviceStatus(index)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default DeviceList;
