const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 4001

app.use(express.json())
app.use(require("./routers/route.coffee"))




mongoose.connect("mongodb+srv://abu-hanifa:lom0895311@intocode.qw0fyj8.mongodb.net/coffee16?retryWrites=true&w=majority").then(() => console.log('успешное соединение'))
.catch(() => console.log('ошибка соединения'))

app.listen(port, () => {
    console.log(`сервер работает http://localhost${port}`)
})