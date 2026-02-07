let arr = ["Deimian", "Marta", "Marcos", "Yonathan", "Juan", "Ana"]

// map

let result = arr.map((item, index, arr) => {
    return `Hola ¿qué tal ${item}? --> ${index} - ${arr}`
})
// console.log(result)



//filter
let resultFilter = arr.filter((item, index) => {
    return item.toLowerCase().includes("de")
})

// console.log(resultFilter)

let resultMartaDelete = arr.filter((item, index) => {
    return !item.toLowerCase().includes("marta")
})

// console.log(resultMartaDelete)

const productos = [
    { name: "Laptop Pro 14", category: "Computadoras" },
    { name: "iPhone 15", category: "Smartphones" },
    { name: "Monitor 4K", category: "Periféricos" },
    { name: "Teclado Mecánico", category: "Periféricos" },
    { name: "Samsung Galaxy S23", category: "Smartphones" },
    { name: "MacBook Air", category: "Computadoras" },
    { name: "Mouse Inalámbrico", category: "Periféricos" },
    { name: "iPad Air", category: "Tablets" },
    { name: "Sony WH-1000XM5", category: "Audio" },
    { name: "AirPods Pro", category: "Audio" },
    { name: "Kindle Paperwhite", category: "E-readers" },
    { name: "Apple Watch Series 9", category: "Wearables" }
];

// let resultCategory = productos.filter((item, index) => {
//     return item.category.toLowerCase() == "audio"
// })

// resultCategory.forEach((item, index, arr) => {
//     console.log(item.name)
// })

productos.filter((item, index) => {
    return item.category.toLowerCase() == "audio"
}).forEach((item, index, arr) => {
    console.log(item.name)
})