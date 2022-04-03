const helloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good here!!')
    })                                      // declares HTTP handler by mapping URL pattern '/hello' to a function that  handles HTTP request.
}
export default helloController;