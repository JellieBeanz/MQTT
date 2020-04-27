//publish.js Tv connection
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:8338')
var topic = 'TvConnection'
var message = "Connected to Smart TV"

client.on('connect', () => {
  setInterval( ()=>{
      client.publish(topic, message)
      console.log("message sent!", message);
  }, 5000)


})
