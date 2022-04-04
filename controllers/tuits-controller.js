import posts from "./tuits/tuits.js";
let tuits = posts;

const tuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.postedBy = {};
    newTuit.postedBy.username = "Elon";
    newTuit.avatarIcon = "/images/elon_musk_sideview.jpg";
    console.log(newTuit);
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updateTuit = req.body;
    tuits = tuits.map(t => t._id === tuitIdToUpdate ? updateTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid;
    /* console.log(tuitIdToDelete); */
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
}

export default tuitsController;
