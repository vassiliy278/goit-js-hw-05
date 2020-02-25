

class Storage {
	constructor(array) {
		this.array = array;
	}
	getItems() {
		console.table(this.array);
	}
	addItem(itemName) {
		this.array.push(itemName);
	}
	removeItem(itemName) {
		for (const element of this.array) {
			if (element === itemName) {
				this.array.splice(this.array.indexOf(itemName),1)
			}
		}
	}
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор',]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


