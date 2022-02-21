const express = require('express');
const {v4: uuidv4 } = require('uuid');
const router = express.Router();

const products = [
    {
      id: uuidv4(),
      type: "IPhone",
      brand: "Apple",
      rating: 4,
      price: 1800,
      img: "iphone.jpg",
      category: "Phones",
      additionals: "sale",
      tags: ["phone","flex","money","rich"]
    },
    {
      id: uuidv4(),
      type: "3310",
      brand: "Nokia",
      rating: 5,
      price: 800,
      img: "nokia_3310.jpg",
      category: "Phones",
      additionals: "bestseller",
      tags: ["phone","doomsday preppers","unbreakable","hammer"]
    },
    {
      id: uuidv4(),
      type: "Mikro-Mikko",
      brand: "Nokia",
      rating: 4,
      price: 3800,
      img: "mikromikko.png",
      category: "Computers",
      additionals: "",
      tags: ["computer","nerd","coding","pure power","cpu"]
    },
    {
      id: uuidv4(),
      type: "Amiga 500",
      brand: "Commodore",
      rating: 2,
      price: 1800,
      img: "amiga500.png",
      category: "Computers",
      additionals: "",
      tags: ["computer","gaming"]
    },
    {
      id: uuidv4(),
      type: "64",
      brand: "Commodore",
      rating: 3,
      price: 2000,
      img: "commondore64.jpg",
      category: "Computers",
      additionals: "",
      tags: ["computer","gaming","nerd","long nerves"]
    },
    {
      id: uuidv4(),
      type: "C64 Addition Device Bundle",
      brand: "Commodore",
      rating: 3,
      price: 500,
      img: "deviceBundle.jpg",
      category: "Accessory",
      additionals: "",
      tags: ["computer","gaming","disk"]
    },
    {
      id: uuidv4(),
      type: "C64 Turbo Tape Kit",
      brand: "Individual Computers",
      rating: 5,
      price: 150,
      img: "c64turbo.jpg",
      category: "Accessory",
      additionals: "",
      tags: ["computer","gaming","uppgrade","overclock"]
    },
    {
      id: uuidv4(),
      type: "9000 Communicator",
      brand: "Nokia",
      rating: 4,
      price: 3500,
      img: "nokia_n9000.png",
      category: "Phones",
      additionals: "",
      tags: ["communicator","smartphone","wow new cool thing","ceo"]
    },
    {
      id: uuidv4(),
      type: "Basic phone",
      brand: "Bell inc",
      rating: 1,
      price: 50,
      img: "phone.jpg",
      category: "Phones",
      additionals: "sale",
      tags: ["ugly","depression","react","equals","suicide"]
    },
    {
      id: uuidv4(),
      type: "Macintosh Portable",
      brand: "Apple",
      rating: 3,
      price: 5500,
      img: "applemac.jpg",
      category: "Computers",
      additionals: "",
      tags: ["computer","gaming","laptop","snob"]
    },
    {
      id: uuidv4(),
      type: "PlayStation",
      brand: "Sony",
      rating: 5,
      price: 900,
      img: "ps1.jpg",
      category: "Gaming",
      additionals: "bestseller",
      tags: ["console","ps"]
    },
    {
      id: uuidv4(),
      type: "NES",
      brand: "Nindendo",
      rating: 4,
      price: 800,
      img: "nes.jpg",
      category: "Gaming",
      additionals: "bestseller",
      tags: ["console"]
    },
    {
      id: uuidv4(),
      type: "Pre-order  Unforgettable weekend package  | Torihotelli Oulu",
      brand: "Hallikainen Co",
      rating: 1,
      price: 5000,
      img: "torihotelli.jpg",
      category: "Misc",
      additionals: "Delivery time: unknown",
      tags: ["wait", "mitä Oulussa voi tehdä"]
    },
    {
      id: uuidv4(),
      type: "Death Star",
      brand: "Imperial Military",
      rating: 5,
      price: 666000000000000000,
      img: "deathstar.jpg",
      category: "Misc",
      additionals: "limited",
      tags: ["doomsday machine","dark side", "ruler of the universe", "happy days","vapiskaa Terot"]
    }
]


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