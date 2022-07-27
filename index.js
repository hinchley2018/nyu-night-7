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
document.querySelector(".inventory-list")
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