
// first module similar to C# where you have specific C# files to do certain things - like name spaces almso
module.exports.getDate = getDate; // add the getDate on the end so you can export more than one specific function

function getDate(){
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}
module.exports.getDay = getDay; // add the getDate on the end so you can export more than one specific function

function getDate(){
  let today = new Date();

  let options = {
    weekday: "long"

  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}
