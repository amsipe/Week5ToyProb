var listItems = document.getElementById('rainbow').children[0].children;

for (var i = 0; i < listItems.length; i++){

  listItems[i].style.color = listItems[i].children[0].innerHTML
  listItems[i].children[0].style.color ='black'
  // console.log(window.getComputedStyle(children[i],':before').getPropertyValue('color'));
}

var addColor = function(){

  var colorValue;
  colorValue = document.getElementById('colorName').value;
  console.log(colorValue);
  newColor = document.createElement('li');
  newColorSpan = document.createElement('span');
  newColorText = document.createTextNode(colorValue)
  newColorSpan.appendChild(newColorText);
  newColor.appendChild(newColorSpan);
  newColor.style.color = colorValue;
  newColor.children[0].style.color = 'black'
  document.getElementById('rainbow').children[0].appendChild(newColor)
  document.getElementById('colorName').value = "";
}
