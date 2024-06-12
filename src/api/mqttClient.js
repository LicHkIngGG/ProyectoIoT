import mqtt from 'mqtt';

const options = {
  connectTimeout: 4000,
  clientId: 'react-mqtt-client',
  keepalive: 60,
  clean: true,
};

const connectUrl = 'ws://localhost:1883';

const client = mqtt.connect(connectUrl, options);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

client.on('error', (err) => {
  console.error('Connection error: ', err);
  client.end();
});

const publishMessage = (topic, message) => {
  client.publish(topic, message, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error('Publish error: ', error);
    }
  });
};

export { client, publishMessage };
