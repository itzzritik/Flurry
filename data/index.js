import faker from '@faker-js/faker';

export const users = Array(10).fill(0).map(() => {
	const firstName = faker.name.firstName(),
		lastName = faker.name.lastName();
	return {
		username: faker.internet.userName(firstName, lastName),
		name: firstName + ' ' + lastName,
		email: faker.internet.exampleEmail(firstName, lastName),
		avatar: faker.internet.avatar()
	};
});

export const todo = Array(300).fill(0).map(() => {
	return {
		todo: faker.lorem.sentence(),
		priority: faker.random.arrayElement(['High', 'Medium', 'Low']),
		dueDate: faker.datatype.boolean() ? faker.date.soon() : faker.date.future(),
		createdBy: faker.random.arrayElement(users).username,
		assignedTo: faker.random.arrayElement(users).username
	};
});
