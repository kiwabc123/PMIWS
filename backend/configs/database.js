const mongoose = require('mongoose')
let db = 'mongodb://localhost:27017/MFUHackathonGroup'
// let db = 'mongodb+srv://hirodesu:HiROdesu22@cluster0.elji439.mongodb.net/MFUHackathonGroup'1
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('DB Connected!')).catch(err => { console.log(`DB Connection Error: ${err.message}`) })
module.exports = mongoose

