const express = require('express'); 
const app = express(); 

app.use(express.json())
app.use(express.static('public')); 

app.post('/data', (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({"msg": "registration successful"})
    } catch (e) {
        console.log(e)
    }
})

app.listen('3000', function () {
    console.log('server up and running....')
})
