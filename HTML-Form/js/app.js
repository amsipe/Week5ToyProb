
var pineapple = document.getElementById('pineapple');

//function to check if pineapple option is "checked"
var badPineapple = function(e) {

  if(pineapple.checked || pineapple.getAttribute('checked')){
    //if pineapple is checked - alert user and remove "check" from DOM
    alert("Pineapple is not an available topping in your country. Please select another.");
    pineapple.checked = false;
    pineapple.removeAttribute('checked');
  }
}

var toppings = document.querySelectorAll('.toppings label');
//loop through all available topping labels
toppings.forEach(function (c) {
 var forBox = c.getAttribute('for');
 //listen for clicks on toppings and add/remove checked attr
 c.addEventListener('click', function (e) {

   var checkBox = document.querySelector('input[name='+forBox+']');
   if(checkBox.getAttribute("checked")) {
     checkBox.removeAttribute("checked");
   } else {
     checkBox.setAttribute("checked",true);
   }
 });
})
//listen for clicks on pinneapple option
pineapple.addEventListener('click',badPineapple);
