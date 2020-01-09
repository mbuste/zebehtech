const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    url: {
        type: String        
    },
    id: {
        type: String    
    },
    category:{
        type: String
    }
});

const Photo = mongoose.model('photo', PhotoSchema);

module.exports = Photo;