const {ItemS3upload,createItem} = require('../controllers/ItemController')
const {addToGenre} = require('../controllers/GenreController')

module.exports = server => {
    server
        .route('/upload')
        .post(ItemS3upload)
}