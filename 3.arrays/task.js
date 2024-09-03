function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((value, index) => {
		console.log(value, arr2[index]);
		return value === arr2[index];
	});

}

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0;
	}

	const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
	const avgAge = totalAge / filteredUsers.length;
	return avgAge;
}
/*return users.filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0);*/