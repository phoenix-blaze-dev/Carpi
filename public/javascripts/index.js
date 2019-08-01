var radius = 100;

var sampleJoystick = {
    mode: 'static',
    position: {
      left: '50%',
      top: '50%'
    },
    size: radius*2,
    color: 'black'
};

var joystick;
var position;
joystick = nipplejs.create(sampleJoystick);
joystick.on('start end', function(evt, data) {
  console.log("stop");
	$.post("/stop", function(data,status){
            console.log("Data: " + data + "\nStatus: " + status);
       });
  position = data;
}).on('move', function(evt, data) {
  position = data;
}).on('dir:up plain:up dir:left plain:left dir:down' +
      'plain:down dir:right plain:right',
      function(evt, data) {
  position=data;
  //console.log(position.direction);
  if(position.direction.y == "up" && position.direction.angle == "up"){
    console.log("forward");
    $.post("/forward", function(data,status){
      				console.log("Data: " + data + "\nStatus: " + status);
    			});
  }
  if(position.direction.y == "down" && position.direction.angle == "down"){
    console.log("backward");
    $.post("/backward", function(data,status){
      				console.log("Data: " + data + "\nStatus: " + status);
    			});
  }
  if(position.direction.angle == "right"){
    console.log("right");
    $.post("/right", function(data,status){
      				console.log("Data: " + data + "\nStatus: " + status);
    			});
  }
if(position.direction.angle == "left"){
    console.log("left");
    $.post("/left", function(data,status){
      				console.log("Data: " + data + "\nStatus: " + status);
    			});
  }
}
     ).on('pressure', function(evt, data) {

  position=data;
});
