const select = document.querySelector("select");
const mainSection = document.querySelector("main");

document.addEventListener("DOMContentLoaded", function() {
    console.log(select.value);
    collectProducts().then(value => value || false)
});
const collectProducts = async () => {
    const url = "https://mesut-11.github.io/jsons/products.json";
    const response = await fetch(url);
    const products = await response.json();
    displayProducts(products)
    categories(products);
}


displayProducts = (products) => {
    mainSection.innerHTML = ""
    products.map((product) => {
        mainSection.innerHTML += `<section class="vegetables">
                                          <h2>${product.name}</h2>
                                           <p>$ ${product.price}</p>
                                           <img src='images/${product.image}' alt="baked beans">
                                     </section>`;
                               });
}
const categories = (products) => {
    const category = new Set();
    products.map((product) => {
                category.add(product.type);
            });
       category.add("All".toLowerCase());
       select.addEventListener("change", () => {
           const selectCategory = select.value.toLowerCase();
           if (selectCategory === "all"){
               displayProducts(products);
           }
           else{
              const selectedCatsData = products.filter((products) => {
                   return products.type === selectCategory;
               });
              displayProducts(selectedCatsData);
           }
       })
}