import React, { useState } from 'react';
import firebase from '../api/firebase';
import { publishMessage } from '../api/mqttClient';
import axios from 'axios';

const Switch = ({ ledName, initialStatus }) => {
  const [status, setStatus] = useState(initialStatus);

  const handleToggle = () => {
    const newStatus = !status;
    setStatus(newStatus);

    // Publish the new status to the MQTT topic
    publishMessage('led/status', { [ledName]: newStatus });

    // Update the status in Firebase
    const ledRef = firebase.database().ref(`leds/${ledName}`);
    ledRef.set(newStatus);

    // Update the status in MySQL via the API
    axios.post('http://localhost:3001/api/update-led', {
      led_name: ledName,
      status: newStatus
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error('Error updating MySQL:', error);
    });
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={status} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
