console.log("hello from script")

let elements = [
    {element: "h1", textContent: "Hello World"},
    {
        element: "ul", textContent: "",
        children: [
            {element: "li", textContent: "Pasta"},
            {element: "li", textContent: "tomatoes"},
            {element: "li", textContent: "potatoes"}
        ],
        style: {

        }
    },
    {element: "button", textContent: "Click me"}
]

console.log("elements", elements)

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    console.log("element", element)
}

//change the content of hello world h1
elements[0].textContent = "Jonathon"
console.log("elements", elements)

//get things by hiearchy
//document.body.children[1]

//get things by tag
document.querySelector("ul")
//by class
let inventoryList = document.querySelector(".inventory-list")
let cartList = document.querySelector(".cart-list")
//by id
document.querySelector("#pasta")

//when soemthing doesnt match null or undefined
document.querySelector(".jonathonIsAwesome")

//select multiple things, gives you a list
document.querySelectorAll(".sale")

//doesnt exist gives empty list
document.querySelectorAll(".jonathonIsAwesome")

//change element styles
let pasta = document.querySelector("#pasta")
pasta.style.backgroundColor = "red"

//change the text that is displayed
pasta.textContent = "Pasta - 1.29"

//highlight (bg yellow) all items that are on sale
//1. get all items on sale
let saleItems = document.querySelectorAll(".sale")
//2. change background color of each item to yellow
for (let index = 0; index < saleItems.length; index++) {
    const element = saleItems[index];
    console.log("item at index", index, element)
    element.style.backgroundColor = "yellow"
}

//add our items to a ul
//for now add these using js, later the user will
// let pastaLi = document.createElement("li")
// pastaLi.textContent = "Pasta - 1.29"
// pastaLi.setAttribute("class","sale")
// //add the li to the ul group for the cart
// cartList.append(pastaLi)

// let potatoesLi = document.createElement("li")
// potatoesLi.textContent = "Potatoes - .30"
// potatoesLi.setAttribute("class","sale")
// //add the li to the ul group for the cart
// cartList.append(potatoesLi)

//remove is a little tricky, make sure to call .remove() only on the tag you want to remove
//for example if you call document.body.remove() it will remove the entire body
//now remove the potatoes from cart
// potatoesLi.remove()

//images
let catImg = document.createElement("img")
catImg.setAttribute("src","https://placekitten.com/200/200")
catImg.setAttribute("alt", "cat image")
document.body.append(catImg)

//when this function / recipe is used add item to cart
function addItemToCart(item, price){
    console.log("added item to cart", item, price)
    let itemLi = document.createElement("li")
    itemLi.textContent = `${item} - $${price}`
    let removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    //not calling it just deifning the recipe
    removeButton.addEventListener("click", function(){
        //have a ref, we can just remove it
        itemLi.remove()
    })
    itemLi.append(removeButton)
    //add the li to the ul group for the cart
    cartList.append(itemLi)
}

//get a ref to the stake button
let steakButton = document.querySelector("#steak-button")
//register a click listern, tell it what function to run,
// the function can be inline like below or a predefined function
steakButton.addEventListener("click", function(event){
    console.log(event.target)
    addItemToCart("Steak", 10.99)
})


let tomatoesButton = document.querySelector("#tomatoes-button")
tomatoesButton.addEventListener("click", function(event){
    addItemToCart("Tomatoes", 1.29)
})

let potatoesButton = document.querySelector("#potatoes-button")
potatoesButton.addEventListener("click", function(event){
    addItemToCart("Potatoes", .30)
})
let pastaButton = document.querySelector("#pasta-button")
pastaButton.addEventListener("click", function(event){
    addItemToCart("Pasta", 1.29)
})