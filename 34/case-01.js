/**
 * 배열 요소에 접근하기
 */
function operateTime(input, operators, is) {
	inputs[0].split('').forEach((num) => {
		cy.get('.digit').contains(num).click();
	});

	inputs[1].split('').forEach((num) => {
		cy.get('.digit').contains(num).click();
	});
}
