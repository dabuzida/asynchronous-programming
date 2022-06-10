async function x() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('done!'), 1000);
	});
	console.log(promise);
	let result = await promise;
	console.log(result);
}
x();