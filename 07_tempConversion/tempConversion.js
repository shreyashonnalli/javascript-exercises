const ftoc = function(fahranheit) {
  return Math.round(((5/9)*(fahranheit-32))*10)/10;
};

const ctof = function(celsius) {
  fahranheit = celsius * (9/5) + 32;
  return Math.round(fahranheit*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
