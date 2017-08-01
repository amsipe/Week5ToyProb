
var sortList = function () {
  var names, olList, newNames = [];
  //clear any existing ordered list
  document.getElementById('sort-list').innerHTML = "";
  //get the name values from textbox and split on ","
  names = document.getElementById('fullName').value;
  if(names !== ""){
    names = names.split(',');

    //loop through names array
    for (var i=0;i<names.length;i++){
      var splitNames;
      //clear spaces on beginning and end
      names[i] = names[i].trim();
      //split names element into a new array on " "
      splitNames = names[i].split(' ');

      //check if only first name was entered
      if(splitNames.length < 2){
        //capitalize first letter in 0 index
        splitNames[0] = capital(splitNames[0])
        //create a blank 2nd index of new array
        splitNames.push("");
        //push array of first name and blank into outer array
        newNames.push(splitNames);
      }else{
        //capitalize first letters of 0 and 1 index
        splitNames = splitNames.map(capital);
        //push array of first and last name into outer array
        newNames.push(splitNames);
      }

    }

    //sort list Asc
    newNames = newNames.sort(sortAsc);
    //create ol element
    olList = document.createElement('ol');

    //loop through sorted array
    newNames.forEach(function (cur) {
      var listItem;
      listItem = createItem(cur);
      olList.appendChild(listItem);

    });
  //append ol to blank div
  document.getElementById('sort-list').appendChild(olList);
  //clear input textbox
  document.getElementById('fullName').value = "";
  }
}

function sortAsc (a, b) {

  var less;
  //sort asc on second index of array
  if(a[1] < b[1]){
    less = false;
  }else {
    less = true;
  }
  return less;
}

function capital(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function createItem(cur){

  var listItem, listText, listSpan, listSpanText;
  //create ol child elements
  listItem = document.createElement('li');
  listText = document.createTextNode(cur[0] + " ");
  listSpan = document.createElement('span');
  listSpanText = document.createTextNode(cur[1]);
  listSpan.appendChild(listSpanText);
  listItem.appendChild(listText);
  listItem.appendChild(listSpan);
  return listItem;

}
