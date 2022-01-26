$(document).ready(function() {
  const height = parseInt(prompt("Please enter your height"));
  if (height >= 7) {
    alert("You may be too tall for some of our rides.")
    $('#over7').show();
  } else if (height >= 5) {
    alert("Congratulations! To not being short!");
    $('#over5').show();
  } else {
    alert("Sorry for being too short!")
    $('#under5').show();
  } 
});

// $(document).ready(function() {
//   const over = confirm("Are you over 5 feet in height? Click OK for yes or Cancel for no.");

//   if (over-5) {
//     $('#over-5').show(); 
//   } else {
//     $('#under-5').hide();
//   }
// });