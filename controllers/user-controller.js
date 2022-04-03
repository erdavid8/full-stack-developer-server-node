import users from "./users/users.js";                                   // import the content of users.js

const userController = (app) => {                                       // use express instance app to declare HTTP GET request pattern /api/users to call a function
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUsersById);                          // find user by uid
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const findAllUsers = (req, res) => {                                    // function runs when /api/users requested
    const type = req.query.type;                                        // retrieve type parameter from query
    if (type) {                                                         // if type parameter in query
        res.json(findUserByType(type))                                  // find all users of that type and respond
        return;
    }
    res.json(users);                                                    // responds with array of users
}

const findUserByType = (type) =>
    users.filter(t => t.type === type);                                 // filter users by type

const findUsersById = (req, res) => {
    const userId = req.params["uid"];
    // console.log(userId);
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params["uid"];                                   // get user ID
    const usersIndex = users.findIndex(u => u._id === userId);          // find index of user
    users.splice(usersIndex, 1)                               // delete user
    res.sendStatus(200);
/*    const userId = req.params['uid'];
    users = users.filter(usr => usr._id !== userId);
    res.sendStatus(200);
*/
}

const updateUser = (req, res) => {
    const userId = req.params["uid"];
    const user = users.find(u => u._id === userId);                     // get the object with specific _id
    const updateUser = req.body;                                        // new updated user embedded in HTTP request body
    //users = users.map(u => u._id === userId? updateUser : u);
    Object.assign(user, updateUser);                                    // assign new values to existing
    res.sendStatus(200);
}

export default userController;                                          // exports so server.js can import