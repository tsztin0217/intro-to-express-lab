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