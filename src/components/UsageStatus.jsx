import React from 'react';

const UsageStatus = () => {
  return (
    <div className="usage-status">
      <h3>Usage Status</h3>
      <p>Total spend: 35.02Kwh</p>
      <p>Total hours: 32h</p>
      <div className="chart">
        <p>Chart placeholder:</p>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <div style={{ backgroundColor: '#2196F3', height: '20px', width: '50%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default UsageStatus;
