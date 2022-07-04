//Implimentation with Array. O(n^2). Return 2 from the given input
function firstRecurringCharacter(input){
  for (let i = 0; i < input.length; i++){
    for (let j = i + 1; j < input.length; j++){
      if (input[i] == input[j]){
        return input[i];
      }
    }
  }
  return undefined;
}

//Implimentation with Array. O(n^2). Return 5 from the given input
function firstRecurringCharacter2(input){
  let array = [];
  for (let i = 0; i < input.length; i++){
    if (search(array, input[i])){
      return input[i];
    }
    else{
      array.push(input[i]);
    }
  }
  return undefined;
}

function search(array, key){
  for (let i = 0; i < array.length; i++){
    if (array[i] == key){
      return true;
    }
  }
  return false;
}
//Implimentation with Hash Table. O(n). Return 5 from the given input
function firstRecurringCharacter3(input){
  let map = {};
  for (let i = 0; i < input.length; i++){
    if (map[input[i]]!=undefined){
      return input[i];
    }
    else{
      map[input[i]] = i;
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([2,5,5,2,3,1]));
console.log(firstRecurringCharacter2([2,5,5,2,3,1]));
console.log(firstRecurringCharacter3([2,5,5,2,3,1]));
