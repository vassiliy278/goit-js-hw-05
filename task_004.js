

class StringBuilder {
	constructor(value){
		this.value = value
	}

	append(string) {
		return this.value = this.value + string;
	}

	prepend(string) {
		return this.value = string + this.value
	}

	pad(string) {
		return this.value = string + this.value + string
	}
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='