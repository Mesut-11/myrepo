// Unique Values
const result = document.querySelector(".result");
const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
];

const categories = ["all",...new Set(menu.map((item)=> {
    return item.category;
}))];

const buttons = categories.map((category) => {
    return `<button>${category}</button>`;
})

result.innerHTML = buttons.join("");
console.log(categories);