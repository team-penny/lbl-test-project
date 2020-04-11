import app from './App'

// the port the app is listening to
const port = 3000;
app.listen(port, (err:Error) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
})
