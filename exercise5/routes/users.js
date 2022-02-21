const express = require('express')
const {v4: uuidv4 } = require('uuid');
const router = express.Router();

const users = [
    { 
        id: uuidv4(),
        fname: 'Mikael',
        lname: 'Kosola',
        address: 'Lempäälän keisarikunta'
    },
];

router.get('/', (req, res) => {
    res.json(users)
}); 

router.post('/', (req, res) => {
    console.log(req.body);
    users.push({
        id: uuidv4(),
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
    });
    res.sendStatus(201);
});

module.exports = router