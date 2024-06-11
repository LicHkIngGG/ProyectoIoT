import React from 'react';
import Card from './Card';
import DeviceList from './DeviceList';
import UsageStatus from './UsageStatus';
import LightControl from './LightControl';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chips">
        <button>Living Room</button>
        <button>Kitchen Room</button>
        <button>Bed Room</button>
        <button>Movie Room</button>
        <button>Game Room</button>
        <button>+ Add</button>
      </div>
      <Card />
      <UsageStatus />
      <DeviceList />
      <LightControl />
    </div>
  );
};

export default Dashboard;
