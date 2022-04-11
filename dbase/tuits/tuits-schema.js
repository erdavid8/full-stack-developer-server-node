import mongoose from "mongoose";                        // loads the mongoose library

const schema = mongoose.Schema({                        // create the tuit schema
    postedBy: {
        username: String                                // username as string
    },
    tuit: String,                                       // tuits as string
    likes: Number,                                      // likes as number
    dislikes: Number,                                   // dislikes as number
    liked: Boolean,                                     // liked as boolean
    disliked: Boolean,                                  // disliked as boolean
    avatarIcon: String                                  // icon image as string

}, {collection: 'tuits'});                              // collection name

export default schema;                                  // export schema so that it can be use somewhere else
