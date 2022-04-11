import tuitsModel from "./tuits-model.js";

/*
export const findAllTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});
*/

const findAllTuits = () => tuitsModel.find();
const createTuit = (tuit) => tuitsModel.create(tuit);
const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});

export default {findAllTuits, createTuit, deleteTuit, updateTuit};