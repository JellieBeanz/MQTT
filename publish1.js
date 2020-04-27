//publish1.js Door lock
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:8338')
var topic = 'LockDoor'
var message = "Door Locked"

client.on('connect', () => {
  setInterval( ()=>{
      client.publish(topic, message)
      console.log("message sent!", message);
  }, 5000)


})
