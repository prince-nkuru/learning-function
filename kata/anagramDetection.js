var isAnagram = function(test, original) {
  test = test.toLowerCase().split('').sort().join('');
  original = original.toLowerCase().split('').sort().join('');
  if (test === original){
    return true;
  }else {
    return false;
  }
};
