let Person = {
	name: 'John',
	lastName: 'Doe',
	dateOfBirth: '1/1/1960',
	getAge() {
		return (new Date()).getFullYear() - (new Date(this.dateOfBirth)).getFullYear();
	}
}

console.log(Person.getAge());
