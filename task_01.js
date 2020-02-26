
const Account = function ({login, email}) {
	this.login = login;
	this.email = email;
	this.getInfo = function (login, email) {
		console.log(`Login: ${this.login}; E-mail: ${this.email}`)
	}
}

console.log(Account.prototype)

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com