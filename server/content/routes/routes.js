const {ItemS3upload,createItem} = require('../controllers/ItemController')
const {createGenre, getGenre} = require('../controllers/GenreController')
const {authenticate} = require('../../common/common');
module.exports = server => {
    server
        .route('/createitem')
        .post(ItemS3upload, createItem)
    server
        .route('/creategenre')
        .post(createGenre)
    server
        .route('/genres')
        .get(authenticate, getGenre)
}