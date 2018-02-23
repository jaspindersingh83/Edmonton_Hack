const {ItemS3upload,
    createItem, 
    getItemById,
    getAllItems,
    deleteItemById} = require('../controllers/ItemController')
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
    server
        .route('/getitembyid/:id')
        .get(authenticate,getItemById)  
    server
        .route('/testdeployment')
        .get((req,res) => {
            res.send('Magic is happening')
        })
    server
        .route('/getallitems')
        .get(getAllItems)
    server
        .route('/deleteitembyid/:id')
        .delete(deleteItemById)  
}