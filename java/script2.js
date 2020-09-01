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
