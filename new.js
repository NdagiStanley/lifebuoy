const batteryLevel = require('battery-level');
 
batteryLevel().then(level => {
    console.log(level*100);
    //=> 0.55 
});
