alert("who is the luckiest person today?");
var names = ["Pan", "Binh", "trang", "thomas", "paul"];

function whosPaying(names) {
var x = Math.round(Math.random()*names.length);
 var y = names[x];
 return y + " is going to buy lunch today!";
}
alert(whosPaying(names));