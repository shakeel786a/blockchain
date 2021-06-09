const { resolve } = require('path')
const express = require('express')


const app = express()

app.use(express.static(resolve(__dirname, 'build')))
app.use(express.static(resolve(__dirname, 'public')))
app.get('*/', (req, res) => {
    res.sendFile(resolve(__dirname, 'build', 'index.html'))
})

app.listen(3000, () => {
    console.log("App runnning at port 3000")
})