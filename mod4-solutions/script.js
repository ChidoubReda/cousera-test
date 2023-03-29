(function () {

var names = ["amine", "salim", "Jamal", "jamila", "Panice", "fatima", "nassim", "reda", "salma", "jaafar"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    document.write("bye(names[i])");
  }
  else {
    document.write("hello(names[i])");  }
}

})();
