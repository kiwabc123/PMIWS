const router = require('express').Router()
// const { authenticated, authenticatedAdmin } = require('../configs/security')

const admin = require('./accounts/admin')
const student = require('./accounts/student')
const groups = require('./groups/group')

router.use('/admin', admin)
router.use('/students', student)
router.use('/groups', groups)

module.exports = router;