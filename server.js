const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get("/greetings/:name", (req, res) => {
    res.send(`So glad to see you here, ${req.params.name}!`);
})

app.get("/roll/:num", (req,res) => {
    const maxNum = parseInt(req.params.num);

    if (isNaN(maxNum)) {
        res.send("You must specify a number.")
    } else {
        const randomNum = Math.floor(Math.random() * (maxNum + 1))
        res.send(`You rolled a ${randomNum}.`)
    }
})

app.get("/collectibles/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    const item = collectibles[index];
    if (index >= collectibles.length || isNaN(index)) {
        res.send("This item is not yet in stock. Check back soon!")
    }
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)
})



app.get("/shoes", (req, res) => {
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
    let filteredShoes = shoes;

    const minPrice = parseInt(req.query["min-price"]);
    const maxPrice = parseInt(req.query["max-price"]);
    const type = req.query.type;

    if (isNaN(minPrice) === false) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    if (isNaN(maxPrice) === false) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }

    res.send(filteredShoes);
});
