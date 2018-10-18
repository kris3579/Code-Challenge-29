'use strict';

let foundValue1 = false;

module.exports = function isItAChild(root, value1, value2) {
  if (root.value === value1) {
    foundValue1 = true;
  }
  if (root.value === value2 && foundValue1 === true) {
    return true;
  }
  const findValueLeft = isItAChild(root.left, value1, value2);
  const findValueRight = isItAChild(root.right, value1, value2);
  if (findValueLeft === true || findValueRight === true) {
    return true;
  }
  if (root.value === value1 && findValueLeft === undefined && findValueRight === undefined) {
    foundValue1 = false;
  }
  return undefined;
};
