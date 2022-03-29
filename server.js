const express = require('express');                             // require equivalent to import keyword and loads the library into local source
const app = express();                                          // express() function creates an instance of express library and assign it to app
app.get('/hello', (req, res) => {res.send('Life is good')})     // declares HTTP handler by mapping URL pattern '/hello' to a function that  handles HTTP request.
app.listen(4000);
