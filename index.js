const PORT = 3001

let express = require('express')
let cors = require('cors')

let register = require('./routes/register')
let login = require('./routes/login')

let app = express()
app.use(cors())
app.use('/register', register)
app.use('/login', login)


let server = app.listen(PORT, () => {
    console.log('server is now running')
})

let io = require('socket.io')(server)
io.on('connection', socket => {
    socket.on('message', data => {
        io.emit('newmessage', data)
    })
})

