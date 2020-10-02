let express = require('express')
let router = express.Router()
let db = require('../configs/db')

router.get('/', (req, res) => {
    db.query('INSERT INTO users(name) VALUES (?)', [req.query.name], (err, rows) => {
        res.sendStatus(200)
    })
})

router.get('/checkUsername', (req, res) => {
    db.query(`SELECT * FROM users WHERE name=?`, [req.query.name], (err, rows) => {
        if (rows.length  === 0) res.send({num: 1})
        else res.send({num: 2})
    })
})

module.exports = router