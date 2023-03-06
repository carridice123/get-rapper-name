const express = require('express');
const app = express();
const port = 8000;

const rappers = {
    '21 savage':{
        'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illisndis'
    },
    'dylan':{
        'age': 30,
        'birthName': 'Mario Dylan',
        'birthLocation': 'London, England'
    }
}




app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
// dirname tells the computer where ever the file thats running is located start looking for index.html
//there

// lets create a different path here
app.get('/api/:rapperName', (req, res)=>{ //slash after api onwards is a query parameter expres alows
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
   // res.json(rappers)
})

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}! You better go catch it`)
})