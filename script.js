const userData = {
    name: "Charlie",
    email: "charlie@example.com"
};

fetch("https://681234d13ac96f7119a7438e.mockapi.io/shop/product", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify(userData) 
})
.then(response => response.json()) 
.then(data => console.log("Success:", data)) 
.catch(error => console.error("Error:", error));
 
let nom = document.querySelector("#nom")
let narx = document.querySelector("#narx")
let muddat = document.querySelector("#muddat")
let rasm = document.querySelector("#rasm")
let btn = document.querySelector(".btn")
let ota = document.querySelector(".get")

btn.addEventListener("click", ()=> {
    const userData = {
        nomi:nom.value,
        narxi: narx.value,
        muddat:muddat.value,
        rasm:rasm.value
    };
    
    fetch("https://681234d13ac96f7119a7438e.mockapi.io/shop/product", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(userData) 
    })
    .then(response => response.json()) 
    .then(data => console.log("Success:", data)) 
    .catch(error => console.error("Error:", error));
    
    
})


fetch("https://681234d13ac96f7119a7438e.mockapi.io/shop/product")
.then(res=> res.json())
.then(data => data.map(mahsulot =>{
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `   <img src=${mahsulot.rasm} alt="">
            <p>Nomi: ${mahsulot.nomi}</p>
            <p>Narxi: ${mahsulot.narxi}</p>
            <p>Saqlash muddati: ${mahsulot.muddat}</p>`
ota.append(card)
}))
