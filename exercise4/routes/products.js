const express = require('express');
const {v4: uuidv4 } = require('uuid');
const router = express.Router();

const products = [
    { 
        id : uuidv4(),
        type: 'IPhone',
        brand: 'Apple',
        rating: 4,
        price: 1800,
        img: 'iphone.jpg',
        category: 'Phones',
        additionals: 'sale',
        tags: ['phone','flex','money','rich']
    },
];


router.get('/', (req, res) => {
    res.json(products)
}); 

router.get('/:id', (req, res) => {
    let foundIndex = products.findIndex(p => p.id == req.params.id);
    if(foundIndex == -1) {
        res.sendStatus(404);
    } 
    else {
        res.json(products[foundIndex]);
    }
})

router.get('/search/:searchBar/:category', (req, res) => {
    let search = req.params.searchBar.toString().toLowerCase().trim();
    let result = products.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search));
    });
    result = result.filter(item => item.category.includes(req.params.category.trim()));
    if(result) {
        res.json(result);
    } 
    else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    console.log(req.body);
    products.push({
        id: uuidv4(),
        type: req.body.type,
        brand: req.body.brand,
        rating: req.body.rating,
        price: req.body.price,
        img: req.body.img,
        category: req.body.category,
        additionals: req.body.additionals,
        tags: req.body.tags
    });
    res.sendStatus(201);
});

router.put('/:id', (req, res) => {
    let product = products.find(p => p.id == req.params.id);
    if (product) {
        product.type = req.body.type,
        product.brand = req.body.brand,
        product.rating = req.body.rating,
        product.price = req.body.price,
        product.img = req.body.img,
        product.category = req.body.category,
        product.additionals = req.body.additionals,
        product.tags = req.body.tags
        res.sendStatus(202);
    }
    else {
        res.sendStatus(404);
    }
});

router.delete('/:id', (req, res) => {
    let foundIndex = products.findIndex(p => p.id == req.params.id);
    if(foundIndex == -1) {
        res.sendStatus(404);
    }
    else {
        products.splice(foundIndex, 1);
        res.sendStatus(202);
    }
 });


module.exports = router;