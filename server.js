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

