function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
		sum += arr[i];
	}
	const avg = (sum / arr.length).toFixed(2);
	avg = parseFloat(avg);

	return {
		min: min,
		max: max,
		avg: avg
	}
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let min = arr[0];
	let max = min;
	for (i = 0; i < arr.length; ++i) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length) return 0;
	sumEvenElement = 0;
	sumOddElement = 0;
	for (let i = 0; i < arr.length; i = i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];

		} else if (arr[i] % 2) {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length) return 0;
	sumEvenElement = 0;
	countEvenElement = 0;
	for (let i = 0; i < arr.length; i = i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) return 0;
	const averageEvenElements = (sumEvenElement / countEvenElement).toFixed(2);
	return +averageEvenElements;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		console.log('result:', result);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}