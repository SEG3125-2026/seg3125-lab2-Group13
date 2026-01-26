	
var products = [
	{
		name: "Sugar-Free Gum",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		diabetic: true,
		price: 0.50
	},
	{
		name: "Bananas",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		diabetic: false,
		price: 2.00
	},
	{
		name: "White Bread",
		vegetarian: true,
		glutenFree: false,
		lactoseIntolerant: true,
		diabetic: true,
		price: 2.35
	},
	{
		name: "Carrots",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		diabetic: true,
		price: 3.50
	},
	{
		name: "Gummy Bears",
		vegetarian: false,
		glutenFree: false,
		lactoseIntolerant: true,
		diabetic: false,
		price: 5.00
	},
	{
		name: "Gluten-Free Bread",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		diabetic: true,
		price: 6.49
	},
	{
		name: "Potato Chips",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		diabetic: true,
		price: 6.99
	},
	{
		name: "Chocolate Milk",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: false,
		diabetic: false,
		price: 8.72
	},
	{
		name: "Black Forest Ham",
		vegetarian: false,
		glutenFree: true,
		lactoseIntolerant: true,
		diabetic: true,
		price: 12.99
	},
	{
		name: "Sirloin Steak",
		vegetarian: false,
		glutenFree: true,
		lactoseIntolerant: true,
		diabetic: true,
		price: 13.70
	},
	
];

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseIntolerant") && (prods[i].lactoseIntolerant == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Diabetic") && (prods[i].diabetic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
