import React, { useEffect } from 'react';
import mqtt from 'mqtt';
import { firestore } from '../api/firebase';

const MQTTFirebaseComponent = () => {
  useEffect(() => {
    const client = mqtt.connect('mqtt://localhost:1883');

    client.on('connect', () => {
      console.log('Connected to MQTT Broker');
      client.subscribe('yourTopic', (err) => {
        if (!err) {
          console.log('Subscribed to topic');
        }
      });
    });

    client.on('message', (topic, message) => {
      console.log(`Received message: ${message.toString()} on topic: ${topic}`);
      // Parse the message if it's in JSON format
      const parsedMessage = JSON.parse(message.toString());

      // Send the message to Firebase Firestore
      firestore.collection('messages').add({
        topic,
        message: parsedMessage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
        console.log('Message sent to Firestore');
      }).catch((error) => {
        console.error('Error sending message to Firestore:', error);
      });
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <h1>MQTT to Firebase Component</h1>
    </div>
  );
};

export default MQTTFirebaseComponent;
