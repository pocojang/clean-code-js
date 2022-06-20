/**
 * Continue & Break
 */

const orders = ['first', 'second', 'third'];

orders.forEach(function(order) {
  if(order === 'second') {
    break;
  }

  console.log(order);
});
