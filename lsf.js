

const search = document.getElementById("search-inp");
const results = document.getElementById("results");

const fruits =  ["Apple", "Banana", "Mango", "Orange", "Grapes"];

search.addEventListener("input", function(){
    results.innerHTML= "";
    const filteredFruits = fruits.filter(function(fruit){
        return fruit.toLowerCase().includes(search.value.toLowerCase());
    });
    filteredFruits.forEach(function(fruit){
        
        let para = document.createElement("p");
        para.textContent = fruit;
        results.appendChild(para);
    });
});



