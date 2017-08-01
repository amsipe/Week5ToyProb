
var pineapple = document.getElementById('pineapple');

var badPineapple = function(e) {

  if(pineapple.checked || pineapple.getAttribute('checked')){

    alert("Pineapple is not an available topping in your country. Please select another.");
    pineapple.checked = false;
    pineapple.removeAttribute('checked');
  }
}



var toppings = document.querySelectorAll('.toppings>label');



toppings.forEach(function (c) {
 var forBox = c.getAttribute('for');
 c.addEventListener('click', function (e) {
   var checkBox = document.querySelector('input[name='+forBox+']');


   if(checkBox.getAttribute("checked")) {
     checkBox.removeAttribute("checked");
   } else {
     checkBox.setAttribute("checked",true);
   }


 });
})

pineapple.addEventListener('click',badPineapple);
