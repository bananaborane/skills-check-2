//Create an array called 'groceries' that contains three grocery items as a string

let groceries = ['milk', 'snacks', 'toiletries'];


//Create a variable called 'yourName' that is equal to your name as a string
let yourName = 'your name';


//Create a function called 'setGroceryListTitle' that takes in one parameter called x. The function should return a string of 'XPARAM's Grocery List'

let setGroceryListTitle = function(x){
  return `${x}'s Grocery List'`;
}


//Create a function called 'addItem' that takes in one paramter called item. Add the item param to the end of the groceries array above. Inside of addItem, invoke displayData() which is a function we created that takes care of some of the leg work unrelated to this module.


let addItem = (item)=>{
  groceries.push(item);
  displayData();
}

//Create a function called removeItem that takes in one parmater called index. Inside of the function remove the item from the groceries array using splice. Invoke the displayData() function again.

let removeItem = (index)=>{
  groceries.splice(index, 1);
  displayData();
}


//Create a function called 'checkGroceryCount'. Inside of the function check the total number of groceries you need to get. If the number is greater than or equal to 5, return the string 'That looks like a big trip'. If the number of groceries is equal to one, return the string '1 item'. For numbers between 1 and 5, return the string 'NUMBER items'

let checkGroceryCount = () => {
  if (groceries.length >= 5){
    return "That looks like a big trip";
  } else if (groceries.length < 5 && groceries.length > 1){
    return groceries.length + "  items";
  } else if (groceries.length <= 1){
    return "1 item";
  }
}


//Be sure to run the project by clicking the big green `run` button above.