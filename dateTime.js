//jshint esversion:6
  exports.getDate = function() {
  const today = new Date();
  var hrs=(today.getHours()>=13?(today.getHours()-12):today.getHours());
  if(hrs==0)
  hrs=12;
  return [today.getHours(),hrs,today.getMinutes(),today.getDay(),(today.getHours()>=12?"PM":"AM")];
}
