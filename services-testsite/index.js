const express = require('express')
const app = express()
const port = 3000

// Set Up Render Engine
const handlebars  = require('express-handlebars');
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Static Folder
app.use(express.static('public'))

const products = [
	{
		id: 'YR20',
		name: 'ROADIE 20',
		image: 'https://www.yeti.com/dw/image/v2/BBRN_PRD/on/demandware.static/-/Sites-masterCatalog_Yeti/default/dw82d83f10/images/pdp-Tundra/Roadie%2020/Charcoal/190834-Charcoal-Drinkware-Coolers-Website-Assets-Studio-Tundra-Roadie-20-F-HU-1680x1024.jpg?sw=750&sfrm=jpg',
		url: 'http://localhost:3000/products/roadie-20',
		price: '199.99'
	},
	{
		id: 'YHOPM30',
		name: 'HOPPER M30',
		image: 'https://www.yeti.com/dw/image/v2/BBRN_PRD/on/demandware.static/-/Sites-masterCatalog_Yeti/default/dw3cadb57c/images/pdp-Hopper/Hopper-M30/Charcoal/190302-Snoop-Hopper-M30-Website-Assets-Studio-F-Handles-Up-Charcoal-1680x1024.jpg?sw=750&sfrm=jpg',
		url: 'http://localhost:3000/products/hopper-M30',
		price: '222.99'
	},
	{
		id: 'YRAMLOW10',
		name: 'RAMBLER 10 OZ LOWBALL',
		image: 'https://www.yeti.com/dw/image/v2/BBRN_PRD/on/demandware.static/-/Sites-masterCatalog_Yeti/default/dwb1ea1862/images/pdp-Rambler/Rambler%20Lowball/Clay/190353-Clay-Drinkware-Website-Assets-Studio-Lowball-10oz-OH-1680x1024.jpg?sw=750&sfrm=jpg',
		url: 'http://localhost:3000/products/rambler-10-lowball',
		price: '19.99'
	},
];
const productLookUp = {
	'roadie-20': 'YR20',
	'hopper-M30': 'YHOPM30',
	'rambler-10-lowball': 'YRAMLOW10'
}

// Routes
app.get('/', function (req, res) {
    res.render('home', {'products':products});
});

app.get('/products', function (req, res) {
    res.render('plp', {'products':products});
});

app.get('/products/:id', function (req, res) {
	let pid = req.params.id
	let productInfo = products.find(obj => {
  		return obj.id == productLookUp[pid]
	})
    res.render('pdp', {'product': productInfo});
});

app.get('/where-to-buy', function (req, res) {
    res.render('where-to-buy');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))