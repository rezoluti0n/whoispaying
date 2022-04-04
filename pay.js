alert("who is the luckiest person today?");
var names = ["Pan", "Binh", "Trang", "Thomas", "Paul"];

function whosPaying(names) {
var x = Math.floor(Math.random()*names.length);
 var y = names[x];
 return y + " is going to buy lunch today!";
}
alert(whosPaying(names));
