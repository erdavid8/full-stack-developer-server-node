// import posts from "./tuits/tuits.js";
// let tuits = posts;
import tuitsDao from "../dbase/tuits/tuits-dao.js";

const tuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
//    newTuit._id = (new Date()).getTime() + '';
//    newTuit.likes = 0;
//    newTuit.dislikes = 0;
//    newTuit.postedBy = {};
//    newTuit.postedBy.username = "Elon";
//    newTuit.avatarIcon = "/images/elon_musk_sideview.jpg";

    const insertedTuit = await tuitsDao.createTuit(newTuit);
    /* console.log(newTuit); */
//  tuits.push(newTuit);
//  tuits = [newTuit, ...tuits];
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();

    res.json(tuits.reverse());
}

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updateTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updateTuit);
//    tuits = tuits.map(t => t._id === tuitIdToUpdate ? updateTuit : t);
//    res.sendStatus(200);
    res.send(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    /* console.log(tuitIdToDelete); */
//    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
//    res.sendStatus(200);
    res.send(status);
}

export default tuitsController;
