//broker.js
var mosca = require('mosca')
var settings = {port: 8338}
var broker = new mosca.Server(settings)

broker.on('ready', () =>{
  console.log("broker is ready!");
})
