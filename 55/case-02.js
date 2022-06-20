/**
 * Rest parameters
 */
function sumTotal(
	initValue,
	bonusValue,
	...args,
) {
	return args.reduce(
		(acc, curr) => acc + curr,
		initValue,
	);
}

sumTotal(100, 99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
