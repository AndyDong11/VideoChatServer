let express = require('express')
let router = express.Router()
let db = require('../configs/db')

router.get('/', (req, res) => {
    db.query(`SELECT * FROM users WHERE name=?`, [req.query.name], (err, rows) => {
        if (rows.length > 0) { res.send({name: rows[0].name}) }
        else { res.sendStatus(404) }
    })
})

module.exports = router