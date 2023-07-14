const output = document.querySelector(".output");
const people = [
    {
    name : "Stephen Mandivinga",
    age : 68,
    position: "Data Engineer"
},
    {
        name : "Frank Marara",
        age : 67,
        position: "Network Engineer"
    },
    {
        name : "Tariro Mandivinga",
        age : 63,
        position: "Graphic Designer"
    },
    {
        name : "Martha Mavunda",
        age : 64,
        position: "Systems Analyst"
    },
    {
        name : "Nelson Zambuko",
        age : 64,
        position: "BigData Engineer"
    }
];
const displayInfo = people.map((person)=> {
  return  `
     <h2>${person.name.toUpperCase()}</h2>
      <h3>${person.age - 20}</h3>
      <h4>${person.position}</h4>
    `;
})
output.innerHTML = displayInfo.join("");