

const Account = function (login, email) {
	this.login = login;
	this.email = email;
	this.getInfo = function (login, email) {
		console.log(`Login: ${this.login}; E-mail: ${this.email}`)
	}
}

const mango = new Account('Mangozedog', 'mango@dog.woof');

mango.getInfo()


const poly = new Account('Poly', 'poly@mail.com');

poly.getInfo();