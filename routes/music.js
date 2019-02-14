
const router = require('express').Router()
const MusicController = require('../controllers/musicController')

router.get('/', MusicController.all)
router.post('/', MusicController.create)
router.put('/:id', MusicController.update)
router.delete('/:id', MusicController.delete)

module.exports = router
