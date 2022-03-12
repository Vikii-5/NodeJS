const os = require('os');
console.log("Total RAM", os.totalmem()/Math.pow(1024,3));
console.log("Available RAM", os.freemem()/Math.pow(1024,3));
console.log("OS Version", os.version());
console.log("OS CPU", os.cpus());