import React, { useState } from 'react';

const devices = [
  { name: 'Smart TV', status: false, usage: '5Kwh' },
  { name: 'Speaker', status: true, usage: '5Kwh' },
  { name: 'Router', status: false, usage: '5Kwh' },
  { name: 'Prot. Angelito', status: true, usage: '5Kwh' },
  { name: 'Heater', status: false, usage: '5Kwh' },
  { name: 'Socket', status: true, usage: '5Kwh' },
];

const DeviceList = () => {
  const [devicesState, setDevicesState] = useState(devices);

  const toggleDeviceStatus = (index) => {
    const updatedDevices = [...devicesState];
    updatedDevices[index].status = !updatedDevices[index].status;
    setDevicesState(updatedDevices);
  };

  return (
    <div className="device-list">
      <h3>My Devices</h3>
      {devicesState.map((device, index) => (
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
