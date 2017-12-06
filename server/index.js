const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const controller = require('./controllers/messages_controller')

app.use(bodyParser.json());

app.post('/api/messages', controller.create);

app.get('/api/messages', controller.read);

app.put('/api/messages/:id', controller.update);

app.delete('/api/messages/:id', controller.delete);


//***************************************************/
app.listen(port, ()=>{
    console.log(`That's no moon, it's a port ${port}`)
})