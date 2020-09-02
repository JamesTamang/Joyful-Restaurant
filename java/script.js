function init(){
    fetch("https://kea-alt-del.dk/t5/api/categories").then(r=>r.json()).then(
        function(data){
        categoriesReceived(data)
        }
)
}
init();

function categoriesReceived(cats){
    createNavigation(cats);
    createSection(cats);
    fetchProducts();

}
function createSection(categories){
    categories.forEach(category=>{
                       const section = document.createElement("section");
    section.setAttribute("id", category);
    const h2=document.createElement("h2");
    h2.textContent=category;
    section.appendChild(h2);
 document.querySelector(".productList").appendChild(section);
})
                       }
function catagoriesReceived(cat){
    createNavigatin(cats);
}
function createNavigation(catagories){
    catagories.forEach(cat=>{
    const a=document.createElement("a");
    a.textContent=cat;
    a.setAttribute("href", `#${cat}`);

    document.querySelector("nav").appendChild(a);
})}


function fetchProducts(){

//template
fetch("https://kea-alt-del.dk/t5/api/productlist")
.then (function (response){
    return response.json();
}
     )
.then (function(data){
    dataReceived(data);
})
}
function dataReceived(products){
    //loop
    products.forEach(showProduct)
}

//display each product individual
function showProduct(myProduct){
const template=document.querySelector("template").content;

const copy=template.cloneNode(true);

    const article=copy.querySelector("article");

if(myProduct.vegetarian){
    article.classList.add("vegetarian")
}

copy.querySelector(".full_name").textContent=myProduct.name;

    copy.querySelector("p").textContent=myProduct.shortdescription;
    copy.querySelector(".discountp").textContent=myProduct.discount;


 copy.querySelector(".price").textContent=myProduct.price;




    if (myProduct.discount){
 copy.querySelector(".discountp").classList.add("hidden");
    }
copy.querySelector(".full_name").textContent=myProduct.name;
    if(myProduct.category==myProduct.category){
        const parentElem=document.querySelector("section#"+myProduct.category);




    const pasting = document.querySelector("section#"+myProduct.category);
    pasting.appendChild(copy);


    }
}


const veggifilter= document.querySelector("#veggifilter");

veggifilter.addEventListener("click", veggiFilterClicked);

function veggiFilterClicked(){
    const articles=document.querySelectorAll("article:not(.vegetarian)");
    articles.forEach(elem=>{
                     elem.classList.add("hidden");
                     })
}
