const router = require('express').Router()
const isLogin = require('../middlewares/isLogin')
const isOwner = require('../middlewares/isOwner')
const image = require('../helpers/images')
const MusicController = require('../controllers/musicController')

router.use(isLogin)
router.get('/', MusicController.all)
router.post('/', image.multer.single('image'), image.sendUploadToGCS, MusicController.create)

// router.put('/:id', isOwner, MusicController.update)
router.delete('/:id', isOwner, MusicController.delete)

module.exports = router
