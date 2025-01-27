const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post("/signup", (req, res) => {
    
    const { username, email, password , dob } = req.body;
    if(!username ){
        res.status(400).send("Username cannot be empty");
    }
    if(!email){
            res.status(400).send("Email cannot be empty");
    }
    
    if(password.length > 8 && password.length <= 16){
        res.status(400).send("Password length should be greater than 8 or less than or equal to 16");
    }

    res.send("Signup successful");
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});