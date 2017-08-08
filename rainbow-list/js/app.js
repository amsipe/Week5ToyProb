var listItems = document.getElementById('rainbow').children[0].children;
//loop through the ul of colors
for (var i = 0; i < listItems.length; i++){
  //set the color of the ::before element equal to the text in the li elment
  listItems[i].style.color = listItems[i].children[0].innerHTML
  listItems[i].children[0].style.color ='black'

}
//function to add a new color to the ul based on the color name in the input field
var addColor = function(){

  var colorValue;
  colorValue = document.getElementById('colorName').value;
  //create a new element for js to add to the DOM
  newColor = document.createElement('li');
  newColorSpan = document.createElement('span');
  newColorText = document.createTextNode(colorValue)
  //append the elements to the dom
  newColorSpan.appendChild(newColorText);
  newColor.appendChild(newColorSpan);
  newColor.style.color = colorValue;
  newColor.children[0].style.color = 'black'
  //update colors of element after it's been appended
  document.getElementById('rainbow').children[0].appendChild(newColor)
  document.getElementById('colorName').value = "";
}
