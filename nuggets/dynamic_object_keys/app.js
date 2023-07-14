const person = ['hello', 'great'];

const testPerson = person.map(function (item) {
  console.log(item);
});

const newPerson = person.map(function (item) {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);

const state = {
  loading:true,
  name:"",
  job:""
}

function updateState(key,value){
  state[key] = state[key] + 1 || 1;
  console.log(state)
}
updateState("position")
