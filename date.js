module.exports.getdate = function () {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", options) ;
};
module.exports.getday = function () {
  var today = new Date();
  var options = {
    weekday: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  return day;
};
