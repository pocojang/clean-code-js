/**
 * @see - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator#no_chaining_with_and_or_or_operators
 */
function getUserName(isLogin, user) {
  return isLogin && user ?? user.name;
}
