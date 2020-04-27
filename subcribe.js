//subscribe.js 
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:8338')
var topic1 = 'TvConnection'
var topic2 = 'LockDoor'

client.on('message', (topic1, message) => {
  message = message.toString()
  console.log(message);

})

client.on('message', (topic2, message) => {
  message = message.toString()
})

client.on('connect', () => {
  client.subscribe(topic2)
  client.subscribe(topic1)
})
