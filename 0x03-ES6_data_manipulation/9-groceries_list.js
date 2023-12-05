// Function that returns a map of groceries with the following items

export default function groceriesList () {
	const groceries = new Map();
	groceries.set('Apples', 10);
	groceries.set('Tomatoes', 10);
	groceries.set('Pasta', 1);
	groceries.set('Rice', 1);
	groceries.set('Banana', 5);
	return groceries;
}
