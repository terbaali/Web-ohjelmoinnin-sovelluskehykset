const express = require('express')
const {v4: uuidv4 } = require('uuid');
const router = express.Router();

const invoices = [
   {
        id: uuidv4(),
        userId: 1,
        productIds: [1, 2],
        sum: 500,
        date: "2022-2-18"
   }
];

router.get('/', (req, res) => {
    res.json(invoices)
}); 

router.get('/:id', (req, res) => {
    let foundIndex = invoices.findIndex(p => p.id == req.params.id);
    if(foundIndex == -1) {
        res.sendStatus(404);
    } 
    else {
        res.json(invoices[foundIndex]);
    }
});

router.get('/user/:userId', (req, res) => {
    let result = invoices.filter(p => p.userId == req.params.userId);
    if(result) {
        res.json(result);
    } 
    else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    invoices.push({
        id: uuidv4(),
        userId: req.body.userId,
        productIds: req.body.productIds,
        sum: req.body.sum,
        date: req.body.date
    });
    res.sendStatus(201);
});


router.delete('/:id', (req, res) => {
    let foundIndex = invoices.findIndex(p => p.id == req.params.id);
    if(foundIndex == -1) {
        res.sendStatus(404);
    }
    else {
        invoices.splice(foundIndex, 1);
        res.sendStatus(202);
    }
 });


module.exports = router