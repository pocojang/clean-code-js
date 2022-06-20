/**
 * 매개변수의 순서가 경계다
 *
 * 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다.
 *
 * 1. 매개변수를 2개가 넘지 않도록 만든다.
 * 2. arguments, rest parameter
 * 3. 매개변수를 객체에 담아서 넘긴다.
 * 4. 랩핑하는 함수
 */

// ES2015+
function someFunc(someArg1, someArg2, someArg3, someArg4) {}

function getFunc(someArg1, someArg3) {
	someFunc(someArg1, undefined, someArg3);
}
